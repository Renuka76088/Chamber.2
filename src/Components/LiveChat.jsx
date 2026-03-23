import React from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LiveChat = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="bg-slate-900 p-4 text-white flex justify-between items-center">
              <div>
                <h4 className="font-bold text-sm">Chamber Helpdesk</h4>
                <p className="text-[10px] text-slate-400">Online | We typically reply in minutes</p>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={18} /></button>
            </div>
            <div className="h-64 p-4 bg-slate-50 overflow-y-auto">
              <div className="bg-white p-3 rounded-lg text-xs shadow-sm max-w-[80%] border border-gray-100">
                Namaste! Welcome to Textile Chamber. How can we assist your business today?
              </div>
            </div>
            <div className="p-3 bg-white border-t border-gray-100">
              <input type="text" placeholder="Type a message..." className="w-full text-sm outline-none px-2" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-amber-600 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-2"
      >
        <MessageCircle size={24} />
        {!isOpen && <span className="font-bold text-sm pr-2">Chat with us</span>}
      </motion.button>
    </div>
  );
};

export default LiveChat;