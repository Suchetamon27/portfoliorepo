import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Chatbot from "./components/Chatbot";
import FloatingSocials from "./components/FloatingSocials";
import ThemePicker from "./components/ThemePicker";
import Loader from "./components/Loader";

import CustomCursor from "./effects/CustomCursor";
import ParticlesBG from "./effects/ParticlesBG";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  if (loading) return <Loader />;

  return (
    <div className="relative overflow-hidden">
      <ParticlesBG />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Chatbot />
      <FloatingSocials />
      <ThemePicker />
    </div>
  );
}
  

