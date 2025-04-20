"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeIn } from "@/lib/animations";

interface SectionHeadingProps {
  badge: string;
  title: string;
  description: string;
}

export function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      className="text-center mb-16 max-w-3xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <Badge className="bg-zinc-800/50 text-green-400 hover:bg-zinc-800 backdrop-blur-sm border border-zinc-700/50 px-4 py-2 text-sm rounded-full mb-4">
        {badge}
      </Badge>
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-white to-zinc-400 bg-clip-text mb-6">
        {title}
      </h2>
      <p className="text-zinc-400 text-lg">{description}</p>
    </motion.div>
  );
}
