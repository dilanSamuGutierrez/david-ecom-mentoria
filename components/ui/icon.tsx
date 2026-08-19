import {
  Flame,
  Shuffle,
  EyeOff,
  Users,
  LineChart,
  ShoppingBag,
  Target,
  Activity,
  Package,
  Instagram,
  Stethoscope,
  Store,
  SlidersHorizontal,
  TrendingUp,
  MessageCircle,
  Repeat,
  Image as ImageIcon,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  flame: Flame,
  shuffle: Shuffle,
  "eye-off": EyeOff,
  users: Users,
  "line-chart": LineChart,
  "shopping-bag": ShoppingBag,
  target: Target,
  activity: Activity,
  package: Package,
  instagram: Instagram,
  stethoscope: Stethoscope,
  store: Store,
  sliders: SlidersHorizontal,
  "trending-up": TrendingUp,
  "message-circle": MessageCircle,
  repeat: Repeat,
  image: ImageIcon,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={1.5} aria-hidden />;
}
