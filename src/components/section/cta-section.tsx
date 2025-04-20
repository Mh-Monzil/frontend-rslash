"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { scaleUp } from "@/lib/animations";

export default function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 via-zinc-950 to-zinc-900"></div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-green-500/20 blur-[120px] animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-emerald-500/20 blur-[80px] animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container relative mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto backdrop-blur-md bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-12 md:p-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleUp}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-zinc-800/50 text-green-400 hover:bg-zinc-800 backdrop-blur-sm border border-zinc-700/50 px-4 py-2 text-sm rounded-full">
                Get Started Today
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Start Your Own Online Store with R Slash
              </h2>
              <p className="text-zinc-300 text-lg">
                Join thousands of entrepreneurs who have already started their
                journey to financial freedom.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 rounded-full px-8 h-14 text-base"
                >
                  Get Started Now
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-full px-8 h-14 text-base"
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl border border-green-500/20 z-0"></div>
              <div className="absolute -inset-2 rounded-2xl border border-green-500/40 z-0"></div>
              <div className="relative z-10 rounded-xl overflow-hidden">
                <Image
                  src="https://ik.imagekit.io/monzilkit/LastIMG-1024x968.png?updatedAt=1745126993223"
                  alt="Start your journey"
                  width={500}
                  height={500}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
