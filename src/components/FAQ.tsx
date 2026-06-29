"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-slate-50">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-gold-600 uppercase">
            FAQ
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={item.question}
              className="overflow-hidden rounded-xl border border-navy-800/8 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-6 sm:py-4"
              >
                <span className="text-sm font-medium text-navy-900 sm:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gold-600 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-navy-800/8 px-4 pb-4 sm:px-6">
                  <p className="text-sm leading-relaxed text-silver-500">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
