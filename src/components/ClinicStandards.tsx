import React from 'react';
import { ShieldCheck, Sparkles, Activity, Award, UserCheck, HeartPulse } from 'lucide-react';

export const ClinicStandards: React.FC = () => {
  const standards = [
    {
      icon: ShieldCheck,
      title: 'Class-B Autoclave Sterilization',
      description: 'Every dental handpiece, bur, and instrument undergoes rigorous medical autoclave sterilization with single-use pouches opened right before your eyes.',
    },
    {
      icon: Sparkles,
      title: 'Virtually Painless Anesthesia',
      description: 'We use ultra-fine micro-needles and computerized topical numbing gels so you barely feel any prick before your root canal or extraction.',
    },
    {
      icon: Activity,
      title: 'Low-Radiation Digital RVG X-Rays',
      description: 'Instant chairside high-definition sensor imaging exposing patients to 90% less radiation than traditional dental film X-rays.',
    },
    {
      icon: HeartPulse,
      title: 'On-Site Integrated Pharmacy',
      description: 'Immediate access to prescribed pain relievers, antibiotics, and surgical care supplies at Madhv Medical Store on the ground floor.',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
            Clinical Rigor & Patient Safety
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Why Patients Across Sanganer Trust Our Practice
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            From pediatric patients visiting for their first dental cavity filling to seniors receiving full implants, we prioritize gentle care and absolute clinical hygiene.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-teal-500/50 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
