import React from 'react';
import { 
  Building2, 
  MapPin, 
  Globe2, 
  Layers, 
  Search, 
  CheckCircle,
  Zap,
  Award,
  Users
} from 'lucide-react';

const TextileAssociatesPage = () => {
  // Mock data representing the association points from your image
  const associates = [
    { id: 1, name: "Pareek Fabrics", top: "45%", left: "21%", category: "Fabrics" },
    { id: 2, name: "Pareek Silk", top: "54%", left: "25%", category: "Silk" },
    { id: 3, name: "Pareek Rayon", top: "54%", left: "47%", category: "Rayon" },
    { id: 4, name: "Pareek Linen", top: "48%", left: "67%", category: "Linen" },
    { id: 5, name: "Pareek e-Trade Market (Textile)", top: "67%", left: "40%", category: "E-Trade" },
    { id: 6, name: "Pareek Chamber of Textile", top: "78%", left: "37%", category: "Chamber" },
    { id: 7, name: "Pareek Southern Polyfabrics", top: "78%", left: "43%", category: "Polyfabrics" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* --- HEADER SPACING & BANNER (Same as previous themes) --- */}
      <div className="pt-32 md:pt-40"> 
        
        <section className="max-w-6xl mx-auto px-6 mb-16 relative">
          <div className="bg-[#0a192f] rounded-[40px] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            {/* Carbon Fibre Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6 uppercase tracking-widest text-xs font-bold">
                <Globe2 size={16} /> Global Reach
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Our Textile <span className="text-blue-500">Associates</span>
                  <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mt-4"></div>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                 Explore HC Pareek & Associates' extensive network of specialized textile entities. 
                 From silk to e-commerce, bridging the gap between quality and innovation.
              </p>
            </div>
            {/* Background Decorative Glows */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* --- MAIN INTERACTIVE MAP AREA --- */}
        <main className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* LEFT COLUMN: Map & Interactive Points */}
          <div className="lg:col-span-2 relative bg-slate-50 p-8 rounded-[48px] shadow-2xl shadow-blue-950/10 border border-slate-100 min-h-[700px]">
            {/* Title / Info in Map Area */}
            <div className="mb-10 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-black text-slate-800 tracking-tight">Network Distribution</h3>
                  <p className="text-xs text-slate-400 font-medium tracking-wide">HC Pareek & Associates | India Presence</p>
                </div>
                <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
            </div>

            {/* THE INDIA MAP CONTAINER */}
          {/* --- THE INDIA MAP CONTAINER WITH REAL IMAGE --- */}
<div className="relative w-full mx-auto scale-[0.95] origin-top">
    
    {/* Base Map Image */}
    <img 
        src="https://media.istockphoto.com/id/2207896010/vector/detailed-map-of-india-and-its-regions.jpg?s=612x612&w=0&k=20&c=mSgsPYiGPs1AOpqT3xrj_-15oYuex4O6ImDDQt7KaZU=" // Aap apni uploaded image ka URL yahan dal sakte hain
        alt="India Textile Network"
        className="w-full h-auto opacity-90"
    />

    {/* THE INTERACTIVE PIN POINTS OVER THE IMAGE */}
    {associates.map((item) => (
        <div 
            key={item.id} 
            className="absolute group z-10"
            style={{ top: item.top, left: item.left }}
        >
            {/* The Pulsing Marker */}
            <div className="relative flex items-center justify-center">
                {/* Outer Ripple Effect */}
                <div className="absolute w-8 h-8 bg-blue-500/30 rounded-full animate-ping group-hover:bg-blue-600/50"></div>
                
                {/* Main Marker Button */}
                <button className="relative w-5 h-5 rounded-full bg-blue-600 border-2 border-white shadow-lg shadow-blue-900/40 transition-all duration-300 group-hover:scale-125 group-hover:bg-blue-700 focus:outline-none">
                   <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto mt-[1px]"></div>
                </button>
            </div>
            
            {/* The Modern Tooltip (Pops up on Hover) */}
            <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0a192f] text-white px-4 py-2 rounded-xl shadow-2xl opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-1 pointer-events-none border border-blue-500/30">
               <div className="flex flex-col items-center gap-0.5">
                  <span className="text-[10px] uppercase tracking-tighter text-blue-400 font-bold">{item.category}</span>
                  <span className="text-sm font-bold">{item.name}</span>
               </div>
               {/* Arrow */}
               <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0a192f] rotate-45 -mt-1 border-r border-b border-blue-500/30"></div>
            </div>
        </div>
    ))}
</div>

            {/* Subtle Scale in Map Area */}
            <div className="absolute bottom-6 right-6 p-4 bg-white/50 border border-slate-100 rounded-2xl text-[10px] text-slate-400 font-medium">
                300 km
                <div className="w-16 h-px bg-slate-200 mt-1"></div>
            </div>
          </div>

          {/* RIGHT COLUMN: Summary & Key Principles */}
          <aside className="space-y-10">
            {/* Quick Summary Card */}
            <div className="bg-white p-10 rounded-[40px] shadow-2xl shadow-blue-950/5 border border-slate-100">
                <h3 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-3">
                   <Users className="text-blue-600" /> Key Associates
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-4 italic">
                    "From specialized fiber suppliers to decentralized chamber support, 
                    Pareek network bridges quality and expertise across the nation."
                </p>
                
                <div className="w-full h-1 bg-slate-100 rounded-full mt-8 flex gap-1">
                    <div className="w-1/3 bg-blue-600 rounded-l-full"></div>
                    <div className="w-1/3 bg-blue-500"></div>
                    <div className="w-1/3 bg-indigo-600 rounded-r-full opacity-60"></div>
                </div>
            </div>

            {/* Association Principles (Creative Grid) */}
            <div className="space-y-6">
                <h4 className="text-sm font-black text-slate-400 uppercase tracking-wider ml-1">Core Principles</h4>
                <div className="grid grid-cols-1 gap-6">
                    {[
                        { title: "Specialized Fibers", icon: <CheckCircle className="text-green-500" />, desc: "Suppliers focused on linen, rayon, silk and polyfabrics." },
                        { title: "Innovation", icon: <CheckCircle className="text-green-500" />, desc: "Focus on decentralized digital commerce and support." },
                        { title: "Chamber Support", icon: <CheckCircle className="text-green-500" />, desc: "Support network through decentralized textile chamber points." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-blue-950/5 flex items-start gap-5">
                            <div className="p-3 h-fit bg-slate-100 rounded-xl mt-1">{item.icon}</div>
                            <div>
                                <h5 className="font-bold text-slate-800">{item.title}</h5>
                                <p className="text-sm text-slate-600">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </aside>

        </main>
      </div>

      {/* --- Footer (Simple Professional) --- */}
      <footer className="py-12 bg-white text-center border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            HC Pareek & Associates | Decentralized Textile Commerce Support
          </p>
          <div className="text-blue-600 hover:text-blue-700 text-sm font-medium">
             visit: www.hcparekh.com
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TextileAssociatesPage;