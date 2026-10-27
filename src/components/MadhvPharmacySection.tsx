import React, { useState } from 'react';
import {
  Pill,
  Phone,
  MapPin,
  Clock,
  Navigation,
  MessageCircle,
  Upload,
  CheckCircle2,
  ShieldCheck,
  Package,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { PHARMACY_CATEGORIES } from '../data/clinicData';

interface MadhvPharmacySectionProps {
  onNavigateToMap: () => void;
}

export const MadhvPharmacySection: React.FC<MadhvPharmacySectionProps> = ({
  onNavigateToMap,
}) => {
  const [prescriptionNote, setPrescriptionNote] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handlePrescriptionWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Madhv Medical Store! I would like to order/inquire about medicines.\nPhone: ${patientPhone}\nDetails/Prescription note: ${prescriptionNote || 'Sending photo via WhatsApp'}`;
    const url = `https://wa.me/917410835259?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="madhv-store" className="py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Info & Authority */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-900 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg">
              <Pill className="w-4 h-4 text-blue-600" />
              <span>Full-Service Pharmacy & Dental Medicine Depot · Sanganer</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Madhv Medical Store
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Located conveniently at <strong className="text-slate-900">C-11 Sachivalaya Vihar, Kalyanpura, Sanganer, Jaipur</strong> (sharing the same premises as Akhil Dental Clinic).
              Madhv Medical Store offers 100% genuine dental medications, surgical supplies, specialized oral health care products, and comprehensive allopathic pharmaceuticals.
            </p>

            {/* Address & Contact Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-blue-950 uppercase tracking-wide">
                    Store Address (Same as Akhil Dental Clinic):
                  </span>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    C-11 Sachivalaya Vihar, Kalyanpura, Sanganer, Jaipur, Rajasthan - 302029
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-blue-200/60 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-700" />
                  <span className="text-xs text-slate-600">Contact Helpline:</span>
                  <a
                    href="tel:7410835259"
                    className="text-base font-bold text-blue-900 hover:underline"
                  >
                    7410835259
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-700" />
                  <span className="text-xs text-slate-700 font-medium">
                    Open Daily: 7:00 AM – 10:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action row */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:7410835259"
                className="px-5 py-3 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-md transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store: 7410835259</span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=C-11+Sachivalaya+Vihar+Kalyanpura+Sanganer+Jaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors flex items-center gap-2 shadow-sm"
              >
                <Navigation className="w-4 h-4 text-blue-700" />
                <span>Navigate on Google Maps</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <button
                onClick={onNavigateToMap}
                className="px-4 py-3 text-xs font-semibold text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-xl transition-colors"
              >
                View on Map Tab
              </button>
            </div>
          </div>

          {/* Right Column: WhatsApp Prescription Upload & Order Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-lg shadow-slate-200/50">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Fast WhatsApp Medicine Order
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  Instant Reply
                </span>
              </div>

              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                Save time at the counter! Enter your mobile number and prescription details below, or click to send your prescription photo directly to Madhv Medical Store at <strong className="text-slate-800">7410835259</strong>.
              </p>

              <form onSubmit={handlePrescriptionWhatsAppSubmit} className="mt-4 space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Mobile Number:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98290XXXXX"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Prescribed Medicines or Requirements:
                  </label>
                  <textarea
                    rows={3}
                    placeholder="List dental medicines, mouthwash, painkillers, or write 'Sending prescription photo on WhatsApp'..."
                    value={prescriptionNote}
                    onChange={(e) => setPrescriptionNote(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Order to WhatsApp (7410835259)</span>
                </button>

                {submitted && (
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>WhatsApp chat opened! Send your photo or medicine list.</span>
                  </div>
                )}
              </form>

              <div className="mt-4 pt-4 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Free counter packing</span>
                <span>Home drop-off available in Kalyanpura</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Categories of Medicines stocked at Madhv Medical Store */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">
              Stocked Categories
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              Complete Pharmaceuticals & Specialized Dental Care Range
            </h3>
            <p className="text-xs text-slate-600 mt-2">
              Everything prescribed by Dr. Akhil and oral healthcare consultants is immediately in stock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PHARMACY_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:shadow-md transition-all space-y-4"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <Package className="w-4 h-4 text-blue-600" />
                  <h4 className="text-sm font-bold text-slate-900">
                    {cat.title}
                  </h4>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {cat.description}
                </p>

                <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-200/60">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
