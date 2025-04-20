"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Users, ShoppingBag } from "lucide-react";
import { fadeIn, scaleUp, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden max-w-7xl mx-auto">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-green-500/20 blur-[100px] animate-pulse"></div>
      <div
        className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-emerald-500/20 blur-[80px] animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="space-y-8" variants={fadeIn}>
            <Badge className="bg-zinc-800/50 text-green-400 hover:bg-zinc-800 backdrop-blur-sm border border-zinc-700/50 px-4 py-2 text-sm rounded-full">
              Revolutionizing E-commerce
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block">Right way to</span>
              <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text">
                prove yourself
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-md">
              Start your online business journey with R Slash and join thousands
              of successful entrepreneurs in the digital economy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 rounded-full px-8 h-14 text-base"
              >
                Start Your Store
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-full px-8 h-14 text-base"
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>

          <motion.div className="relative" variants={scaleUp}>
            <div className="relative z-10 rounded-2xl overflow-hidden border border-zinc-800/50 shadow-2xl">
              <Image
                src="https://ik.imagekit.io/monzilkit/LastIMG-1024x968.png?updatedAt=1745126993223"
                alt="Entrepreneur success"
                width={800}
                height={800}
                className="object-cover w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>

              {/* Floating stats cards */}
              <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-4">
                <div className="backdrop-blur-md bg-zinc-900/40 border border-zinc-800/50 rounded-xl p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm">Happy Sellers</p>
                    <p className="text-white font-bold text-xl">4,000+</p>
                  </div>
                </div>
                <div className="backdrop-blur-md bg-zinc-900/40 border border-zinc-800/50 rounded-xl p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <ShoppingBag className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm">Products</p>
                    <p className="text-white font-bold text-xl">200,000+</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 h-64 w-64 rounded-full border border-zinc-800/30 z-0"></div>
            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full border border-zinc-800/30 z-0"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
