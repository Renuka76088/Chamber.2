import React from 'react';
import { motion } from 'framer-motion';

import { Globe2, Landmark, Clock3 } from 'lucide-react';
import { 
  User, GraduationCap, Building2, Briefcase, 
  ShieldCheck, Heart, MapPin, Languages, UserCircle2 
} from 'lucide-react';


const AboutUs = () => {
  return (
    <>
    <section className="relative min-h-[90vh] bg-white overflow-hidden text-center flex flex-col items-center justify-center pt-24 px-6">
      
      {/* Background Layer 1: Textured Silk */}
      <div className="absolute inset-0 z-0 opacity-15">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 C25,30 75,70 100,100" stroke="#1D4ED8" strokeWidth="0.1" fill="none"/>
          <path d="M0,20 C25,50 75,90 100,120" stroke="#1D4ED8" strokeWidth="0.1" fill="none"/>
        </svg>
      </div>

      {/* Background Layer 2: Abstract Blue Bubbles */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />

      {/* Content Wrapper (Z-indexed) */}
      <div className="max-w-7xl mx-auto z-10 flex flex-col items-center">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-5 py-2 mb-6 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold tracking-[0.2em] uppercase border border-blue-100"
        >
          Leadership Profile • Industrial Excellence
        </motion.div>

        {/* Cinematic Animated Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-7xl md:text-8xl font-black leading-none text-slate-900 tracking-tighter">
            Weaving a Legacy of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 italic font-serif">
              Global Impact
            </span>
          </h1>
        </motion.div>

        {/* Subtle Moving Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-500 mt-10 text-xl max-w-3xl leading-relaxed"
        >
          Since 2001, the Parekh Textile Chamber of Commerce has fostered innovation, seamless trade, and sustainable growth across India's vibrant textile ecosystem.
        </motion.p>

        {/* Integrated Quick-Fact Bar (Creative Element) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-16 w-full flex flex-col items-center gap-6"
        >
          <div className="flex gap-4 p-2 bg-slate-50 rounded-full border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm text-sm font-bold text-slate-700">
               <Globe2 className="text-blue-500" size={18} /> Global Export Support
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm text-sm font-bold text-slate-700">
               <Landmark className="text-blue-500" size={18} /> BENGALURU, KA Headquartered
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm text-sm font-bold text-slate-700">
               <Clock3 className="text-blue-500" size={18} /> Established 2001
            </div>
          </div>
          
          <div className="relative w-full max-w-xl">
             <input type="text" placeholder="Search our services, policies, or board members..." className="w-full pl-14 pr-6 py-4 rounded-full bg-slate-50 border border-slate-100 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition" />
             <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400">🔍</div>
          </div>
        </motion.div>
      </div>

      {/* Cinematic Fabric-like Wave Graphic Element */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#F8FAFC" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,101.3C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
    
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 border-b border-slate-100 pb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-32 h-32 bg-blue-600 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl shadow-blue-200"
          >
            <User size={60} />
          </motion.div>
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Professional <span className="text-blue-600">Profile</span></h1>
            <p className="text-slate-400 font-medium tracking-widest uppercase text-xs">Identity • Excellence • Service</p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Personal Information (Large Card) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 space-y-8 relative overflow-hidden group"
          >
            <div className="flex items-center gap-4 text-blue-600 mb-2">
              <UserCircle2 size={28} />
              <h3 className="font-bold text-xl text-slate-900">Personal Details</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-8 relative z-10">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Birth Place</p>
                <p className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <MapPin size={16} className="text-blue-500" />BENGALURU, KA
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mother Tongue</p>
                <p className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <Languages size={16} className="text-blue-500" /> BENGALURU, KAi
                </p>
              </div>
              <div className="col-span-2 space-y-1 border-t border-slate-200 pt-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Family Background</p>
                <p className="text-lg font-bold text-slate-800">Father: Retd. From Dist. & Session Court, BENGALURU, KA</p>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
               <UserCircle2 size={200} />
            </div>
          </motion.div>

          {/* 2. Professional Ethics */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-blue-600 p-10 rounded-[3rem] text-white space-y-6 flex flex-col justify-center shadow-xl shadow-blue-100"
          >
            <ShieldCheck size={40} className="text-blue-200" />
            <h3 className="text-2xl font-bold">Professional Ethics</h3>
            <p className="text-blue-100 text-sm leading-relaxed opacity-80">
              Upholding the highest standards of integrity, transparency, and industrial discipline in every endeavor.
            </p>
          </motion.div>

          {/* 3. Educational Background */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-[3rem] border-2 border-slate-100 flex flex-col items-center text-center space-y-4"
          >
            <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center">
              <GraduationCap size={28} />
            </div>
            <h4 className="font-bold text-slate-900">Education</h4>
            <p className="text-sm text-slate-500">Academic foundations built on excellence and continuous learning.</p>
          </motion.div>

          {/* 4. Experience Cards (Govt & Corporate) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-[3rem] border-2 border-slate-100 flex gap-6 items-center"
          >
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
              <Building2 size={28} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 leading-none">Govt. Experience</h4>
              <p className="text-xs text-slate-400 mt-2">Public sector service & administrative roles.</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-[3rem] border-2 border-slate-100 flex gap-6 items-center"
          >
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
              <Briefcase size={28} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 leading-none">Corporate Experience</h4>
              <p className="text-xs text-slate-400 mt-2">Strategic business & industrial leadership.</p>
            </div>
          </motion.div>

          {/* 5. Social Services (Full Width Bottom) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-3 bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3 text-red-400">
                <Heart size={24} fill="currentColor" />
                <h3 className="text-2xl font-bold text-white">Social Services</h3>
              </div>
              <p className="text-slate-400 max-w-2xl leading-relaxed">
                Dedicated to community welfare and social upliftment through active participation in regional development projects.
              </p>
            </div>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all relative z-10 shrink-0">
              Impact Gallery
            </button>
            {/* Background Texture */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
    </>
  );
};

export default AboutUs;