import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, Globe } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen  bg-gray-50 font-sans text-slate-900">
      
      {/* --- Elegant Blue Header --- */}
      <header className="bg-gradient-to-r from-blue-700 mt-5 to-blue-900 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Get in Touch</h1>
        <p className="text-blue-100 text-lg max-w-xl mx-auto opacity-90">
          Have questions about the Textile Chamber or industry insights? 
          We are here to assist the community.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 -mt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- Contact Information Card --- */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-8">Contact Info</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Our Location</p>
                    <p className="text-slate-600 text-sm">Textile Chamber Building, Gujarat, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Call Us</p>
                    <p className="text-slate-600 text-sm">+91 1111 1111</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Email Address</p>
                    <p className="text-slate-600 text-sm">info@hcpareek.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Office Hours</p>
                    <p className="text-slate-600 text-sm">Mon - Sat: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                <Globe size={20} />
              </div>
            </div>
          </div>

          {/* --- Modern Contact Form --- */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email ID</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <input type="text" placeholder="Inquiry about Textile Chamber" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Your Message</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"></textarea>
              </div>
              <button className="w-full md:w-auto bg-blue-600 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* --- Map Section (Gujarat Focus) --- */}
        <section className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1.5 bg-blue-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-800">Our Presence in Gujarat</h2>
          </div>
          
          <div className="w-full h-[450px] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9482851458!2d72.8277271!3d21.1942007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e6720f78b8b%3A0xc3124f9f783109!2sGujarat%20Chamber%20of%20Commerce%20%26%20Industry!5e0!3m2!1sen!2sin!4v1711220000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Gujarat Textile Chamber Map"
            ></iframe>
          </div>
        </section>
      </main>

      {/* --- Simple Footer --- */}
      <footer className="bg-white border-t py-8 text-center">
        <p className="text-gray-500 text-sm">© 2026 HC Pareek | Textile Industry & Chamber of Commerce Insights</p>
      </footer>
    </div>
  );
};

export default ContactUs;