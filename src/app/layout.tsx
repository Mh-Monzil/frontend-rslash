import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "R Slash - Empower Your Entrepreneurial Journey",
  description:
    "Start your online business journey with R Slash and join thousands of successful entrepreneurs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="bg-black ">{children}</div>
      </body>
    </html>
  );
}
