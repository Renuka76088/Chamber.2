import React from 'react';
import { motion } from 'framer-motion';

const TradeEnquiry = () => {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Trade Enquiry</h2>
        <p className="text-gray-500 mb-10">Submit your business inquiry to connect with textile leaders.</p>
        
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Company Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all" placeholder="Enter company name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">GST Number</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 outline-none" placeholder="Optional" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Type of Fabric</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none">
              <option>Silk</option>
              <option>Rayon</option>
              <option>Cotton</option>
              <option>Synthetic</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Message/Requirement</label>
            <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" placeholder="Describe your requirement..."></textarea>
          </div>

          <button className="w-full bg-amber-600 text-white py-4 rounded-xl font-bold hover:bg-amber-700 shadow-lg shadow-amber-100 transition-all">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default TradeEnquiry;