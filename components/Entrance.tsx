"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
export function Entrance({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return <motion.div initial={false} whileInView={reduce ? undefined : { y: [12, 0] }} viewport={{ once: true, amount: .15 }} transition={{ duration: .55 }}>{children}</motion.div>;
}
