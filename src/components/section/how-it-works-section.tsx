"use client";

import { motion } from "framer-motion";
import { ShoppingBag, CheckCircle, MapPin, TrendingUp } from "lucide-react";
import { scaleUp, staggerContainer } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/section-heading";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900"></div>

      {/* Animated gradient orb */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-green-500/10 blur-[100px] animate-pulse"></div>

      <div className="container relative mx-auto">
        <SectionHeading
          badge="Process"
          title="How Does R Slash Work?"
          description="Our simple 4-step process to get your online business up and running"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0 hidden md:block"></div>

          {[
            {
              title: "Order Placed",
              icon: ShoppingBag,
              description:
                "Select products you want to sell from our extensive catalog",
            },
            {
              title: "Order Fulfilled",
              icon: CheckCircle,
              description:
                "We handle inventory management and packaging for you",
            },
            {
              title: "Order Shipped",
              icon: MapPin,
              description: "Products delivered directly to your customers",
            },
            {
              title: "Profit!",
              icon: TrendingUp,
              description:
                "You earn commission on every sale without the hassle",
            },
          ].map((step, index) => (
            <motion.div key={index} className="relative" variants={scaleUp}>
              <div className="backdrop-blur-md bg-zinc-900/40 border border-zinc-800/50 rounded-xl p-8 h-full transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] group">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center z-10">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="pt-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
