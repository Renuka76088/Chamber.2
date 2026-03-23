import React from 'react';
import { 
  FileEdit, 
  Gavel, 
  Layers, 
  Truck, 
  CreditCard, 
  Calendar, 
  Scissors, 
  Download,
  Info,
  CheckCircle,
  BadgeIndianRupee
} from 'lucide-react';

const TenderContractPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
      
      {/* --- Dark Hero Header (Trade Enquiry Style) --- */}
      <section className="bg-[#0a192f] py-24 px-6 relative overflow-hidden">
        {/* Carbon Fibre Texture Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
            <Gavel size={16} />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Corporate Tenders</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Expression of <span className="text-blue-500">Interest</span>
          </h1>
          <p className="text-gray-400 text-lg opacity-80 max-w-2xl mx-auto">
            Sealed Tenders are invited from reputed and registered Tailoring Agencies for work under the Rate Contract.
          </p>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <main className="max-w-6xl mx-auto px-6 -mt-16 pb-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Tender Specifications */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/10 border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-12 space-y-12">
                
                {/* Section 1: Work Details */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-8 flex items-center gap-3">
                    <Scissors size={20} className="text-blue-600" /> Work Specifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Name of Work</p>
                      <p className="font-bold text-slate-800">Double Bedsheets, Pillowcover Stitching & Packing</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Total Quantity</p>
                      <p className="font-bold text-slate-800">30,000 Sets per EOI</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Contract Tenure</p>
                      <p className="font-bold text-slate-800">01 Year (Rate Contract)</p>
                    </div>
                  </div>
                </div>

                {/* Section 2: Technical Specs */}
                <div className="pt-8 border-t border-slate-100">
                  <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                    <Layers size={20} className="text-blue-600" /> Technical Details
                  </h3>
                  <div className="overflow-hidden rounded-2xl border border-slate-100">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-50 text-slate-500 font-bold uppercase">
                        <tr>
                          <th className="px-6 py-4">Attribute</th>
                          <th className="px-6 py-4">Requirement</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-700">Dimensions</td>
                          <td className="px-6 py-4">Bedsheet: 90”x100” | Pillow: 18”x24” (Inner: 6”)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-700">Stitching</td>
                          <td className="px-6 py-4">Double lined Simple / Single zigzag</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-700">Fabrics Issued</td>
                          <td className="px-6 py-4">Pure Fine Cotton (144 TC and above)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-700">Thread</td>
                          <td className="px-6 py-4">Moon Brand or equivalent</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 3: Commercials */}
                <div className="pt-8 border-t border-slate-100">
                  <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                    <BadgeIndianRupee size={20} className="text-blue-600" /> Commercial Terms
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="p-3 h-fit bg-blue-50 text-blue-600 rounded-xl"><Truck size={20} /></div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">Transportation</p>
                        <p className="text-xs text-slate-500 leading-relaxed">Local by Agency. Company covers up to Transporters.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="p-3 h-fit bg-blue-50 text-blue-600 rounded-xl"><CreditCard size={20} /></div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">Payment Terms</p>
                        <p className="text-xs text-slate-500 leading-relaxed">50% Advance with W.O. | 50% on Inspection.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Timeline & CTA */}
          <div className="space-y-6">
            <div className="bg-white rounded-[32px] p-8 shadow-2xl shadow-blue-900/10 border border-gray-100">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Calendar size={18} className="text-blue-600" /> Event Timeline
              </h3>
              <div className="space-y-6">
                {[
                  { label: "Issuance Start", date: "TBA" },
                  { label: "Document Deadline", date: "TBA" },
                  { label: "Submission End", date: "TBA" },
                  { label: "Bid Opening", date: "Tentative" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                    <p className="text-xs font-bold text-slate-400 uppercase">{item.label}</p>
                    <p className="text-sm font-bold text-slate-800">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 rounded-[32px] p-8 text-white shadow-xl shadow-blue-200">
              <h3 className="text-xl font-bold mb-4">Apply In-person</h3>
              <p className="text-sm opacity-90 mb-8 leading-relaxed">
                Tender Documents can be obtained on payment of prescribed non-refundable fee.
              </p>
              <button className="w-full py-4 bg-white text-blue-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-all active:scale-95 shadow-lg">
                Request Documents <Download size={18} />
              </button>
            </div>

            <div className="p-6 bg-slate-100 rounded-[2rem] flex items-start gap-3">
              <Info className="text-slate-500 mt-1" size={16} />
              <p className="text-xs text-slate-500 italic leading-relaxed">
                *Only reputed tailoring agencies with valid registration are eligible for the Rate Contract.
              </p>
            </div>
          </div>

        </div>
      </main>

      <footer className="py-12 text-center border-t border-slate-100">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">© 2026 HC Pareek | Textile Sector Procurement</p>
      </footer>
    </div>
  );
};

export default TenderContractPage;
