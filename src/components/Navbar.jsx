import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  // Hierarchical structure based on your instructions [cite: 1, 7-23]
  const navLinks = [
    {
      name: 'Research',
      href: '#proposal',
      subLinks: [
        { name: 'Research Intro', href: '#intro' }, // Component: Intro 
        { name: 'Methodology', href: '#engine-flow' }, // Component: EngineFlow 
        { name: 'Causal Engine (Prop)', href: '#causal-engine-prop' }, // Component: Proposal/CausalEngine 
        { name: 'Timeline', href: '#timeline' }, // Component: Timeline 
        { name: 'Strategic Impact', href: '#strategic-impact' } // Component: StrategicImpact 
      ]
    },
    {
      name: 'Causal Engine',
      href: '#engine-simulation',
      subLinks: [
        { name: 'Causal Engine', href: '#simulation' }, // Component: CausalEngineMainPage 
        { name: 'Layer 1: Ingestion', href: '#layer1' }, // Component: CausalDataIngestion 
        { name: 'Layer 2: Core Engine', href: '#layer2' }, // Component: JTSEngine 
        { name: 'Layer 3: Analysis', href: '#layer3' }, // Component: TemporalEngine 
        { name: 'Layer 4: Nowcasting', href: '#layer4' } // Component: OutputLayer 
      ]
    },
    {
      name: 'Data Portal',
      href: '#data-portal',
      subLinks: [ 
        { name: 'Data Portal', href: '#portal-main' }, // Component: DataPortal
        { name: 'Ingestion Layer', href: '#data-ingestion' } // Component: DataIngestion
      ]
    },
    { name: 'Publications', href: '#publications', subLinks: [] }
    // { name: 'Contact', href: '#contact', subLinks: [] }
  ];

  return (
    <nav id="navbar" className={`fixed top-0 w-full ${isScrolled ? 'bg-black' : 'bg-white/90'} backdrop-blur-md border-b border-slate-200 z-50 font-Nunito`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          
          {/* Project Identity */}
          <div className="flex flex-col">
            <a href="/" className={`text-2xl font-black ${isScrolled ? 'text-white' : 'text-[#003399]'} tracking-tighter leading-none`}>
              TRACE<span className="text-[#FFCC00]">-</span>EU
            </a>
            <span className={`text-[10px] uppercase tracking-[0.2em] ${isScrolled ? 'text-[#FFCC00]' : 'text-slate-500'} font-bold`}>
              Trade Resilience & Causal Evaluation
            </span>
          </div>

          {/* Desktop Menu - McKinsey Style with Hover Collapsibles */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className={`flex items-center text-sm uppercase tracking-widest ${isScrolled ? 'text-white' : 'text-slate-700'} hover:text-[#003399] font-bold transition-all`}
                >
                  {link.name}
                  {link.subLinks.length > 0 && <FaChevronDown className="ml-2 text-[10px]" />}
                </a>

                {/* Collapsible Dropdown */}
                <AnimatePresence>
                  {activeDropdown === link.name && link.subLinks.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-64 bg-white shadow-xl border border-slate-100 py-4 z-50"
                    >
                      {link.subLinks.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block px-6 py-2 text-xs uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:text-[#003399] transition-colors"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFCC00] transition-all group-hover:w-full"></span>
              </div>
            ))}

            <button className="bg-[#003399] text-white px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-blue-800 transition shadow-lg shadow-blue-900/20">
              Contact
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[#003399] text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        
      </div>
      
      {/* Mobile Menu logic remains similar but can be nested as needed */}

{/* Mobile Menu with Framer Motion */}
<AnimatePresence>
  {isOpen && (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="lg:hidden bg-white border-t border-slate-100 overflow-hidden font-Nunito"
    >
      <div className="flex flex-col py-4">
        {navLinks.map((link) => {
          const hasSubLinks = link.subLinks && link.subLinks.length > 0;
          const isDropdownOpen = activeDropdown === link.name;

          return (
            <div key={link.name} className="flex flex-col">
              {/* Main Link / Toggle Button */}
              <div className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors">
                <a
                  href={link.href}
                  onClick={() => !hasSubLinks && setIsOpen(false)}
                  className="text-slate-800 text-lg font-bold uppercase tracking-wider"
                >
                  {link.name}
                </a>
                
                {hasSubLinks && (
                  <button 
                    onClick={() => setActiveDropdown(isDropdownOpen ? null : link.name)}
                    className="p-2 text-[#003399]"
                  >
                    {isDropdownOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                  </button>
                )}
              </div>

              {/* Nested Sub-links */}
              <AnimatePresence>
                {hasSubLinks && isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-slate-50 overflow-hidden"
                  >
                    <div className="flex flex-col pl-10 pr-6 py-2 border-l-4 border-[#FFCC00] ml-6 my-2">
                      {link.subLinks.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="py-3 text-sm font-semibold text-slate-600 hover:text-[#003399] transition-colors"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
        
        {/* Data Portal Quick Action (Optional) */}
        <div className="px-6 py-6">
          <button className="w-full bg-[#003399] text-white py-4 text-sm font-bold uppercase tracking-widest shadow-lg">
            Contact
          </button>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>


    </nav>
  );
}