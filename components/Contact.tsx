"use client";

import Link from "next/link";

export default function Contact() {
  const phoneNumber = "+995 555 123 456";
  const phoneNumberClean = "+995555123456";
  const whatsappNumber = "995555123456";

  return (
    <section className="py-20 lg:py-28 bg-[#1F2933] scroll-mt-20" id="contact">
      {" "}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="text-center">
          {" "}
          {/* Main Heading */}{" "}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {" "}
            გსურთ რემონტის დაწყება?{" "}
          </h2>
          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-slate-300 mb-12 lg:mb-14">
            დაგვიკავშირდით დღესვე და მიიღეთ უფასო კონსულტაცია თქვენს პროექტზე
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            {/* Phone Button */}
            <Link
              href={`tel:${phoneNumberClean}`}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-white hover:bg-slate-50 text-[#1F2933] font-bold py-6 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-500 font-normal mb-1">
                  დაგვირეკეთ ახლავე
                </div>
                <div className="text-lg font-bold">{phoneNumber}</div>
              </div>
            </Link>

            {/* WhatsApp Button */}
            <Link
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-[#16A34A] hover:bg-green-700 text-white font-bold py-6 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-green-100 font-normal mb-1">
                  მოგვწერეთ WhatsApp-ზე
                </div>
                <div className="text-lg font-bold">სწრაფი პასუხი</div>
              </div>
            </Link>
          </div>
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-[#2563EB]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-[#2563EB]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-white font-bold text-lg mb-1">
                სწრაფი რეაგირება
              </div>
              <div className="text-slate-400 text-sm">კონსულტაცია 24/7-ზე</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-[#2563EB]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-[#2563EB]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-white font-bold text-lg mb-1">
                უფასო ხარჯთაღრიცხვა
              </div>
              <div className="text-slate-400 text-sm">ზუსტი ფასი და ვადები</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-[#2563EB]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-[#2563EB]"
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
              <div className="text-white font-bold text-lg mb-1">
                ოფიციალური გარანტია
              </div>
              <div className="text-slate-400 text-sm">დაცული უფლებები</div>
            </div>
          </div>
          {/* Bottom Note */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center justify-center gap-2 text-slate-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>სამუშაო საათები: ყოველდღე 09:00 - 21:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
