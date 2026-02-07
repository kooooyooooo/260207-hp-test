"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import News from "@/components/News";
import About from "@/components/About";
import Selection from "@/components/Selection";
import Team from "@/components/Team";
import Results from "@/components/Results";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <SectionDivider />
        <News />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Selection />
        <SectionDivider />
        <Team />
        <SectionDivider />
        <Results />
        <SectionDivider />
        <Sponsors />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
