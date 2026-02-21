import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaChartLine, FaCogs } from 'react-icons/fa';
// Ensure bg-1.jpg is in your src/assets folder
import bgImage from '../../assets/Europe.jpg';

const IntroPage = () => {
  return (
    <div id='intro' className="relative min-h-screen pt-24 w-full flex items-center overflow-hidden font-Nunito">
      
      {/* 1. Background Image with Research-Grade Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Deep Sovereign Blue gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001A4D] via-[#001A4D]/85 to-[#001A4D]/40" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* 2. Primary Narrative - Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-[#FFCC00]/10 border border-[#FFCC00]/30 text-[#FFCC00] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 backdrop-blur-md">
            <FaShieldAlt className="animate-pulse" /> EU Strategic Autonomy & Resilience
          </div>
          
          <h1 className="text-6xl xl:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8">
            TRACE<span className="text-[#FFCC00]">-</span>EU <br /> 
            <span className="text-3xl xl:text-4xl font-light text-slate-300 tracking-normal block mt-4 italic">
              Quantifying Causal Risk in Global Networks
            </span>
          </h1>

          <p className="text-lg xl:text-xl text-slate-300 max-w-xl leading-relaxed mb-10 font-medium">
            A Joint Topic-Stance framework designed to identify "Trigger-States" documented in unstructured text long before manifesting in physical trade data.
          </p>

          <div className="flex flex-wrap gap-6">
            <button className="bg-[#FFCC00] hover:bg-yellow-500 text-[#003399] px-10 py-4 font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl shadow-yellow-500/20 active:scale-95">
              Explore Causal Engine
            </button>
            <button className="group flex items-center gap-3 text-white font-black text-xs uppercase tracking-[0.2em] border-b-2 border-transparent hover:border-[#FFCC00] transition-all py-2">
              View Research Proposal <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>

          </div>
        </motion.div>


      </div>


    </div>
  );
};

export default IntroPage;