import React from 'react'
import { SparklesCore } from '../Components/Landing/Sparkles'
import Hero from '../Components/Landing/Hero'
const LandingPage = () => {
  return (
    <main className="min-h-screen bg-[#0d1116] antialiased bg-grid-white/[0.02] relative overflow-hidden">
    {/* Ambient background with moving particles */}
    <div className="h-full w-full absolute inset-0 z-0">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </div>

    <div className="relative z-10">
      <Hero />
    </div>
  </main>
  )
}

export default LandingPage;
