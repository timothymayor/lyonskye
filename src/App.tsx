/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import industrialPracticeImg from './assets/images/regenerated_image_1786059376955.jpg';
import heroSlide2Img from './assets/images/hero_marine_technician_1786064954171.jpg';
import heroSlide1Img from './assets/images/regenerated_image_1786061313011.jpg';
import heroSlide3Img from './assets/images/regenerated_image_1786061855609.jpg';
import heroSlide4Img from './assets/images/regenerated_image_1786060986104.jpg';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  ChevronDown,
  ArrowRight,
  Check,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const heroSlides = [
  {
    id: 1,
    subtitle: 'Unbeatable Offshore',
    title: 'Simplifying the\nmarine service',
    image: heroSlide1Img,
    primaryBtn: 'About Us',
    secondaryBtn: 'Verify Licence',
  },
  {
    id: 2,
    subtitle: 'Unbeatable Offshore',
    title: 'Simplifying the\nmarine service',
    image: heroSlide2Img,
    primaryBtn: 'About Us',
    secondaryBtn: 'Verify Licence',
  },
  {
    id: 3,
    subtitle: 'Unbeatable Offshore',
    title: 'Simplifying the\nmarine service',
    image: heroSlide3Img,
    primaryBtn: 'About Us',
    secondaryBtn: 'Verify Licence',
  }, 
   {
    id: 4,
    subtitle: 'Unbeatable Offshore',
    title: 'Simplifying the\nmarine service',
    image: heroSlide4Img,
    primaryBtn: 'About Us',
    secondaryBtn: 'Verify Licence',
  }, 
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreInfoOpen, setMoreInfoOpen] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="min-h-screen font-sans text-slate-800 flex flex-col w-full overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-[#0c1938] text-white text-[11px] sm:text-[12px] py-2.5 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-3">
        <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-6 md:gap-8 items-center text-center sm:text-left">
          <a href="tel:+2347074514950" className="flex items-center gap-1.5 hover:text-blue-300 transition-colors">
            <Phone size={13} className="shrink-0 text-[#2f99d6]" /> +234-7074514950
          </a>
          <a href="mailto:info@unbeatableoffshore.com" className="flex items-center gap-1.5 hover:text-blue-300 transition-colors">
            <Mail size={13} className="shrink-0 text-[#2f99d6]" /> info@unbeatableoffshore.com
          </a>
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="shrink-0 text-[#2f99d6]" /> KM 3 East-West Rd, Akpajo, PH, R/S
          </div>
        </div>
        <div className="flex gap-4 items-center shrink-0 pt-1 md:pt-0">
          <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition-colors p-1">
            <Facebook size={14} />
          </a>
          <a href="#" aria-label="X" className="hover:text-blue-400 transition-colors p-1">
            <XIcon className="w-3.5 h-3.5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors p-1">
            <Linkedin size={14} />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white flex justify-between items-center px-4 md:pl-12 shadow-sm relative z-50 h-[75px] md:h-[85px]">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-14 h-9 sm:w-16 sm:h-10 relative flex items-center justify-center shrink-0">
              <svg viewBox="0 0 100 50" className="w-full h-full absolute">
                <path d="M10,25 Q30,5 50,25 T90,25 L90,45 Q70,25 50,45 T10,45 Z" fill="#0d529b" />
                <path d="M10,20 Q30,0 50,20 T90,20 L90,25 Q70,5 50,25 T10,25 Z" fill="#df0a15" />
                <circle cx="22" cy="25" r="7" fill="#2f99d6" />
              </svg>
              <span className="relative z-10 text-[8px] sm:text-[9px] font-bold text-white ml-2">UOLS</span>
            </div>
            <div className="flex flex-col text-[9px] sm:text-[10px] leading-[1.2] font-bold tracking-wide mt-0.5">
              <span className="text-[#0d529b]">UNBEATABLE OFFSHORE</span>
              <span className="text-[#2f99d6]">& LOGISTIC SERVICES</span>
            </div>
          </a>
        </div>
        
        {/* Desktop Links */}
        <div className="flex items-center h-full">
          <div className="hidden lg:flex items-center gap-7 lg:gap-8 text-[15px] font-medium text-slate-700 mr-8 lg:mr-10">
            <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-600 transition-colors">About Us</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Career</a>
            <div className="relative group/menu">
              <a href="#" className="flex items-center gap-1 hover:text-blue-600 transition-colors py-2">
                More Info <ChevronDown size={14} className="mt-0.5" />
              </a>
              <div className="absolute top-full left-0 hidden group-hover/menu:block w-48 bg-white shadow-xl rounded-b-lg border border-slate-100 py-2 z-50">
                <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">Policies</a>
                <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">Certifications</a>
                <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">Verify Licence</a>
              </div>
            </div>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <button className="hidden lg:flex bg-[#df0a15] text-white h-full px-8 items-center gap-2 font-semibold text-[15px] hover:bg-red-700 transition-colors shadow-sm">
            <span>Speak With Us</span>
            <ArrowRight size={18} />
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 text-slate-800 hover:text-[#0d529b] focus:outline-none focus:ring-2 focus:ring-[#0d529b] rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[115px] sm:top-[120px] bottom-0 bg-slate-900/60 backdrop-blur-sm z-40 flex flex-col justify-start animate-fadeIn">
          <div className="bg-white border-b border-slate-200 shadow-2xl p-6 flex flex-col gap-4 max-h-[85vh] overflow-y-auto">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-semibold text-slate-800 hover:text-[#0d529b] py-2 border-b border-slate-100 flex items-center justify-between"
            >
              Home
              <ChevronRight size={18} className="text-slate-400" />
            </a>
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-semibold text-slate-800 hover:text-[#0d529b] py-2 border-b border-slate-100 flex items-center justify-between"
            >
              About Us
              <ChevronRight size={18} className="text-slate-400" />
            </a>
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-semibold text-slate-800 hover:text-[#0d529b] py-2 border-b border-slate-100 flex items-center justify-between"
            >
              Services
              <ChevronRight size={18} className="text-slate-400" />
            </a>
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-semibold text-slate-800 hover:text-[#0d529b] py-2 border-b border-slate-100 flex items-center justify-between"
            >
              Career
              <ChevronRight size={18} className="text-slate-400" />
            </a>
            
            {/* Submenu for More Info */}
            <div className="border-b border-slate-100 py-2">
              <button
                onClick={() => setMoreInfoOpen(!moreInfoOpen)}
                className="w-full text-left text-[16px] font-semibold text-slate-800 hover:text-[#0d529b] flex items-center justify-between"
              >
                More Info
                <ChevronDown size={18} className={`text-slate-400 transition-transform ${moreInfoOpen ? 'rotate-180' : ''}`} />
              </button>
              {moreInfoOpen && (
                <div className="pl-4 pt-3 flex flex-col gap-2.5 text-slate-600">
                  <a href="#" onClick={() => setMobileMenuOpen(false)} className="py-1 text-sm hover:text-[#0d529b]">Policies</a>
                  <a href="#" onClick={() => setMobileMenuOpen(false)} className="py-1 text-sm hover:text-[#0d529b]">Certifications</a>
                  <a href="#" onClick={() => setMobileMenuOpen(false)} className="py-1 text-sm hover:text-[#0d529b]">Verify Licence</a>
                </div>
              )}
            </div>

            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-semibold text-slate-800 hover:text-[#0d529b] py-2 border-b border-slate-100 flex items-center justify-between"
            >
              Contact
              <ChevronRight size={18} className="text-slate-400" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#df0a15] text-white py-3.5 px-6 rounded-lg font-semibold text-[15px] flex items-center justify-center gap-2 hover:bg-red-700 transition-colors shadow-md mt-2"
            >
              <span>Speak With Us</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Hero Automatic Slider Section */}
      <section
        className="relative min-h-[500px] sm:min-h-[560px] md:h-[650px] flex items-center px-4 sm:px-8 md:px-12 py-16 md:py-0 overflow-hidden select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slider Background Images */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.subtitle}
              className="w-full h-full object-cover scale-105 transition-transform duration-10000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c1938]/90 via-[#0c1938]/70 md:via-[#0c1938]/60 to-[#0c1938]/30 md:to-transparent"></div>
          </div>
        ))}

        {/* Slider Content */}
        <div className="relative z-10 max-w-3xl text-white my-auto pl-0 sm:pl-2 md:pl-6 w-full">
          <div className="text-[12px] sm:text-[13px] font-bold tracking-[0.18em] mb-3 sm:mb-4 uppercase text-[#4ea6e0] transition-all duration-500">
            {heroSlides[currentSlide].subtitle}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[68px] font-bold leading-[1.15] md:leading-[1.12] mb-8 sm:mb-10 tracking-tight whitespace-pre-line min-h-[100px] sm:min-h-[120px] md:min-h-[160px] flex items-center">
            {heroSlides[currentSlide].title}
          </h1>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center">
            <button className="bg-[#df0a15] text-white px-7 py-3.5 flex items-center justify-center gap-2.5 font-semibold text-[15px] hover:bg-red-700 transition-colors shadow-xl group whitespace-nowrap rounded-sm sm:rounded-none">
              <span>{heroSlides[currentSlide].primaryBtn}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-[#0b63b3] text-white px-7 py-3.5 flex items-center justify-center gap-2.5 font-semibold text-[15px] hover:bg-blue-700 transition-colors shadow-xl group whitespace-nowrap rounded-sm sm:rounded-none">
              <span>{heroSlides[currentSlide].secondaryBtn}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-[#4ea6e0]' : 'w-2.5 bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1000px] mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-[#111a3a] mb-6 md:mb-8">
          Welcome, get to know who we are!
        </h2>
        <p className="text-[#666] leading-[1.8] text-sm sm:text-base md:text-[16px]">
          Starting with basic and proven fundamental necessities ready to be modified to fit the task at hand is
          the easiest, most efficient solution to save time and ensure success in all aspects of marine, engineering
          projects, be it civil, offshore, chemical, etc, effective construction activities are completed in the most
          effective and cost-efficient manner possible, that is what UNBEATABLE OFFSHORE AND LOGISTIC
          SERVICES LTD stands for.
        </p>
      </section>

      {/* Features Grid */}
      <section className="pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
        <div className="relative overflow-hidden flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200/70 group cursor-pointer">
          {/* Light Gradient Background Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-sky-50/40 to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-full border-[3px] border-[#111a3a] flex items-center justify-center mb-5 sm:mb-6 transition-all duration-300 group-hover:bg-[#111a3a] group-hover:scale-110 shadow-md">
              <Check size={36} strokeWidth={2.5} className="text-[#111a3a] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl sm:text-[24px] font-medium text-[#111a3a] mb-4 sm:mb-5 transition-colors duration-300 group-hover:text-[#df0a15]">We are certified</h3>
            <p className="text-[#666] text-sm sm:text-[15px] leading-[1.8]">
              We are certified by the Nigerian Maritime Administration and Safety Agency and other related agencies
              with top quality assurance
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200/70 group cursor-pointer">
          {/* Light Gradient Background Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-sky-50/40 to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-full border-[3px] border-[#111a3a] flex items-center justify-center mb-5 sm:mb-6 transition-all duration-300 group-hover:bg-[#111a3a] group-hover:scale-110 shadow-md">
              <Check size={36} strokeWidth={2.5} className="text-[#111a3a] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl sm:text-[24px] font-medium text-[#111a3a] mb-4 sm:mb-5 transition-colors duration-300 group-hover:text-[#df0a15]">We are professionals</h3>
            <p className="text-[#666] text-sm sm:text-[15px] leading-[1.8]">
              We are highly equipped with only professionals in different fields just for
              your need. Your business is sure on track with Unbeatble Offshore
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200/70 group cursor-pointer">
          {/* Light Gradient Background Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-sky-50/40 to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-full border-[3px] border-[#111a3a] flex items-center justify-center mb-5 sm:mb-6 transition-all duration-300 group-hover:bg-[#111a3a] group-hover:scale-110 shadow-md">
              <Check size={36} strokeWidth={2.5} className="text-[#111a3a] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl sm:text-[24px] font-medium text-[#111a3a] mb-4 sm:mb-5 transition-colors duration-300 group-hover:text-[#df0a15]">We are unbeatable</h3>
            <p className="text-[#666] text-sm sm:text-[15px] leading-[1.8]">
              We are certified, professionals and unbeatable in the marine industry.
              With our wealth of experienced, tools and the best human resource we
              pride to give only the best
            </p>
          </div>
        </div>
      </section>

      {/* Split Image / Text Section */}
      <section className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 min-h-[300px] sm:min-h-[380px] md:min-h-[520px] relative overflow-hidden">
          <img
            src={industrialPracticeImg}
            alt="Industrial Practices & Marine Engineering"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full md:w-1/2 bg-[#0a1c48] text-white p-6 sm:p-10 md:p-16 lg:p-20 flex flex-col justify-center items-start">
          <h2 className="text-xl sm:text-2xl md:text-[30px] lg:text-[36px] font-semibold leading-[1.35] mb-8 sm:mb-10 text-white tracking-normal">
            Our desire therefore is to contribute to better and safer industrial practices through adequate planning and execution of projects bearing in mind the demands of the environment and statutory regulations.
          </h2>
          <button className="bg-[#df0a15] text-white px-7 py-3.5 flex items-center gap-2.5 font-semibold text-[15px] hover:bg-red-700 transition-colors shadow-lg group">
            <span>Speak With Us</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Services Grid (No Gaps) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
        <div className="relative h-[280px] sm:h-[320px] md:h-[360px] group overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504913659239-6affa48411bc"
            className="w-full h-full object-cover"
            alt="Vessel Manning"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6 sm:p-8">
            <h3 className="text-white font-bold text-sm sm:text-[15px] tracking-wide leading-snug">
              VESSEL MANNING & OFFSHORE<br/>CREW MANAGEMENT
            </h3>
          </div>
        </div>
        <div className="relative h-[280px] sm:h-[320px] md:h-[360px] group overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
            className="w-full h-full object-cover"
            alt="Vessel Chartering"
          />
          <div className="absolute inset-0 bg-[#df0a15]/75 flex items-end p-6 sm:p-8">
            <h3 className="text-white font-bold text-sm sm:text-[15px] tracking-wide leading-snug">
              VESSEL CHARTERING & VESSEL<br/>MANAGEMENT SERVICES
            </h3>
          </div>
        </div>
        <div className="relative h-[280px] sm:h-[320px] md:h-[360px] group overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7"
            className="w-full h-full object-cover"
            alt="Vessel Acquisition"
          />
          <div className="absolute inset-0 bg-[#0d529b]/75 flex items-end p-6 sm:p-8">
            <h3 className="text-white font-bold text-sm sm:text-[15px] tracking-wide leading-snug">
              VESSEL ACQUISITION & SHIP<br/>BUILDING SUPERVISION
            </h3>
          </div>
        </div>
        <div className="relative h-[280px] sm:h-[320px] md:h-[360px] group overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1"
            className="w-full h-full object-cover"
            alt="Security Service"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6 sm:p-8">
            <h3 className="text-white font-bold text-sm sm:text-[15px] tracking-wide leading-snug">
              SECURITY SERVICE FOR VESSELS<br/>AND OFFSHORE ASSETS
            </h3>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="bg-[#df0a15] text-white py-16 sm:py-20 md:py-[100px] px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://images.unsplash.com/photo-1584851275981-229f3d5ea76e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-[50px] font-medium mb-4">We are just a call away?</h2>
          <p className="mb-8 sm:mb-10 text-white/95 text-sm sm:text-base md:text-[16px]">
            Get better results in your business by giving us a quick call!
          </p>
          <button className="bg-white text-[#df0a15] px-8 py-3.5 font-bold text-[15px] flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-md rounded-sm">
            <span>Speak With Us</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Partners Logos Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1200px] mx-auto w-full">
        <div className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 md:gap-x-20 gap-y-8 sm:gap-y-12 opacity-90">
          {/* Row 1 */}
          <div className="flex flex-col items-center">
            <span className="font-extrabold text-2xl sm:text-[32px] tracking-tighter text-black">SPM</span>
            <span className="text-[6px] sm:text-[7px] font-semibold uppercase tracking-[0.2em] mt-1 text-black">Safety Propels Mileage</span>
          </div>
          <div className="flex items-center gap-2 text-blue-500 font-bold">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M12 2l4 8h-8z"/></svg>
            </div>
            <div className="flex flex-col leading-[1.1] text-[10px] sm:text-[11px] text-[#0d529b]">
              <span>LIMTECH MARINE</span>
              <span className="text-[6px] sm:text-[7px] text-blue-400 font-normal">SUPPORTING PLATFORM COMPANY</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-900 rounded-full flex items-center justify-center transform rotate-12">
               <span className="font-bold text-base sm:text-[20px] text-white -rotate-12 italic tracking-tighter">JECL</span>
            </div>
            <div className="w-14 sm:w-16 h-1.5 bg-orange-500 mt-1 rounded-sm"></div>
          </div>
          <div className="font-black text-2xl sm:text-[30px] tracking-[0.1em] text-[#5c3a21] border-b-[3px] border-[#5c3a21] border-dashed pb-1">
            BRICKS
          </div>
          <div className="text-blue-900 relative">
             <div className="text-4xl sm:text-[55px] leading-none text-[#1d2777]">⚓</div>
             <div className="absolute inset-0 flex items-center justify-center text-red-600 font-bold text-lg sm:text-xl mt-1">M</div>
          </div>
          {/* Row 2 */}
          <div className="text-[#3b82f6] font-medium text-sm sm:text-[15px] tracking-widest flex items-center gap-2">
            <div className="text-cyan-400 text-xl sm:text-2xl">⚡</div> nordic hamburg
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-[4px] sm:border-[6px] border-cyan-400 flex items-center justify-center font-black text-lg sm:text-2xl text-blue-900 bg-white shadow-sm">
              CHA
            </div>
            <div className="flex flex-col text-[10px] sm:text-[12px] leading-[1.1] font-bold text-blue-900">
              <span>ENGINEERS</span>
              <span className="tracking-widest">LIMITED</span>
            </div>
          </div>
          <div className="font-bold text-2xl sm:text-[32px] leading-[0.9] text-[#1e6e5a] tracking-tighter flex items-center">
            INTER
            <br/>GULF
          </div>
          <div className="flex items-center text-[#68a0d2] font-medium text-lg sm:text-[20px] tracking-[0.15em]">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-[3px] border-[#68a0d2] mr-2 flex items-center justify-center text-xs sm:text-[15px]">M</div>
            ARTIDE
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#111a3a] text-gray-300 pt-16 sm:pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-[64px] h-[40px] sm:w-[72px] sm:h-[45px] relative flex items-center justify-center shrink-0">
                <svg viewBox="0 0 100 50" className="w-full h-full absolute">
                  <path d="M10,25 Q30,5 50,25 T90,25 L90,45 Q70,25 50,45 T10,45 Z" fill="#0d529b" />
                  <path d="M10,20 Q30,0 50,20 T90,20 L90,25 Q70,5 50,25 T10,25 Z" fill="#df0a15" />
                </svg>
                <span className="relative z-10 text-[10px] sm:text-[11px] font-bold text-white ml-2">UOLS</span>
              </div>
              <div className="flex flex-col text-[10px] sm:text-[11px] leading-[1.3] text-white font-bold tracking-wide mt-0.5">
                <span>UNBEATABLE OFFSHORE</span>
                <span className="text-[#2f99d6]">& LOGISTIC SERVICES</span>
              </div>
            </div>
            <p className="text-xs sm:text-[14px] leading-[1.8] text-[#a0aec0]">
              UNBEATABLE OFFSHORE AND LOGISTIC SERVICES LTD is an independent corporation adaptable to the needs of the oil & gas, marine and construction industries, both onshore and offshore.
            </p>
          </div>

          <div className="md:ml-6 lg:ml-12">
            <h4 className="text-white text-base sm:text-[18px] font-medium mb-4 sm:mb-8">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-[15px] text-[#a0aec0]">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Policies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-base sm:text-[18px] font-medium mb-4 sm:mb-8">Office Address</h4>
            <p className="text-xs sm:text-[15px] text-[#a0aec0] leading-[1.8] mb-6 sm:mb-8 pr-0 md:pr-8">
              Km3 East West Road, Eleme/Akpajo Express way, Eleme, Port Harcourt, Rivers State.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#111a3a] hover:bg-gray-200 transition-colors">
                <Facebook size={16} fill="currentColor" stroke="none" />
              </a>
              <a href="#" aria-label="X" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#111a3a] hover:bg-gray-200 transition-colors">
                <XIcon className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#111a3a] hover:bg-gray-200 transition-colors">
                <Linkedin size={16} fill="currentColor" stroke="none" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom Bar */}
      <div className="bg-white text-[#666] py-6 px-4 md:px-12 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2 text-xs sm:text-[14px]">
        <p>© Unbeatable Offshore and Logistics Services 2023</p>
        <p>
          Site Credit: <span className="text-[#df0a15]">Calen SME Tech</span>
        </p>
      </div>
    </div>
  );
}



