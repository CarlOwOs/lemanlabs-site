import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import TrustedBy from "@/components/TrustedBy"; // Hidden for now
import ValueProp from "@/components/ValueProp";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      {/* <TrustedBy /> */}
      <ValueProp />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
