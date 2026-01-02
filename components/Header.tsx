"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const phoneNumber = "+995 555 123 456";
  const phoneNumberClean = "995555123456";
  const whatsappLink = `https://wa.me/${phoneNumberClean}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-[#1F2933] tracking-tight hover:text-[#2563EB] transition-colors"
            >
              Renova
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="#services"
                className="text-sm font-medium text-[#1F2933] hover:text-[#2563EB] transition-colors"
              >
                მომსახურებები
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium text-[#1F2933] hover:text-[#2563EB] transition-colors"
              >
                ჩვენი ნამუშევრები
              </Link>
              <Link
                href="#process"
                className="text-sm font-medium text-[#1F2933] hover:text-[#2563EB] transition-colors"
              >
                როგორ ვმუშაობთ
              </Link>
              <Link
                href="#reviews"
                className="text-sm font-medium text-[#1F2933] hover:text-[#2563EB] transition-colors"
              >
                მიმოხილვები
              </Link>
            </nav>

            {/* Phone + CTA (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone Number - Always Visible */}
              <Link
                href={`tel:${phoneNumberClean}`}
                className="flex items-center gap-2 text-[#1F2933] font-semibold hover:text-[#2563EB] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-base">{phoneNumber}</span>
              </Link>

              {/* CTA Button */}
              <Link
                href="#contact"
                className="px-6 py-2.5 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors shadow-sm"
              >
                უფასო კონსულტაცია
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center z-50 text-[#1F2933]"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          <Link
            href="#services"
            onClick={handleLinkClick}
            className="text-2xl font-semibold text-[#1F2933] hover:text-[#2563EB] transition-colors"
          >
            მომსახურებები
          </Link>
          <Link
            href="#projects"
            onClick={handleLinkClick}
            className="text-2xl font-semibold text-[#1F2933] hover:text-[#2563EB] transition-colors"
          >
            ჩვენი ნამუშევრები
          </Link>
          <Link
            href="#process"
            onClick={handleLinkClick}
            className="text-2xl font-semibold text-[#1F2933] hover:text-[#2563EB] transition-colors"
          >
            როგორ ვმუშაობთ
          </Link>
          <Link
            href="#reviews"
            onClick={handleLinkClick}
            className="text-2xl font-semibold text-[#1F2933] hover:text-[#2563EB] transition-colors"
          >
            მიმოხილვები
          </Link>

          {/* Mobile Phone */}
          <Link
            href={`tel:${phoneNumberClean}`}
            onClick={handleLinkClick}
            className="flex items-center gap-3 text-xl font-bold text-[#1F2933] mt-6 hover:text-[#2563EB] transition-colors"
          >
            <Phone className="w-6 h-6" />
            {phoneNumber}
          </Link>

          {/* Mobile CTA */}
          <Link
            href="#contact"
            onClick={handleLinkClick}
            className="w-full max-w-xs px-8 py-4 bg-[#2563EB] text-white text-lg font-bold rounded-lg hover:bg-[#1d4ed8] transition-colors text-center shadow-lg mt-4"
          >
            უფასო კონსულტაცია
          </Link>

          {/* WhatsApp Button */}
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="w-full max-w-xs px-8 py-4 border-2 border-[#1F2933] text-[#1F2933] text-lg font-bold rounded-lg hover:bg-[#1F2933] hover:text-white transition-colors text-center"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </>
  );
}
