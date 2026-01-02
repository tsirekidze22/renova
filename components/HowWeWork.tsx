"use client";

import Link from "next/link";

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "უფასო კონსულტაცია",
      description:
        "დაგვიკავშირდით და ვისაუბრებთ თქვენს იდეებზე. ჩამოვალთ ობიექტზე, გავიგებთ თქვენს სურვილებს და მოთხოვნებს.",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "შეფასება და შეთავაზება",
      description:
        "ვადგენთ დეტალურ ხარჯთაღრიცხვას, ვითანხმებთ ფასებს და ვადებს. ყველაფერი გამჭვირვალედ და ფიქსირებული.",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "სამუშაოს დაწყება",
      description:
        "ვიწყებთ რემონტს შეთანხმებული გეგმის მიხედვით. მუდმივი კომუნიკაცია და კონტროლი ყველა ეტაპზე.",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      number: "04",
      title: "ჩაბარება და გარანტია",
      description:
        "ობიექტის ჩაბარება სრული დოკუმენტაციით. გარანტია შესრულებულ სამუშაოებზე და მასალებზე.",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2933] mb-4">
            როგორ ვმუშაობთ
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            მარტივი და გამჭვირვალე პროცესი — თქვენთვის დროის დაზოგვა და სტრესის
            მინიმიზაცია
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16 lg:mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-1 bg-gradient-to-r from-[#2563EB] to-[#2563EB]/20 -translate-x-1/2 z-0" />
              )}

              {/* Step Card */}
              <div className="relative bg-white border-2 border-slate-200 p-8 rounded-xl hover:border-[#2563EB] hover:shadow-lg transition-all duration-300 z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#2563EB] rounded-lg flex items-center justify-center text-white mb-6">
                  {step.icon}
                </div>

                {/* Step Number */}
                <div className="text-sm font-bold text-[#2563EB] mb-3 tracking-wider">
                  ეტაპი {step.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1F2933] mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 lg:p-12 rounded-xl border border-slate-200 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-[#1F2933] mb-4 text-center">
            ყველაფერი ხელშეკრულებით და გარანტიით
          </h3>
          <p className="text-lg text-slate-600 mb-8 text-center">
            ჩვენ არ ვიწყებთ სამუშაოს ხელშეკრულების გარეშე. ყველა ეტაპი
            დაფიქსირებულია — ფასები, ვადები და პასუხისმგებლობები.
          </p>
          <div className="text-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#2563EB] text-white text-lg font-bold rounded-lg hover:bg-[#1d4ed8] transition-colors shadow-lg"
            >
              დავიწყოთ თქვენი პროექტი
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
