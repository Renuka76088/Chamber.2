import React from 'react';
import { 
  BarChart3, 
  Globe2, 
  ShieldCheck, 
  Briefcase, 
  Network, 
  FileText, 
  ArrowRight,
  Zap
} from 'lucide-react';

const ChamberServices = () => {
const services = [
  {
    title: "Market Analysis",
    description: "Detailed reports and analysis of daily trends and market rates in the textile industry.",
    icon: <BarChart3 size={32} />,
    color: "bg-blue-500"
  },
  {
    title: "B2B Networking",
    description: "A direct platform to connect with new manufacturers and wholesalers through the chamber.",
    icon: <Network size={32} />,
    color: "bg-indigo-600"
  },
  {
    title: "Digital Cataloging",
    description: "Modern digital solutions to showcase your textile products online.",
    icon: <Globe2 size={32} />,
    color: "bg-blue-700"
  },
  {
    title: "Trade Documentation",
    description: "Expert guidance from the chamber for import-export and GST-related paperwork.",
    icon: <FileText size={32} />,
    color: "bg-cyan-600"
  },
  {
    title: "Quality Certification",
    description: "Authorized certification support for fabric quality and standard testing.",
    icon: <ShieldCheck size={32} />,
    color: "bg-blue-800"
  },
  {
    title: "Business Growth",
    description: "Financial and strategic advice for new textile startups and expansion projects.",
    icon: <Briefcase size={32} />,
    color: "bg-indigo-500"
  }
];


  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* --- Hero Section --- */}
      <section className="bg-[#0a192f] py-24 px-6 relative overflow-hidden">
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
            <Zap size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Our Expertise</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Chamber <span className="text-blue-500">Services</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Supporting the textile ecosystem with professional consulting, 
            digital transformation, and industry-leading commerce services.
          </p>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-10 rounded-[32px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col items-start"
            >
              <div className={`mb-8 p-4 rounded-2xl text-white ${service.color} shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <button className="mt-auto flex items-center gap-2 text-sm font-bold text-blue-600 group/btn">
                LEARN MORE 
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* --- Call to Action Section --- */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to grow your textile business?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto opacity-90">
              Join the HC Parekh Chamber network today and get access to exclusive industry resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-xl">
                Become a Member
              </button>
              <button className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
          
          {/* Decorative Circle */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>

    
    </div>
  );
};

export default ChamberServices;