import React, { useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Shield,
  HelpCircle,
  X,
  Stethoscope,
  Smile,
  Zap,
} from 'lucide-react';
import { DENTAL_SERVICES, DentalService } from '../data/clinicData';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalService, setActiveModalService] = useState<DentalService | null>(null);

  const categories = [
    'All',
    'Endodontics',
    'Restorative',
    'Surgical',
    'Orthodontics',
    'Aesthetic',
    'Prosthodontics',
    'Specialist',
  ];

  const filteredServices =
    selectedCategory === 'All'
      ? DENTAL_SERVICES
      : DENTAL_SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="dental-services" className="py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div>
            <div className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">
              Available at Akhil Dental & Puja Dental Clinics
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Dental Treatments & Oral Surgery
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-3xl">
              Both Akhil Dental Clinic (Kalyanpura) and Puja Dental Clinic (Rampura Phatak) provide full dental care equipped with painless rotary systems, digital RVG diagnostics, and hospital-grade sterilization.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-end">
            <span className="text-xs text-slate-500 font-medium">10 Speciality Procedures</span>
            <span className="text-slate-300">·</span>
            <span className="text-xs font-semibold text-teal-700">100% Painless Protocol</span>
          </div>
        </div>

        {/* Category Filter Pills (Functional interactive buttons) */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 10 Services Bento Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 hover:border-teal-400 bg-white hover:shadow-lg transition-all p-6 sm:p-7"
              >
                <div>
                  {/* Category & index */}
                  <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
                    <span className="font-semibold text-teal-800 tracking-wide uppercase text-[10px]">
                      {service.category}
                    </span>
                    <span className="font-mono text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                    {service.name}
                  </h3>

                  <p className="mt-2 text-xs font-medium text-teal-700">
                    {service.tagline}
                  </p>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Treatment Specs Info Bar */}
                  <div className="mt-5 p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Duration:</span>
                      <strong className="text-slate-800 font-medium">{service.duration}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Sittings:</span>
                      <strong className="text-slate-800 font-medium">{service.sittings}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Comfort:</span>
                      <span className="text-emerald-700 font-semibold">{service.painLevel}</span>
                    </div>
                  </div>

                  {/* Highlights list */}
                  <div className="mt-4 space-y-1.5">
                    {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Symptoms & Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-teal-600" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForBooking(service.name)}
                    className="px-3.5 py-1.5 text-xs font-bold text-teal-800 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Calendar className="w-3 h-3 text-teal-700" />
                    <span>Book Service</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Service Modal Dialog */}
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-bold text-teal-800 uppercase tracking-wide">
                Speciality: {activeModalService.category} · Akhil & Puja Dental
              </div>

              <h3 className="mt-1 text-2xl font-extrabold text-slate-900 tracking-tight">
                {activeModalService.name}
              </h3>
              <p className="text-sm font-medium text-teal-700 mt-1">
                {activeModalService.tagline}
              </p>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {activeModalService.description}
              </p>

              {/* Treatment specs summary */}
              <div className="mt-5 grid grid-cols-3 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 block">Procedure Time</span>
                  <strong className="text-slate-900 font-semibold">{activeModalService.duration}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Typical Sittings</span>
                  <strong className="text-slate-900 font-semibold">{activeModalService.sittings}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Pain Control</span>
                  <strong className="text-emerald-700 font-semibold">{activeModalService.painLevel}</strong>
                </div>
              </div>

              {/* Symptoms / When you need this */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-amber-500" />
                  <span>When is this treatment needed? (Common Symptoms):</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 bg-amber-50/50 p-3.5 rounded-xl border border-amber-100">
                  {activeModalService.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step-by-Step Clinical Procedure */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5 flex items-center gap-1.5">
                  <Stethoscope className="w-4 h-4 text-teal-600" />
                  <span>How We Perform the Procedure:</span>
                </h4>
                <div className="space-y-2">
                  {activeModalService.procedureSteps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 text-xs text-slate-700">
                      <span className="font-mono font-bold text-teal-700 w-5 shrink-0">
                        0{sIdx + 1}.
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-1.5">
                  <Smile className="w-4 h-4 text-teal-600" />
                  <span>Long-Term Health & Cosmetic Benefits:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {activeModalService.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal CTAs */}
              <div className="mt-8 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="tel:8949775190"
                  className="px-4 py-2.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  Consult Doctor: 8949775190
                </a>

                <button
                  onClick={() => {
                    const sName = activeModalService.name;
                    setActiveModalService(null);
                    onSelectServiceForBooking(sName);
                  }}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-md transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment for {activeModalService.shortName}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
