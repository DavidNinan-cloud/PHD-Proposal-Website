import React from 'react'
import { motion } from 'framer-motion';


export default function SampleStartEngine() {
  // Mock data for the terminal to simulate real-time JTS inference
  const terminalLines = [
    "> Initializing JTS-Model v1.0.4...",
    "> Fetching unstructured text: Reuters Global Trade Stream",
    "> Topic Detected: [Lithium Supply Chain]",
    "> Stance Intensity: -0.84 (High Volatility Risk)",
    "> Calculating Causal Propagation Path...",
    "> Potential impact: 12.4% variance in EU Battery Value Chain",
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-12 pb-12 font-Nunito">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Top Intelligence Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mb-12 border border-slate-200 rounded-lg overflow-hidden shadow-sm">
          {[
            { label: "Global Risk Index", val: "Moderate", color: "text-amber-500" },
            { label: "Active Nodes", val: "1,240", color: "text-[#003399]" },
            { label: "Inference Latency", val: "42ms", color: "text-emerald-600" },
            { label: "Target Corridor", val: "EU-ASEAN", color: "text-[#003399]" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 border-r border-slate-200 last:border-0">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-1">{stat.label}</p>
              <p className={`text-xl font-mono font-bold ${stat.color}`}>{stat.val}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Column: Authoritative Copy (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-[#003399] text-white text-[10px] px-3 py-1 font-bold tracking-widest uppercase mb-6">
                Strategic Autonomy Framework
              </div>
              <h1 className="text-6xl font-black text-[#003399] tracking-tighter leading-[0.9] mb-6">
                Quantifying <br />
                <span className="text-slate-800">Trade Fragility.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                The TRACE-EU platform maps causal risk propagation across European Value Chains. 
                By combining <span className="text-[#003399] font-bold">Joint Topic-Stance (JTS) modeling</span> with 
                Causal Discovery, we transform raw geopolitical signals into interpretable resilience metrics.
              </p>
            </motion.div>

            <div className="flex items-center gap-6 pt-4">
              <button className="bg-[#003399] hover:bg-blue-800 text-white px-10 py-4 font-bold text-sm tracking-widest uppercase transition-all shadow-xl shadow-blue-900/20">
                Launch Causal Engine
              </button>
              <button className="group flex items-center gap-2 text-[#003399] font-bold text-sm tracking-widest uppercase">
                Technical Document{/* Methodology Document  */}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Terminal Facade */}
            <div className="bg-[#0f172a] rounded-lg p-6 font-mono text-xs text-blue-400 shadow-2xl border-t-4 border-[#FFCC00]">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-amber-500/20" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/20" />
              </div>
              {terminalLines.map((line, i) => (
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: i * 0.4 }} 
                  key={i} className="mb-1"
                >
                  {line}
                </motion.p>
              ))}
              <span className="inline-block w-2 h-4 bg-[#FFCC00] animate-pulse align-middle ml-1" />
            </div>
          </div>

          {/* Right Column: Visual Facade (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-2xl relative">
                {/* Abstract Visual Representing a DAG */}
                <div className="bg-slate-50 rounded-xl aspect-square flex flex-col items-center justify-center relative overflow-hidden">
                  
                  {/* Glassmorphism Card Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-64 h-64 border-2 border-dashed border-[#003399]/20 rounded-full animate-spin-slow" />
                  </div>

                  <div className="z-10 bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white shadow-xl max-w-xs text-center">
                    <p className="text-[10px] font-bold text-[#FFCC00] uppercase tracking-widest mb-2">Primary Node</p>
                    <h4 className="text-lg font-bold text-[#003399]">Energy Dependency</h4>
                    <p className="text-xs text-slate-500 mt-2 italic font-serif">
                      "Exogenous shocks in natural gas pricing show a 0.72 correlation with manufacturing stance shifts."
                    </p>
                  </div>

                  {/* Aesthetic Background Accents */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFCC00] to-transparent" />
                </div>
                
                {/* Metadata Badge */}
                <div className="absolute -bottom-4 -right-4 bg-[#003399] text-white p-4 rounded-lg shadow-xl">
                  <p className="text-[9px] uppercase tracking-tighter opacity-70">Causal Accuracy</p>
                  <p className="text-lg font-bold font-mono">94.2%</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}