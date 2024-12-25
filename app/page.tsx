'use client'
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Strip from "./components/Strip";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <Navbar/>
      <Hero/>
      <Strip/>
      <Features/>
      <Pricing/>
      <Footer/>
    </div>
  );
}
