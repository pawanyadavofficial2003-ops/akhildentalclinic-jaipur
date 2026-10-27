import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  ExternalLink,
  Phone,
  Compass,
  Share2,
  Check,
  Building2,
  Pill,
  Clock,
  Car,
} from 'lucide-react';
import { FACILITIES, Facility } from '../data/clinicData';

interface InteractiveMapSectionProps {
  selectedFacilityId: string;
  onSelectFacility: (id: string) => void;
  onOpenBooking: (facilityId: string) => void;
}

export const InteractiveMapSection: React.FC<InteractiveMapSectionProps> = ({
  selectedFacilityId,
  onSelectFacility,
  onOpenBooking,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const activeFacility: Facility =
    FACILITIES.find((f) => f.id === selectedFacilityId) || FACILITIES[0];

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: activeFacility.name,
          text: `Find ${activeFacility.name} at ${activeFacility.address}. Call: ${activeFacility.mobile}`,
          url: activeFacility.googleMapsUrl,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(activeFacility.googleMapsUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Map embed bounding box coordinates for OpenStreetMap centering on Sanganer Jaipur
  const mapLat = activeFacility.coordinates.lat;
  const mapLng = activeFacility.coordinates.lng;
  const bbox = `${mapLng - 0.008},${mapLat - 0.006},${mapLng + 0.008},${mapLat + 0.006}`;
  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${mapLat},${mapLng}`;

  return (
    <section id="interactive-map" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">
            Easy GPS Navigation & Map Links
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Find Akhil Dental, Puja Dental & Madhv Medical Store
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Click any center below to view its exact road coordinates, nearby landmarks, and launch instant turn-by-turn directions on Google Maps for your phone or vehicle.
          </p>
        </div>

        {/* 3-Tab Location Switcher */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
          {FACILITIES.map((facility) => {
            const isSelected = facility.id === activeFacility.id;
            const isDental = facility.category === 'Dental Clinic';

            return (
              <button
                key={facility.id}
                onClick={() => onSelectFacility(facility.id)}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-teal-600 shadow-md ring-2 ring-teal-500/10'
                    : 'bg-white/70 hover:bg-white border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold flex items-center gap-1.5 ${
                        isSelected ? 'text-teal-800' : 'text-slate-500'
                      }`}
                    >
                      {isDental ? (
                        <Building2 className="w-3.5 h-3.5 text-teal-600" />
                      ) : (
                        <Pill className="w-3.5 h-3.5 text-blue-600" />
                      )}
                      <span>{facility.category}</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {facility.area}
                    </span>
                  </div>
                  <h4 className="mt-2 text-base font-bold text-slate-900">
                    {facility.name}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-1">
                    {facility.address}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">
                    {facility.mobile}
                  </span>
                  <span
                    className={`font-semibold inline-flex items-center gap-1 text-[11px] ${
                      isSelected ? 'text-teal-700' : 'text-slate-400'
                    }`}
                  >
                    <Navigation className="w-3 h-3" />
                    {isSelected ? 'Viewing on Map' : 'Select'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Map Display & Navigation Card Split */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Viewer / Embed Box */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
            {/* Map Top Bar */}
            <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-teal-400 animate-spin-slow" />
                <span className="text-xs font-bold tracking-wide">
                  GPS MAP: {activeFacility.name} ({activeFacility.area})
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">
                {activeFacility.coordinates.lat.toFixed(4)}°N, {activeFacility.coordinates.lng.toFixed(4)}°E
              </span>
            </div>

            {/* Embedded Live Map Frame */}
            <div className="relative w-full h-80 sm:h-96 bg-slate-100">
              <iframe
                title={`Map of ${activeFacility.name}`}
                className="w-full h-full border-0"
                src={osmEmbedUrl}
                loading="lazy"
              />

              {/* Floating Pin Card Over Map */}
              <div className="absolute top-4 left-4 max-w-xs bg-white/95 backdrop-blur-sm p-3.5 rounded-xl border border-slate-200 shadow-lg pointer-events-auto">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">
                      {activeFacility.name}
                    </h5>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                      {activeFacility.address}
                    </p>
                    <a
                      href={activeFacility.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-teal-700 hover:text-teal-900"
                    >
                      <span>Open Live in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Bottom Quick Action Bar */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-600">
                Landmark: <strong className="text-slate-800">{activeFacility.landmark}</strong>
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 font-medium text-slate-700 inline-flex items-center gap-1.5 transition-colors"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Link Copied!' : 'Share Map Link'}</span>
                </button>

                <a
                  href={activeFacility.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 font-semibold text-white inline-flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps Link</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Guide & Turn-by-Turn Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Name */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-teal-800 uppercase tracking-wide">
                  Navigation Instructions
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  Jaipur 302029
                </span>
              </div>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Directions to {activeFacility.name}
              </h3>

              {/* Exact Address Box */}
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700 block">Complete Address:</span>
                    <p className="text-slate-900 font-medium text-sm mt-0.5">
                      {activeFacility.address}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-slate-500">Contact / Calling Helpline:</span>
                  <a
                    href={`tel:${activeFacility.mobile}`}
                    className="font-bold text-teal-800 hover:underline flex items-center gap-1 text-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{activeFacility.mobile}</span>
                  </a>
                </div>
              </div>

              {/* Key Transit Points / Distance Breakdown */}
              <div className="mt-5 space-y-2.5">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Commute & Distances from Sanganer Points:
                </span>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                    <span className="flex items-center gap-2">
                      <Car className="w-3.5 h-3.5 text-slate-500" />
                      <span>From Sanganer Railway Station</span>
                    </span>
                    <strong className="text-slate-900 font-semibold font-mono">
                      {activeFacility.id === 'puja-dental' ? '1.2 km (~4 mins)' : '2.1 km (~6 mins)'}
                    </strong>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                    <span className="flex items-center gap-2">
                      <Car className="w-3.5 h-3.5 text-slate-500" />
                      <span>From Kalyanpura Tiraha</span>
                    </span>
                    <strong className="text-slate-900 font-semibold font-mono">
                      {activeFacility.id === 'puja-dental' ? '2.4 km (~7 mins)' : '400 meters (~1 min)'}
                    </strong>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                    <span className="flex items-center gap-2">
                      <Car className="w-3.5 h-3.5 text-slate-500" />
                      <span>From Rampura Phatak</span>
                    </span>
                    <strong className="text-slate-900 font-semibold font-mono">
                      {activeFacility.id === 'puja-dental' ? '50 meters (Immediate)' : '2.3 km (~6 mins)'}
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <a
                href={activeFacility.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Start Turn-by-Turn GPS Directions</span>
                <ExternalLink className="w-3 h-3 text-teal-200" />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${activeFacility.mobile}`}
                  className="py-2.5 px-3 text-xs font-semibold text-slate-800 hover:text-teal-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>Call {activeFacility.mobile}</span>
                </a>

                {activeFacility.category === 'Dental Clinic' ? (
                  <button
                    onClick={() => onOpenBooking(activeFacility.id)}
                    className="py-2.5 px-3 text-xs font-semibold text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Book Visit</span>
                  </button>
                ) : (
                  <a
                    href={`https://wa.me/${activeFacility.whatsappNumber}?text=Hi%20Madhv%20Medical%20Store,%20I%20need%20directions%20or%20medicine%20availability.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>WhatsApp</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
