"use client";

import Link from "next/link";
import { Glasses, Eye, ArrowRight } from "lucide-react";

export default function ProductsIndexPage() {
  return (
    <div className="flex flex-col flex-1 bg-[--bg-base]">
      <main className="flex-1 pt-28 pb-20">
        <div className="container-custom px-5 md:px-8">

          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] mb-5 bg-[--primary-muted] text-[--primary] border border-[--primary]/10">
              Shop
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[--text-primary] tracking-tight">
              Our Eyewear Collection
            </h1>
            <p className="text-[--text-muted] mt-3 text-base max-w-lg mx-auto">
              Premium spectacle frames and contact lenses — choose a category to explore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {/* Frames */}
            <Link href="/products/frames" className="group">
              <div className="glass rounded-2xl p-8 md:p-10 flex flex-col items-center gap-5 text-center
                              border-2 border-transparent hover:border-[--primary]/20
                              hover:-translate-y-1.5 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-[--primary-muted] flex items-center justify-center text-[--primary]
                                group-hover:bg-[--primary] group-hover:text-white transition-colors duration-300">
                  <Glasses size={30} />
                </div>
                <div>
                  <h2 className="font-bold text-xl text-[--text-primary]">Spectacle Frames</h2>
                  <p className="text-[--text-muted] text-sm mt-1.5">500+ premium styles for every face</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[--primary]
                                 group-hover:gap-3 transition-all duration-300">
                  Browse Frames <ArrowRight size={15} />
                </span>
              </div>
            </Link>

            {/* Lenses */}
            <Link href="/products/lenses" className="group">
              <div className="glass rounded-2xl p-8 md:p-10 flex flex-col items-center gap-5 text-center
                              border-2 border-transparent hover:border-[--accent]/20
                              hover:-translate-y-1.5 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-[--accent-muted] flex items-center justify-center text-[--accent]
                                group-hover:bg-[--accent] group-hover:text-white transition-colors duration-300">
                  <Eye size={30} />
                </div>
                <div>
                  <h2 className="font-bold text-xl text-[--text-primary]">Contact Lenses</h2>
                  <p className="text-[--text-muted] text-sm mt-1.5">Daily, monthly &amp; coloured options</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[--accent]
                                 group-hover:gap-3 transition-all duration-300">
                  Browse Lenses <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
