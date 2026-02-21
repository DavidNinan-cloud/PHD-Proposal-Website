import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCogs, FaProjectDiagram, FaBolt } from 'react-icons/fa';

export default function JTSEngine(){
  const [inferenceActive, setInferenceActive] = useState(false);

  // Core model attributes from Research Proposal Section 6.2
  const modelSpecs = [
    { label: "Backbone", value: "RoBERTa / FinBERT", detail: "Shared Latent Representation" },
    { label: "Architecture", value: "Multi-task Learning (MTL)", detail: "Joint Topic-Stance Heads" },
    { label: "Mechanism", value: "Topic-Aware Gating", detail: "Noise Decoupling" }
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-24 pb-12 font-Nunito">
      <div className="max-w-[1440px] mx-auto px-8">
        
        {/* Layer Header */}
        <header className="mb-12 border-l-4 border-[#003399] pl-6">
          <h2 className="text-[#003399] text-xs font-black uppercase tracking-[0.3em] mb-2">Layer 2: The Core Engine</h2>
          <h1 className="text-4xl font-black text-slate-800 tracking-tighter uppercase">Joint Topic-Stance (JTS) Engine</h1>
          <p className="text-slate-500 mt-2 font-medium max-w-3xl">
            A unified computational framework designed to decouple "Critical EU Trade Topics" from market noise, 
            anchoring stance intensity to context-specific commodities.
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left: Model Specifications & Status */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <FaCogs className="text-[#003399]" /> Encoder Specifications
              </h3>
              <div className="space-y-6">
                {modelSpecs.map((spec, i) => (
                  <div key={i} className="border-b border-slate-50 pb-4 last:border-0">
                    <p className="text-[10px] font-black text-[#003399] uppercase mb-1">{spec.label}</p>
                    <p className="text-sm font-bold text-slate-800">{spec.value}</p>
                    <p className="text-[10px] text-slate-400 italic">{spec.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setInferenceActive(!inferenceActive)}
              className="w-full py-4 bg-[#003399] text-white rounded-xl font-bold uppercase tracking-widest shadow-xl shadow-blue-900/20 hover:bg-blue-800 transition flex items-center justify-center gap-3"
            >
              <FaBolt className={inferenceActive ? "text-[#FFCC00]" : ""} />
              {inferenceActive ? "Inference Active" : "Initialize JTS Encoder"}
            </button>
          </div>

          {/* Right: The MTL Visualization Area */}
          <div className="lg:col-span-8">
            <div className="bg-[#0f172a] rounded-3xl p-8 text-white shadow-2xl h-full border-t-4 border-[#FFCC00] relative overflow-hidden">
              
              {/* Architecture Diagram Facade */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-center mb-12">
                  <div className="flex items-center gap-3">
                    <FaBrain className="text-blue-400" size={24} />
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Neural Propagation Map</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">BACKBONE: SHARED_ENCODER_V1</span>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center relative">
                  {/* Shared Encoder Node */}
                  <motion.div 
                    animate={inferenceActive ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-32 h-32 rounded-full border-2 border-blue-500/30 flex items-center justify-center bg-blue-900/20 mb-16 relative"
                  >
                    <div className="text-[10px] font-black uppercase text-blue-400">Shared <br/> Encoder</div>
                    
                    {/* Multi-task Heads: Topic and Stance  */}
                    <div className="absolute -bottom-12 -left-20 text-center">
                      <div className="h-10 w-px bg-gradient-to-t from-blue-400 to-transparent mx-auto mb-2" />
                      <div className="p-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md">
                        <p className="text-[9px] font-bold text-[#FFCC00] uppercase">Head A: Topic</p>
                        <p className="text-[10px] text-slate-300">Classifies HS-Codes</p>
                      </div>
                    </div>

                    <div className="absolute -bottom-12 -right-20 text-center">
                      <div className="h-10 w-px bg-gradient-to-t from-emerald-400 to-transparent mx-auto mb-2" />
                      <div className="p-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md">
                        <p className="text-[9px] font-bold text-emerald-400 uppercase">Head B: Stance</p>
                        <p className="text-[10px] text-slate-300">Determines Intensity</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Inference Log Stream */}
                  <div className="w-full bg-black/40 rounded-xl p-4 font-mono text-[10px] text-blue-300 border border-white/5">
                    {inferenceActive ? (
                      <div className="space-y-1">
                        <p className="opacity-60">>> PROCESSING INPUT: "Lithium supply restrictions likely amid conflict..."</p>
                        <p className="text-white">>> JOINT INFERENCE COMMENCED...</p>
                        <p className="text-[#FFCC00]">>> TOPIC MATCH: [Critical_Raw_Materials_Act_04]</p>
                        <p className="text-emerald-400">>> STANCE DETECTED: [Highly_Disruptive_Scalar: -0.88]</p>
                        <p className="text-blue-400">>> SIGNAL FORWARDED TO CAUSAL ENGINE (LAYER 3)</p>
                      </div>
                    ) : (
                      <p className="text-slate-500 text-center italic">Encoder Standby - Awaiting Signal Acquisition...</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Background Aesthetic */}
              <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                <FaProjectDiagram size={400} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}