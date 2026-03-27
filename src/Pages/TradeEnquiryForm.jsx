import React from 'react';
import { 
  FileEdit, 
  User, 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Briefcase, 
  Upload, 
  CheckCircle,
  Send
} from 'lucide-react';

const TradeEnquiryForm = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
      
      {/* --- Dark Hero Header (Theme Consistent) --- */}
      <section className="bg-[#0a192f] py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
            <FileEdit size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Official Registration</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Apply for <span className="text-blue-500">Membership</span>
          </h1>
          <p className="text-gray-400 text-lg opacity-80">
            Join the Chamber of Textile. Fill out the Form below to begin your application.
          </p>
        </div>
      </section>

      {/* --- Main Form Section --- */}
      <main className="max-w-5xl mx-auto px-6 -mt-16 pb-24 relative z-20">
        <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/10 border border-gray-100 overflow-hidden">
          
          <form className="p-8 md:p-16 space-y-12">
            
            {/* --- Section 1: Official Details --- */}
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <CheckCircle size={20} className="text-blue-600" /> Official Verification
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Name of Authorized Official of the Chamber</label>
                  <input type="text" placeholder="Enter Official Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Code No.</label>
                  <input type="text" placeholder="Official Code" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" />
                </div>
              </div>
            </div>

            {/* --- Section 2: Applicant & Business Details --- */}
            <div className="pt-8 border-t border-slate-100">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <User size={20} className="text-blue-600" /> Applicant Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Name of the Applicant</label>
                  <input type="text" placeholder="Your Full Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Title of the Textile Business</label>
                  <input type="text" placeholder="Company / Firm Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Address of the Business</label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-5 top-5 text-slate-400" />
                    <textarea rows="2" placeholder="Complete Business Address" className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none"></textarea>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Mob. No.</label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-5 top-4.5 text-slate-400" />
                    <input type="tel" placeholder="+91 00000 00000" className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Id</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-5 top-4.5 text-slate-400" />
                    <input type="email" placeholder="example@business.com" className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">URL (if any)</label>
                  <div className="relative">
                    <Globe size={18} className="absolute left-5 top-4.5 text-slate-400" />
                    <input type="url" placeholder="https://www.yourwebsite.com" className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Nature of the Business</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none appearance-none">
                    <option>Select Nature</option>
                    <option>Retailer</option>
                    <option>Wholesaler</option>
                    <option>Manufacturers</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Category of the Business</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none appearance-none">
                    <option>Select Category</option>
                    <option>Proprietorship</option>
                    <option>Partnership</option>
                    <option>LLP</option>
                    <option>Private Limited</option>
                    <option>Ltd.</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* --- Section 3: Document Upload --- */}
            <div className="pt-8 border-t border-slate-100">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <Upload size={20} className="text-blue-600" /> Upload Documents
              </h3>
              <p className="text-xs text-slate-500 mb-4 font-medium uppercase tracking-wider">(GST, MSME, Trade License, Labour License, LLP, CIN)</p>
              <div className="border-2 border-dashed border-slate-200 rounded-[2rem] p-12 text-center hover:bg-blue-50/50 hover:border-blue-200 transition-all group cursor-pointer">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Upload className="text-blue-600" size={24} />
                </div>
                <p className="font-bold text-slate-800">Click to upload or drag and drop</p>
                <p className="text-sm text-slate-500">Maximum file size 5MB (PDF, PNG, JPG)</p>
              </div>
            </div>

            {/* --- Section 4: Undertaking --- */}
            <div className="pt-8 border-t border-slate-100">
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
                <h3 className="font-bold text-slate-800 mb-4 underline decoration-blue-500 decoration-2 underline-offset-4">Undertaking</h3>
                <div className="flex gap-4">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  <p className="text-slate-600 italic text-sm leading-relaxed">
                    "I have read the Terms & Conditions of subscription for the membership in the Chamber of Textile. 
                    All the information provided by me and the documents uploaded thereof are true and authentic 
                    to the best of my knowledge and belief."
                  </p>
                </div>
              </div>
            </div>

            {/* --- Buttons --- */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button type="button" className="flex-1 px-10 py-5 rounded-2xl font-bold border-2 border-slate-200 text-slate-600 hover:bg-slate-50 transition-all">
                Preview Application
              </button>
              <button type="submit" className="flex-1 px-10 py-5 rounded-2xl font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-2">
                Submit Form <Send size={18} />
              </button>
            </div>

          </form>
        </div>
      </main>

    </div>
  );
};

export default TradeEnquiryForm;