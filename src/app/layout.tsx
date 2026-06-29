import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import JsonLd from "@/components/JsonLd";
import { organizationJsonLd, rootMetadata, websiteJsonLd } from "@/lib/seo";
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

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030712",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen overflow-x-hidden antialiased">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Navbar />
        <main className="pb-24 md:pb-0">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
