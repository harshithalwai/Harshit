import React from "react";
import HeroText from "../Components/HeroText";
import ParticleBackground from "../Components/ParticleBackground";
import AnimatedLogo from "../Components/AnimatedLogo";
import SocialIcons from "../Components/SocialIcons";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen px-5 sm:px-10 lg:px-15">
        <HeroText />
      </section>
      <AnimatedLogo />
      
      {/* Enhanced background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl -z-10" />
       <SocialIcons />
    </div>
  );
};

export default Hero;