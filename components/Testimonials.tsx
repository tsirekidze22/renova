"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  projectType: string;
  review: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "გიორგი მ.",
      location: "ვაკე",
      projectType: "სრული რემონტი",
      review:
        "რემონტი ჩამაბარეს ზუსტად დროზე. ყველაფერი შეთანხმების მიხედვით შესრულდა. ბიუჯეტი პროცესში არ შეცვლილა და ხარისხიც შესანიშნავია. ძალიან კმაყოფილი ვარ!",
      rating: 5,
    },
    {
      id: 2,
      name: "ნინო კ.",
      location: "საბურთალო",
      projectType: "კოსმეტიკური რემონტი",
      review:
        "თავისი საქმის პროფესიონალები არიან. ხელოსნები პუნქტუალურები იყვნენ და ყველაფერი სუფთად ჩამაბარეს. გულწრფელად ვუწევ რეკომენდაციას",
      rating: 5,
    },
    {
      id: 3,
      name: "დავით ს.",
      location: "ისანი",
      projectType: "ოფისის რემონტი",
      review:
        "ოფისის რემონტი სულ რაღაც 2 კვირაში დაასრულეს. ბიზნესის შეფერხება მინიმალური იყო. ფიქსირებული ფასი და ხარისხიანი სამუშაო - 100%-იანი რეკომენდაცია",
      rating: 5,
    },
  ];

  const renderStars = (rating: number): JSX.Element[] => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-slate-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  // Refs for scroll animations
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const trustRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });
  const trustInView = useInView(trustRef, { once: true, margin: "-100px" });

  const simpleEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];

  return (
    <section className="py-20 lg:py-28 bg-[#F9FAFB] scroll-mt-20" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Simple fade + minimal slide */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 15 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, ease: simpleEasing }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2933] mb-4">
            მომხმარებელთა შეფასებები
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            რეალური ისტორიები და გამოხმაურებები ჩვენს მიერ დასრულებული
            პროექტებიდან
          </p>
        </motion.div>

        {/* Testimonials Grid - Minimal stagger */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 15 }}
              animate={
                cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
              }
              transition={{
                duration: 0.5,
                delay: index * 0.08, // Subtle stagger: 80ms between cards
                ease: simpleEasing,
              }}
              className="bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-[#2563EB] hover:shadow-lg transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review Text */}
              <blockquote className="text-slate-700 text-base mb-8 leading-relaxed italic">
                "{testimonial.review}"
              </blockquote>

              {/* Divider */}
              <div className="border-t-2 border-slate-100 pt-6">
                {/* Client Info */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="font-bold text-[#1F2933] text-lg mb-2">
                      {testimonial.name}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{testimonial.location}</span>
                    </div>
                    <div className="inline-block bg-blue-50 text-[#2563EB] text-sm font-semibold px-3 py-1.5 rounded-lg">
                      {testimonial.projectType}
                    </div>
                  </div>

                  {/* Verified Badge */}
                  <div className="flex-shrink-0 ml-4">
                    <div
                      className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center"
                      title="ვერიფიცირებული"
                    >
                      <svg
                        className="w-7 h-7 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Message - Simple fade in */}
        <motion.div
          ref={trustRef}
          initial={{ opacity: 0, y: 15 }}
          animate={trustInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, ease: simpleEasing }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-lg border-2 border-slate-200 shadow-sm">
            <svg
              className="w-8 h-8 text-[#2563EB]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <p className="text-slate-700 text-lg">
              <span className="font-bold text-[#1F2933]">200-ზე მეტი</span>{" "}
              კმაყოფილი კლიენტი თბილისსა და მის შემოგარენში
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
