"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
// import { ThemeToggle } from "@/components/theme-toggle"

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col">
      <div className="container flex justify-between items-center h-20 ">
        <Logo />
        <div className="flex items-center gap-4">
          {/* <ThemeToggle /> */}
          <button className="text-zinc-300 hover:text-white" onClick={onClose}>
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 gap-8">
        {["Home", "Products", "How It Works", "Membership"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-2xl font-medium text-zinc-200 hover:text-white transition-colors"
            onClick={onClose}
          >
            {item}
          </Link>
        ))}
        <div className="flex flex-col items-center gap-4 mt-8">
          <Link
            href="/login"
            className="text-lg font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 rounded-full px-8 py-6 text-lg">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
