"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Star } from "lucide-react";
import { fadeIn, scaleUp, staggerContainer } from "@/lib/animations";

export default function ProductsShowcaseSection() {
  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900"></div>
      <div className="container relative mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-16 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div>
            <Badge className="bg-zinc-800/50 text-green-400 hover:bg-zinc-800 backdrop-blur-sm border border-zinc-700/50 px-4 py-2 text-sm rounded-full mb-4">
              Catalog
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-white to-zinc-400 bg-clip-text mb-4">
              Our Products
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Choose from our extensive catalog of high-quality products
            </p>
          </div>
          <Tabs defaultValue="all" className="mt-8 md:mt-0">
            <TabsList className="bg-zinc-800/50 border border-zinc-700/50 p-1 rounded-full">
              <TabsTrigger
                value="all"
                className="rounded-full data-[state=active]:bg-green-500 data-[state=active]:text-white"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="clothing"
                className="rounded-full data-[state=active]:bg-green-500 data-[state=active]:text-white"
              >
                Clothing
              </TabsTrigger>
              <TabsTrigger
                value="accessories"
                className="rounded-full data-[state=active]:bg-green-500 data-[state=active]:text-white"
              >
                Accessories
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {[1, 2, 3, 4].map((item) => (
            <motion.div key={item} variants={scaleUp}>
              <div className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-zinc-900/40 border border-zinc-800/50 transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=300&text=Product ${item}`}
                    alt={`Product ${item}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Best Seller
                    </Badge>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-0 rounded-full">
                      Quick View
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-white text-lg mb-2">
                    Premium T-Shirt
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-semibold text-lg">
                      $99
                    </span>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-full px-8"
          >
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
