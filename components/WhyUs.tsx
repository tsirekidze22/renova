"use client";

import { Award, DollarSign, Sparkles, Clock } from "lucide-react";

export default function WhyUs() {
  const trustPoints = [
    {
      icon: Award,
      title: "10+ წლიანი გამოცდილება",
      description: "ასობით პროექტი და კმაყოფილი კლიენტები თბილისში",
    },
    {
      icon: DollarSign,
      title: "ფიქსირებული ფასები",
      description: "არანაირი დამალული ხარჯი — რაზეც შევთანხმდით, იმას იხდით",
    },
    {
      icon: Sparkles,
      title: "ხარისხიანი მასალები",
      description: "მხოლოდ გამოცდილი მასალები და პროფესიონალი სპეციალისტები",
    },
    {
      icon: Clock,
      title: "ზუსტი ვადები",
      description: "ვიწყებთ და ვასრულებთ დროზე — ხელშეკრულებით გარანტირებული",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2933] mb-6">
            რატომ ჩვენ?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            ვართ პროფესიონალი გუნდი, რომელიც აკეთებს ხარისხიან რემონტს
            შეთანხმებულ ვადაში და ფიქსირებულ ფასად. არანაირი სიურპრიზი — მხოლოდ
            გამჭვირვალობა და გარანტირებული შედეგი.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-[#F9FAFB] hover:bg-white hover:shadow-lg border-2 border-transparent hover:border-[#2563EB] transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="w-16 h-16 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#2563EB]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1F2933] mb-3">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 pt-12 border-t-2 border-slate-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#2563EB] mb-2">
                10+
              </div>
              <div className="text-sm lg:text-base text-slate-600 font-medium">
                წელი ბაზარზე
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#2563EB] mb-2">
                200+
              </div>
              <div className="text-sm lg:text-base text-slate-600 font-medium">
                დასრულებული პროექტი
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#2563EB] mb-2">
                100%
              </div>
              <div className="text-sm lg:text-base text-slate-600 font-medium">
                ხელშეკრულებით
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#2563EB] mb-2">
                24/7
              </div>
              <div className="text-sm lg:text-base text-slate-600 font-medium">
                კომუნიკაცია
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
