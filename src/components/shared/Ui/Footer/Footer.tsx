import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { SocialLinks } from "@/components/ui/social-links";
import { ContactInfo } from "@/components/ui/contact-info";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950 to-zinc-900/50"></div>
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-zinc-400 mb-6">
              Empowering entrepreneurs to build successful online businesses in
              the digital economy .
            </p>
            <SocialLinks />
          </div>

          <div>
            <h3 className="font-semibold text-lg text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Products", "Pricing", "Blog"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-zinc-400 hover:text-green-400 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-white mb-6">Support</h3>
            <ul className="space-y-4">
              {[
                "Help Center",
                "Contact Us",
                "FAQs",
                "Terms of Service",
                "Privacy Policy",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-green-400 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-white mb-6">
              Contact Us
            </h3>
            <ContactInfo />
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800/50 text-center text-zinc-500">
          <p>© {new Date().getFullYear()} R Slash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
