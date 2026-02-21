import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaRss, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const DataIngestion = () => {
  // Data streams as defined in the Research Proposal
  const textStreams = [
    { name: "EU Commission Newsroom", type: "Official", freq: "Real-time", status: "Connected" },
    { name: "DG TRADE Announcements", type: "Policy", freq: "Daily", status: "Connected" },
    { name: "GDELT Geopolitical Feed", type: "Global News", freq: "High-Freq", status: "Filtering" }
  ];

  const physicalBaselines = [
    { name: "Eurostat Comext", source: "Import/Export", lag: "60 Days", role: "Ground Truth" },
    { name: "AIS Port Latency", source: "Rotterdam/Hamburg", lag: "Real-time", role: "Physical Proxy" },
    { name: "HICP Commodity Indices", source: "Energy/Grains", lag: "Weekly", role: "Price Baseline" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-12 font-Nunito">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header: Defining the Ingestion Boundary */}
        <div className="mb-12 border-l-4 border-[#003399] pl-6">
          <h1 className="text-4xl font-black text-[#003399] tracking-tighter">Data Ingestion Layer</h1>
          <p className="text-slate-600 mt-2 max-w-3xl">
            To prevent "Boiling the Ocean," the TRACE-EU framework bounds ingestion by the <span className='font-bold'>Topic-Aware Gating</span> ontology—focusing exclusively on high-impact causal pathways for strategic autonomy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Column 1: Unstructured Text Streams (The Signal) */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <FaRss className="text-[#FFCC00]" />
              <h3 className="font-bold text-slate-800 uppercase tracking-widest text-sm">Textual Signal Layer</h3>
            </div>
            {textStreams.map((stream, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-[#003399]">{stream.name}</h4>
                  <span className="text-[9px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-bold uppercase">{stream.type}</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                  <span>Frequency: {stream.freq}</span>
                  <span className="text-emerald-500 flex items-center gap-1">
                    <FaCheckCircle size={10} /> {stream.status}
                  </span>
                </div>
              </motion.div>
            ))}
            <button className="w-full py-3 border-2 border-dashed border-slate-300 text-slate-400 text-xs font-bold rounded-xl hover:bg-slate-100 transition">
              + Configure New Signal Node
            </button>
          </div>

          {/* Column 2: Physical Outcomes (The Ground Truth) */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <FaDatabase className="text-[#003399]" />
              <h3 className="font-bold text-slate-800 uppercase tracking-widest text-sm">Present Baselines</h3>
            </div>
            {physicalBaselines.map((base, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-slate-700">{base.name}</h4>
                  <div className={`h-2 w-2 rounded-full ${base.lag.includes('60') ? 'bg-amber-400' : 'bg-emerald-400'}`}></div>
                </div>
                <p className="text-xs text-slate-500 mb-4 italic">Role: {base.role}</p>
                <div className="bg-slate-50 rounded-lg p-2 flex justify-between text-[10px] font-bold uppercase tracking-tighter text-slate-400">
                  <span>Reporting Lag:</span>
                  <span className={base.lag.includes('60') ? 'text-amber-600' : 'text-slate-600'}>{base.lag}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 3: Ontology & Gating (The Engineer's Lens) */}
          <div className="bg-[#0f172a] rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <FaDatabase size={80} />
            </div>
            <h3 className="text-[#FFCC00] font-bold uppercase tracking-widest text-xs mb-6">Topic-Aware Gating</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="border-l-2 border-slate-700 pl-4">
                <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Active Filter Ontology</p>
                <p className="text-sm font-mono text-blue-300 underline decoration-[#FFCC00]">EU_Critical_Materials_v2.json</p>
                <p className="text-sm font-mono text-blue-300 underline decoration-[#FFCC00]">EU_Energy_v3.json</p>
              
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <p className="text-xs font-mono text-emerald-400 mb-2 font-bold">Inbound Signal Processing:</p>
                <div className="text-[10px] font-mono space-y-1 text-slate-300">
                  <p className="opacity-50">... scanning feed: GDELT_3920</p>
                  <p className="text-white">MATCH: "Lithium Export Control"</p>
                  <p className="text-emerald-400">PASS: Gating logic verified.</p>
                  <p className="text-slate-500">... forwarding to JTS Engine</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-amber-900/20 border border-amber-900/50 rounded-lg">
                <FaExclamationTriangle className="text-amber-500 mt-1" />
                <div>
                  <p className="text-[10px] font-bold text-amber-500 uppercase">Noise Discarded</p>
                  <p className="text-[10px] text-slate-400 mt-1">1,402 signals discarded (Irrelevant to EU strategic commodities).</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DataIngestion;