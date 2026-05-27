import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NR Innovative Solutions | All Types of Loans Across India",
  description:
    "Get personal, business, housing, mortgage, gold, vehicle, education and commercial loans through NR Innovative Solutions with 159+ bank tie-ups across India.",
  keywords: [
    "loan consultancy India",
    "personal loan",
    "business loan",
    "home loan",
    "NR Innovative Solutions",
    "bank tie-ups",
  ],
  openGraph: {
    title: "NR Innovative Solutions | All Types of Loans Across India",
    description:
      "Get personal, business, housing, mortgage, gold, vehicle, education and commercial loans through NR Innovative Solutions with 159+ bank tie-ups across India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
