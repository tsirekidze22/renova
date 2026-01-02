"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-white pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-5rem)] py-12 lg:py-16">
          {/* Left: Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Main Heading */}
            <h1 className="text-center md:text-start text-3xl sm:text-5xl font-bold text-[#1F2933] leading-tight">
              ხარისხიანი რემონტი თბილისში: ვადების და ხარისხის გარანტიით{" "}
            </h1>

            {/* Subtitle */}
            <p className="text-center md:text-start text-lg sm:text-xl text-slate-600 leading-relaxed">
              ბინების, ოფისებისა და კომერციული ფართების სრული სარემონტო
              მომსახურება ერთ სივრცეში
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
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
                  ოფიციალური ხელშეკრულება
                </div>
              </div>
              <div className="text-center sm:text-left space-y-1">
                <CheckCircle2 className="w-8 h-8 text-[#2563EB] mx-auto sm:mx-0" />
                <div className="text-sm text-slate-600">
                  ფიქსირებული ბიუჯეტი
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden md:block relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#1F2933]">
              <Image
                src="/assets/images/hero-renova.jpeg"
                alt="პროფესიონალური რემონტი თბილისში"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2933]/30 to-transparent" />
            </div>

            {/* Quality Badge Overlay */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#2563EB]" />
                <span className="text-sm font-bold text-[#1F2933]">
                  უმაღლესი ხარისხი
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
