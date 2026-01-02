// components/About.tsx
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-18 md:pt-24 bg-white scroll-mt-10 md:scroll-mt-0"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="space-y-8 md:space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-800 leading-tight">
              ჩვენს შესახებ
            </h2>

            <div className="space-y-6 text-base md:text-lg lg:text-xl text-stone-600 leading-relaxed">
              <p>
                ჩვენ ვქმნით ინტერიერებს, რომლებიც ასახავს ადამიანის ხასიათს,
                ყოველდღიურობას და ესთეტიკას.
              </p>

              <p>თითოეული პროექტი უნიკალურია და იწყება დიალოგით.</p>

              <p>
                ჩვენი მიდგომა აერთიანებს ფუნქციონალურობას და ემოციურ
                ღირებულებას.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
              alt="Interior design studio workspace"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
