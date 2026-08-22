import Image from "next/image";
import Contact from "./components/Contact";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import QuickServices from "./components/QuickServices";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";
import Works from "./components/Works";

export default function Home() {
  return (
 <div className="min-h-screen bg-black">   <Navbar/>
      <Hero />
      <QuickServices />
      <Works />
      <WhyUs/>
      <HowItWorks />
      {/* <Testimonials /> */}
      <Contact/>
      <Footer/>
    <FloatingActions/>
    </div>
  );
}
