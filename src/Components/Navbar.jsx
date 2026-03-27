import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, MessageSquare, Send, Bot, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png'

const dropdownItems = [
  { name: 'Chamber Services', path: '/our-chamber-service' },
  { name: 'Management', path: '/our-chamber-management' },
  { name: 'Trade Enquiry', path: '/trade-enquiry' },
  { name: 'e-Quotation', path: '/e-quotation' },
  { name: 'e-Auction', path: '/e-auction' },
  { name: 'Tenders & Contracts', path: '/tender-contract' },
  { name: 'Careers', path: '/career-page' },
  { name: 'Circulars', path: '/circular' },
  { name: 'Appointments', path: '/visit-with-appointment' },
  { name: 'Notice Board', path: '/notice-board' },
  { name: 'Media Gallery', path: '/media-gallery' },
  { name: 'Textile Associates', path: '/our-textile-associates' }
];

const pagesList = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '#', hasDropdown: true },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Welcome to Pareek Chamber! How can I assist you with our business services today?' }
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isMobileMenu) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isMobileMenu]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const getAIResponse = (text) => {
    const query = text.toLowerCase();
    if (query.includes("hello") || query.includes("hi")) return "Hello! Welcome to our digital portal. How can I help you today?";
    if (query.includes("service") || query.includes("pages")) return "We offer various services including Trade Enquiries, e-Auctions, and Textile Management. You can find them in the 'Services' menu.";
    if (query.includes("textile") || query.includes("associate")) return "Our textile network connects top-tier associates. Visit our 'Textile Associates' page for details.";
    if (query.includes("contact") || query.includes("office")) return "Our headquarters is in Indore. You can reach us via the Contact page or book an appointment online.";
    return "Thank you for your query. I will provide a detailed response shortly. Please feel free to explore our service sections in the meantime.";
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: getAIResponse(currentInput) }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
    <nav className="fixed top-0 w-full z-[70] bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm">
  <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
    
    {/* --- LOGO SECTION START --- */}
    <Link to="/" className="flex items-center group h-full">
      <img 
        src={logo} 
        alt="Logo" 
        className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
        /* h-12 se logo navbar ke andar balanced dikhega, 
           object-contain se wo katega nahi */
      />
    </Link>
    {/* --- LOGO SECTION END --- */}

    {/* Desktop Navigation */}
    <div className="hidden md:flex space-x-8 items-center font-semibold text-slate-600">
      {pagesList.map((page) => (
        page.hasDropdown ? (
          <div 
            key={page.name} 
            className="relative group" 
            onMouseEnter={() => setIsPagesOpen(true)} 
            onMouseLeave={() => setIsPagesOpen(false)}
          >
            <button className="flex items-center gap-1 py-4 group-hover:text-blue-600 transition-colors uppercase text-[11px] tracking-widest">
              {page.name} 
              <ChevronDown size={14} className={`transition-transform duration-300 ${isPagesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isPagesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-[90%] left-1/2 -translate-x-1/2 w-[500px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)] rounded-[1.5rem] p-4 grid grid-cols-2 gap-1 border border-slate-50"
                >
                  {dropdownItems.map((item) => (
                    <Link 
                      key={item.name} 
                      to={item.path} 
                      className="px-4 py-3 text-[13px] hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-all flex items-center justify-between group/item"
                    >
                      {item.name} 
                      <ChevronRight size={14} className="opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Link 
            key={page.name} 
            to={page.path} 
            className="hover:text-blue-600 transition-colors uppercase text-[11px] tracking-widest"
          >
            {page.name}
          </Link>
        )
      ))}
      <button className="bg-slate-950 text-white px-6 py-2.5 rounded-full text-[11px] font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
       
       <Link to='/trade-enquiry'>
        Get a quote  
       </Link>
     
      </button>
    </div>

    {/* Mobile Toggle */}
    <button className="md:hidden p-2 bg-slate-50 rounded-full" onClick={() => setIsMobileMenu(!isMobileMenu)}>
      {isMobileMenu ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>
</nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenu && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-[65] bg-white pt-24 px-8 overflow-y-auto md:hidden">
            <div className="flex flex-col space-y-6">
              {pagesList.map((page) => (
                <div key={page.name} className="border-b border-slate-50 pb-4">
                  {page.hasDropdown ? (
                    <div className="space-y-4">
                       <h3 className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em]">Our Services</h3>
                       <div className="grid grid-cols-1 gap-2">
                          {dropdownItems.map(item => (
                            <Link key={item.name} to={item.path} onClick={() => setIsMobileMenu(false)}
                              className="flex items-center justify-between py-4 px-6 rounded-2xl bg-slate-50 text-slate-800 font-bold text-sm">
                                {item.name} <ChevronRight size={16} />
                            </Link>
                          ))}
                       </div>
                    </div>
                  ) : (
                    <Link to={page.path} onClick={() => setIsMobileMenu(false)} className="text-xl font-black text-slate-900 " style={{fontWeight:'600'}}>{page.name}</Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Center */}
      <div className="fixed bottom-6 right-6 z-[80] flex flex-col items-end gap-4">
        <button onClick={() => setIsChatOpen(!isChatOpen)} 
          className={`w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] shadow-2xl flex items-center justify-center transition-all duration-500 ${isChatOpen ? 'bg-slate-950 text-white rotate-90' : 'bg-blue-600 text-white hover:scale-110 shadow-blue-200'}`}>
          {isChatOpen ? <X size={28} /> : <MessageSquare size={28} />}
        </button>

        <AnimatePresence>
          {isChatOpen && (
            <motion.div initial={{ opacity: 0, scale: 0.8, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 40 }}
              className="absolute bottom-20 right-0 w-[90vw] sm:w-[400px] h-[65vh] sm:h-[600px] bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.2)] border border-slate-100 flex flex-col overflow-hidden">
              
              {/* Chat Header */}
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md"><Bot size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg leading-none">Pareek Support</h4>
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <p className="text-[10px] text-blue-100 uppercase tracking-widest font-bold">Online Now</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto bg-[#F8FAFC] space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`p-4 rounded-[1.5rem] text-sm leading-relaxed max-w-[85%] shadow-sm ${
                      msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-1 items-center p-2 bg-white w-fit rounded-full px-4 shadow-sm border border-slate-100">
                    <Sparkles size={12} className="text-blue-500 animate-spin" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">AI is thinking...</span>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-5 bg-white border-t border-slate-50">
                <div className="relative flex items-center gap-2">
                  <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask about our chamber..." className="flex-1 bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all" />
                  <button onClick={handleSendMessage} className="bg-blue-600 text-white p-4 rounded-2xl hover:bg-blue-700 transition-all">
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;