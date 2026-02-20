import Navbar from './components/Navbar'

// function App() {
//   return (
//     <div 
//       // className='bg-red-600 p-12'
//       >
//       <div>
//         <Navbar/>
//       </div>

//       <div id='maintenance-Mode' className='relative min-h-screen bg-cover bg-center px-12 w-full flex justify-center ' 
//       style={{
//         background: 'rgb(64,29,243)',
//         background: 'linear-gradient(135deg, rgba(64,29,243,1) 0%, rgba(159,63,220,1) 85%)'
//       }}>
//         <div className='text-center h-fit w-fit my-auto text-white font-Playfair font-semibold leading-snug capitalize'>
//             <p className='sm:text-xl lg:text-5xl '>Coming Soon</p>
//             <p className='lg:text-2xl py-12'>Our Website is under construction</p>
//             <p className='lg:text-xl '>Checkout Our &nbsp;   
//                   <a id='component-id' href="https://www.linkedin.com/company/biyn-enterprises/" target="_blank" className='underline hover:no-underline'> Linkedin Page</a>
//             </p>
            
//         </div>
        
//       </div>
//     </div>
//   )
// }

import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* Metrics Ribbon */}
      <div className="bg-[#003399] text-white py-4 px-8 flex justify-around border-b border-[#FFCC00]">
        <div className="text-center">
          <p className="text-[#FFCC00] text-sm font-bold uppercase tracking-widest">Model Status</p>
          <p className="text-xl font-mono">Active: JTS-v1.0</p>
        </div>
        <div className="text-center">
          <p className="text-[#FFCC00] text-sm font-bold uppercase tracking-widest">Focus Area</p>
          <p className="text-xl font-mono">EU Strategic Autonomy</p>
        </div>
        <div className="text-center">
          <p className="text-[#FFCC00] text-sm font-bold uppercase tracking-widest">Data Stream</p>
          <p className="text-xl font-mono">Unstructured Textual Signals</p>
        </div>
      </div>

      {/* Main Hero Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-[#003399] leading-tight mb-6">
            TRACE-EU: <br/> 
            <span className="text-slate-700 text-3xl font-light italic">
              Trade Resilience And Causal Evaluation
            </span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 border-l-4 border-[#FFCC00] pl-6">
            Moving beyond black-box sentiment scoring. We utilize Temporal Causality to quantify how geopolitical 
            "Trigger-States" propagate risk across European trade corridors.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#003399] text-white px-8 py-3 font-bold hover:bg-blue-800 transition">
              View Causal Engine
            </button>
            <button className="border-2 border-[#003399] text-[#003399] px-8 py-3 font-bold hover:bg-slate-100">
              Technical Whitepaper
            </button>
          </div>
        </motion.div>

        {/* Placeholder for Interactive DAG (Directed Acyclic Graph) */}
        <div className="bg-white p-8 rounded-xl shadow-2xl border border-slate-200 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4">
              <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
           </div>
           <h3 className="font-bold text-[#003399] mb-4 uppercase tracking-tighter">Live Causal Discovery Simulation</h3>
           <div className="h-64 bg-slate-50 flex items-center justify-center border-2 border-dashed border-slate-200">
             {/* This is where your D3.js Causal Graph will live */}
             <p className="text-slate-400 font-mono text-sm">[Interactive Causal DAG Interface]</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default App
