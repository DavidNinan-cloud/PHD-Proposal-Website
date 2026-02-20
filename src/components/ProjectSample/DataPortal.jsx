import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGlobeEurope, FaProjectDiagram, FaTerminal, FaChartLine } from 'react-icons/fa';

const DataPortal = () => {
  const [activeTab, setActiveTab] = useState('nowcast');

  // Metadata based on Research Questions & Methodology
  const systemStatus = [
    { label: "JTS Encoder", status: "Active", detail: "RoBERTa-Backbone" }, // [cite: 103]
    { label: "Causal Mechanism", status: "Ready", detail: "PCMCI Algorithm" }, // [cite: 84]
    { label: "Ontology Filter", status: "Live", detail: "EU CRM Act List" } // [cite: 101]
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-12 pb-24 font-Nunito">
      {/* 1. Header Section: Authority and Scope */}
      <header className="max-w-[1440px] mx-auto px-8 mb-8 border-b border-slate-200 pb-8 flex justify-between items-end">
        <div>
          <h2 className="text-[#003399] text-xs font-black uppercase tracking-[0.3em] mb-2">Internal Research Dashboard</h2>
          <h1 className="text-4xl font-black text-slate-800 tracking-tighter">EU Trade Resilience Nowcaster</h1>
          <p className="text-slate-500 mt-2 font-medium">Real-time quantification of geopolitical "Trigger-States" on European Value Chains.</p>
        </div>
        
        <div className="flex gap-4">
          {systemStatus.map((s, i) => (
            <div key={i} className="text-right border-l border-slate-200 pl-4">
              <p className="text-[10px] uppercase font-bold text-slate-400">{s.label}</p>
              <p className="text-sm font-bold text-[#003399]">{s.detail}</p>
            </div>
          ))}
        </div>
      </header>

      {/* 2. Main Portal Grid */}
      <main className="max-w-[1440px] mx-auto px-8 grid lg:grid-cols-12 gap-6">
        
        {/* Left Sidebar: Navigation & Controls */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Analytics Modules</h3>
            <nav className="space-y-1">
              {[
                { id: 'nowcast', label: 'Trade Flow Nowcasting', icon: <FaChartLine /> },
                { id: 'causal', label: 'Causal Discovery (DAGs)', icon: <FaProjectDiagram /> },
                { id: 'counter', label: 'Counterfactual Scenarios', icon: <FaGlobeEurope /> },
                { id: 'terminal', label: 'Linguistic Signals (JTS)', icon: <FaTerminal /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-lg transition-all ${
                    activeTab === tab.id ? 'bg-[#003399] text-white shadow-lg shadow-blue-900/20' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Focused Commodity Monitor [cite: 101] */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-[10px] font-bold text-[#FFCC00] uppercase tracking-[0.2em] mb-4">Critical Nodes Filter</h3>
            <div className="space-y-3">
              {['Lithium', 'Semiconductors', 'Natural Gas', 'Cobalt'].map((node) => (
                <div key={node} className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-700">{node}</span>
                  <span className="text-emerald-500">Normal</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center/Right: Interactive Visualization Area */}
        <div className="lg:col-span-9 space-y-6">
          
          {/* Main Display Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden min-h-[600px] relative">
            <div className="bg-slate-50 border-b border-slate-200 p-4 flex justify-between items-center">
              <span className="text-xs font-mono font-bold text-slate-500">Visualization Engine: D3.js + PCMCI Layer</span>
              <div className="flex gap-2">
                <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse"></span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Live Stream Active</span>
              </div>
            </div>

            {/* Facade Content based on Active Tab */}
            <div className="p-8 h-full flex flex-col items-center justify-center text-center">
              {activeTab === 'nowcast' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
                  <h4 className="text-2xl font-black text-[#003399] mb-4">Trade Volume Delta (ΔV)</h4>
                  <div className="h-64 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200 mb-6 flex items-center justify-center">
                     <p className="text-slate-400 font-mono text-sm">[Interactive Nowcasting Time-Series Chart Area]</p>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <p className="text-[10px] text-slate-400 font-bold uppercase">Predicted Volume Drop</p>
                      <p className="text-2xl font-mono font-bold text-red-500">-12.4%</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <p className="text-[10px] text-slate-400 font-bold uppercase">Confidence Level</p>
                      <p className="text-2xl font-mono font-bold text-[#003399]">94.2%</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <p className="text-[10px] text-slate-400 font-bold uppercase">Reporting Gap (T+60)</p>
                      <p className="text-2xl font-mono font-bold text-amber-500">Mitigated</p>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'causal' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
                  <h4 className="text-2xl font-black text-[#003399] mb-4">Directed Acyclic Graph (DAG)</h4>
                  <p className="text-slate-500 mb-8 max-w-lg mx-auto italic text-sm">
                    Quantifying causal propagation from Geopolitical Stance Shifts to European Value Chain disruption[cite: 7].
                  </p>
                  <div className="h-[400px] w-full bg-[#0f172a] rounded-xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    <p className="text-blue-400 font-mono text-sm z-10 animate-pulse">Running PCMCI Discovery... Initializing Nodes</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Bottom Terminal Insight (JTS Inference Stream) [cite: 19, 106] */}
          <div className="bg-[#0f172a] rounded-xl p-5 font-mono text-xs shadow-2xl overflow-hidden border-l-4 border-[#FFCC00]">
            <div className="flex justify-between items-center mb-3">
              <span className="text-slate-500 uppercase font-bold tracking-widest text-[9px]">Joint Topic-Stance Inference Engine</span>
              <span className="text-[#FFCC00] text-[9px] font-bold">SOURCE: EC NEWSROOM + GDELT</span>
            </div>
            <div className="space-y-1">
              <p className="text-blue-300">[{new Date().toLocaleTimeString()}] INFERENCE: Topic: [EnergyLogistics_Node_04]</p>
              <p className="text-emerald-400">[{new Date().toLocaleTimeString()}] STANCE: [Disruptive_Magnitude: 0.82]</p>
              <p className="text-slate-400">[{new Date().toLocaleTimeString()}] CAUSAL_PATH: Rhetoric → Inventory_Hoarding → Volume_Drop [cite: 113]</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default DataPortal;