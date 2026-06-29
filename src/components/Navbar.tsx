"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, phoneHref, PRIMARY_PHONE } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy-950/95 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-navy-950/80 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8">
        <Link href="/" className="group flex min-w-0 shrink items-center">
          <div className="overflow-hidden rounded-lg border border-gold-500/40 bg-white p-0.5 shadow-inner sm:rounded-xl sm:p-1">
            <Image
              src="/logo.jpeg"
              alt="NR Innovative Solutions Logo"
              width={180}
              height={56}
              className="h-8 w-[100px] object-contain sm:h-10 sm:w-[130px] lg:h-11 lg:w-[160px]"
              priority
            />
          </div>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-2.5 py-2 text-[13px] font-medium whitespace-nowrap transition-colors ${
                pathname === link.href
                  ? "bg-gold-500/15 text-gold-400"
                  : "text-silver-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={phoneHref(PRIMARY_PHONE)}
            className="flex items-center gap-1.5 text-sm text-silver-300 whitespace-nowrap transition-colors hover:text-gold-400"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span className="hidden xl:inline">+91 {PRIMARY_PHONE}</span>
            <span className="xl:hidden">Call</span>
          </a>
          <Link
            href="/apply"
            className="gradient-gold rounded-lg px-4 py-2.5 text-sm font-semibold text-navy-950 whitespace-nowrap shadow-lg shadow-gold-500/20 transition hover:brightness-110"
          >
            Apply for Loan
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="shrink-0 rounded-lg p-2 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-navy-950/98 backdrop-blur-xl lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 pb-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-lg px-4 py-3 text-sm font-medium ${
                  pathname === link.href
                    ? "bg-gold-500/15 text-gold-400"
                    : "text-silver-300 hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={phoneHref(PRIMARY_PHONE)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-medium text-silver-200"
            >
              <Phone className="h-4 w-4 text-gold-400" />
              Call +91 {PRIMARY_PHONE}
            </a>
            <Link
              href="/apply"
              className="gradient-gold mt-3 block rounded-lg px-4 py-3 text-center text-sm font-semibold text-navy-950"
            >
              Apply for Loan
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
