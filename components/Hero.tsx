"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Award } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [sliderPosition, setSliderPosition] = useState(50);

  // Simple, professional easing - nothing fancy
  const simpleEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];

  return (
    <section className="relative w-full min-h-screen bg-white pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-5rem)] py-12 lg:py-16">
          {/* Left: Content - Simple fade-in with minimal slide */}
          <div className="space-y-8 lg:space-y-10">
            {/* Main Heading - Fade in first */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: simpleEasing }}
              className="text-center md:text-start text-3xl sm:text-5xl font-bold text-[#1F2933] leading-tight"
            >
              ხარისხიანი რემონტი თბილისში: ვადების და ხარისხის გარანტიით{" "}
            </motion.h1>

            {/* Subtitle - Slight delay */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: simpleEasing }}
              className="text-center md:text-start text-lg sm:text-xl text-slate-600 leading-relaxed"
            >
              ბინების, ოფისებისა და კომერციული ფართების სრული სარემონტო
              მომსახურება ერთ სივრცეში
            </motion.p>

            {/* CTA Buttons - Appear together */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: simpleEasing }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Primary CTA */}
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2563EB] text-white text-lg font-bold rounded-lg hover:bg-[#1d4ed8] transition-colors shadow-lg hover:shadow-xl"
              >
                უფასო კონსულტაცია
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1F2933] text-lg font-bold rounded-lg border-2 border-[#1F2933] hover:bg-[#1F2933] hover:text-white transition-colors"
              >
                პროექტების ნახვა
              </Link>
            </motion.div>

            {/* Trust Indicators - Last to appear, draws eye to credibility */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: simpleEasing }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200"
            >
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-[#2563EB]">10+</div>
                <div className="text-sm text-slate-600 mt-1">
                  წლიანი გამოცდილება
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-[#2563EB]">200+</div>
                <div className="text-sm text-slate-600 mt-1">
                  დასრულებული პროექტი
                </div>
              </div>
              <div className="text-center sm:text-left space-y-1">
                <CheckCircle2 className="w-8 h-8 text-[#2563EB] mx-auto sm:mx-0" />
                <div className="text-sm text-slate-600">
                  დათქმულ ვადაში ჩაბარება
                </div>
              </div>
              <div className="text-center sm:text-left space-y-1">
                <CheckCircle2 className="w-8 h-8 text-[#2563EB] mx-auto sm:mx-0" />
                <div className="text-sm text-slate-600">
                  ფიქსირებული ბიუჯეტი
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Before/After Image - Simple fade, no fancy effects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: simpleEasing }}
            className="hidden md:block relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
              <Image
                src="/assets/images/hero-after-2.jpg"
                alt="რემონტის შემდეგ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Subtle After Label */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
                <span className="text-sm font-semibold text-[#1F2933]">
                  შემდეგ
                </span>
              </div>
            </div>

            {/* Before Image (Overlay with clip) */}
            <div
              className="absolute inset-0 z-[5]"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <Image
                src="/assets/images/hero-before.jpg"
                alt="რემონტამდე"
                fill
                className="object-cover"
                objectPosition="right"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Subtle Before Label */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
                <span className="text-sm font-semibold text-[#1F2933]">
                  მანამდე
                </span>
              </div>
            </div>

            {/* Slider Handle - Elegant and Minimal */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-10 shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-slate-100">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-4 bg-[#2563EB] rounded-full"></div>
                  <div className="w-0.5 h-4 bg-[#2563EB] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Invisible Slider Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(parseInt(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              aria-label="რემონტის შედარების სლაიდერი"
            />

            {/* Quality Badge Overlay - Positioned to avoid slider */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg z-[25]">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#2563EB]" />
                <span className="text-sm font-bold text-[#1F2933]">
                  უმაღლესი ხარისხი
                </span>
              </div>
            </div>

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F2933]/10 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
