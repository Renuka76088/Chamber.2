import React from 'react';
import { 
  FileText, 
  Package, 
  Truck, 
  Layers, 
  Calculator, 
  Send, 
  Info,
  BadgePercent
} from 'lucide-react';

const EQuotationForm = () => {
  return (
    <div className="min-h-screen bg-[#fcfdfe] font-sans text-slate-900">
      
      {/* --- Header Se Gap Banane Ke Liye Padding --- */}
      <div className="pt-32 md:pt-40"> 
        
        {/* --- Hero Banner (Theme Consistent) --- */}
        <section className="max-w-6xl mx-auto px-6 mb-12">
          <div className="bg-[#0a192f] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Carbon Fibre Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
                <Calculator size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Instant Estimate</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                e-Quotation <span className="text-blue-500">Portal</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-xl mx-auto opacity-90">
              "Get the best rates and instant estimates for all your textile requirements. Request a quote today for premium quality at competitive prices."
              </p>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* --- Main Quotation Form --- */}
        <main className="max-w-5xl mx-auto px-6 pb-24">
          <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/10 border border-slate-100 overflow-hidden">
            
            <form className="p-8 md:p-16 space-y-10">
              
              {/* --- Section 1: Product Specifications --- */}
              <div>
                <h3 className="text-xl font-bold text-blue-950 mb-8 flex items-center gap-3">
                  <Package className="text-blue-600" size={24} /> Product Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Type of Fabric</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none appearance-none">
                      <option>Select Fabric Type</option>
                      <option>Cotton</option>
                      <option>Silk</option>
                      <option>Rayon</option>
                      <option>Polyester</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Quantity (in Meters/Tons)</label>
                    <input type="number" placeholder="Enter Quantity" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Quality/GSM Requirement</label>
                    <input type="text" placeholder="e.g. 180 GSM" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Expected Delivery Date</label>
                    <input type="date" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none" />
                  </div>
                </div>
              </div>

              {/* --- Section 2: Logistics & Commercials --- */}
              <div className="pt-10 border-t border-slate-100">
                <h3 className="text-xl font-bold text-blue-950 mb-8 flex items-center gap-3">
                  <Truck className="text-blue-600" size={24} /> Logistics Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Delivery Location (City/State)</label>
                    <input type="text" placeholder="Enter Destination" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Preferred Mode of Transport</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none appearance-none">
                      <option>Road Transport</option>
                      <option>Railway</option>
                      <option>Air Freight</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* --- Section 3: Special Instructions --- */}
              <div className="pt-10 border-t border-slate-100">
                <h3 className="text-xl font-bold text-blue-950 mb-6 flex items-center gap-3">
                  <Layers className="text-blue-600" size={24} /> Additional Requirements
                </h3>
                <textarea rows="4" placeholder="Mention any specific color, weave, or packaging instructions..." className="w-full px-8 py-6 rounded-[2rem] bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none"></textarea>
              </div>

              {/* --- Summary Box --- */}
              <div className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100 flex items-start gap-4">
                <div className="mt-1"><Info className="text-blue-600" size={20} /></div>
                <p className="text-sm text-blue-900 leading-relaxed">
                  <strong>Note:</strong> "This is a primary quotation request. Once your details are submitted, our executive will contact you within 24-48 hours with accurate pricing and terms."
                </p>
              </div>

              {/* --- Action Buttons --- */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button type="submit" className="flex-1 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 text-lg">
                  Submit Quotation Request <Send size={20} />
                </button>
                <button type="button" className="sm:w-1/3 border-2 border-slate-200 text-slate-600 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                  Save Draft
                </button>
              </div>

            </form>
          </div>
        </main>
      </div>

      <footer className="py-12 text-center border-t border-slate-100 bg-white">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">© 2026 HC Pareek | E-Quotation Management System</p>
      </footer>
    </div>
  );
};

export default EQuotationForm;