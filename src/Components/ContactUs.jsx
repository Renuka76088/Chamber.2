import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

const ContactUs = () => {
  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold tracking-widest uppercase text-xs"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black text-slate-900 mt-3"
          >
            Connect with <span className="text-blue-600">PAREKH CHAMBER OF TEXTILE</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Side: Professional Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-200 outline-none transition-all text-slate-700" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-200 outline-none transition-all text-slate-700" placeholder="john@textile.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Subject</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-200 outline-none text-slate-600">
                  <option>Membership Inquiry</option>
                  <option>Trade Enquiry</option>
                  <option>e-Auction Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message</label>
                <textarea rows="4" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-200 outline-none text-slate-700" placeholder="How can we help your business?"></textarea>
              </div>

              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-100 flex items-center justify-center gap-3 transition-all group">
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Right Side: Map & Info */}
         <motion.div 
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  className="flex flex-col gap-8"
>
  {/* Interactive Map Frame - Fix for Black Background */}
  <div className="flex-1 min-h-[450px] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-xl relative group bg-white">
    {/* Real Google Maps Iframe - Focused on Surat Textile Hub (Hans Society Area) */}
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.101736733221!2d72.8524451688631!3d21.230815998124978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959f763c3c383d7%3A0xc711ee1f81921331!2sTextile%20Hub!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
      width="100%" 
      height="100%" 
      style={{ border: 0 }} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      className="transition-all duration-700 w-full h-full"
    ></iframe>

    {/* Creative Location Badge */}
    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 text-[12px] font-bold text-blue-700 border border-blue-50 z-10">
      <MapPin size={16} className="animate-pulse" /> 
      Textile Hub, Surat, Gujarat
    </div>

    {/* Decorative Overlay */}
    <div className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur-sm p-4 rounded-3xl text-white hidden md:block border border-white/10 z-10">
      <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-1">Our Headquarters</p>
      <p className="text-sm font-medium">Parekh Textile Chamber</p>
    </div>
  </div>

  {/* Quick Contact Cards - (Aapka existing code, unchanged) */}
  <div className="grid grid-cols-2 gap-4">
    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center gap-4 group hover:border-blue-200 transition-all">
      <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all"><Phone size={20} /></div>
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase">Call Us</p>
        <p className="text-sm font-bold text-slate-800">+91 1111 1111 </p>
      </div>
    </div>
    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center gap-4 group hover:border-blue-200 transition-all">
      <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all"><Clock size={20} /></div>
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase">Office Hours</p>
        <p className="text-sm font-bold text-slate-800">10 AM - 6 PM</p>
      </div>
    </div>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;