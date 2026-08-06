/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  ChevronDown,
  ArrowRight,
  Check,
} from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-800 flex flex-col w-full overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-[#0c1938] text-white text-[12px] py-2.5 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex flex-wrap gap-4 md:gap-8 items-center">
          <div className="flex items-center gap-2">
            <Phone size={14} /> +234-7074514950
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} /> info@unbeatableoffshore.com
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} /> KM 3 East-West Rd, Akpajo, PH, R/S
          </div>
        </div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Facebook size={14} />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <XIcon className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Linkedin size={14} />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white flex justify-between items-center pl-4 md:pl-12 shadow-sm relative z-50 h-[85px]">
        <div className="flex items-center gap-3">
          {/* Authentic Logo Approximation */}
          <div className="flex items-center gap-2">
            <div className="w-16 h-10 relative flex items-center justify-center">
              <svg viewBox="0 0 100 50" className="w-full h-full absolute">
                <path d="M10,25 Q30,5 50,25 T90,25 L90,45 Q70,25 50,45 T10,45 Z" fill="#0d529b" />
                <path d="M10,20 Q30,0 50,20 T90,20 L90,25 Q70,5 50,25 T10,25 Z" fill="#df0a15" />
                <circle cx="22" cy="25" r="7" fill="#2f99d6" />
              </svg>
              <span className="relative z-10 text-[9px] font-bold text-white ml-2">UOLS</span>
            </div>
            <div className="flex flex-col text-[10px] leading-[1.2] font-bold tracking-wide mt-1">
              <span className="text-[#0d529b]">UNBEATABLE OFFSHORE</span>
              <span className="text-[#2f99d6]">& LOGISTIC SERVICES</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center h-full">
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-slate-700 mr-10">
            <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-600 transition-colors">About Us</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Career</a>
            <a href="#" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              More Info <ChevronDown size={14} className="mt-0.5" />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <button className="hidden lg:flex bg-[#df0a15] text-white h-full px-8 items-center gap-2 font-semibold text-[15px] hover:bg-red-700 transition-colors shadow-sm">
            Speak With Us <ArrowRight size={18} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center px-4 md:px-12">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551524162-4299b9cc0cc3?q=80&w=2070&auto=format&fit=crop"
            alt="Marine Workers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0c1938]/60"></div>
        </div>
        <div className="relative z-10 max-w-3xl text-white mt-12">
          <div className="text-[13px] font-bold tracking-[0.15em] mb-4 uppercase">
            Unbeatable Offshore
          </div>
          <h1 className="text-5xl md:text-[72px] font-bold leading-[1.1] mb-10 tracking-tight">
            Simplifying the<br />marine service
          </h1>
          <div className="flex gap-4">
            <button className="bg-[#df0a15] text-white px-7 py-3.5 flex items-center justify-center gap-2 font-semibold text-[15px] hover:bg-red-700 transition-colors shadow-lg">
              About Us <ArrowRight size={18} />
            </button>
            <button className="bg-[#0b63b3] text-white px-5 py-2.5 flex items-center justify-center gap-3 font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              <span className="text-left text-[13px] leading-[1.1]">Verify<br />Liscence</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 px-4 md:px-12 max-w-[1000px] mx-auto text-center">
        <h2 className="text-[32px] font-medium text-[#111a3a] mb-8">
          Welcome, get to know who we are!
        </h2>
        <p className="text-[#666] leading-[1.8] text-[16px]">
          Starting with basic and proven fundamental necessities ready to be modified to fit the task at hand is
          the easiest, most efficient solution to save time and ensure success in all aspects of marine, engineering
          projects, be it civil, offshore, chemical, etc, effective construction activities are completed in the most
          effective and cost-efficient manner possible, that is what UNBEATABLE OFFSHORE AND LOGISTIC
          SERVICES LTD stands for.
        </p>
      </section>

      {/* Features Grid */}
      <section className="pb-28 px-4 md:px-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="flex flex-col items-center">
          <div className="w-[84px] h-[84px] rounded-full border-[3px] border-[#111a3a] flex items-center justify-center mb-6">
            <Check size={42} strokeWidth={2.5} className="text-[#111a3a]" />
          </div>
          <h3 className="text-[24px] font-medium text-[#111a3a] mb-5">We are certified</h3>
          <p className="text-[#666] text-[15px] leading-[1.8]">
            We are certified by the Nigerian Maritime Administration and Safety Agency and other related agencies
            with top quality assurance
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[84px] h-[84px] rounded-full border-[3px] border-[#111a3a] flex items-center justify-center mb-6">
            <Check size={42} strokeWidth={2.5} className="text-[#111a3a]" />
          </div>
          <h3 className="text-[24px] font-medium text-[#111a3a] mb-5">We are professionals</h3>
          <p className="text-[#666] text-[15px] leading-[1.8]">
            We are highly equipped with only professionals in different fields just for
            your need. Your business is sure on track with Unbeatble Offshore
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[84px] h-[84px] rounded-full border-[3px] border-[#111a3a] flex items-center justify-center mb-6">
            <Check size={42} strokeWidth={2.5} className="text-[#111a3a]" />
          </div>
          <h3 className="text-[24px] font-medium text-[#111a3a] mb-5">We are unbeatable</h3>
          <p className="text-[#666] text-[15px] leading-[1.8]">
            We are certified, professionals and unbeatable in the marine industry.
            With our wealth of experienced, tools and the best human resource we
            pride to give only the best
          </p>
        </div>
      </section>

      {/* Split Image / Text Section */}
      <section className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/2 min-h-[500px] relative">
          <img
            src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2070&auto=format&fit=crop"
            alt="Engineering Workers"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 bg-[#1b2a47] text-white p-12 md:p-[100px] flex flex-col justify-center items-start">
          <h2 className="text-[28px] md:text-[34px] font-medium leading-[1.4] mb-10 text-white tracking-wide">
            Our desire therefore is to contribute to better and safer industrial practices
            through adequate planning and execution of projects bearing in mind
            the demands of the environment and statutory regulations.
          </h2>
          <button className="bg-[#df0a15] text-white px-8 py-3.5 flex items-center gap-2 font-semibold text-[15px] hover:bg-red-700 transition-colors shadow-lg">
            Speak With Us <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Services Grid (No Gaps) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        <div className="relative h-[360px] group overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504913659239-6affa48411bc?q=80&w=800&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Vessel Manning"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-8">
            <h3 className="text-white font-bold text-[15px] tracking-wide leading-snug">
              VESSEL MANNING & OFFSHORE<br/>CREW MANAGEMENT
            </h3>
          </div>
        </div>
        <div className="relative h-[360px] group overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Vessel Chartering"
          />
          <div className="absolute inset-0 bg-[#df0a15]/70 flex items-end p-8">
            <h3 className="text-white font-bold text-[15px] tracking-wide leading-snug">
              VESSEL CHARTERING & VESSEL<br/>MANAGEMENT SERVICES
            </h3>
          </div>
        </div>
        <div className="relative h-[360px] group overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=800&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Vessel Acquisition"
          />
          <div className="absolute inset-0 bg-[#0d529b]/70 flex items-end p-8">
            <h3 className="text-white font-bold text-[15px] tracking-wide leading-snug">
              VESSEL ACQUISITION & SHIP<br/>BUILDING SUPERVISION
            </h3>
          </div>
        </div>
        <div className="relative h-[360px] group overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=800&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Security Service"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-8">
            <h3 className="text-white font-bold text-[15px] tracking-wide leading-snug">
              SECURITY SERVICE FOR VESSELS<br/>AND OFFSHORE ASSETS
            </h3>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="bg-[#df0a15] text-white py-[100px] px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://images.unsplash.com/photo-1584851275981-229f3d5ea76e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-[42px] md:text-[50px] font-medium mb-4">We are just a call away?</h2>
          <p className="mb-10 text-white/95 text-[16px]">
            Get better results in your business by giving us a quick call!
          </p>
          <button className="bg-white text-[#df0a15] px-8 py-3.5 font-bold text-[15px] flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-md">
            Speak With Us <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Partners Logos Section */}
      <section className="py-24 px-4 md:px-12 max-w-[1200px] mx-auto w-full">
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-16 opacity-90 items-center">
          {/* Row 1 */}
          <div className="flex flex-col items-center">
            <span className="font-extrabold text-[32px] tracking-tighter text-black">SPM</span>
            <span className="text-[7px] font-semibold uppercase tracking-[0.2em] mt-1 text-black">Safety Propels Mileage</span>
          </div>
          <div className="flex items-center gap-2 text-blue-500 font-bold">
            <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2l4 8h-8z"/></svg>
            </div>
            <div className="flex flex-col leading-[1.1] text-[11px] text-[#0d529b]">
              <span>LIMTECH MARINE</span>
              <span className="text-[7px] text-blue-400 font-normal">SUPPORTING PLATFORM COMPANY</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center transform rotate-12">
               <span className="font-bold text-[20px] text-white -rotate-12 italic tracking-tighter">JECL</span>
            </div>
            <div className="w-16 h-1.5 bg-orange-500 mt-1 rounded-sm"></div>
          </div>
          <div className="font-black text-[30px] tracking-[0.1em] text-[#5c3a21] border-b-[3px] border-[#5c3a21] border-dashed pb-1">
            BRICKS
          </div>
          <div className="text-blue-900 relative">
             <div className="text-[55px] leading-none text-[#1d2777]">⚓</div>
             <div className="absolute inset-0 flex items-center justify-center text-red-600 font-bold text-xl mt-1">M</div>
          </div>
          {/* Row 2 */}
          <div className="text-[#3b82f6] font-medium text-[15px] tracking-widest flex items-center gap-2 mt-4">
            <div className="text-cyan-400 text-2xl">⚡</div> nordic hamburg
          </div>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-16 h-16 rounded-full border-[6px] border-cyan-400 flex items-center justify-center font-black text-2xl text-blue-900 bg-white shadow-sm">
              CHA
            </div>
            <div className="flex flex-col text-[12px] leading-[1.1] font-bold text-blue-900">
              <span>ENGINEERS</span>
              <span className="tracking-widest">LIMITED</span>
            </div>
          </div>
          <div className="font-bold text-[32px] leading-[0.9] text-[#1e6e5a] tracking-tighter flex items-center mt-4">
            INTER
            <br/>GULF
          </div>
          <div className="flex items-center text-[#68a0d2] font-medium text-[20px] tracking-[0.15em] mt-4">
            <div className="w-8 h-8 rounded-full border-[3px] border-[#68a0d2] mr-2 flex items-center justify-center text-[15px]">M</div>
            ARTIDE
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#111a3a] text-gray-300 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          <div className="pr-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-[72px] h-[45px] relative flex items-center justify-center">
                <svg viewBox="0 0 100 50" className="w-full h-full absolute">
                  <path d="M10,25 Q30,5 50,25 T90,25 L90,45 Q70,25 50,45 T10,45 Z" fill="#0d529b" />
                  <path d="M10,20 Q30,0 50,20 T90,20 L90,25 Q70,5 50,25 T10,25 Z" fill="#df0a15" />
                </svg>
                <span className="relative z-10 text-[11px] font-bold text-white ml-2">UOLS</span>
              </div>
              <div className="flex flex-col text-[11px] leading-[1.3] text-white font-bold tracking-wide mt-1">
                <span>UNBEATABLE OFFSHORE</span>
                <span className="text-[#2f99d6]">& LOGISTIC SERVICES</span>
              </div>
            </div>
            <p className="text-[14px] leading-[1.8] text-[#a0aec0]">
              UNBEATABLE OFFSHORE AND LOGISTIC SERVICES LTD is an independent corporation adaptable to the needs of the oil & gas, marine and construction industries, both onshore and offshore.
            </p>
          </div>

          <div className="md:ml-12">
            <h4 className="text-white text-[18px] font-medium mb-8">Quick Links</h4>
            <ul className="space-y-4 text-[15px] text-[#a0aec0]">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Policies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[18px] font-medium mb-8">Office Address</h4>
            <p className="text-[15px] text-[#a0aec0] leading-[1.8] mb-8 pr-8">
              Km3 East West Road, Eleme/Akpajo Express way, Eleme, Port Harcourt, Rivers State.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#111a3a] hover:bg-gray-200 transition-colors">
                <Facebook size={16} fill="currentColor" stroke="none" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#111a3a] hover:bg-gray-200 transition-colors">
                <XIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#111a3a] hover:bg-gray-200 transition-colors">
                <Linkedin size={16} fill="currentColor" stroke="none" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom Bar */}
      <div className="bg-white text-[#666] py-6 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center text-[14px]">
        <p>© Unbeatable Offshore and Logistics Services 2023</p>
        <p className="mt-2 md:mt-0">
          Site Credit: <span className="text-[#df0a15]">Calen SME Tech</span>
        </p>
      </div>
    </div>
  );
}


