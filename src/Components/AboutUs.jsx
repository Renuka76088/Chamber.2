import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, BookOpen, Building2, Briefcase, 
  ShieldCheck, Heart, MapPin, MessageCircle, Info 
} from 'lucide-react';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-24 bg-[#F8FAFC] min-h-screen px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Profile Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase"
          >
            Leadership Profile
          </motion.div>
          <h2 className="text-5xl font-black text-slate-900 tracking-tight">
            Professional <span className="text-blue-600">Blueprint</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          
          {/* 1. Personal Details - The Big Card */}
          <motion.div variants={itemVariants} className="md:col-span-8 bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
            <div className="w-48 h-48 rounded-3xl bg-slate-100 overflow-hidden flex-shrink-0 border-4 border-white shadow-lg">
               <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <User className="text-blue-600" size={24} /> Personal Information
              </h3>
              <div className="grid grid-cols-2 gap-y-4 text-sm">
                <div>
                  <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">Birth Place</p>
                  <p className="font-semibold text-slate-700 flex items-center gap-1"><MapPin size={14} /> BENGALURU, KA</p>
                </div>
                <div>
                  <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">Mother Tongue</p>
                  <p className="font-semibold text-slate-700 flex items-center gap-1"><MessageCircle size={14} /> BENGALURU, KAi</p>
                </div>
                <div className="col-span-2 pt-2 border-t border-slate-50">
                  <p className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">Family Background</p>
                  <p className="font-medium text-slate-600 italic">BENGALURU, KA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Educational Background */}
          <motion.div variants={itemVariants} className="md:col-span-4 bg-blue-600 p-8 rounded-[2rem] text-white shadow-xl shadow-blue-100 relative overflow-hidden">
            <div className="relative z-10">
              <BookOpen className="mb-6 opacity-80" size={32} />
              <h3 className="text-xl font-bold mb-4">Educational Background</h3>
              <ul className="space-y-3 text-sm opacity-90">
                <li className="flex gap-2"><span>•</span> Bachelor of Commerce</li>
                <li className="flex gap-2"><span>•</span> Master of Business Admin</li>
                <li className="flex gap-2"><span>•</span> Textile Tech Certification</li>
              </ul>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          </motion.div>

          {/* 3. Govt Experience */}
          <motion.div variants={itemVariants} className="md:col-span-4 bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:border-blue-200 transition-all group">
            <Building2 className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Govt. Experience</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Strategic advisory roles in textile regulatory boards and industrial policy framework development.
            </p>
          </motion.div>

          {/* 4. Corporate Experience */}
          <motion.div variants={itemVariants} className="md:col-span-4 bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl">
            <Briefcase className="text-blue-400 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3">Corporate Experience</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading high-scale textile manufacturing units and export management for global markets.
            </p>
          </motion.div>

          {/* 5. Professional Ethics & Social Services */}
          <motion.div variants={itemVariants} className="md:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-[1.5rem] border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600"><ShieldCheck /></div>
              <div>
                <h4 className="font-bold text-slate-900">Professional Ethics</h4>
                <p className="text-xs text-slate-400 italic">Integrity & Excellence</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-[1.5rem] border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-rose-50 rounded-xl text-rose-600"><Heart /></div>
              <div>
                <h4 className="font-bold text-slate-900">Social Services</h4>
                <p className="text-xs text-slate-400 italic">Community Welfare</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;