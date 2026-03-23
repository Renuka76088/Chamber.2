import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileCheck, Gavel, BarChart3, Globe2, 
  Truck, ShieldCheck, Users2, Zap 
} from 'lucide-react';

const ChamberServices = () => {
  const services = [
    {
      title: "Trade Advocacy",
      desc: "Representing textile interests at government and policy levels for better industrial growth.",
      icon: <ShieldCheck size={32} />,
      color: "bg-blue-500"
    },
    {
      title: "Export Assistance",
      desc: "Helping members navigate global markets with documentation and logistics support.",
      icon: <Globe2 size={32} />,
      color: "bg-indigo-500"
    },
    {
      title: "e-Auction Platform",
      desc: "Transparent digital bidding system for surplus stock and raw materials.",
      icon: <Gavel size={32} />,
      color: "bg-blue-600"
    },
    {
      title: "Market Intelligence",
      desc: "Deep insights into fabric trends, pricing, and demand-supply analytics.",
      icon: <BarChart3 size={32} />,
      color: "bg-sky-500"
    },
    {
      title: "Certification & ISO",
      desc: "Simplified process for quality certifications and industrial standards.",
      icon: <FileCheck size={32} />,
      color: "bg-blue-700"
    },
    {
      title: "B2B Networking",
      desc: "Direct access to our vast network of textile associates and raw material suppliers.",
      icon: <Users2 size={32} />,
      color: "bg-slate-800"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold tracking-widest uppercase text-sm"
          >
            Chamber Excellence
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black text-slate-900 mt-3"
          >
            Our Chamber <span className="text-blue-600">Services</span>
          </motion.h2>
          <p className="text-slate-500 mt-6 text-lg">
            Empowering the textile community with cutting-edge digital tools and strategic industry support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-blue-100 border border-slate-100 transition-all overflow-hidden"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 ${service.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed text-sm mb-8">
                {service.desc}
              </p>

              <div className="flex items-center justify-between">
                <button className="text-sm font-bold text-slate-900 hover:text-blue-600 flex items-center gap-2 group/btn">
                  Learn More 
                  <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all">
                    →
                  </span>
                </button>
                <div className="opacity-0 group-hover:opacity-10 transition-opacity absolute -right-4 -bottom-4">
                   <Zap size={120} className="text-blue-900" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem]"
        >
          <div className="bg-white rounded-[2.9rem] px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-900 font-bold text-xl">Need a custom service for your textile unit?</p>
            <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl">
              Get in Touch with Experts
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ChamberServices;