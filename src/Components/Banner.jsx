import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react'; // 'npm install lucide-react' zaroor karein

const Banner = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden text-center flex flex-col items-center justify-center pt-24 px-6">
      {/* Background Animated Texture - This could be a subtly moving gradient */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          {/* <path d="M0,0 C25,30 75,70 100,100" stroke="#0F172A" strokeWidth="0.1" fill="none"/>
          <path d="M0,20 C25,50 75,90 100,120" stroke="#0F172A" strokeWidth="0.1" fill="none"/> */}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto z-10 flex flex-col items-center">
        {/* Animated Headline with staggered entry */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-4 block">
           "A Collective Vision for Global Excellence."
          </span>
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-slate-900 tracking-tighter">
            PAREKH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
              CHAMBER OF TEXTILE
            </span>
          </h1>
        </motion.div>

        {/* Moving Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-500 mt-8 text-xl max-w-2xl leading-relaxed"
        >
          Connecting spinners, weavers, garmenters, and brands to foster sustainable innovation, policy advocacy, and seamless trade across the global textile supply chain.
        </motion.p>

        {/* CTA Buttons and Search */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 w-full flex flex-col items-center gap-6"
        >
          <div className="flex gap-4">
            <button className="bg-blue-700 text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-800 transition-all flex items-center gap-2">
              Explore Our Services
            </button>
            <button className="border-2 border-slate-200 text-slate-700 px-10 py-4 rounded-full font-bold hover:border-blue-700 hover:text-blue-700 transition-all">
              Apply for Membership
            </button>
          </div>
          
         
        </motion.div>
      </div>

      {/* Modern Wave Graphic Element */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#F1F5F9" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,101.3C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Banner;