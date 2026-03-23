import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Tag } from 'lucide-react'; // 'npm install lucide-react' zaroor karein

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: "https://img.freepik.com/free-photo/tissue-shop-with-fabrics_1398-3773.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
      category: "Market Trends",
      date: "25 March 2026",
      title: "The Silk Route Revived: Global Demand for Indian Silk",
      excerpt: "Exploring how traditional weaving techniques are finding new markets in Europe and North America."
    },
    {
      id: 2,
      image: "https://img.freepik.com/premium-photo/colorful-fabrics-neatly-aligned-traditional-textile-mill_926199-4134156.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
      category: "Innovation",
      date: "22 March 2026",
      title: "Sustainable Dyeing: The Future of Color in Textiles",
      excerpt: "Reducing water footprint with bio-based dyes and closed-loop systems."
    },
    {
      id: 3,
      image: "https://img.freepik.com/premium-photo/polyester-fabric-textile-mill_87720-112145.jpg?w=1060",
      category: "Policy Update",
      date: "18 March 2026",
      title: "Understanding the New Textile Export Incentives",
      excerpt: "A simple guide to the latest government schemes boosting local manufacturers."
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Clean & Focused */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-600 font-semibold tracking-widest uppercase text-xs mb-3"
            >
              Insights from the Chamber
            </motion.div>
            <h2 className="text-5xl font-extrabold text-slate-950 tracking-tighter">
              Latest <span className="text-blue-600">Textile Insights</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 group text-sm font-bold text-slate-900 border-b-2 border-slate-200 pb-2 hover:border-blue-600 transition-colors">
            Explore All Articles 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Simplistic Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container with Hover Distortion */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-sm border border-slate-100 mb-6">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover  transition-all duration-700"
                />
                <div className="absolute top-5 left-5 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[11px] font-bold text-blue-700 shadow-sm flex items-center gap-1.5">
                   <Tag size={12} /> {blog.category}
                </div>
              </div>

              {/* Content - Typography-Driven */}
              <div className="flex-1 space-y-4 px-2">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <CalendarDays size={14} className="text-blue-200" />
                  {blog.date}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-950 leading-tight group-hover:text-blue-700 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-slate-500 text-base leading-relaxed line-clamp-2">
                  {blog.excerpt}
                </p>
                
                {/* Subtle Read More Link */}
                <div className="pt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      Read Full Story
                    </span>
                    <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                       <ArrowRight size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;