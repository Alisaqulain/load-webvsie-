"use client";

import { MessageCircle, Phone } from "lucide-react";
import { PRIMARY_PHONE, PRIMARY_WHATSAPP, phoneHref } from "@/lib/data";

export default function FloatingCTA() {
  return (
    <>
      <a
        href={PRIMARY_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/30 transition hover:scale-110 hover:brightness-110 md:right-6"
        style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
        aria-label="WhatsApp Now"
        title="WhatsApp Now"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <a
        href={phoneHref(PRIMARY_PHONE)}
        className="fixed right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full gradient-gold text-navy-950 shadow-xl md:hidden"
        style={{ bottom: "calc(max(1rem, env(safe-area-inset-bottom)) + 4rem)" }}
        aria-label="Call for Free Consultation"
        title="Call for Free Consultation"
      >
        <Phone className="h-5 w-5" />
      </a>
    </>
  );
}
