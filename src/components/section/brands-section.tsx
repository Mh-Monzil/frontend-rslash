"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function BrandsSection() {
  return (
    <section className="py-20 relative overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"></div>
      <div className="container relative mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <p className="text-zinc-400 mb-2">TRUSTED BY LEADING BRANDS</p>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto"></div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-12 md:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              variants={fadeIn}
            >
              <Image
                src={`/placeholder.svg?height=60&width=120&text=Brand ${i}`}
                alt={`Brand ${i}`}
                width={120}
                height={60}
                className="h-8 w-auto object-contain filter invert"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
