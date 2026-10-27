import React from 'react';
import { Phone, MapPin, Navigation, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { FACILITIES, DENTAL_SERVICES } from '../data/clinicData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Top 3-Center Overview Band */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-bold text-teal-400 uppercase tracking-widest">
              Our 3 Sanganer Centers at a Glance
            </span>
            <h3 className="text-lg font-bold text-white mt-1">
              Direct Contact & Navigation Links
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Akhil Dental Clinic */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white">Akhil Dental Clinic</h4>
                <span className="text-[10px] font-mono text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/60">
                  Main Center
                </span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                C-11 Sachivalaya Vihar, Kalyanpura, Sanganer, Jaipur
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <a
                  href="tel:8949775190"
                  className="font-bold text-teal-300 hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>8949775190</span>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=C-11+Sachivalaya+Vihar+Kalyanpura+Sanganer+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white flex items-center gap-1 font-medium text-[11px]"
                >
                  <Navigation className="w-3 h-3 text-teal-400" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>

            {/* Puja Dental Clinic */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white">Puja Dental Clinic</h4>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
                  Branch 2
                </span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Shop no. 23 Ganesh Colony, near Rampura Phatak, Sanganer, Jaipur
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <a
                  href="tel:8949775190"
                  className="font-bold text-cyan-300 hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>8949775190</span>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Shop+no+23+Ganesh+Colony+near+Rampura+Phatak+Sanganer+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white flex items-center gap-1 font-medium text-[11px]"
                >
                  <Navigation className="w-3 h-3 text-cyan-400" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>

            {/* Madhv Medical Store */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white">Madhv Medical Store</h4>
                <span className="text-[10px] font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/60">
                  Pharmacy
                </span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                C-11 Sachivalaya Vihar, Kalyanpura, Sanganer, Jaipur
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <a
                  href="tel:7410835259"
                  className="font-bold text-blue-300 hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>7410835259</span>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=C-11+Sachivalaya+Vihar+Kalyanpura+Sanganer+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white flex items-center gap-1 font-medium text-[11px]"
                >
                  <Navigation className="w-3 h-3 text-blue-400" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold">
                A
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Akhil Dental Clinic
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Providing trusted, hygienic, and pain-free dental treatments across Sanganer with dual clinic branches (Kalyanpura & Rampura Phatak) and co-located on-site pharmaceutical care at Madhv Medical Store.
            </p>
            <div className="flex items-center gap-3 text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-teal-400">
                <ShieldCheck className="w-3.5 h-3.5" /> ISO & Autoclave Standards
              </span>
              <span>·</span>
              <span>Jaipur, Rajasthan</span>
            </div>
          </div>

          {/* Dental Services (All 10 listed) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Available Dental Services
            </span>
            <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-400">
              {DENTAL_SERVICES.map((s) => (
                <a
                  key={s.id}
                  href="#dental-services"
                  className="hover:text-teal-300 transition-colors line-clamp-1"
                >
                  • {s.shortName}
                </a>
              ))}
            </div>
          </div>

          {/* Contact and Timings */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Clinic Working Hours (Daily)
            </span>
            <div className="space-y-2 text-[11px] text-slate-300">
              <p>
                <strong className="text-teal-300">Akhil Dental Clinic:</strong>
                <br />
                7:00 AM – 11:00 PM (All 7 Days)
              </p>
              <p>
                <strong className="text-cyan-300">Puja Dental Clinic:</strong>
                <br />
                9:00 AM – 9:00 PM (All 7 Days)
              </p>
              <p>
                <strong className="text-blue-300">Madhv Medical Store:</strong>
                <br />
                7:00 AM – 10:00 PM (All 7 Days)
              </p>
              <p className="pt-1 text-slate-400">
                Dental Helpline: <strong className="text-white">8949775190</strong>
                <br />
                Pharmacy: <strong className="text-white">7410835259</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Akhil Dental Clinic, Puja Dental Clinic & Madhv Medical Store. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Sanganer, Jaipur, Rajasthan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
