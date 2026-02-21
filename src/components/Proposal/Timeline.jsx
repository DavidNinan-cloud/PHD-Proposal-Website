import React from 'react';
import { motion } from 'framer-motion';
import { FaFlagCheckered, FaMicrochip, FaBookOpen, FaGraduationCap } from 'react-icons/fa';

const Timeline = () => {
  // Data derived from Fig 8: PHD Timeline and Section 8.0 
  const phases = [
    {
      title: "Phase 1: Foundation & Stage 1 Transfer",
      period: "Q4 2026 - Q4 2027",
      icon: <FaBookOpen />,
      color: "border-blue-400",
      tasks: ["Literature Review & Gap Analysis", "Refining RQs & Theoretical Framework", "Initial Data Exploration"],
      milestone: "Stage 1 Transfer Assessment / Viva",
      align: "left"
    },
    {
      title: "Phase 2: System Engineering & Core Modeling",
      period: "Q4 2027 - Q2 2029",
      icon: <FaMicrochip />,
      color: "border-[#FFCC00]",
      tasks: ["Building Data Ingestion Pipeline", "Developing JTS Model Architecture (RQ1)", "Initial Causal Discovery Experiments (RQ2)"],
      milestone: "Conference Paper Submission 1",
      align: "right"
    },
    {
      title: "Phase 3: Advanced Causal Analysis & Validation",
      period: "Q2 2028 - Q2 2030",
      icon: <FaFlagCheckered />,
      color: "border-emerald-400",
      tasks: ["Refining Temporal Causal Engine (RQ3)", "Developing Counterfactual Simulation (RQ4)", "Evaluation & Validation (Nowcasting)"],
      milestone: "Journal Paper Submission",
      align: "left"
    },
    {
      title: "Phase 4: Synthesis, Writing & Defence",
      period: "Q2 2030 - Q1 2031",
      icon: <FaGraduationCap />,
      color: "border-[#003399]",
      tasks: ["Final Experiments & Longitudinal Analysis", "Thesis Writing (Sequential Chapters)", "Final Thesis Review"],
      milestone: "Thesis Submission & Viva Voce Defence",
      align: "right"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20 font-Nunito">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-[#003399] text-xs font-black uppercase tracking-[0.3em] mb-4">Strategic Roadmap</h2>
          <h1 className="text-5xl font-black text-slate-800 tracking-tighter mb-6">UCD PhD Timeline: EU-Pulse</h1>
          <p className="max-w-2xl mx-auto text-slate-500 font-medium">
            A 4-year technical execution plan for mapping causal trade resilience across European networks.
          </p>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-200 hidden lg:block"></div>

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between w-full ${
                  phase.align === 'left' ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Connector Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#003399] rounded-full z-10 hidden lg:block"></div>

                {/* Glass Card */}
                <div className="w-full lg:w-[45%] bg-white p-8 rounded-3xl shadow-xl border-t-4 hover:shadow-2xl transition-all group" style={{ borderColor: phase.color.includes('[#') ? phase.color.split('[')[1].split(']')[0] : 'currentColor' }}>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-2xl bg-slate-50 text-slate-400 group-hover:text-[#003399] transition-colors`}>
                      {phase.icon}
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">
                      {phase.period}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-black text-slate-800 mb-4">{phase.title}</h3>
                  
                  <ul className="space-y-3 mb-8">
                    {phase.tasks.map((task, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFCC00] mt-2 shrink-0"></span>
                        {task}
                      </li>
                    ))}
                  </ul>

                  {/* Milestone Badge */}
                  <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
                    <FaFlagCheckered className="text-[#FFCC00]" />
                    <p className="text-[11px] font-bold text-[#003399] uppercase tracking-tighter">
                      Milestone: {phase.milestone}
                    </p>
                  </div>
                </div>

                {/* Empty space for the other side of the timeline */}
                <div className="hidden lg:block lg:w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Institutional Attribution */}
        <div className="mt-20 text-center">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">
            {/* University College Dublin  */}
            {/* • School of Computer Science */}
            PHD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;