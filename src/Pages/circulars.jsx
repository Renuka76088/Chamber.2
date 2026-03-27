import React from 'react';
import { 
  Bell, 
  FileText, 
  Download, 
  Search, 
  Calendar, 
  ChevronRight, 
  ArrowRightCircle,
  Megaphone,
  Info
} from 'lucide-react';

const CircularsPage = () => {
  // Mock data for circulars
  const circulars = [
    { id: 1, title: "Revised Membership Subscription Fee for 2026-27", date: "Mar 15, 2026", category: "Membership", code: "TC-2026-04" },
    { id: 2, title: "Guidelines for Export Documentation - Textile Sector", date: "Mar 10, 2026", category: "Export", code: "TC-2026-03" },
    { id: 3, title: "Notice: Annual General Meeting (AGM) - Indore HQ", date: "Mar 02, 2026", category: "General", code: "TC-2026-02" },
    { id: 4, title: "Update on GST Compliance for Fabric Manufacturers", date: "Feb 22, 2026", category: "Taxation", code: "TC-2026-01" },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
      
      {/* --- Dark Hero Header (Consistent with Trade Enquiry) --- */}
      <section className="bg-[#0a192f] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
            <Megaphone size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Official Notifications</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Important <span className="text-blue-500">Circulars</span>
          </h1>
          <p className="text-gray-400 text-lg opacity-80 max-w-2xl mx-auto">
            Stay updated with the latest announcements, policy changes, and official notifications from the Textile Chamber.
          </p>
        </div>
      </section>

      {/* --- Search & Main Content --- */}
      <main className="max-w-6xl mx-auto px-6 -mt-12 pb-24 relative z-20">
        
        {/* Search Bar Container */}
        <div className="bg-white p-4 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-slate-100 flex flex-col md:flex-row gap-4 mb-10">
          <div className="flex-1 relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search circulars by keyword, code or year..." 
              className="w-full pl-14 pr-6 py-4 rounded-3xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
             {["All", "Membership", "Taxation", "Export", "Events"].map((tab) => (
               <button key={tab} className="px-6 py-4 rounded-3xl text-sm font-bold whitespace-nowrap transition-all border border-slate-100 bg-white text-slate-600 hover:border-blue-500 hover:text-blue-600 active:bg-blue-600 active:text-white">
                 {tab}
               </button>
             ))}
          </div>
        </div>

        {/* Circulars List Container */}
        <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/10 border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200">
                <Bell size={24} />
              </div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">Latest Announcements</h2>
            </div>

            <div className="space-y-4">
              {circulars.map((item) => (
                <div 
                  key={item.id} 
                  className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 gap-6"
                >
                  <div className="flex items-start gap-5">
                    <div className="mt-1 p-3 bg-white rounded-xl shadow-sm border border-slate-100 text-blue-600 group-hover:scale-110 transition-transform">
                      <FileText size={24} />
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 items-center mb-1">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-[10px] font-black uppercase rounded-lg">
                          {item.category}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-widest">
                          <Calendar size={12} /> {item.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium mt-1">Ref No: {item.code}</p>
                    </div>
                  </div>

                  <div className="flex w-full md:w-auto gap-3">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-2xl text-sm font-bold hover:bg-slate-50 transition-all">
                      View <ChevronRight size={16} />
                    </button>
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl text-sm font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95">
                      Download PDF <Download size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination / Load More */}
            <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
                Load Archive Circulars <ArrowRightCircle size={20} />
              </button>
            </div>

          </div>
        </div>

        {/* Support Section */}
        <div className="mt-12 bg-slate-900 rounded-[32px] p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none"><Bell size={120} /></div>
           <div className="max-w-xl text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 flex items-center justify-center md:justify-start gap-3">
                <Info size={24} className="text-blue-500" /> Subscription Support
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
              "Can't find a specific circular? You can email our support desk or collect a physical copy in person from our office."
              </p>
           </div>
           <a href="mailto:hemant.parekh2012@gmail.com" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 whitespace-nowrap">
             Contact Support
           </a>
        </div>

      </main>

    </div>
  );
};

export default CircularsPage;