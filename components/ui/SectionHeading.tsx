import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center",
  dark = false
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.24em]",
            dark ? "text-brand-gold" : "text-brand-gold"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-brand-deep"
        )}
      >
        {title}
      </h2>
      {children ? (
        <div
          className={cn(
            "mt-5 text-base leading-8 sm:text-lg",
            dark ? "text-white/70" : "text-slate-600"
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
