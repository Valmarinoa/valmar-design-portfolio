"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ValueTuningFooter() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-neutral-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h3 className="text-2xl mb-2">Value Tuning</h3>
          <p className="text-sm opacity-60">A methodology by Valentina Marino</p>
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 text-sm tracking-widest uppercase hover:opacity-60 transition-opacity"
        >
          Back to Index
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}