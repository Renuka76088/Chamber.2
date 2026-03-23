import React from 'react';
import { 
  Pin, 
  Megaphone, 
  Calendar, 
  ArrowRight, 
  AlertTriangle, 
  Clock, 
  FileText,
  Search,
  Hash
} from 'lucide-react';

const NoticeBoardPage = () => {
  const notices = [
    {
      id: 1,
      tag: "Urgent",
      title: "Holiday Notice: Holi Celebrations 2026",
      desc: "Office will remain closed on 14th March 2026. All operations will resume from the following Monday.",
      date: "Mar 12, 2026",
      color: "border-red-500 bg-red-50/30"
    },
    {
      id: 2,
      tag: "Event",
      title: "Textile Expo 2026 - Registration Open",
      desc: "Members can now register for the upcoming International Textile Expo. Early bird discounts available till next week.",
      date: "Mar 10, 2026",
      color: "border-blue-500 bg-blue-50/30"
    },
    {
      id: 3,
      tag: "Policy",
      title: "Updated GST Compliance for Manufacturers",
      desc: "New guidelines issued for 144 TC+ fabric manufacturers. Please review the updated taxation slab under section 4-B.",
      date: "Mar 05, 2026",
      color: "border-emerald-500 bg-emerald-50/30"
    },
    {
      id: 4,
      tag: "General",
      title: "New Membership Card Dispatch Status",
      desc: "All cards for the batch of Jan-Feb 2026 have been dispatched via Speed Post. Track your status on the portal.",
      date: "Feb 28, 2026",
      color: "border-amber-500 bg-amber-50/30"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfe] font-sans text-slate-900">
      
      {/* --- Dark Hero Header (Consistent Theme) --- */}
      <section className="bg-[#0a192f] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
            <Megaphone size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Public Notifications</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Official <span className="text-blue-500">Notice Board</span>
          </h1>
          <p className="text-gray-400 text-lg opacity-80 max-w-2xl mx-auto italic">
            "Stay informed with the latest updates from the heart of the Textile Chamber."
          </p>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <main className="max-w-6xl mx-auto px-6 -mt-12 pb-24 relative z-20">
      
        {/* Notice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {notices.map((item) => (
            <div 
              key={item.id} 
              className={`group relative p-8 rounded-[40px] border-l-[12px] shadow-xl shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-white ${item.color}`}
            >
              {/* Pin Icon Decoration */}
              <div className="absolute top-6 right-8 text-slate-300 group-hover:text-blue-500 group-hover:rotate-45 transition-all">
                <Pin size={24} />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <span className="px-3 py-1 rounded-lg bg-white border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-500">
                     {item.tag}
                   </span>
                   <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                     <Clock size={12} /> {item.date}
                   </span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-slate-500 leading-relaxed italic">
                  "{item.desc}"
                </p>

                <div className="pt-4 flex items-center justify-between">
                  <button className="flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest group-hover:gap-4 transition-all">
                    Read Full Notice <ArrowRight size={14} />
                  </button>
                  <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FileText size={18} className="text-slate-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 p-10 bg-slate-900 rounded-[48px] relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
           <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3 justify-center md:justify-start">
                 <AlertTriangle className="text-amber-500" /> Important Alert?
              </h3>
              <p className="text-gray-400 text-sm">Aapko koi official letter mila hai jo yahan list nahi hai? Turant verify karein.</p>
           </div>
           <button className="relative z-10 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center gap-2">
              Verify Document <Hash size={18} />
           </button>
        </div>

      </main>

      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">HC Pareek | Information & Broadcast Division</p>
      </footer>
    </div>
  );
};

export default NoticeBoardPage;