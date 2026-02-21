import React from 'react';
import { motion } from 'framer-motion';
import { FaChartBar, FaBell, FaSyncAlt, FaBalanceScale } from 'react-icons/fa';

const OutputLayer = () => {
  // Data derived from Section 6.0: Output Layer Results
  const predictiveMetrics = [
    { label: "Delta in Trade Volume (ΔV)", value: "-14.2%", trend: "down", status: "Critical" },
    { label: "Impact on Sector Price (ΔP)", value: "+8.4%", trend: "up", status: "Warning" },
    { label: "Strategic Alert Level", value: "Level 3", trend: "stable", status: "Elevated" }
  ];

  return (
    <div id='layer4' className="bg-[#fcfcfc] min-h-screen pt-12 pb-12 font-Nunito">
      <div className="max-w-[1440px] mx-auto px-8">
        
        {/* Layer Header */}
        <header className="mb-12 border-l-4 border-[#FFCC00] pl-6">
          <h2 className="text-[#003399] text-xs font-black uppercase tracking-[0.3em] mb-2">Layer 4: Predictive Nowcasting</h2>
          <h1 className="text-4xl font-black text-slate-800 tracking-tighter">Economic Impact & Validation</h1>
          <p className="text-slate-500 mt-2 font-medium max-w-2xl">
            Reconciling text-derived causal signals with physical trade outcomes to eliminate the 60-day Eurostat reporting lag.
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left: Predictive Results Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 flex items-center gap-2">
              <FaChartBar className="text-[#003399]" /> Nowcast Results 
            </h3>
            
            {predictiveMetrics.map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{metric.label}</p>
                  <span className={`px-2 py-1 rounded text-[10px] font-black uppercase ${
                    metric.status === 'Critical' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'
                  }`}>
                    {metric.status}
                  </span>
                </div>
                <div className="flex items-baseline gap-4">
                  <p className="text-4xl font-black text-[#003399] tracking-tighter">{metric.value}</p>
                  <div className={`text-sm font-bold ${metric.trend === 'down' ? 'text-red-500' : 'text-emerald-500'}`}>
                    {metric.trend === 'down' ? '▼ High Risk' : '▲ Volatility'}
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <FaBell className="text-[#FFCC00] animate-pulse" />
                <h4 className="text-xs font-bold uppercase tracking-widest">Early Warning System </h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Identification of lead-lag relationship between external stance shifts and internal supply chain disruptions.
              </p>
              <button className="w-full py-3 bg-[#003399] rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-blue-800 transition">
                Generate Policy Brief (DG TRADE)
              </button>
            </div>
          </div>

          {/* Right: The Feedback Loop / Validation Terminal */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden h-full flex flex-col">
              <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-slate-800 uppercase tracking-widest text-sm flex items-center gap-2">
                    <FaSyncAlt className="text-[#003399]" /> Feedback Loop: Ground Truth 
                  </h3>
                  <div className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500">
                    T + 80 Days Window 
                  </div>
                </div>
                
                {/* Accuracy Gauge Visual */}
                <div className="flex items-center justify-around py-6">
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Nowcast Accuracy (RMSE)</p>
                    <p className="text-5xl font-black text-[#003399]">94.2%</p>
                  </div>
                  <div className="h-16 w-px bg-slate-200"></div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Causal Stability</p>
                    <p className="text-5xl font-black text-[#FFCC00]">High</p>
                  </div>
                </div>
              </div>

              {/* Terminal Validation Stream */}
              <div className="flex-1 bg-[#0f172a] p-8 font-mono text-xs relative">
                <div className="flex items-center gap-2 mb-4">
                  <FaBalanceScale className="text-blue-400" />
                  <span className="text-blue-400 font-bold uppercase tracking-widest">Validation Terminal: Eurostat Reconciler</span>
                </div>
                
                <div className="space-y-2 text-slate-400">
                  <p className="text-emerald-400">[{new Date().toLocaleDateString()}] FETCHING GROUND TRUTH: COMEXT_DATA_STREAMS </p>
                  <p>... Comparing predicted ΔV (-14.2%) vs Actual (-13.9%)</p>
                  <p className="text-[#FFCC00]">... Residual Variance: 0.3% [Within Confidence Boundary]</p>
                  <p>... Model Calibration Verified for [Lithium_Corridor] </p>
                  <p className="opacity-50 mt-4">[{new Date().toLocaleDateString()}] ARCHIVING NOWCAST AS HISTORICAL BASELINE </p>
                  <div className="inline-block w-2 h-4 bg-[#FFCC00] animate-pulse align-middle ml-1" />
                </div>

                {/* Aesthetic Detail */}
                <div className="absolute bottom-4 right-8 opacity-5">
                  <FaSyncAlt size={120} className="text-white" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OutputLayer;