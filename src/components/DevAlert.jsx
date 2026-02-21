import { motion } from 'framer-motion';

export default function DevAlert() {
  return (
    <>
    
    <motion.div
      // Bouncy animation properties
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 20
        }
      }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-6 right-6 z-[60] flex items-center space-x-3 bg-white/80 backdrop-blur-md border border-[#FFCC00] px-5 py-3 shadow-2xl rounded-full font-Nunito"
    >
      {/* Pulse indicator */}
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFCC00] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FFCC00]"></span>
      </span>
      
      <p className="text-xs font-bold uppercase tracking-widest text-slate-800">
        Project Phase: <span className="text-[#003399]">Active Development</span>
      </p>
    </motion.div>
    

    </>
    
  );
}