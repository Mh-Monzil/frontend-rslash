"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "../ui/section-heading";
import { scaleUp, staggerContainer } from "@/lib/animations";

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900"></div>

      {/* Animated gradient orb */}
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-green-500/10 blur-[100px] animate-pulse"></div>

      <div className="container relative mx-auto">
        <SectionHeading
          badge="Testimonials"
          title="Our Customer Reviews"
          description="See what our customers are saying about their experience with R Slash"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {[1, 2, 3].map((item) => (
            <motion.div key={item} variants={scaleUp}>
              <div className="backdrop-blur-md bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 h-full transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-zinc-300 mb-8 text-lg">
                  &quot;R Slash has completely transformed my business. The
                  quality of products and customer service is exceptional.
                  I&#39;ve been able to scale my store beyond what I thought was
                  possible.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-4">
                    <span className="text-white font-medium">AB</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-lg">
                      Happy Customer
                    </h4>
                    <p className="text-zinc-400">Entrepreneur</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
