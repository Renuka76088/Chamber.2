import React from 'react';
import { 
  Image, 
  Video, 
  Search, 
  Layers, 
  ArrowRightCircle, 
  Calendar, 
  Play,
  Filter
} from 'lucide-react';

const MediaGalleryPage = () => {
  // Mock data for images
  const photos = [
    { id: 1, title: "Textile Machinery Launch", date: "Mar 15, 2026", url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: "Annual General Meeting", date: "Mar 05, 2026", url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop" },
    { id: 3, title: "Weaving Workshop", date: "Feb 28, 2026", url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" },
  ];

  // Mock data for videos
  const videos = [
    { id: 1, title: "Future of Textile Commerce", length: "05:22", thumbnail: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: "Textile Policy Insights", length: "12:15", thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfe] font-sans text-slate-900">
      
      {/* --- HEADER SPACING & BANNER --- */}
      <div className="pt-32 md:pt-40"> 
        
        <section className="max-w-6xl mx-auto px-6 mb-12">
          <div className="bg-[#0a192f] rounded-[40px] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            {/* Carbon Fibre Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6 uppercase tracking-widest text-xs font-bold">
                <Layers size={16} /> Showcase
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Media <span className="text-blue-500">Gallery</span>
              </h1>
              <div className="h-1 w-24 bg-blue-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed italic">
                A visual journey through our textile innovations, chamber events, and industry insights.
              </p>
            </div>
          </div>
        </section>

        {/* --- MAIN CONTENT AREA --- */}
        <main className="max-w-7xl mx-auto px-6 pb-24 space-y-20">
          
          {/* SEARCH & FILTERS BAR */}
          <div className="bg-white p-4 rounded-[2rem] shadow-xl shadow-blue-900/5 border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search media..." 
                className="w-full pl-16 pr-6 py-4 rounded-3xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-4 rounded-3xl text-sm font-bold whitespace-nowrap border border-slate-100 bg-white text-slate-500 hover:bg-slate-50">
               <Filter size={18} /> View All Media
            </button>
          </div>

          {/* SECTION 1: PHOTO GALLERY */}
          <section className="space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-slate-100">
               <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200">
                     <Image size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">Photo Gallery</h2>
                    <p className="text-sm text-slate-400">Capturing key moments in textile commerce.</p>
                  </div>
               </div>
               <button className="flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest group-hover:gap-4 transition-all">
                  Load More Images <ArrowRightCircle size={18} />
               </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
               {photos.map((item) => (
                  <div key={item.id} className="group relative overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-xl shadow-blue-900/5 transition-transform duration-500 hover:-translate-y-2">
                     <img 
                        src={item.url} 
                        alt={item.title} 
                        className="w-full h-[300px] object-cover rounded-t-[2.5rem] group-hover:scale-110 transition-transform duration-700" 
                     />
                     <div className="absolute inset-x-0 bottom-0 bg-white p-8 space-y-3 rounded-b-[2.5rem] border border-t border-slate-100">
                        <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-widest">
                           <Calendar size={12} /> {item.date}
                        </span>
                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">{item.title}</h3>
                     </div>
                  </div>
               ))}
            </div>
          </section>

          {/* SECTION 2: VIDEO GALLERY (DARK THEME MIX) */}
          <section className="bg-slate-900 rounded-[40px] p-12 md:p-16 space-y-10 shadow-2xl shadow-blue-900/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-white/10">
               <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200">
                     <Video size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Video Insights</h2>
                    <p className="text-sm text-gray-400">Textile Commerce & Policy Discussions.</p>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               {videos.map((video) => (
                  <div key={video.id} className="group relative overflow-hidden rounded-[2rem] border border-white/10">
                     <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-[300px] object-cover rounded-[2rem] group-hover:scale-110 transition-transform duration-700 opacity-60" 
                     />
                     
                     {/* Glassmorphism Play Button Overlay */}
                     <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/30 shadow-lg group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                           <Play size={32} />
                        </button>
                     </div>

                     <div className="absolute inset-x-0 bottom-0 p-8 text-white space-y-1">
                        <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">{video.length} Minutes</span>
                        <h3 className="text-2xl font-black group-hover:text-blue-400 transition-colors tracking-tight">{video.title}</h3>
                     </div>
                  </div>
               ))}
            </div>
          </section>

        </main>
      </div>

    </div>
  );
};

export default MediaGalleryPage;