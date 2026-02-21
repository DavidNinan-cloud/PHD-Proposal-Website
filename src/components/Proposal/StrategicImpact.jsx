import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaMicrochip, FaCogs, FaIndustry, FaShieldAlt } from 'react-icons/fa';

const StrategicImpact = () => {
  const impacts = [
    {
      category: "Academic Contribution",
      title: "Computational Macroeconomics",
      icon: <FaUniversity />,
      description: "Synthesizing Joint Topic-Stance (JTS) modeling with Structural Causal Discovery to move field methodologies from correlative to causal benchmarks.",
      points: ["Novel JTS architecture", "Text-as-a-state-variable trigger", "Empirical benchmark for EU trade networks"],
      source: "Section 5.1"
    },
    {
      category: "Technical & Methodological",
      title: "Real-Time Nowcasting Pipeline",
      icon: <FaMicrochip />,
      description: "Delivering a production-ready pipeline that utilizes high-frequency text signals to provide a real-time proxy for trade flow volatility.",
      points: ["Topic-Aware Gating Mechanism", "Mitigation of 60-day reporting lag", "Scalable NLP for global news torrents"],
      source: "Section 5.2"
    },
    {
      category: "Institutional & Policy",
      title: "EU Strategic Autonomy",
      icon: <FaShieldAlt />,
      description: "Quantitative tools for the European Commission and DG TRADE to identify lead-lag relationships in supply chain disruptions.",
      points: ["Early-warning for raw material shortages", "Inflation indicators for Central Banks", "Quantified 'What-if' policy impact"],
      source: "Section 5.3"
    },
    {
      category: "Industrial Application",
      title: "Dynamic Risk Assessment",
      icon: <FaIndustry />,
      description: "Providing EU-based manufacturing and logistics firms with tools to identify causal risks to critical interests like Steel, Oil, and Food.",
      points: ["Supply chain hedging strategies", "Robust inventory management", "Scenario-based risk alerts"],
      source: "Section 5.4"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 font-Nunito">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 border-l-8 border-[#FFCC00] pl-8">
          <h2 className="text-[#003399] text-sm font-black uppercase tracking-[0.4em] mb-4">Impact Assessment</h2>
          <h1 className="text-5xl font-black text-slate-800 tracking-tighter mb-6">Quantifying the Value of Causal Intelligence</h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            TRACE-EU transitions trade analysis from black-box prediction to interpretable, causal forecasting, supporting the EU’s Strategic Autonomy agenda through technical and empirical innovation.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {impacts.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-2xl hover:bg-white transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-white rounded-2xl text-[#003399] shadow-sm group-hover:bg-[#003399] group-hover:text-white transition-colors duration-500">
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.source}</span>
              </div>

              <h3 className="text-[11px] font-black text-[#FFCC00] uppercase tracking-[0.2em] mb-2">{item.category}</h3>
              <h4 className="text-2xl font-black text-slate-800 mb-4 tracking-tight">{item.title}</h4>
              <p className="text-slate-600 mb-8 leading-relaxed font-medium">{item.description}</p>

              <ul className="space-y-3">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#003399]" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout: The Causal Standard */}
        <div className="mt-16 bg-[#003399] rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-4 tracking-tighter">Setting a New Standard in Financial Text Analysis</h3>
            <p className="max-w-2xl mx-auto opacity-80 font-medium italic">
              "By moving beyond black-box prediction toward causal, interpretable forecasting, TRACE-EU provides a novel empirical benchmark for geopolitical risk propagation."
            </p>
          </div>
          {/* Abstract background detail */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <FaCogs size={400} className="absolute -top-20 -right-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicImpact;