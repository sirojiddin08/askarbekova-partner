import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"));
const Services = dynamic(() => import("@/components/Services"));
const WhyUs = dynamic(() => import("@/components/WhyUs"));
const Team = dynamic(() => import("@/components/Team"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Team />
      <FAQ />
      <Contact />
    </>
  );
}
