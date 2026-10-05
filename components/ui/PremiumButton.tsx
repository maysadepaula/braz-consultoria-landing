import { ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type PremiumButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "gold" | "outline" | "dark";
};

export function PremiumButton({
  children,
  className,
  variant = "gold",
  ...props
}: PremiumButtonProps) {
  const variants = {
    gold:
      "border-brand-gold bg-brand-gold text-brand-deep shadow-gold hover:-translate-y-0.5 hover:bg-[#d9b875]",
    outline:
      "border-white/30 bg-white/5 text-white hover:-translate-y-0.5 hover:border-brand-gold/80 hover:bg-white/10",
    dark:
      "border-brand-deep bg-brand-deep text-white hover:-translate-y-0.5 hover:bg-brand-navy"
  };

  return (
    <a
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold/60 focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
