"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  delay?: number;
}

export function SectionHeading({ title, delay = 0 }: SectionHeadingProps) {
  return (
    <BlurFade delay={delay} inView>
      <div className="relative inline-block">
        <h2 className="text-xl font-bold">{title}</h2>
        <motion.span
          className="absolute -bottom-1 left-0 h-0.5 rounded-full bg-foreground/30"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </BlurFade>
  );
}
