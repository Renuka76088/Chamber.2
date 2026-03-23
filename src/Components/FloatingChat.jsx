import React, { useState } from 'react';
import { MessageSquareText, Mail, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, scale: 0.8, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 20 }} className="mb-5 w-96 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="bg-blue-800 p-6 text-white flex justify-between items-center">
              <div>
                <h4 className="font-bold text-lg">Chamber Assistant</h4>
                <p className="text-xs text-blue-100 mt-1">Hello! Ask us about membership, tenders or services.</p>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>
            <div className="h-80 p-6 bg-slate-50 overflow-y-auto space-y-4">
              <div className="bg-blue-100 text-blue-900 p-4 rounded-xl text-sm max-w-[85%]">Welcome to PTCCommerce! How can we help you navigate the textile market today?</div>
            </div>
            <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
              <input type="text" placeholder="Type message..." className="w-full text-sm outline-none px-4 py-2 bg-slate-100 rounded-full" />
              <button className="bg-blue-700 text-white px-4 py-2 rounded-full font-bold text-sm">Send</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className="bg-blue-700 text-white p-5 rounded-full shadow-2xl flex items-center justify-center">
        {isOpen ? <X size={24} /> : <MessageSquareText size={24} />}
      </motion.button>
    </div>
  );
};