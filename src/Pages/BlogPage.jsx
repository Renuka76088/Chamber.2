import React from 'react';
import { BookOpen, ChevronRight, Layout, Award, Users } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Legacy of HC Pareek in Textile Commerce",
      excerpt: "Exploring the visionary leadership and contributions to the Chamber of Commerce and the textile growth in the region.",
      date: "March 24, 2026",
      category: "Leadership"
    },
    {
      id: 2,
      title: "Modernizing the Textile Chamber: Digital Shift",
      excerpt: "How traditional textile businesses are adopting new-age technologies under expert guidance.",
      date: "March 22, 2026",
      category: "Innovation"
    },
    {
      id: 3,
      title: "B2B Networking for Textile Manufacturers",
      excerpt: "Key strategies discussed at the recent Chamber meet for expanding global footprints.",
      date: "March 15, 2026",
      category: "Business"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
      
      {/* --- Simple & Elegant Blue Banner --- */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            HC Pareek Insights
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto opacity-90">
            Dedicated to the Textile Industry & the Chamber of Commerce. 
            Bridging tradition with modern business excellence.
          </p>
        </div>
      </header>

      {/* --- Quick Stats / Info Bar --- */}
      <div className="max-w-5xl mx-auto -mt-8 px-6">
        <div className="bg-white shadow-lg rounded-2xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border border-gray-100">
          <div className="p-6 flex items-center gap-4 justify-center">
            <Award className="text-blue-600" />
            <span className="font-semibold">Industry Excellence</span>
          </div>
          <div className="p-6 flex items-center gap-4 justify-center">
            <Users className="text-blue-600" />
            <span className="font-semibold">Chamber Network</span>
          </div>
          <div className="p-6 flex items-center gap-4 justify-center">
            <Layout className="text-blue-600" />
            <span className="font-semibold">Textile Solutions</span>
          </div>
        </div>
      </div>

      {/* --- Blog Feed Section --- */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-10 border-l-4 border-blue-600 pl-4">Latest Articles</h2>
        
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-1 text-blue-600 font-bold hover:underline">
                  Read More <ChevronRight size={18} />
                </button>
              </div>
              
              {/* Simple Placeholder for Textile Texture/Image */}
              <div className="w-full md:w-48 h-32 bg-slate-100 rounded-xl flex items-center justify-center border border-dashed border-slate-300">
                <BookOpen className="text-slate-300" size={32} />
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-white border-t py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-xl text-blue-800">HC Pareek</h4>
            <p className="text-gray-500 text-sm">Textile & Chamber of Commerce Industry Updates</p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-blue-600">About</a>
            <a href="#" className="hover:text-blue-600">Chamber News</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
        <p className="text-center text-gray-400 text-xs mt-10">© 2026 Textile Insights. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BlogPage;