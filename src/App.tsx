// App.js
import React from "react";

import './App.css'
import Header from "./components/Header";
import Features from "./components/Features";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SocialProof from "./components/SocialProof";
import CaseStudies from "./components/CaseStudies";
import RatingsGrid from "./components/RatingsGrid";

function App() {
  return (
    <div className="bg-[#FEFBFA] font-haptik">
      <Header />
      <HeroSection />
      <SocialProof />
      <Features />
      <CaseStudies />
      <RatingsGrid />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
