import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { Send } from "react-icons/io5";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/footerlogo.png'


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Upper Section: Brand & Newsletter */}
    <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800 items-start">
  
  {/* Brand Identity */}
  <div className="lg:col-span-5 space-y-4"> {/* space-y-6 ko 4 kiya taaki gap kam ho */}
    <Link to="/" className="inline-block"> {/* h-full hataya taaki container stretch na ho */}
      <img 
        src={logo} 
        alt="Logo" 
        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
        /* h-12 ko h-10 kiya for more compactness */
      />
    </Link>
    
    <p className="text-slate-400 max-w-sm leading-relaxed mt-2">
      Empowering the textile industry of BENGALURU, KA since 2007. Weaving connections, fostering innovation, and driving global trade excellence.
    </p>
    
    <div className="flex gap-4 pt-2">
      {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
        <motion.a 
          key={i} href="#" 
          whileHover={{ y: -5, color: '#3b82f6' }}
          className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center transition-colors border border-slate-800"
        >
          <Icon size={18} />
        </motion.a>
      ))}
    </div>
  </div>

  {/* Quick Newsletter */}
  <div className="lg:col-span-7 bg-slate-900/50 p-6 rounded-[2rem] border border-slate-800">
    <h4 className="text-xl font-bold text-white mb-1">Connect With Us</h4>
    <p className="text-sm text-slate-400 mb-4">Stay updated with the latest textile policies and trade enquiries.</p>
    <div className="flex flex-col sm:flex-row gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="bg-transparent pl-4 py-2 flex-1 outline-none text-sm text-white" 
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2">
        Join Now <Send size={16} />
      </button>
    </div>
  </div>
</div>

        {/* Middle Section: Links Grid */}
        <div className="grid md:grid-cols-4 gap-12 py-16">
          <div className="space-y-6">
            <h5 className="text-white font-bold uppercase tracking-widest text-xs">Quick Navigation</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">About the Chamber</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Media Gallery</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Our Blog</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-white font-bold uppercase tracking-widest text-xs">Services</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">e-Auction Portal</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Trade Enquiry</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Tenders & Contracts</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Member Directory</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-white font-bold uppercase tracking-widest text-xs">Policy & Help</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Notice Board</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-white font-bold uppercase tracking-widest text-xs">Location</h5>
            <div className="space-y-4 text-sm text-slate-400">
              <p className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 shrink-0" />
                 BENGALURU, KA
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                +91 1111 1111
              </p>
              <p className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                info@Parekhchamber.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p>© {currentYear} Parekh Textile Chamber of Commerce. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
         
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;