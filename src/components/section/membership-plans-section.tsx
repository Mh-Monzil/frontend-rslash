"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { scaleUp, staggerContainer } from "@/lib/animations";

export default function MembershipPlansSection() {
  return (
    <section id="membership" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900"></div>

      {/* Animated gradient orb */}
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-green-500/10 blur-[120px] animate-pulse"></div>

      <div className="container relative mx-auto">
        <SectionHeading
          badge="Pricing"
          title="Our Membership Plans"
          description="Choose the perfect plan to kickstart your entrepreneurial journey"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {[
            {
              name: "Starter",
              price: "20",
              features: [
                "Access to 1,000+ products",
                "Basic analytics",
                "Email support",
                "7-day delivery",
              ],
            },
            {
              name: "Growth",
              price: "30",
              popular: true,
              features: [
                "Access to 10,000+ products",
                "Advanced analytics",
                "Priority support",
                "3-day delivery",
                "Marketing tools",
              ],
            },
            {
              name: "Enterprise",
              price: "60",
              features: [
                "Access to all products",
                "Custom analytics",
                "24/7 support",
                "Next-day delivery",
                "Marketing tools",
                "Dedicated account manager",
              ],
            },
          ].map((plan, index) => (
            <motion.div key={index} variants={scaleUp}>
              <div
                className={`backdrop-blur-md rounded-2xl h-full transition-all duration-500 group
                  ${
                    plan.popular
                      ? "bg-gradient-to-b from-green-500/20 to-emerald-500/5 border border-green-500/30"
                      : "bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700"
                  }
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 px-4 py-1.5 rounded-full">
                      <Sparkles className="h-4 w-4 mr-1" /> Most Popular
                    </Badge>
                  </div>
                )}
                <div className="p-8 flex flex-col h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {plan.name}
                    </h3>
                    <div className="flex items-center justify-center">
                      <span className="text-zinc-400">$</span>
                      <span className="text-5xl font-bold text-white mx-1">
                        {plan.price}
                      </span>
                      <span className="text-zinc-400">/mo</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle
                          className={`h-5 w-5 mr-3 flex-shrink-0 ${
                            plan.popular ? "text-green-400" : "text-green-500"
                          }`}
                        />
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button
                      className={`w-full rounded-xl h-14 text-base cursor-pointer ${
                        plan.popular
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0"
                          : "bg-zinc-800 hover:bg-zinc-700 text-white"
                      }`}
                    >
                      Get Started
                    </Button>
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
