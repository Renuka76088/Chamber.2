import React from 'react';
import { 
  ShieldCheck, 
  Users2, 
  Workflow, 
  Landmark, 
  Star, 
  ArrowRight, 
  Zap,
  Award,
  CheckCircle
} from 'lucide-react';

const ChamberManagement = () => {
  const leaders = [
    {
      name: "HC Pareek",
      role: "Founder & Chief Mentor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      bio: "Textile industry veteran with 30+ years of expertise in global commerce."
    },
    {
      name: "Management Head",
      role: "General Secretary",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
      bio: "Strategizing chamber operations and member welfare programs."
    },
    {
      name: "Technical Director",
      role: "Digital Strategy",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
      bio: "Modernizing textile trade through advanced digital frameworks."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* --- Hero Section (Same as Services Theme) --- */}
      <section className="bg-[#0a192f] py-28 px-6 relative overflow-hidden">
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
            <ShieldCheck size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Governance & Leadership</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Chamber <span className="text-blue-500">Management</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Leading the textile community with a focus on ethical governance, 
            strategic growth, and sustainable industry practices.
          </p>
        </div>
      </section>

      {/* --- Core Values Section (Floating Grid) --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Transparent Governance", 
              desc: "Clear & Ethical Policies for all members.", 
              icon: <Landmark className="text-blue-500" /> 
            },
            { 
              title: "Member-First Approach", 
              desc: "Community driven decisions for collective growth.", 
              icon: <Users2 className="text-indigo-500" /> 
            },
            { 
              title: "Operational Excellence", 
              desc: "Streamlined industry processes and workflows.", 
              icon: <Workflow className="text-cyan-500" /> 
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[32px] shadow-2xl shadow-blue-900/10 border border-gray-100 flex flex-col items-start group hover:-translate-y-2 transition-all duration-300">
              <div className="mb-6 p-4 rounded-2xl bg-gray-50 group-hover:bg-blue-50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Management Team Section --- */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">The Visionaries</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {leaders.map((leader, index) => (
            <div key={index} className="group flex flex-col items-center text-center">
              <div className="relative mb-8">
                {/* Profile Image with Theme Styling */}
                <div className="w-64 h-64 rounded-full overflow-hidden border-[10px] border-gray-50 shadow-xl group-hover:border-blue-50 transition-all duration-500">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                {/* Verified Badge */}
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg border-4 border-white">
                  <CheckCircle size={20} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-1">{leader.name}</h3>
              <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">{leader.role}</p>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed italic">
                "{leader.bio}"
              </p>
              
              <div className="mt-6 flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all cursor-pointer">
                  <Star size={14} />
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all cursor-pointer">
                  <Award size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- Call to Action (Same Gradient Theme) --- */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic tracking-tight">Empowering Textile Commerce</h2>
            <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto opacity-80">
              Our management ensures every member gets the support they need to thrive in the competitive textile market.
            </p>
            <button className="bg-blue-500 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-400 transition-colors shadow-2xl flex items-center gap-2 mx-auto">
              Learn About Our Process <ArrowRight size={18} />
            </button>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* --- Simple Footer --- */}
      <footer className="py-12 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-sm uppercase tracking-[0.2em]">
          © 2026 HC Pareek | Management Board
        </p>
      </footer>
    </div>
  );
};

export default ChamberManagement;