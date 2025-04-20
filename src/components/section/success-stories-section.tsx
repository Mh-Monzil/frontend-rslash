"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { scaleUp, staggerContainer } from "@/lib/animations";

export default function SuccessStoriesSection() {
  const successStories = [
    {
      id: 1,
      img: "https://ik.imagekit.io/monzilkit/a53f2601-69f3-4b8d-be34-a416e51adda6-r0oetcwwoki9xfkebhqhjjtkxsi8rt227k219by0zs.png?updatedAt=1745127037696",
    },
    {
      id: 2,
      img: "https://ik.imagekit.io/monzilkit/e815ce96-b557-489b-9a54-315f7e13ff1c-r0oetcwwoki9xfkebhqhjjtkxsi8rt227k219by0zs.jpg?updatedAt=1745127037468",
    },
    {
      id: 3,
      img: "https://ik.imagekit.io/monzilkit/f3da3482-f1d9-45da-a1c1-7a1d13f17332-r0oetcwwoki9xfkebhqhjjtkxsi8rt227k219by0zs.jpg?updatedAt=1745127037381",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900"></div>
      <div className="container relative mx-auto px-10">
        <SectionHeading
          badge="Success Stories"
          title="Meet Our Successful Entrepreneurs"
          description="Join thousands of entrepreneurs who have transformed their lives with R Slash's innovative platform"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {successStories.map((item) => (
            <motion.div key={item.id} variants={scaleUp}>
              <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-gradient-to-b from-zinc-900 to-zinc-950 h-full transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                <div className="relative h-[500px]">
                  <div className="overflow-hidden">
                    <Image
                      src={item.img}
                      alt={`Success story ${item}`}
                      fill
                      className="object-cover transition-transform duration-700 "
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-3">
                      Success Story
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      From Beginner to Pro Seller
                    </h3>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center">
                        <span className="text-sm text-zinc-300">AB</span>
                      </div>
                      <span>Ahmed B.</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-zinc-400 mb-4 line-clamp-3">
                    &quot;R Slash helped me build my online business from
                    scratch. Now I&#39;m earning a full-time income and have
                    expanded to multiple product lines!&quot;
                  </p>
                  <Link
                    href="#"
                    className="text-green-400 font-medium inline-flex items-center hover:text-green-300 group/link"
                  >
                    Read full story
                    <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
