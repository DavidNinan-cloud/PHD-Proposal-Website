import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaEnvelope, FaGithub, FaLinkedin, FaDatabase } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 font-Nunito">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Mission */}
          <div className="md:col-span-1">
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-black text-[#003399] tracking-tighter leading-none">
                TRACE<span className="text-[#FFCC00]">-</span>EU
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mt-1">
                Trade Resilience And Causal Evaluation 
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              A Joint Topic-Stance framework for mapping causal risk propagation within European Union trade networks. 
              Developing leading indicators for EU Strategic Autonomy.
            </p>
            <div className="flex gap-4 text-slate-400">
              <a href="https://github.com/davidninan-cloud" className="hover:text-[#003399] transition-colors"><FaGithub size={18} /></a>
              <a href="#" className="hover:text-[#003399] transition-colors"><FaLinkedin size={18} /></a>
              <a href="mailto:david.ninan@ucdconnect.ie" className="hover:text-[#003399] transition-colors"><FaEnvelope size={18} /></a>
            </div>
          </div>

          {/* Research Domains */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Operational Domains</h4>
            <ul className="space-y-3 text-xs font-bold text-slate-600">
              <li><a href="#ingestion" className="hover:text-[#003399] transition-colors">Data Ingestion Layer</a></li>
              <li><a href="#jts" className="hover:text-[#003399] transition-colors">JTS Engine (Layer 2)</a></li>
              <li><a href="#causal" className="hover:text-[#003399] transition-colors">Causal Discovery (Layer 3)</a></li>
              <li><a href="#nowcasting" className="hover:text-[#003399] transition-colors">Predictive Nowcasting</a></li>
            </ul>
          </div>

          {/* Institutional Affiliation */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Institution</h4>
            <div className="flex items-start gap-3">
              <FaGraduationCap className="text-[#003399] mt-1" size={20} />
              <div className="text-xs font-bold text-slate-600 leading-tight">
                <p>School of Computer Science</p>
                {/* <p className="text-slate-400 font-medium">University College Dublin</p> */}
                <p className="text-slate-400 font-medium mt-1 italic">Dublin, Ireland</p>
              </div>
            </div>
          </div>

          {/* System Status / Technical */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">System Health</h4>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-mono text-slate-500 uppercase">JTS Encoder</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-mono text-slate-500 uppercase">Causal PCMCI</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <div className="pt-2 border-t border-slate-200 mt-2">
                <p className="text-[9px] font-mono text-slate-400">Environment: Vite + React + Tailwind</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            © 2026 David Ninan • TRACE-EU Research Project
          </p>
          <div className="flex gap-8 text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
            <span>UCD PhD Timeline: 2026-2031 </span>
            <span className="text-[#FFCC00]">Impact: EU Strategic Autonomy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;