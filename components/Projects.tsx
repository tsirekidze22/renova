"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

interface Project {
  id: number;
  before: string;
  after: string;
  location: string;
  size: string;
  type: string;
}

const Projects: React.FC = () => {
  const [activeSliders, setActiveSliders] = useState<Record<number, number>>({
    0: 50,
    1: 50,
    2: 50,
    3: 50,
  });

  const projects: Project[] = [
    {
      id: 0,
      before:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
      after:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop",
      location: "ვაკე, თბილისი",
      size: "85 მ²",
      type: "სრული რემონტი",
    },
    {
      id: 1,
      before:
        "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=800&h=600&fit=crop",
      after:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      location: "საბურთალო, თბილისი",
      size: "120 მ²",
      type: "კოსმეტიკური რემონტი",
    },
    {
      id: 2,
      before:
        "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop",
      after:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      location: "ისანი, თბილისი",
      size: "95 მ²",
      type: "სრული რემონტი",
    },
    {
      id: 3,
      before:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop",
      after:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      location: "დიღომი, თბილისი",
      size: "110 მ²",
      type: "ოფისის რემონტი",
    },
  ];

  const handleSliderChange = (id: number, value: number): void => {
    setActiveSliders((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <section className="py-16 md:py-24 bg-[#F9FAFB]" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2933] mb-4">
            ჩვენი ნამუშევრები
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            დააკვირდით რეალურ შედეგებს — ყველა პროექტი დასრულებულია
            ხელშეკრულების მიხედვით
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden border-2 border-slate-200 hover:border-[#2563EB] hover:shadow-xl transition-all duration-300"
            >
              {/* Before/After Slider */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                {/* After Image (Background) */}
                <div className="absolute inset-0">
                  <Image
                    src={project.after}
                    alt="შემდეგ"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 right-4 bg-[#2563EB] text-white px-3 py-1.5 rounded-lg text-xs font-bold z-10 shadow-lg">
                    შემდეგ
                  </div>
                </div>

                {/* Before Image (Overlay with clip) */}
                <div
                  className="absolute inset-0 z-[5]"
                  style={{
                    clipPath: `inset(0 ${
                      100 - activeSliders[project.id]
                    }% 0 0)`,
                  }}
                >
                  <Image
                    src={project.before}
                    alt="მანამდე"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#1F2933] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg">
                    მანამდე
                  </div>
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-lg"
                  style={{ left: `${activeSliders[project.id]}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-slate-200">
                    <div className="flex gap-0.5">
                      <div className="w-0.5 h-5 bg-[#2563EB] rounded-full"></div>
                      <div className="w-0.5 h-5 bg-[#2563EB] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Invisible Slider Input */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={activeSliders[project.id]}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleSliderChange(project.id, parseInt(e.target.value))
                  }
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  aria-label={`შედარების სლაიდერი ${project.type}`}
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2933] mb-2">
                      {project.type}
                    </h3>
                    <p className="text-slate-600 flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-[#2563EB]" />
                      <span>{project.location}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#2563EB]">
                      {project.size}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-slate-100">
                  <p className="text-xs text-slate-500 mb-3">
                    გადაიტარეთ სლაიდერი განსხვავების სანახავად
                  </p>
                  <Link
                    href="#contact"
                    className="block w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-center shadow-sm hover:shadow-md"
                  >
                    მსგავსი პროექტის შეკვეთა
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 md:p-12 border-2 border-slate-200 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1F2933] mb-4">
            გსურთ ასეთი შედეგი თქვენი ბინისთვის?
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            მიიღეთ უფასო კონსულტაცია და დეტალური შეთავაზება 24 საათში
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+995555123456"
              className="inline-flex items-center justify-center gap-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>დარეკვა</span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-[#1F2933] text-[#1F2933] hover:text-white font-bold py-4 px-8 rounded-lg border-2 border-[#1F2933] transition-colors duration-200 text-lg"
            >
              <span>უფასო კონსულტაცია</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
