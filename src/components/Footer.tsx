import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import {
  SITE_NAME,
  TAGLINE,
  PHONES,
  NAV_LINKS,
  LOAN_TYPES,
  whatsappHref,
} from "@/lib/data";

export default function Footer() {
  const quickLoans = LOAN_TYPES.slice(0, 8);

  return (
    <footer className="gradient-hero border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="shrink-0 overflow-hidden rounded-xl border border-gold-500/40 bg-white p-1">
                <Image
                  src="/logo.jpeg"
                  alt="NR Innovative Solutions Logo"
                  width={180}
                  height={56}
                  className="h-10 w-[120px] object-contain sm:h-12 sm:w-[150px]"
                />
              </div>
              <div className="min-w-0">
                <p className="font-display font-semibold text-white">{SITE_NAME}</p>
                <p className="text-xs text-gold-500/80">&ldquo;{TAGLINE}&rdquo;</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-silver-400">
              Premium loan consultancy connecting you with 159+ banks and NBFCs across
              India. Expert advice, zero service charges, pan India support.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-silver-300">
              <MapPin className="h-4 w-4 text-gold-400" />
              Pan India Service
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.slice(1, 7).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver-400 transition hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Loan Types</h4>
            <ul className="mt-4 space-y-2">
              {quickLoans.map((loan) => (
                <li key={loan}>
                  <Link
                    href={`/apply?loan=${encodeURIComponent(loan)}`}
                    className="text-sm text-silver-400 transition hover:text-gold-400"
                  >
                    {loan}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/loan-services"
                  className="text-sm font-medium text-gold-400 hover:text-gold-300"
                >
                  View all loan types →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3">
              {PHONES.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:+91${phone}`}
                    className="flex items-center gap-2 text-sm text-silver-300 transition hover:text-gold-400"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-gold-500" />
                    +91 {phone}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {PHONES.slice(0, 2).map((phone) => (
                <a
                  key={phone}
                  href={whatsappHref(phone, "Hello, I need loan assistance from NR Innovative Solutions.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-green-500/30 bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-400 transition hover:bg-green-500/20"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs text-silver-500 sm:text-left">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-silver-500 sm:justify-end">
            <Link href="/apply" className="hover:text-gold-400">
              Apply for Loan
            </Link>
            <Link href="/contact" className="hover:text-gold-400">
              Contact Us
            </Link>
            <Link href="/eligibility" className="hover:text-gold-400">
              Eligibility
            </Link>
            <Link href="/privacy-policy" className="hover:text-gold-400">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
