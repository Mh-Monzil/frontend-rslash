"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Logo } from "@/components/ui/logo";

interface HeaderProps {
  scrolled: boolean;
  isMobile: boolean;
  onMenuOpen: () => void;
}

export default function Navbar({
  scrolled,
  isMobile,
  onMenuOpen,
}: HeaderProps) {
  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden md:flex gap-8">
            {["Home", "Products", "How It Works", "Membership"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/login"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Log in
            </Link>
            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 rounded-full px-6">
              Get Started
            </Button>
          </div>
          {isMobile && (
            <button
              className="text-zinc-300 hover:text-white"
              onClick={onMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
