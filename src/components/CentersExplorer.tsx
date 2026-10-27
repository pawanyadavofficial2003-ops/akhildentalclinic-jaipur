import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Calendar,
  Navigation,
  MessageCircle,
  Clock,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Building2,
  Pill,
  Sparkles,
  Maximize2,
  X,
} from 'lucide-react';
import { FACILITIES, Facility } from '../data/clinicData';

interface CentersExplorerProps {
  onOpenBooking: (clinicId: string) => void;
  onNavigateToMap: (facilityId: string) => void;
}

export const CentersExplorer: React.FC<CentersExplorerProps> = ({
  onOpenBooking,
  onNavigateToMap,
}) => {
  const [filter, setFilter] = useState<'all' | 'dental' | 'pharmacy'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const filteredFacilities = FACILITIES.filter((f) => {
    if (filter === 'dental') return f.category === 'Dental Clinic';
    if (filter === 'pharmacy') return f.category === 'Medical Store & Pharmacy';
    return true;
  });

  const handleCopyAddress = (facility: Facility) => {
    navigator.clipboard.writeText(facility.address);
    setCopiedId(facility.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="explore-centers" className="py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div>
            <div className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">
              Explore Our Healthcare Locations
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              2 Dental Clinics & 1 Dedicated Medical Store in Sanganer
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              Choose your closest center for complete dental treatments, specialized surgeries, or instant medicine purchases.
              Direct navigation links and telephone assistance provided for each facility.
            </p>
          </div>

          {/* Filter segment control */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl shrink-0 self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All 3 Centers (3)
            </button>
            <button
              onClick={() => setFilter('dental')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'dental'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dental Clinics (2)
            </button>
            <button
              onClick={() => setFilter('pharmacy')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'pharmacy'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Medical Store (1)
            </button>
          </div>
        </div>

        {/* 3 Facility Cards Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility) => {
            const isDental = facility.category === 'Dental Clinic';
            const isAkhil = facility.id === 'akhil-dental';
            const isPuja = facility.id === 'puja-dental';
            const isMadhv = facility.id === 'madhv-medical';

            return (
              <div
                key={facility.id}
                id={`card-${facility.id}`}
                className={`relative flex flex-col justify-between rounded-2xl border transition-all duration-200 bg-white overflow-hidden ${
                  isAkhil
                    ? 'border-teal-300 ring-2 ring-teal-600/10 shadow-lg shadow-teal-900/5'
                    : isPuja
                    ? 'border-cyan-300 shadow-md hover:shadow-lg'
                    : 'border-blue-300 shadow-md hover:shadow-lg'
                }`}
              >
                {/* Visual Image Header for Dental Clinics using actual uploaded photos - Desktop optimized */}
                {isAkhil && (
                  <div
                    className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950 flex items-center justify-center p-2 sm:p-3 group cursor-pointer"
                    onClick={() => setPreviewImage('/assets/aistudio/WhatsApp_Image_2026-08-09_at_4.25.08_PM_a9897971.jpeg')}
                    title="Click to view full banner"
                  >
                    <img
                      src="/assets/aistudio/WhatsApp_Image_2026-08-09_at_4.25.08_PM_a9897971.jpeg"
                      alt="Akhil Dental Clinic Official Signage Banner"
                      className="w-full h-full object-contain rounded-md transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 right-2.5 opacity-90 group-hover:opacity-100 transition-opacity bg-slate-900/80 p-1.5 rounded-lg text-white text-[10px] flex items-center gap-1 border border-slate-700">
                      <Maximize2 className="w-3 h-3 text-teal-400" />
                      <span>Full Banner</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-3 flex items-end justify-between">
                      <span className="text-[11px] font-bold text-white flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-700/80">
                        <Clock className="w-3.5 h-3.5 text-teal-400" />
                        <span>Daily: 7:00 AM – 11:00 PM</span>
                      </span>
                    </div>
                  </div>
                )}

                {isPuja && (
                  <div
                    className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900 group cursor-pointer"
                    onClick={() => setPreviewImage('/assets/aistudio/WhatsApp_Image_2026-08-09_at_4.25.07_PM__2__5a443d0a.jpeg')}
                    title="Click to view full operatory photo"
                  >
                    <img
                      src="/assets/aistudio/WhatsApp_Image_2026-08-09_at_4.25.07_PM__2__5a443d0a.jpeg"
                      alt="Dr. Akhilesh Ray treating patient at Puja Dental Clinic"
                      className="w-full h-full object-cover object-[center_18%] transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 right-2.5 opacity-90 group-hover:opacity-100 transition-opacity bg-slate-900/80 p-1.5 rounded-lg text-white text-[10px] flex items-center gap-1 border border-slate-700">
                      <Maximize2 className="w-3 h-3 text-cyan-400" />
                      <span>Full Photo</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-3 flex items-end justify-between">
                      <span className="text-[11px] font-bold text-white flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-700/80">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Daily: 9:00 AM – 9:00 PM</span>
                      </span>
                    </div>
                  </div>
                )}

                {isMadhv && (
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 flex flex-col justify-between p-5 text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-700/50">
                        Co-located with Akhil Dental
                      </span>
                      <Pill className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Madhv Medical Store</h4>
                      <p className="text-[11px] text-blue-200 mt-0.5">Dental & General Prescription Pharmacy</p>
                      <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-200 bg-blue-950/90 px-2.5 py-1 rounded-md border border-blue-800">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        <span>Daily: 7:00 AM – 10:00 PM</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Top Area */}
                <div className="p-6 sm:p-7">
                  {/* Category and Sub-label (Unboxed quiet text) */}
                  <div className="flex items-center justify-between text-xs font-medium pb-4 border-b border-slate-100">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      {isDental ? (
                        <Building2 className="w-3.5 h-3.5 text-teal-600" />
                      ) : (
                        <Pill className="w-3.5 h-3.5 text-blue-600" />
                      )}
                      <span>{facility.category}</span>
                    </span>
                    <span className="text-slate-500 font-mono text-[11px]">{facility.badge}</span>
                  </div>

                  {/* Title & Doctor Byline */}
                  <div className="mt-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {facility.name}
                    </h3>
                    {isDental && (
                      <p className="mt-1 text-xs font-bold text-teal-800 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-teal-600" />
                        <span>Dr. Akhilesh Ray · B.D.S (R.U.H.S)</span>
                      </p>
                    )}
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {facility.description}
                    </p>
                  </div>

                  {/* Key Contact & Mobile Box */}
                  <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                    {/* Mobile Number */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500">
                        {isDental ? 'Mobile Number:' : 'Contact Number:'}
                      </span>
                      <a
                        href={`tel:${facility.mobile}`}
                        className={`text-base font-bold tracking-tight hover:underline flex items-center gap-1.5 ${
                          isDental ? 'text-teal-800' : 'text-blue-800'
                        }`}
                      >
                        <Phone className="w-4 h-4 shrink-0" />
                        <span>{facility.mobile}</span>
                      </a>
                    </div>

                    {/* Address */}
                    <div className="pt-2 border-t border-slate-200/60">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-xs font-medium text-slate-800 leading-snug">
                            {facility.address}
                          </p>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Landmark: {facility.landmark}
                          </p>
                        </div>
                      </div>

                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={() => handleCopyAddress(facility)}
                          className="text-[11px] font-semibold text-slate-600 hover:text-slate-900 inline-flex items-center gap-1 transition-colors"
                        >
                          {copiedId === facility.id ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span className="text-emerald-700">Address Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3 text-slate-400" />
                              <span>Copy Address</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Timings */}
                    <div className="pt-2 border-t border-slate-200/60 text-xs">
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-800 text-[11px]">
                            {facility.timings.weekday}
                          </p>
                          <p className="text-slate-500 text-[11px]">
                            Sun: {facility.timings.sunday}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights / Features list */}
                  <div className="mt-6 space-y-2">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
                      Facility Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {facility.features.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons (Nav, Call, WhatsApp, Book) */}
                <div className="p-6 bg-slate-50/70 border-t border-slate-100 rounded-b-2xl space-y-2.5">
                  {/* Google Maps Navigation button (Prominent) */}
                  <a
                    href={facility.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4 text-teal-300" />
                    <span>Navigate on Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  {/* Call and WhatsApp row */}
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${facility.mobile}`}
                      className="py-2 px-3 text-xs font-semibold text-slate-800 hover:text-teal-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-teal-700" />
                      <span>Call Now</span>
                    </a>

                    <a
                      href={`https://wa.me/${facility.whatsappNumber}?text=Hello%20${encodeURIComponent(
                        facility.name
                      )},%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 text-xs font-semibold text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  {/* Primary context action */}
                  {isDental ? (
                    <button
                      onClick={() => onOpenBooking(facility.id)}
                      className="w-full py-2.5 px-4 text-xs font-bold text-teal-900 bg-teal-100/90 hover:bg-teal-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book at {facility.name.split(' ')[0]}</span>
                    </button>
                  ) : (
                    <a
                      href={`https://wa.me/${facility.whatsappNumber}?text=Hi%20Madhv%20Medical%20Store,%20I%20want%20to%20order%20or%20inquire%20about%20medicines.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 text-xs font-bold text-blue-900 bg-blue-100/90 hover:bg-blue-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Pill className="w-3.5 h-3.5" />
                      <span>Send Prescription on WhatsApp</span>
                    </a>
                  )}

                  {/* Show on embedded map trigger */}
                  <button
                    onClick={() => onNavigateToMap(facility.id)}
                    className="w-full text-center text-[11px] font-semibold text-teal-700 hover:text-teal-900 py-1 transition-colors"
                  >
                    View on interactive location map ↓
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Co-location Callout Note */}
        <div className="mt-10 p-5 rounded-xl bg-teal-50/60 border border-teal-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-teal-950">
                Convenience Advantage: Akhil Dental Clinic & Madhv Medical Store Under One Roof
              </p>
              <p className="text-xs text-teal-800 mt-0.5">
                Located at C-11 Sachivalaya Vihar, Kalyanpura. After any dental treatment, pick up your prescribed pain relievers, antibiotics, and medicated mouthwash immediately without needing to travel to a pharmacy.
              </p>
            </div>
          </div>
          <a
            href="tel:8949775190"
            className="px-4 py-2 text-xs font-bold text-teal-900 bg-white border border-teal-300 rounded-lg hover:bg-teal-50 transition-colors whitespace-nowrap self-stretch sm:self-auto text-center"
          >
            Direct Helpline: 8949775190
          </a>
        </div>
      </div>

      {/* Fullscreen Photo Lightbox for Centers Explorer */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[92vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-3 right-3 sm:-top-12 sm:right-0 p-2.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={previewImage}
              alt="High resolution clinic view"
              className="max-h-[85vh] max-w-full w-auto object-contain rounded-2xl shadow-2xl border border-white/20 bg-slate-950"
            />
            <p className="mt-3 text-xs text-slate-300 text-center font-medium">
              Akhil Dental Clinic & Puja Dental Clinic · Click anywhere to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
