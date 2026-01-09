// app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HowWeWork from "@/components/HowWeWork";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="bg-stone-900 py-3 text-center text-white text-xs py-3 px-4">
        ეს ვებ-გვერდი წარმოადგენს დემო ვერსიას - შესაძლებელია მისი სრულად
        მორგება თქვენს ბიზნესზე.
      </div>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Projects />
        <HowWeWork />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
