import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaBrain, FaProjectDiagram, FaChartLine, FaArrowRight } from 'react-icons/fa';

const EngineFlow = () => {
  const [activeStep, setActiveStep] = useState(0);

  const flowSteps = [
    {
      title: "1. Data Ingestion Layer",
      icon: <FaDatabase />,
      desc: "Ingests unstructured text (EC Newsroom, GDELT) and physical baselines (Eurostat, AIS).",
      details: ["Topic-Aware Gating", "Focused Dataset Boundary", "Real-time Stream Sync"],
      color: "border-blue-400"
    },
    {
      title: "2. The JTS Engine",
      icon: <FaBrain />,
      desc: "Multi-task Transformer (RoBERTa/FinBERT) jointly classifying topics and stance intensity.",
      details: ["Shared Latent Representation", "Contextual Stance Anchoring", "Noise Decoupling"],
      color: "border-[#FFCC00]"
    },
    {
      title: "3. Causal Discovery",
      icon: <FaProjectDiagram />,
      desc: "PCMCI algorithms identify temporal lead-lag relationships and causal pathways.",
      details: ["Directed Acyclic Graphs (DAGs)", "Structural Shocks", "Policy Rhetoric Shocks"],
      color: "border-emerald-400"
    },
    {
      title: "4. Output Nowcasting",
      icon: <FaChartLine />,
      desc: "Quantifies ΔV (Volume) and ΔP (Price) to bridge the 60-day reporting gap.",
      details: ["Strategic Alert Levels", "Counterfactual Analysis", "Ground-Truth Validation"],
      color: "border-[#003399]"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-12 font-Nunito">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-[#003399] text-xl font-black uppercase tracking-[0.3em] mb-4">Core Methodology - Beyond Sentiment</h2>
        <h1 className="text-5xl font-black text-slate-800 tracking-tighter mb-6">Computational Pipeline Architecture</h1>
        <p className="max-w-2xl mx-auto text-slate-500 font-medium">
          A four-layer unified framework for mapping causal risk propagation in EU trade networks.
        </p>
      </div>

      {/* Interactive Flow Map */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
        
        {flowSteps.map((step, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            onClick={() => setActiveStep(i)}
            className={`cursor-pointer z-10 bg-white p-6 rounded-2xl border-2 transition-all duration-500 ${
              activeStep === i ? `${step.color} shadow-2xl scale-105` : 'border-transparent shadow-sm grayscale opacity-60'
            }`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl mb-4 ${
              activeStep === i ? 'bg-[#003399] text-white' : 'bg-slate-100 text-slate-400'
            }`}>
              {step.icon}
            </div>
            <h3 className="font-black text-sm text-slate-800 uppercase tracking-tighter mb-2">{step.title}</h3>
            <p className="text-[10px] text-slate-500 leading-tight font-bold">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Dynamic Detail Viewer */}
      <div className="max-w-4xl mx-auto mt-16 px-6">
        <motion.div 
          key={activeStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[#003399] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden"
        >
          {/* McKinsey Aesthetic Background Icon */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-10 text-[180px]">
            {flowSteps[activeStep].icon}
          </div>

          <div className="relative z-10">
            <h4 className="text-[#FFCC00] font-bold uppercase tracking-[0.2em] text-xs mb-4">Detailed View: Layer {activeStep + 1}</h4>
            <h3 className="text-3xl font-black mb-6">{flowSteps[activeStep].title.split('. ')[1]}</h3>
            
            <ul className="space-y-4 mb-8">
              {flowSteps[activeStep].details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                  <FaArrowRight className="text-[#FFCC00] text-xs" /> {detail}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/10 flex items-center gap-4">
              <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Research Alignment:</span>
              <span className="text-[10px] font-mono bg-white/10 px-3 py-1 rounded">
                RQ{activeStep === 0 ? '1' : activeStep === 1 ? '1' : activeStep === 2 ? '2/3' : '4'} Validation 
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EngineFlow;