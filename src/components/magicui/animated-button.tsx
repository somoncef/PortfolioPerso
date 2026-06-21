"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  href: string;
  download?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function AnimatedButton({
  href,
  download,
  children,
  className,
}: AnimatedButtonProps) {
  return (
    <motion.a
      href={href}
      download={download}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "inline-block rounded-lg bg-blue-500 px-6 py-2 text-white shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75",
        className
      )}
    >
      {children}
    </motion.a>
  );
}
