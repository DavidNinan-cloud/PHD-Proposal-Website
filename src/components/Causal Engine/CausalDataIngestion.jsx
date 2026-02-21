import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaRss, FaShieldAlt, FaMicrochip } from 'react-icons/fa';

export default function CausalDataIngestion() {
  // Data streams defined in the Research Proposal 
  const textSignals = [
    { name: "EU Commission Newsroom", category: "Official Policy", freq: "Real-time" },
    { name: "DG TRADE Announcements", category: "Regulatory", freq: "Daily" },
    { name: "GDELT Global Feed", category: "Geopolitical News", freq: "High-Freq" }
  ];

  const physicalBaselines = [
    { name: "Eurostat Comext", metric: "Import/Export Vol", lag: "60 Days" },
    { name: "AIS Port Latency", metric: "Logistics Delay", lag: "Real-time" },
    { name: "HICP Price Indices", metric: "Commodity Pricing", lag: "Weekly" }
  ];

  return (
    <div id='layer1' className="bg-[#fcfcfc] min-h-screen pt-12 pb-12 font-Nunito">
      <div className="max-w-[1440px] mx-auto px-8">
        
        {/* Layer Header */}
        <header className="mb-12 border-l-4 border-[#003399] pl-6">
          <h2 className="text-[#003399] text-xs font-black uppercase tracking-[0.3em] mb-2">Layer 1: Ingestion & Boundary</h2>
          <h1 className="text-4xl font-black text-slate-800 tracking-tighter uppercase">The Input Layer</h1>
          <p className="text-slate-500 mt-2 font-medium max-w-3xl">
            Establishing the data-ingestion boundary through the lens of **Strategic Autonomy**, 
            mapping official EU rhetoric against ground-truth physical trade outcomes.
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Column 1: Linguistic Signal Layer (Textual)  */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 mb-2 px-2">
              <FaRss className="text-[#FFCC00]" />
              <h3 className="font-bold text-slate-800 uppercase tracking-widest text-xs">Textual Signal Layer</h3>
            </div>
            {textSignals.map((stream, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-black text-[#003399] text-sm uppercase tracking-tight">{stream.name}</h4>
                  <span className="text-[9px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-bold uppercase">{stream.freq}</span>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Category: {stream.category}</p>
              </motion.div>
            ))}
          </div>

          {/* Column 2: Physical Outcome Layer (Ground Truth)  */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 mb-2 px-2">
              <FaDatabase className="text-[#003399]" />
              <h3 className="font-bold text-slate-800 uppercase tracking-widest text-xs">Present Baselines</h3>
            </div>
            {physicalBaselines.map((base, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-slate-700 text-sm tracking-tight">{base.name}</h4>
                  <div className={`h-2 w-2 rounded-full ${base.lag.includes('60') ? 'bg-amber-400' : 'bg-emerald-400'}`}></div>
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase text-slate-400">
                  <span>Reporting Lag: {base.lag}</span>
                  <span className="text-[#003399]">{base.metric}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 3: The Gating Mechanism (Noise Filter)  */}
          <div className="lg:col-span-4">
            <div className="bg-[#0f172a] rounded-3xl p-8 text-white shadow-2xl h-full border-t-4 border-[#FFCC00] relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <FaShieldAlt className="text-[#FFCC00]" />
                  <h3 className="font-bold uppercase tracking-[0.2em] text-xs">Topic-Aware Gating</h3>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <p className="text-[10px] font-mono text-emerald-400 mb-2 uppercase font-bold tracking-widest">Active Ontology</p>
                    <p className="text-sm font-bold text-blue-100">EU Critical Raw Materials Act</p>
                    <p className="text-[10px] text-slate-400 mt-1 italic">Filtering for: Lithium, Semiconductors, Energy </p>
                  </div>

                  <div className="p-4 bg-black/40 rounded-xl font-mono text-[10px] space-y-2 text-blue-300">
                    <p className="opacity-40">>> SCANNING INBOUND TEXT STREAM...</p>
                    <p className="text-white font-bold">>> MATCH DETECTED: [Russian_Gas_Transit]</p>
                    <p className="text-emerald-400">>> STATUS: PASSED TO JTS ENGINE</p>
                    <div className="h-1 w-full bg-slate-800 rounded-full mt-4">
                      <motion.div 
                        animate={{ width: ["0%", "100%", "0%"] }} 
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="h-full bg-[#FFCC00]" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
                <FaMicrochip size={240} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}