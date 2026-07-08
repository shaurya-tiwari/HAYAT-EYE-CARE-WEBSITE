"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ProductsIndexPage() {
  return (
    <div className="relative flex flex-col flex-1 bg-[--bg-base] min-h-screen overflow-hidden">
      {/* Background Abstract Glows for Glassmorphism to shine on light mode */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[--primary]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[--accent]/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-[--primary]/5 blur-[100px] pointer-events-none" />

      <main className="relative flex-1 pt-28 pb-20 z-10">
        <div className="container-custom px-5 md:px-8">

          <div className="text-center mb-16 relative">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-[--primary-muted] text-[--primary] border border-[--primary]/20">
              <Sparkles size={14} />
              Shop
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[--text-primary] tracking-tight">
              Our Eyewear Collection
            </h1>
            <p className="text-[--text-muted] mt-4 text-lg max-w-xl mx-auto font-medium">
              Premium spectacle frames and contact lenses — choose a category to explore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Frames Card */}
            <Link href="/products/frames" className="group block h-full">
              <div className="relative h-full rounded-[2rem] flex flex-col items-center text-center
                              bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]
                              overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]
                              hover:border-white hover:bg-white/60">
                
                {/* Product Image Section */}
                <div className="relative w-full h-64 overflow-hidden bg-[--primary-muted]">
                  <Image 
                    src="/productglasses .jpg" 
                    alt="Spectacle Frames" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle gradient overlay to blend image with card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="relative z-10 p-8 pt-2 flex flex-col items-center gap-3 w-full flex-1">
                  <h2 className="font-extrabold text-3xl text-[--text-primary] tracking-tight group-hover:text-[--primary] transition-colors">Spectacle Frames</h2>
                  <p className="text-[--text-muted] text-base leading-relaxed">500+ premium styles for every face</p>
                  
                  <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-bold text-[--text-muted] uppercase tracking-wider
                                   group-hover:text-[--primary] group-hover:gap-4 transition-all duration-500">
                    Browse Frames <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Contact Lenses Card */}
            <Link href="/products/contact-lenses" className="group block h-full">
              <div className="relative h-full rounded-[2rem] flex flex-col items-center text-center
                              bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]
                              overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]
                              hover:border-white hover:bg-white/60">
                
                {/* Product Image Section */}
                <div className="relative w-full h-64 overflow-hidden bg-[--accent-muted]">
                  <Image 
                    src="/product-contactlenses.jpg" 
                    alt="Contact Lenses" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle gradient overlay to blend image with card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="relative z-10 p-8 pt-2 flex flex-col items-center gap-3 w-full flex-1">
                  <h2 className="font-extrabold text-3xl text-[--text-primary] tracking-tight group-hover:text-[--accent] transition-colors">Contact Lenses</h2>
                  <p className="text-[--text-muted] text-base leading-relaxed">Daily, monthly &amp; coloured options</p>
                  
                  <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-bold text-[--text-muted] uppercase tracking-wider
                                   group-hover:text-[--accent] group-hover:gap-4 transition-all duration-500">
                    Browse Lenses <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Spectacle Lenses Card */}
            <Link href="/products/spectacle-lenses" className="group block h-full">
              <div className="relative h-full rounded-[2rem] flex flex-col items-center text-center
                              bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]
                              overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]
                              hover:border-white hover:bg-white/60">
                
                {/* Product Image Section */}
                <div className="relative w-full h-64 overflow-hidden bg-[--primary-muted]">
                  <Image 
                    src="/spectacle lense .jpg" 
                    alt="Spectacle Lenses" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle gradient overlay to blend image with card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="relative z-10 p-8 pt-2 flex flex-col items-center gap-3 w-full flex-1">
                  <h2 className="font-extrabold text-3xl text-[--text-primary] tracking-tight group-hover:text-[--primary] transition-colors">Spectacle Lenses</h2>
                  <p className="text-[--text-muted] text-base leading-relaxed">High quality lenses for every prescription</p>
                  
                  <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-bold text-[--text-muted] uppercase tracking-wider
                                   group-hover:text-[--primary] group-hover:gap-4 transition-all duration-500">
                    Browse Lenses <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
