const fs = require('node:fs');
const path = require('node:path');
function playwrightModule() {
  if (process.env.PLAYWRIGHT_MODULE) return process.env.PLAYWRIGHT_MODULE;
  try { return require.resolve('playwright'); } catch {}
  const cache = path.join(process.env.LOCALAPPDATA || '', 'npm-cache', '_npx');
  if (fs.existsSync(cache)) {
    for (const entry of fs.readdirSync(cache)) {
      const candidate = path.join(cache, entry, 'node_modules', 'playwright');
      if (fs.existsSync(path.join(candidate, 'package.json'))) return candidate;
    }
  }
  throw new Error('Set PLAYWRIGHT_MODULE to an existing Playwright installation.');
}
const { chromium } = require(playwrightModule());
const sharp = require(require.resolve('sharp', { paths: [require.resolve('next/package.json')] }));

async function compareHero(width) {
  const before = fs.readFileSync(path.join(out, 'hero-before-' + width + '.png'));
  const after = fs.readFileSync(path.join(out, 'hero-after-' + width + '.png'));
  const a = await sharp(before).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const b = await sharp(after).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  if (a.info.width !== b.info.width || a.info.height !== b.info.height) return { heroVisualEqual: false };
  let maxChannelDelta = 0;
  for (let i = 0; i < a.data.length; i++) maxChannelDelta = Math.max(maxChannelDelta, Math.abs(a.data[i] - b.data[i]));
  // Existing grain and browser compositing can differ by 1–2 RGB levels.
  return { heroPixelsEqual: before.equals(after), heroVisualEqual: maxChannelDelta <= 2, maxChannelDelta };
}

const baseline = process.argv.includes('--baseline');
const out = path.join(process.cwd(), '.visual-audit');
fs.mkdirSync(out, { recursive: true });
let activeBrowser;

(async () => {
  if (process.argv.includes('--compare-hero')) {
    const reportPath = path.join(out, 'report.json');
    const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    for (const width of [390, 1440]) {
      const comparison = await compareHero(width);
      Object.assign(report.find(row => row.width === width), comparison);
      console.log(JSON.stringify({ width, ...comparison }));
      if (!comparison.heroVisualEqual) process.exitCode = 1;
    }
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    return;
  }
  const browser = activeBrowser = await chromium.launch({ headless: true });
  if (process.argv.includes('--interactions')) {
    const assert = require('node:assert/strict');
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1400);
    for (const id of process.argv.includes('--skip-screenshots') ? [] : ['top', 'tu-punto-de-partida', 'propuesta', 'evidencia', 'mentoria', 'metodologia', 'casos', 'historia', 'contacto']) {
      await page.locator('#' + id).screenshot({ path: path.join(out, id + '-desktop.png') });
    }
    await page.locator('.stage-option').nth(1).click();
    assert.equal(await page.locator('.stage-option').nth(1).getAttribute('aria-pressed'), 'true');
    assert.match(await page.locator('#stage-response').innerText(), /Del producto a tu primera tienda/);
    await page.locator('.stage-option').nth(2).focus();
    await page.keyboard.press('Enter');
    assert.match(await page.locator('#stage-response').innerText(), /Revisar lo que tienes y definir el siguiente paso/);
    const proof = page.locator('#evidencia .proof-trigger').first();
    await proof.click();
    assert.equal(await page.locator('dialog[open]').count(), 1);
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('dialog[open]').count(), 0);
    assert.equal(await proof.evaluate(el => el === document.activeElement), true);
    const faq = page.locator('#faq details').nth(1);
    await faq.locator('summary').focus();
    await page.keyboard.press('Enter');
    assert.equal(await faq.getAttribute('open'), '');
    assert.equal(await page.locator('#aplicar button[type="submit"]').isEnabled(), true);
    await page.locator('#aplicar button[type="submit"]').click();
    assert.equal(await page.locator('#aplicar').evaluate(form => form.checkValidity()), false);
    assert.equal(new URL(page.url()).hostname, 'localhost');
    await page.locator('#contact-stage').selectOption('Quiero empezar desde cero');
    await page.locator('#aplicar button[type="submit"]').click();
    assert.equal(await page.locator('#contact-challenge').evaluate(input => input.validity.valueMissing), true);
    assert.equal(new URL(page.url()).hostname, 'localhost');
    await page.locator('#contact-store').fill('mitienda.com');
    await page.locator('#contact-challenge').fill('Quiero entender mis métricas y mi margen.');
    assert.equal(await page.locator('#aplicar').evaluate(form => form.checkValidity()), true);
    const whatsappLinks = await page.locator('a[href^="https://wa.me/"]').evaluateAll(links => links.map(link => link.href));
    assert.ok(whatsappLinks.length > 5);
    assert.ok(whatsappLinks.every(href => new URL(href).pathname === '/573013965167'));
    const metadata = await page.evaluate(() => ({
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      og: document.querySelector('meta[property="og:image"]')?.content,
      title: document.title,
      sameAs: JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)['@graph'][0].sameAs,
    }));
    assert.ok(metadata.canonical);
    assert.ok(metadata.og);
    assert.ok(!metadata.sameAs.includes('https://instagram.com/'));
    await page.setViewportSize({ width: 390, height: 844 });
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.waitForTimeout(300);
    assert.equal(await page.locator('.mobile-contact').isVisible(), false);
    await page.getByRole('button', { name: 'Abrir menú' }).click();
    assert.equal(await page.locator('#mobile-menu').isVisible(), true);
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#mobile-menu').count(), 0);
    await page.evaluate(() => {
      const method = document.getElementById('metodologia');
      window.scrollTo({ top: method.getBoundingClientRect().top + scrollY + 100, behavior: 'instant' });
    });
    await page.waitForTimeout(300);
    assert.equal(await page.locator('.mobile-contact').isVisible(), true);
    await page.evaluate(() => {
      const cta = document.querySelector('#stage-response .wa-link');
      window.scrollTo({ top: cta.getBoundingClientRect().top + scrollY - 200, behavior: 'instant' });
    });
    await page.waitForTimeout(300);
    assert.equal(await page.locator('.mobile-contact').isVisible(), false);
    await page.evaluate(() => {
      const cta = document.querySelector('#stage-response .wa-link');
      window.scrollTo({ top: cta.getBoundingClientRect().bottom + scrollY - 63, behavior: 'instant' });
    });
    await page.waitForTimeout(300);
    assert.equal(await page.locator('.mobile-contact').isVisible(), true);
    if (!process.argv.includes('--skip-screenshots')) {
      await page.locator('#tu-punto-de-partida').screenshot({ path: path.join(out, 'stage-mobile.png') });
      await page.locator('#propuesta').screenshot({ path: path.join(out, 'proposal-mobile.png') });
      await page.locator('#evidencia').screenshot({ path: path.join(out, 'evidence-mobile.png') });
    }
    await page.locator('#contacto').scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    assert.equal(await page.locator('.mobile-contact').isVisible(), false);
    await page.setViewportSize({ width: 320, height: 800 });
    const overflow = await page.evaluate(() => [...document.querySelectorAll('.post-hero *')].filter(el => {
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && (rect.right > innerWidth + 1 || rect.left < -1) && getComputedStyle(el).position !== 'fixed';
    }).map(el => ({ tag: el.tagName, cls: typeof el.className === 'string' ? el.className : '', right: el.getBoundingClientRect().right, text: el.textContent.slice(0, 70) })));
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    const responsive = [];
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const check = await page.evaluate(() => {
        const visual = document.querySelector('.proposal-visual');
        const style = getComputedStyle(visual);
        return {
          width: innerWidth,
          overflow: document.documentElement.scrollWidth > innerWidth,
          visualHeight: visual.getBoundingClientRect().height,
          visualBorder: style.borderTopWidth,
          visualBackground: style.backgroundColor,
          proposalBackground: getComputedStyle(document.querySelector('.proposal-panel')).backgroundColor,
        };
      });
      assert.equal(check.overflow, false);
      assert.ok(check.visualHeight >= 270);
      assert.equal(check.visualBorder, '0px');
      assert.equal(check.visualBackground, 'rgba(0, 0, 0, 0)');
      assert.equal(check.proposalBackground, 'rgb(18, 37, 27)');
      responsive.push(check);
    }
    // Intercept the navigation: verify the real redirect without contacting WhatsApp.
    await page.route('https://wa.me/**', route => route.fulfill({ status: 200, contentType: 'text/html', body: '<p>WhatsApp redirect intercepted for local validation.</p>' }));
    const submissions = [];
    for (const sample of [
      { width: 1440, stage: 'Quiero empezar desde cero', store: '', challenge: 'Quiero empezar desde cero: café & hogar + envío en Bogotá.\nNecesito elegir un producto.' },
      { width: 390, stage: 'Ya tengo una tienda y quiero mejorarla', store: 'https://mitienda.com/?coleccion=café&origen=web', challenge: 'Quiero mejorar mi tienda y entender el margen.' },
    ]) {
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
      await page.setViewportSize({ width: sample.width, height: 900 });
      await page.locator('#contact-stage').selectOption(sample.stage);
      await page.locator('#contact-store').fill(sample.store);
      await page.locator('#contact-challenge').fill(sample.challenge);
      await Promise.all([
        page.waitForURL('https://wa.me/**'),
        page.locator('#aplicar button[type="submit"]').click(),
      ]);
      const destination = new URL(page.url());
      assert.equal(destination.pathname, '/573013965167');
      assert.equal(destination.searchParams.get('text'), [
        'Hola David, quiero crear mi negocio con dropshipping y conocer la mentoría 1:1.',
        '',
        'Mi punto de partida: ' + sample.stage,
        'Mi tienda: ' + (sample.store || 'Aún no tengo tienda'),
        'Me gustaría lograr: ' + sample.challenge,
      ].join('\n'));
      submissions.push({ width: sample.width, optionalStore: !sample.store, redirect: 'passed' });
    }
    assert.deepEqual(errors, []);
    console.log(JSON.stringify({ interactions: 'passed', submissions, responsive, metadata, overflow320: overflow, errors }, null, 2));
    await browser.close();
    return;
  }
  const report = [];
  for (const width of baseline ? [390, 1440] : [320, 360, 390, 430, 768, 1024, 1440, 1920]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(1200);
    const hero = await page.locator('#top').evaluate(el => {
      const props = ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'color', 'backgroundColor', 'padding', 'margin', 'borderRadius'];
      return [el, ...el.querySelectorAll('*')].map(e => {
        const r = e.getBoundingClientRect(), s = getComputedStyle(e);
        return { tag: e.tagName, box: [r.x, r.y, r.width, r.height].map(n => Math.round(n * 100) / 100), ...Object.fromEntries(props.map(p => [p, s[p]])) };
      });
    });
    if ([390, 1440].includes(width)) {
      await page.locator('#top').screenshot({ path: path.join(out, `hero-${baseline ? 'before' : 'after'}-${width}.png`) });
      if (baseline) fs.writeFileSync(path.join(out, `hero-${width}.json`), JSON.stringify(hero));
    }
    const heroGeometryEqual = baseline || ![390, 1440].includes(width) ? null : JSON.stringify(hero) === fs.readFileSync(path.join(out, `hero-${width}.json`), 'utf8');
    const heroComparison = baseline || ![390, 1440].includes(width) ? {} : await compareHero(width);
    if (!baseline) {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      for (const section of await page.locator('.post-hero > section').all()) {
        await section.scrollIntoViewIfNeeded();
        await page.waitForTimeout(80);
      }
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
      if ([390, 1440].includes(width)) {
        // Let the protected hero's existing scroll interpolation return to rest.
        await page.evaluate(() => new Promise(resolve => {
          let frames = 0;
          const settle = () => { window.dispatchEvent(new Event('scroll')); if (++frames > 160) resolve(); else requestAnimationFrame(settle); };
          settle();
        }));
        await page.screenshot({ path: path.join(out, `page-${width}.png`), fullPage: true });
      }
    }
    const checks = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth > innerWidth,
      h1: document.querySelectorAll('h1').length,
      brokenAnchors: [...document.querySelectorAll('a[href^="#"]')].filter(a => !document.getElementById(a.hash.slice(1))).map(a => a.hash),
      duplicateIds: [...document.querySelectorAll('[id]')].map(e => e.id).filter((id, i, all) => all.indexOf(id) !== i),
      failedImages: [...document.images].filter(i => i.complete && i.naturalWidth === 0).map(i => i.src),
      height: document.documentElement.scrollHeight,
    }));
    report.push({ width, heroGeometryEqual, ...heroComparison, ...checks, errors });
    console.log('Checked width ' + width + ': ' + JSON.stringify({ ...checks, ...heroComparison }));
    await page.close();
  }
  fs.writeFileSync(path.join(out, baseline ? 'baseline.json' : 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  if (!baseline && report.some(row => row.overflow || row.h1 !== 1 || row.brokenAnchors.length || row.duplicateIds.length || row.failedImages.length || row.errors.length || row.heroVisualEqual === false)) process.exitCode = 1;
  await browser.close();
})().catch(async e => { console.error(e); await activeBrowser?.close(); process.exitCode = 1; });
