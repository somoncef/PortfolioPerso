"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function AnimatedBadge({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
    >
      <Badge>{children}</Badge>
    </motion.div>
  );
}
