import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  IndianRupee, 
  GraduationCap, 
  Users, 
  Mail, 
//   Instagram, 
//   Linkedin, 
//   Youtube, 
//   Facebook, 
  FileText, 
  CheckCircle2,
  Send,
  Target
} from 'lucide-react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa6';

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
      
      {/* --- Dark Hero Header (Trade Enquiry Style) --- */}
      <section className="bg-[#0a192f] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
            <Briefcase size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Careers</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Join Our <span className="text-blue-500">Team</span>
          </h1>
          <p className="text-gray-400 text-lg opacity-80 max-w-2xl mx-auto">
            Explore opportunities to grow with us. We are looking for passionate individuals to shape the future of Textile & Corporate sectors.
          </p>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <main className="max-w-6xl mx-auto px-6 -mt-12 pb-24 relative z-20 space-y-12">
        
        {/* --- Job Opening 1: HR Manager --- */}
        <section className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/10 border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
              <div>
                <span className="px-4 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase rounded-full tracking-wider">Management • Full Time</span>
                <h2 className="text-3xl font-black text-slate-800 mt-4">HR Manager</h2>
                <div className="flex flex-wrap gap-6 mt-4 text-slate-500 font-medium">
                  <div className="flex items-center gap-2"><MapPin size={18} className="text-blue-500"/> Bengaluru, Karnataka</div>
                  <div className="flex items-center gap-2"><IndianRupee size={18} className="text-blue-500"/> Rs. 5.25 L.P.A.</div>
                </div>
              </div>
              <a href="mailto:hemant.parekh2012@gmail.com" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-2">
                Apply Now <Send size={18} />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-slate-100 pt-10">
              {/* Criteria */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <GraduationCap className="text-blue-600" size={22} /> Essential Criteria
                </h3>
                <ul className="space-y-4">
                  {[
                    "MBA (HR) or Graduate with 8+ years experience in End-to-End recruitment.",
                    "Experience in Manufacturing or Corporate Sectors (Non-OPC).",
                    "Proficiency in English, Hindi, and Regional languages.",
                    "Acquainted with official Tour & Travel within India."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed italic">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <FileText className="text-blue-600" size={22} /> Job Responsibilities
                </h3>
                <div className="bg-slate-50 p-6 rounded-3xl space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>• CV Invitation, Short-listing, 3-Round Interviews & On-boarding.</p>
                  <p>• Payroll, Leave, EPF, ESI & Labour Law Compliance.</p>
                  <p>• Re-location, Relieving and Full & Final Settlement.</p>
                  <p>• Plan and organize Campus Interviews in Colleges/Universities.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-4 bg-amber-50 rounded-2xl border border-amber-100 text-xs text-amber-800 italic">
               Note: This is not a Placement Consultancy. Hiring involves a rigorous 3-Round interview process.
            </div>
          </div>
        </section>

        {/* --- Job Opening 2: Social Media Influencer --- */}
        <section className="bg-slate-900 rounded-[40px] shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-5"><Users size={200} className="text-white"/></div>
          
          <div className="p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
              <div>
                <span className="px-4 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold uppercase rounded-full tracking-wider border border-blue-500/20">Campaign • Brand Promotion</span>
                <h2 className="text-3xl font-black text-white mt-4">Social Media Influencer</h2>
                <p className="text-gray-400 mt-2 max-w-xl">Experienced influencers required for long-term Online Business Advertisements (Informative) for tangible & intangible products.</p>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <a href="mailto:hemant.parekh2012@gmail.com" className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                  Submit Quotation <FileText size={18} />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-white/10 pt-10">
              {/* Target Sectors */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-blue-400 flex items-center gap-2">
                  <Target size={22} /> Target Sectors
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Textile & Garments", "Pulp & Paper", "Medical & Healthcare", "F.M.C.G.", "Industrial Projects", "Tenders & M.O.U."].map((sector, i) => (
                    <div key={i} className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-xs font-medium">
                      {sector}
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Platforms */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-blue-400">Required Platforms</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-white/80 text-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10"><FaLinkedin size={16} /> LinkedIn</div>
                  <div className="flex items-center gap-2 text-white/80 text-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10"><FaFacebook size={16} /> Facebook</div>
                  <div className="flex items-center gap-2 text-white/80 text-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10"><BsInstagram size={16} /> Instagram</div>
                  <div className="flex items-center gap-2 text-white/80 text-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10"><FaYoutube size={16} /> YouTube</div>
                </div>
                <div className="bg-blue-600/20 p-6 rounded-3xl border border-blue-500/20">
                   <p className="text-white text-sm font-bold mb-2 underline">Submission Guidelines:</p>
                   <p className="text-blue-100 text-xs leading-relaxed italic">• Quotation must be in PDF format. <br/>• Excludes 3rd Party & GST. <br/>• Must include Payment Terms & Conditions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Global Application Footer --- */}
        <div className="text-center pt-8">
           <p className="text-slate-400 text-sm mb-4">Email your Resume/CV or Quotation to:</p>
           <a href="mailto:hemant.parekh2012@gmail.com" className="text-2xl font-black text-blue-600 underline underline-offset-8 decoration-blue-200 hover:text-blue-700 transition-all">
             hemant.parekh2012@gmail.com
           </a>
        </div>

      </main>

    
    </div>
  );
};

export default CareerPage;