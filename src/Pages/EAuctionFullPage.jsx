import React from 'react';
import { 
  Gavel, 
  ShieldCheck, 
  UserCheck, 
  History, 
  BadgeIndianRupee, 
  AlertCircle, 
  ArrowRight,
  Lock,
  CheckCircle,
  Clock,
  Info
} from 'lucide-react';

const EAuctionFullPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
      
      {/* --- Safe Zone for Header (Space from Top) --- */}
      <div className="pt-32 md:pt-40"> 
        
        {/* --- Hero Banner Section --- */}
        <section className="max-w-6xl mx-auto px-6 mb-12">
          <div className="bg-[#0a192f] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Carbon Fibre Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
                <Gavel size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Premium Bidding Portal</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                E-Auction <span className="text-blue-500">Registration</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
                Register to participate in exclusive textile stock auctions. 
                Experience a secure, transparent, and fair bidding environment.
              </p>
            </div>
            
            {/* Decorative Background Glows */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* --- Registration Stats / Info Bar --- */}
        <div className="max-w-5xl mx-auto px-6 mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
             <div className="p-3 bg-blue-50 rounded-2xl text-blue-600"><Clock size={20}/></div>
             <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Registration Status</p>
                <p className="font-bold text-slate-800">Live & Open</p>
             </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
             <div className="p-3 bg-green-50 rounded-2xl text-green-600"><ShieldCheck size={20}/></div>
             <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Verification</p>
                <p className="font-bold text-slate-800">Instant KYC</p>
             </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
             <div className="p-3 bg-amber-50 rounded-2xl text-amber-600"><Info size={20}/></div>
             <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Guidelines</p>
                <p className="font-bold text-slate-800">Updated 2026</p>
             </div>
          </div>
        </div>

        {/* --- Main Registration Form --- */}
        <main className="max-w-5xl mx-auto px-6 pb-24">
          <div className="bg-white rounded-[48px] shadow-2xl shadow-blue-900/5 border border-slate-100 overflow-hidden">
            
            {/* Secure Badge Header */}
            <div className="bg-slate-900 p-4 text-center flex items-center justify-center gap-3">
              <Lock size={14} className="text-blue-400" />
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">End-to-End Encrypted Secure Registration</span>
            </div>

            <form className="p-8 md:p-16 space-y-12">
              
              {/* --- Section 1: Entity Identification --- */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 border-l-4 border-blue-600 pl-4">
                  <h2 className="text-2xl font-bold text-slate-800">Bidder Identity</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group space-y-2">
                    <label className="text-sm font-bold text-slate-600 ml-1">Company/Entity Name</label>
                    <input type="text" placeholder="As per legal records" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white transition-all outline-none shadow-inner" />
                  </div>
                  <div className="group space-y-2">
                    <label className="text-sm font-bold text-slate-600 ml-1">GST Number</label>
                    <input type="text" placeholder="15 Digit GSTIN" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white transition-all outline-none shadow-inner" />
                  </div>
                  <div className="group space-y-2">
                    <label className="text-sm font-bold text-slate-600 ml-1">Authorized Representative</label>
                    <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white transition-all outline-none shadow-inner" />
                  </div>
                  <div className="group space-y-2">
                    <label className="text-sm font-bold text-slate-600 ml-1">Business PAN Card</label>
                    <input type="text" placeholder="Enter PAN Number" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white transition-all outline-none shadow-inner" />
                  </div>
                </div>
              </div>

              {/* --- Section 2: Financial/EMD Info --- */}
              <div className="pt-12 border-t border-slate-100 space-y-8">
                <div className="flex items-center gap-3 border-l-4 border-indigo-600 pl-4">
                  <h2 className="text-2xl font-bold text-slate-800">Financial Deposits (EMD)</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group space-y-2">
                    <label className="text-sm font-bold text-slate-600 ml-1">EMD Amount (INR)</label>
                    <div className="relative">
                      <BadgeIndianRupee className="absolute left-5 top-4.5 text-slate-400" size={20} />
                      <input type="number" placeholder="Enter Deposit Amount" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 transition-all outline-none" />
                    </div>
                  </div>
                  <div className="group space-y-2">
                    <label className="text-sm font-bold text-slate-600 ml-1">Payment Reference (UTR/Ref No.)</label>
                    <input type="text" placeholder="Transaction ID" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 transition-all outline-none" />
                  </div>
                </div>
              </div>

              {/* --- Section 3: Auction Details --- */}
              <div className="pt-12 border-t border-slate-100 space-y-8">
                <div className="flex items-center gap-3 border-l-4 border-cyan-600 pl-4">
                  <h2 className="text-2xl font-bold text-slate-800">Auction Selection</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group space-y-2">
                    <label className="text-sm font-bold text-slate-600 ml-1">Auction ID / Lot No.</label>
                    <input type="text" placeholder="e.g. TEX-MAR-26-04" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none" />
                  </div>
                  <div className="group space-y-2">
                    <label className="text-sm font-bold text-slate-600 ml-1">Auction Category</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none appearance-none cursor-pointer">
                      <option>Select Category</option>
                      <option>Fresh Stock Fabric</option>
                      <option>Surplus Yarn Lot</option>
                      <option>Machinery & Assets</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* --- Important Legal Alert --- */}
              <div className="bg-amber-50 p-8 rounded-[32px] border border-amber-100 flex items-start gap-4">
                <AlertCircle className="text-amber-600 shrink-0 mt-1" size={24} />
                <div className="space-y-1">
                  <p className="text-sm font-bold text-amber-900">Important Participation Note:</p>
                  <p className="text-sm text-amber-800/80 leading-relaxed italic">
                    By registering, you acknowledge that all bids are legally binding. 
                    Failure to fulfill a successful bid will result in the immediate forfeiture of the EMD.
                  </p>
                </div>
              </div>

              {/* --- Action Buttons --- */}
              <div className="flex flex-col sm:flex-row gap-4 pt-10">
                <button type="submit" className="flex-1 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 active:scale-95 group">
                  Register for Bidding <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button type="button" className="sm:w-1/3 border-2 border-slate-200 text-slate-600 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                   Download Guidelines
                </button>
              </div>

            </form>
          </div>
        </main>
      </div>

      {/* --- Simple Professional Footer --- */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            HC Pareek | Textile Chamber of Commerce Insights
          </p>
          <div className="flex justify-center gap-6 text-slate-400 text-xs font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">T&C of Auction</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Help Desk</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EAuctionFullPage;