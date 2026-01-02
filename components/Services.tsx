"use client";

import Link from "next/link";
import {
  Home,
  Paintbrush,
  Zap,
  Droplets,
  Palette,
  Building2,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "სრული რემონტი",
      description:
        "ვასრულებთ სრულ სარემონტო სამუშაოებს — დაწყებული დაგეგმვიდან, დასრულებული ჩაბარებით. ყველა ეტაპი ერთ ხელში.",
    },
    {
      icon: Paintbrush,
      title: "კოსმეტიკური რემონტი",
      description:
        "სწრაფი და ხარისხიანი განახლება — შეღებვა, შპალერი, იატაკის მოწყობა. იდეალურია სივრცის სწრაფად განახლებისთვის.",
    },
    {
      icon: Zap,
      title: "ელექტროობა",
      description:
        "ელექტროგაყვანილობის მოწყობა, განახლება და შეკეთება. უსაფრთხოება და თანამედროვე სტანდარტები.",
    },
    {
      icon: Droplets,
      title: "სანტექნიკა",
      description:
        "სანტექნიკის სრული მონტაჟი და შეკეთება — მილები, ბათები, სანტექნიკა. გარანტირებული ხარისხი.",
    },
    {
      icon: Palette,
      title: "შპალერი / შეღებვა",
      description:
        "პროფესიონალური შეღებვა და შპალერის მოწყობა. სრულყოფილი ზედაპირი და გრძელვადიანი შედეგი.",
    },
    {
      icon: Building2,
      title: "კომერციული სივრცეები",
      description:
        "ოფისების, მაღაზიების და კომერციული ფართების რემონტი. სწრაფი დრო და მინიმალური ბიზნეს შეფერხება.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-[#F9FAFB] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2933] mb-4">
            მომსახურებები
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            ვთავაზობთ სრულ სპექტრს სარემონტო სამუშაოებისა — ბინებიდან კომერციულ
            სივრცეებამდე
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-[#2563EB] hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#2563EB]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#2563EB] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1F2933] mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Below Services */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-700 mb-6">
            არ იხილეთ რაც გჭირდებათ? დაგვიკავშირდით და ვიმსჯელოთ თქვენს პროექტზე
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#2563EB] text-white text-lg font-bold rounded-lg hover:bg-[#1d4ed8] transition-colors shadow-lg hover:shadow-xl"
          >
            მიიღეთ კონსულტაცია
          </Link>
        </div>
      </div>
    </section>
  );
}
