import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {FaMicrochip, FaNetworkWired, FaInfoCircle, FaProjectDiagram, FaLink, FaHistory, FaFilter } from 'react-icons/fa';


const CausalEngineHeader = () => {
  const [isSimulating, setIsSimulating] = useState(false);


  return (
    <>

    <div id='simulation' className="bg-[#f8fafc] font-Nunito">
      <div className="max-w-[1440px] mx-auto">
        
        {/* 1. Engine Control Header */}
        <header className="bg-white pt-12  flex justify-between items-start pb-10 px-8">
          <div className="border-l-4 border-[#003399] pl-6">
            <h1 className="text-4xl font-black text-[#003399] tracking-tighter uppercase">Causal Discovery Engine</h1>
            {/* <p className="text-slate-500 mt-1 font-medium">Mapping the Temporal Lead-Lag of Geopolitical Rhetoric on European Trade Nodes.</p> */}
          </div>
          
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition">
              <FaHistory /> Historical Baselines
            </button>
            <button 
              onClick={() => setIsSimulating(!isSimulating)}
              className="bg-[#003399] text-white px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest shadow-lg shadow-blue-900/20 hover:bg-blue-800 transition"
            >
              {isSimulating ? "Interrupting PCMCI..." : "Run Causal Discovery"}
            </button>
          </div>
        </header>       
      </div>
    </div>

    </>
  );
};

export default CausalEngineHeader;