"use client";

import { useEffect, useState } from "react";

/** Never covers the hero, the contact form, a menu, or the footer. */
export function useContactVisibility() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("top");
    const contact = document.getElementById("contacto");
    const footer = document.querySelector("footer");
    const inlineCtas = [...document.querySelectorAll(".post-hero .wa-link")];
    if (!hero) return;
    const inView = (element: Element | null) => {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 64;
    };
    const update = () => {
      const editing = document.activeElement?.matches("input, select, textarea");
      setVisible(hero.getBoundingClientRect().bottom <= 64 && !inView(contact) && !inView(footer) && !inlineCtas.some(inView) && !editing && !document.getElementById("mobile-menu"));
    };
    const observer = new IntersectionObserver(update, { rootMargin: "-64px 0px 0px 0px" });
    [hero, contact, footer, ...inlineCtas].forEach(element => { if (element) observer.observe(element); });
    const menuObserver = new MutationObserver(update);
    const header = document.querySelector("header");
    if (header) menuObserver.observe(header, { childList: true, subtree: true });
    window.addEventListener("resize", update);
    document.addEventListener("focusin", update);
    document.addEventListener("focusout", update);
    update();
    return () => {
      observer.disconnect();
      menuObserver.disconnect();
      window.removeEventListener("resize", update);
      document.removeEventListener("focusin", update);
      document.removeEventListener("focusout", update);
    };
  }, []);
  return visible;
}
