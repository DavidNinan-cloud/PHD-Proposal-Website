import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Research Abstract', href: '#abstract' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Causal Engine', href: '#engine' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav id="navbar" className={`fixed top-0 w-full  ${isScrolled? 'bg-black' : 'bg-white/90'} backdrop-blur-md border-b border-slate-200 z-50 font-Nunito`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          
          {/* Project Identity */}
          <div className="flex flex-col">
            <img rel="icon" type="image/svg+xml" href="/LOGO-SVG.png" />
            <a href="/" className={`text-2xl font-black  ${isScrolled? ' text-white' : 'text-[#003399]'}  tracking-tighter leading-none`}>
              TRACE<span className="text-[#FFCC00]">-</span>EU
            </a>
            <span className={`text-[10px] uppercase tracking-[0.2em] ${isScrolled?'text-[#FFCC00]':'text-slate-500'} font-bold`}>
              Trade Resilience & Causal Evaluation
            </span>
          </div>

          {/* Desktop Menu - McKinsey Style */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-widest ${isScrolled?'text-white':'text-slate-700'} hover:text-[#003399] font-bold transition-all relative group`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFCC00] transition-all group-hover:w-full"></span>
              </a>
            ))}
            {/* <button className="bg-[#003399] text-white px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-blue-800 transition shadow-lg shadow-blue-900/20">
              Data Portal
            </button> */}
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[#003399] text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Framer Motion */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col space-y-4 py-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-800 text-lg font-semibold px-4 border-l-4 border-transparent hover:border-[#FFCC00] hover:bg-slate-50 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}