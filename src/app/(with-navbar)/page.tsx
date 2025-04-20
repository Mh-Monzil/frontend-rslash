"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/shared/Ui/Footer/Footer";
import { useMobile } from "@/components/hooks/use-mobile";
import MobileMenu from "@/components/shared/mobile-menu";
import HeroSection from "@/components/section/hero-section";
import BrandsSection from "@/components/section/brands-section";
import SuccessStoriesSection from "@/components/section/success-stories-section";
import HowItWorksSection from "@/components/section/how-it-works-section";
import MembershipPlansSection from "@/components/section/membership-plans-section";
import ProductsShowcaseSection from "@/components/section/products-showcase-section";
import TestimonialsSection from "@/components/section/testimonial-section";
import CtaSection from "@/components/section/cta-section";
import Navbar from "@/components/shared/Ui/Navbar/Navbar";

export default function Home() {
  const isMobile = useMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex mx-auto min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <Navbar
        scrolled={scrolled}
        isMobile={isMobile}
        onMenuOpen={() => setMobileMenuOpen(true)}
      />

      {mobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} />
      )}

      <main className="flex-1">
        <HeroSection />
        <BrandsSection />
        <SuccessStoriesSection />
        <HowItWorksSection />
        <MembershipPlansSection />
        <ProductsShowcaseSection />
        <TestimonialsSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
