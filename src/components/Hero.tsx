import React from 'react';
import { Phone, MapPin, Calendar, CheckCircle2, Navigation, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreCenters: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreCenters }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Proposition and Core CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 bg-teal-100/80 px-3 py-1.5 rounded-md">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Dr. Akhilesh Ray B.D.S (R.U.H.S) · Sanganer, Jaipur</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              Advanced, Painless Dental Care & Trusted Pharmacy in Sanganer.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Led by <strong className="text-slate-900 font-semibold">Dr. Akhilesh Ray B.D.S (R.U.H.S)</strong>, welcome to{' '}
              <strong className="text-slate-900 font-semibold">Akhil Dental Clinic</strong> and{' '}
              <strong className="text-slate-900 font-semibold">Puja Dental Clinic</strong>. We provide state-of-the-art
              root canals, dental implants, teeth alignment, and smile designing across two convenient Sanganer locations,
              supported on-site by <strong className="text-slate-900 font-semibold">Madhv Medical Store</strong> for all your medicine needs.
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-xl shadow-md shadow-teal-900/10 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Clinic Appointment
              </button>

              <button
                onClick={onExploreCenters}
                className="px-5 py-3.5 text-sm font-semibold text-slate-700 hover:text-teal-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all flex items-center gap-2"
              >
                <span>Explore 3 Centers</span>
                <ArrowRight className="w-4 h-4 text-teal-600" />
              </button>

              <a
                href="tel:8949775190"
                className="px-5 py-3.5 text-sm font-semibold text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-xl transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call 8949775190</span>
              </a>
            </div>

            {/* Micro value props with Doctor badge */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Dr. Akhilesh Ray (R.U.H.S)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Akhil: 7 AM – 11 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Puja: 9 AM – 9 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick-Card Hub previewing the 3 locations */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xl shadow-slate-200/50 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                  Our Healthcare Network
                </span>
                <span className="text-xs text-slate-500">Sanganer, Jaipur</span>
              </div>

              {/* Center 1: Akhil Dental Clinic */}
              <div className="p-3.5 rounded-xl bg-slate-50 hover:bg-teal-50/50 border border-slate-200/80 transition-colors">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900">1. Akhil Dental Clinic</h3>
                      <span className="text-[10px] font-bold text-teal-700 bg-teal-100 px-1.5 py-0.5 rounded">
                        7 AM - 11 PM
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      C-11 Sachivalaya Vihar, Kalyanpura, Sanganer
                    </p>
                  </div>
                  <a
                    href="tel:8949775190"
                    className="p-2 text-teal-700 hover:text-teal-900 bg-white border border-slate-200 rounded-lg shrink-0"
                    title="Call 8949775190"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200/60">
                  <span className="font-medium text-slate-700">Mob: 8949775190</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=C-11+Sachivalaya+Vihar+Kalyanpura+Sanganer+Jaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <Navigation className="w-3 h-3" />
                    Open Map
                  </a>
                </div>
              </div>

              {/* Center 2: Puja Dental Clinic */}
              <div className="p-3.5 rounded-xl bg-slate-50 hover:bg-cyan-50/50 border border-slate-200/80 transition-colors">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900">2. Puja Dental Clinic</h3>
                      <span className="text-[10px] font-bold text-cyan-700 bg-cyan-100 px-1.5 py-0.5 rounded">
                        9 AM - 9 PM
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Shop 23 Ganesh Colony, near Rampura Phatak, Sanganer
                    </p>
                  </div>
                  <a
                    href="tel:8949775190"
                    className="p-2 text-cyan-700 hover:text-cyan-900 bg-white border border-slate-200 rounded-lg shrink-0"
                    title="Call 8949775190"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200/60">
                  <span className="font-medium text-slate-700">Mob: 8949775190</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Shop+no+23+Ganesh+Colony+near+Rampura+Phatak+Sanganer+Jaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-700 font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <Navigation className="w-3 h-3" />
                    Open Map
                  </a>
                </div>
              </div>

              {/* Center 3: Madhv Medical Store */}
              <div className="p-3.5 rounded-xl bg-blue-50/50 hover:bg-blue-50 border border-blue-200/80 transition-colors">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-bold text-slate-900">3. Madhv Medical Store</h3>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">
                        7 AM - 10 PM
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      C-11 Sachivalaya Vihar, Kalyanpura (Same as Akhil Dental)
                    </p>
                  </div>
                  <a
                    href="tel:7410835259"
                    className="p-2 text-blue-700 hover:text-blue-900 bg-white border border-blue-200 rounded-lg shrink-0"
                    title="Call 7410835259"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-blue-100">
                  <span className="font-semibold text-blue-900">Contact: 7410835259</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=C-11+Sachivalaya+Vihar+Kalyanpura+Sanganer+Jaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <Navigation className="w-3 h-3" />
                    Open Map
                  </a>
                </div>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={onExploreCenters}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  View Full Details, Timings & Services ↓
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
