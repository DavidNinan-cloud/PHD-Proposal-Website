import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {FaMicrochip, FaNetworkWired, FaInfoCircle, FaProjectDiagram, FaLink, FaHistory, FaFilter, FaBolt } from 'react-icons/fa';


const TemporalEngine = () => {
  const [isSimulating, setIsSimulating] = useState(false);

  // Causal Pathways based on Research Workflows 1 & 2
  const activePathways = [
    { 
      id: "structural-01", 
      type: "Structural", 
      trigger: "Suez Canal Blockage", 
      outcome: "Mediterranean Port Delay",
      lag: "T + 4 Days",
      strength: 0.92
    },
    { 
      id: "policy-01", 
      type: "Policy Rhetoric", 
      trigger: "US-China Tariff Escalation", 
      outcome: "EU Inventory Hoarding",
      lag: "T + 14 Days",
      strength: 0.68
    }
  ];

    
    const [activeWorkflow, setActiveWorkflow] = useState('Workflow 1'); // Structural vs Policy 

  const workflows = {
    'Workflow 1': {
      title: "Structural Propagation",
      description: "Captures immediate physical shocks to trade infrastructure.",
      nodes: ["Suez Closure", "Mediterranean Port Delay", "EU Commodity Price Delta"],
      mechanism: "PCMCI (ParCorr/Mutual Information) "
    },
    'Workflow 2': {
      title: "Policy & Rhetorical Shocks",
      description: "Models lead-lag relationship of geopolitical rhetoric on inventory behaviors.",
      nodes: ["Tariff Rhetoric", "Inventory Hoarding", "Trade Volume Drop"],
      mechanism: "PCMCI + Directed Acyclic Graphs (DAGs) "
    }
  };

  return (
    <>

    <div id='layer3' className="bg-[#f8fafc] min-h-screen pb-12 font-Nunito">
      <div className="max-w-[1440px] mx-auto">
                
        {/* Header Section */}
        <div className="pt-6 flex justify-between items-end mb-10 border-b border-slate-200 pb-8 px-8">
          <div>
            <h2 className="text-[#003399] text-xs font-black uppercase tracking-[0.3em] mb-2">Layer 3: Analysis & Discovery</h2>
            <h1 className="text-4xl font-black text-slate-800 tracking-tighter">Temporal Causal Engine</h1>
          </div>
          <div className="flex gap-4">
            <div className="text-right">
              <p className="text-[10px] uppercase font-bold text-slate-400">Backbone</p>
              <p className="text-sm font-bold text-[#003399]">PCMCI Algorithm </p>
            </div>
            <div className="text-right border-l border-slate-200 pl-4">
              <p className="text-[10px] uppercase font-bold text-slate-400">Validation</p>
              <p className="text-sm font-bold text-[#003399]">Causal Precision </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 px-8">
          
          {/* Left: Workflow Selection & Controls */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-6">
              <h3 className="text-sm font-bold text-slate-800 uppercase mb-4 flex items-center gap-2">
                <FaNetworkWired className="text-[#003399]" /> Causal Workflows 
              </h3>
              
              <div className="space-y-3">
                {Object.keys(workflows).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveWorkflow(key)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      activeWorkflow === key 
                      ? 'border-[#003399] bg-blue-50/50 ring-1 ring-[#003399]' 
                      : 'border-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <p className="text-xs font-black text-[#003399] uppercase mb-1">{key}</p>
                    <p className="text-sm font-bold text-slate-700">{workflows[key].title}</p>
                  </button>
                ))}
              </div>

              <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex items-start gap-3">
                  <FaInfoCircle className="text-slate-400 mt-1" />
                  <p className="text-xs text-slate-500 leading-relaxed italic">
                    {workflows[activeWorkflow].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Causal Insight Metrics */}
            <div className="bg-white rounded-xl p-6 text-black shadow-2xl">
              <h4 className="text-[10px] font-bold text-[#FFCC00] uppercase tracking-widest mb-4">Propagation Metrics</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-[9px] opacity-60 uppercase font-bold">Estimated Lead-Lag </p>
                  <p className="text-xl font-mono font-bold">{activeWorkflow === 'Workflow 1' ? 'T + 4 Days' : 'T + 14 Days'}</p>
                </div>
                <div>
                  <p className="text-[9px] opacity-60 uppercase font-bold">Causal Strength (β) </p>
                  <p className="text-xl font-mono font-bold">0.84 Stable</p>
                </div>
              </div>
            </div>

            <button 
              // onClick={() => setInferenceActive(!inferenceActive)}
              className="w-full py-4 bg-[#003399] text-white rounded-xl font-bold uppercase tracking-widest shadow-xl shadow-blue-900/20 hover:bg-blue-800 transition flex items-center justify-center gap-3"
            >
              <FaInfoCircle 
                // className={inferenceActive ? "text-[#FFCC00]" : ""} 
                />
                  Results
            </button>
          </div>

          {/* Right: The Interactive Causal DAG Visualizer */}
          <div className="lg:col-span-8">
            <div className="bg-[#0f172a] rounded-2xl shadow-2xl h-[600px] relative overflow-hidden flex items-center justify-center border-t-4 border-[#FFCC00]">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
              
              <AnimatePresence mode='wait'>
                <motion.div 
                  key={activeWorkflow}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="z-10 flex flex-col items-center"
                >
                  <FaProjectDiagram size={64} className="text-blue-400/30 mb-8" />
                  
                  {/* Mock DAG Nodes */}
                  <div className="px-4 flex items-center gap-6 relative">
                    {workflows[activeWorkflow].nodes.map((node, i) => (
                      <React.Fragment key={i}>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-center min-w-[110px] shadow-2xl">
                          <p className="text-[10px] font-bold text-[#FFCC00] uppercase tracking-widest mb-2">Node {i+1}</p>
                          <p className="text-sm font-bold text-white">{node}</p>
                        </div>
                        {i < workflows[activeWorkflow].nodes.length - 1 && (
                          <div className="w-4 h-0.5 bg-gradient-to-r from-[#FFCC00] to-transparent animate-pulse" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <p className="mt-12 text-blue-300 font-mono text-[11px] uppercase tracking-[0.2em] animate-pulse">
                    Convergence: {workflows[activeWorkflow].mechanism}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Technical Overlay */}
              <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <FaMicrochip className="text-emerald-400" />
                  <span className="text-[10px] font-bold text-white uppercase">Causal Graph State</span>
                </div>
                <p className="text-[9px] font-mono text-slate-400">
                  DAG Constraint: EU Trade Ontology  <br/>
                  Stability Index: {activeWorkflow === 'Workflow 1' ? 'High' : 'Moderate'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
    <div className="bg-[#fcfcfc] min-h-screen pt-12 pb-12 font-Nunito">
      <div className="max-w-[1440px] mx-auto px-8">

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* 2. Central Visualization: The DAG Interface */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden relative min-h-[550px]">
              <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center font-mono text-[10px] font-bold text-slate-400">
                <span>MECHANISM: PCMCI (Tigramite-Layer) </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span> STABLE PATHWAYS DETECTED
                </span>
              </div>
              
              {/* This represents the D3.js interactive graph container */}
              <div className="relative h-full w-full flex items-center justify-center bg-[#0f172a] overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]"></div>
                
                {isSimulating ? (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="text-center z-10"
                  >
                    <div className="w-16 h-16 border-4 border-t-[#FFCC00] border-blue-900/30 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="font-mono text-blue-300 text-sm animate-pulse">Converging on Causal Priors...</p>
                  </motion.div>
                ) : (
                  <div className="z-10 text-center px-12">
                    <FaProjectDiagram size={48} className="text-blue-900/40 mx-auto mb-6" />
                    <h3 className="text-white text-xl font-bold mb-2 tracking-tight">Causal Map: EU Strategic Raw Materials</h3>
                    <p className="text-slate-400 text-sm max-w-md mx-auto italic">
                      Intervening on text-derived features to quantify "What-if" outcomes for industrial output.
                    </p>
                  </div>
                )}
                
                {/* Decorative Node Overlay */}
                <div className="absolute top-10 left-10 p-3 bg-white/5 backdrop-blur-md rounded border border-white/10 text-[9px] font-mono text-blue-200">
                  NODE_A: Stance_Intensity (I)  <br/>
                  NODE_B: Trade_Volume_Delta (X) 
                </div>
              </div>
            </div>
          </div>

          {/* 3. Sidebar: Propagation Pathways & Strengths */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Pathway Breakdown */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
                <FaLink className="text-[#FFCC00]" />
                <h3 className="font-bold text-slate-800 uppercase tracking-widest text-xs">Identified Pathways</h3>
              </div>
              
              <div className="space-y-6">
                {activePathways.map((path) => (
                  <div key={path.id} className="relative pl-4 border-l-2 border-slate-100">
                    <p className="text-[10px] font-black text-[#003399] uppercase mb-1">{path.type} Workflow </p>
                    <h4 className="text-sm font-bold text-slate-800 mb-2 leading-snug">
                      {path.trigger} <span className="text-slate-400 mx-1">→</span> {path.outcome}
                    </h4>
                    <div className="flex items-center justify-between text-[10px] font-mono font-bold">
                      <span className="text-slate-400 uppercase">Est. Lead-Lag:</span>
                      <span className="text-amber-600">{path.lag}</span>
                    </div>
                    <div className="mt-2 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#FFCC00] h-full" 
                        style={{ width: `${path.strength * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Causal Precision Stats */}
            <div className="bg-[#003399] rounded-xl p-6 text-white shadow-xl relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-[10px] font-bold text-[#FFCC00] uppercase tracking-widest mb-4">Discovery Metrics </h3>
                 <div className="grid grid-cols-2 gap-4">
                   <div>
                     <p className="text-[9px] opacity-60 uppercase font-bold">Causal Precision</p>
                     <p className="text-xl font-mono font-bold">0.84</p>
                   </div>
                   <div>
                     <p className="text-[9px] opacity-60 uppercase font-bold">F-Statistics</p>
                     <p className="text-xl font-mono font-bold">24.2</p>
                   </div>
                 </div>
                 <div className="mt-4 pt-4 border-t border-white/10 text-[10px] italic opacity-70">
                   Stable directional pathways identified post-Ukraine conflict window.
                 </div>
               </div>
               <div className="absolute -bottom-4 -right-4 text-white/5">
                 <FaFilter size={100} />
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TemporalEngine;