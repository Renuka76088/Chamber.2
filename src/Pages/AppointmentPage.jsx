import React from 'react';
import { 
  CalendarCheck, 
  User, 
  Clock, 
  MessageSquare, 
  Phone, 
  Video, 
  Users, 
  Building,
  Send,
  CheckCircle2,
  Calendar
} from 'lucide-react';

const AppointmentPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
      
      {/* --- Dark Hero Header (Trade Enquiry Style) --- */}
      <section className="bg-[#0a192f] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
            <CalendarCheck size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Consultation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Book an <span className="text-blue-500">Appointment</span>
          </h1>
          <p className="text-gray-400 text-lg opacity-80 max-w-2xl mx-auto">
          "Book your slot to connect with our industry experts. We are here to provide personalized guidance and strategic textile business solutions."
          </p>
        </div>
      </section>

      {/* --- Main Appointment Form Section --- */}
      <main className="max-w-5xl mx-auto px-6 -mt-16 pb-24 relative z-20">
        <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/10 border border-gray-100 overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-3">
            
            {/* Left Sidebar: Contact Info */}
            <div className="bg-blue-600 p-8 md:p-12 text-white space-y-10">
              <div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Visit Our Office</h3>
                <p className="text-blue-100 text-sm leading-relaxed opacity-80">
                  BENGALURU, KA<br />
                 
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl"><Phone size={20}/></div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase font-bold">Call Us</p>
                    <p className="font-bold">+91 00000 00000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl"><Calendar size={20}/></div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase font-bold">Work Hours</p>
                    <p className="font-bold">Mon - Sat: 10 AM - 7 PM</p>
                  </div>
                </div>
              </div>

              <div className="pt-10">
                 <div className="p-6 bg-blue-700 rounded-3xl border border-blue-500/30">
                    <p className="text-xs italic leading-relaxed opacity-90">
                    "Your growth is our priority. We dedicate full time and undivided attention to every appointment to ensure your business goals are met."
                    </p>
                 </div>
              </div>
            </div>

            {/* Right Side: Actual Form */}
            <div className="lg:col-span-2 p-8 md:p-16">
              <form className="space-y-8">
                
                {/* Personal Info Group */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <div className="relative">
                      <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input type="text" placeholder="John Doe" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Contact Number</label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input type="tel" placeholder="+91 00000 00000" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none" />
                    </div>
                  </div>
                </div>

            

                {/* Date & Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Preferred Date</label>
                    <div className="relative">
                      <Calendar size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input type="date" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Time Slot</label>
                    <div className="relative">
                      <Clock size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <select className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none appearance-none cursor-pointer">
                        <option>Select Time</option>
                        <option>10:00 AM - 12:00 PM</option>
                        <option>12:00 PM - 02:00 PM</option>
                        <option>03:00 PM - 05:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Subject / Query (Optional)</label>
                  <div className="relative">
                    <MessageSquare size={18} className="absolute left-5 top-5 text-slate-400" />
                    <textarea rows="4" placeholder="Briefly describe the purpose of your visit..." className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none"></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 active:scale-[0.98] group">
                  Confirm Appointment <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1">
                  <CheckCircle2 size={14} className="text-green-500" /> 
                  Confirmation will be sent to your mobile via SMS.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

    
    </div>
  );
};

export default AppointmentPage;