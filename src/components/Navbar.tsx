import React, { useState } from 'react';
import { Phone, MapPin, Calendar, Menu, X, Clock, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (preferredClinicId?: string) => void;
  onSelectFacility: (id: 'akhil-dental' | 'puja-dental' | 'madhv-medical') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onSelectFacility }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top emergency & quick contact banner */}
      <div className="bg-slate-900 text-slate-300 text-xs px-4 py-2 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              Sanganer, Jaipur: Kalyanpura (Sachivalaya Vihar) & Rampura Phatak
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              Akhil: 7 AM–11 PM · Puja: 9 AM–9 PM · Madhv: 7 AM–10 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:8949775190"
              className="flex items-center gap-1.5 text-teal-300 hover:text-teal-200 font-semibold tracking-wide transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Dental Helpline: 8949775190
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="tel:7410835259"
              className="flex items-center gap-1.5 text-sky-300 hover:text-sky-200 font-medium transition-colors"
            >
              Medical Store: 7410835259
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar adhering strictly to Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Wordmark / Brand element */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-700 flex items-center justify-center text-white shadow-sm shadow-teal-700/20 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8 2 5 5 5 9c0 4 2 8 3 13 1-1 2-2 4-2s3 1 4 2c1-5 3-9 3-13 0-4-3-7-7-7z" />
                <path d="M9 10c1 1 2 1 3 1s2 0 3-1" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-800 transition-colors whitespace-nowrap">
                Akhil Dental Clinic
              </span>
              <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap hidden sm:inline">
                & Puja Dental Clinic · Madhv Medical Store
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a
              href="#doctor-profile"
              className="hover:text-teal-700 transition-colors whitespace-nowrap font-semibold text-teal-800"
            >
              Dr. Akhilesh Ray
            </a>
            <a
              href="#explore-centers"
              className="hover:text-teal-700 transition-colors whitespace-nowrap"
            >
              Explore 3 Centers
            </a>
            <a
              href="#dental-services"
              className="hover:text-teal-700 transition-colors whitespace-nowrap"
            >
              Dental Services
            </a>
            <a
              href="#interactive-map"
              className="hover:text-teal-700 transition-colors whitespace-nowrap"
            >
              Maps & Navigation
            </a>
            <a
              href="#madhv-store"
              className="hover:text-teal-700 transition-colors whitespace-nowrap"
            >
              Madhv Medical Store
            </a>
            <a
              href="#patient-reviews"
              className="hover:text-teal-700 transition-colors whitespace-nowrap"
            >
              Reviews & FAQ
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="tel:8949775190"
              className="px-3.5 py-2 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200 rounded-lg hover:bg-teal-100 transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              Call 8949775190
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-lg shadow-sm shadow-teal-900/10 transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Appointment
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-medium text-white bg-teal-700 rounded-lg sm:hidden whitespace-nowrap"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-2 pt-1 text-sm font-medium text-slate-700">
            <a
              href="#explore-centers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Explore 3 Centers
            </a>
            <a
              href="#dental-services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              All 10 Dental Services
            </a>
            <a
              href="#interactive-map"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Location Maps & Directions
            </a>
            <a
              href="#madhv-store"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Madhv Medical Store (7410835259)
            </a>
            <a
              href="#patient-reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Reviews & FAQ
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <div className="text-xs text-slate-500 font-medium px-3">Quick Helplines</div>
            <a
              href="tel:8949775190"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-teal-900 bg-teal-50 border border-teal-200 rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700" />
              Call Akhil & Puja Dental: 8949775190
            </a>
            <a
              href="tel:7410835259"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-sky-900 bg-sky-50 border border-sky-200 rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-sky-700" />
              Call Madhv Medical: 7410835259
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 text-xs font-semibold text-white bg-teal-700 rounded-lg shadow-sm"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
