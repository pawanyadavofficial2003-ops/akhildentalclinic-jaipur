import React, { useState } from 'react';
import {
  Award,
  GraduationCap,
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  Maximize2,
  X,
  ChevronRight,
  User,
  Eye,
} from 'lucide-react';
import { DOCTORS } from '../data/clinicData';

interface DoctorProfilesProps {
  onOpenBooking: (preferredClinicId?: string) => void;
}

export const DoctorProfiles: React.FC<DoctorProfilesProps> = ({ onOpenBooking }) => {
  const doctor = DOCTORS[0]; // Dr. Akhilesh Ray B.D.S (R.U.H.S)

  const galleryImages = [
    {
      id: 'portrait',
      title: 'Dr. Akhilesh Ray, B.D.S (R.U.H.S)',
      subtitle: 'Chief Dental Surgeon & Founder',
      src: doctor.photoUrl,
      aspectClass: 'object-cover object-top',
      badge: 'Senior Consultant',
    },
    {
      id: 'treatment',
      title: 'Clinical Operatory & Patient Care',
      subtitle: 'Painless rotary root canal & dental procedures',
      src: doctor.actionPhotoUrl,
      aspectClass: 'object-cover object-center',
      badge: 'At Work in Clinic',
    },
    {
      id: 'banner',
      title: 'Akhil Dental Clinic Official Signage',
      subtitle: 'C-11 Sachivalaya Vihar, Kalyanpura, Sanganer, Jaipur',
      src: doctor.bannerPhotoUrl,
      aspectClass: 'object-contain object-center bg-slate-950 p-2',
      badge: 'Main Branch Board',
    },
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const activeImage = galleryImages[activeImageIndex];

  return (
    <section id="doctor-profile" className="py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">
              <Stethoscope className="w-4 h-4 text-teal-600" />
              <span>Clinical Leadership & Senior Dental Surgeon</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Meet Dr. Akhilesh Ray <span className="text-teal-700 font-bold text-xl sm:text-2xl">B.D.S (R.U.H.S)</span>
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              Chief Dental Surgeon leading both Akhil Dental Clinic (Kalyanpura) and Puja Dental Clinic (Rampura Phatak) in Sanganer, Jaipur.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-end">
            <span className="text-xs text-slate-500 font-medium">8+ Years Experience</span>
            <span className="text-slate-300">·</span>
            <span className="text-xs font-semibold text-teal-700">5,000+ Successful Procedures</span>
          </div>
        </div>

        {/* Doctor Feature Card */}
        <div className="mt-10 bg-slate-50/70 rounded-3xl border border-slate-200 overflow-hidden shadow-lg shadow-slate-200/50">
          {/* Panoramic Clinic Banner Showcase (Desktop-optimized: full uncropped banner with background glow) */}
          <div className="relative w-full bg-slate-950 border-b border-slate-200 group">
            <div className="relative max-w-5xl mx-auto flex items-center justify-center p-3 sm:p-5">
              <img
                src={doctor.bannerPhotoUrl}
                alt="Akhil Dental Clinic Official Signage Banner - C-11 Sachivalaya Vihar Kalyanpura Sanganer Jaipur"
                className="w-full h-auto max-h-56 sm:max-h-72 md:max-h-80 object-contain rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <button
                onClick={() => setFullscreenImage(doctor.bannerPhotoUrl)}
                className="absolute top-5 right-5 sm:top-7 sm:right-7 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-xl text-xs font-semibold backdrop-blur-md border border-slate-700/80 flex items-center gap-1.5 shadow-lg transition-all"
                title="View Full Resolution Signage Banner"
              >
                <Maximize2 className="w-3.5 h-3.5 text-teal-400" />
                <span className="hidden sm:inline">Expand Banner</span>
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Responsive Interactive Photo Gallery (Desktop-Optimized) */}
              <div className="lg:col-span-5 space-y-4">
                {/* Main Selected Image Stage */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 h-80 sm:h-96 lg:h-[420px] w-full flex items-center justify-center group">
                  <img
                    src={activeImage.src}
                    alt={activeImage.title}
                    className={`w-full h-full ${activeImage.aspectClass} transition-all duration-300 group-hover:scale-102`}
                    loading="lazy"
                  />

                  {/* Gradient Overlay & Captions */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 sm:p-5 flex items-end justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-950/90 px-2 py-0.5 rounded border border-teal-800/80 inline-block mb-1">
                        {activeImage.badge}
                      </span>
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        {activeImage.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 line-clamp-1">
                        {activeImage.subtitle}
                      </p>
                    </div>

                    <button
                      onClick={() => setFullscreenImage(activeImage.src)}
                      className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-colors shrink-0"
                      title="View full screen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* 3 Thumbnails Switcher - Allows desktop users to easily preview all photos */}
                <div className="grid grid-cols-3 gap-2.5">
                  {galleryImages.map((img, idx) => {
                    const isSelected = activeImageIndex === idx;
                    return (
                      <button
                        key={img.id}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative rounded-xl overflow-hidden border-2 transition-all p-0.5 text-left group flex flex-col ${
                          isSelected
                            ? 'border-teal-600 ring-2 ring-teal-500/20 shadow-md bg-white'
                            : 'border-slate-200 hover:border-slate-300 bg-slate-100 opacity-80 hover:opacity-100'
                        }`}
                      >
                        <div className="h-16 sm:h-20 w-full overflow-hidden rounded-lg bg-slate-900">
                          <img
                            src={img.src}
                            alt={img.title}
                            className={`w-full h-full ${
                              img.id === 'banner'
                                ? 'object-contain p-1'
                                : 'object-cover object-top'
                            } group-hover:scale-105 transition-transform`}
                            loading="lazy"
                          />
                        </div>
                        <div className="p-1.5 text-center">
                          <span
                            className={`text-[10px] font-bold block truncate ${
                              isSelected ? 'text-teal-900' : 'text-slate-600'
                            }`}
                          >
                            {img.id === 'portrait'
                              ? 'Dr. Akhilesh'
                              : img.id === 'treatment'
                              ? 'Operatory'
                              : 'Clinic Board'}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <ShieldCheck className="w-4 h-4 text-teal-600" />
                    <span>Real photos from our Jaipur clinic</span>
                  </span>
                  <button
                    onClick={() => setFullscreenImage(activeImage.src)}
                    className="text-teal-700 font-bold text-[11px] hover:underline inline-flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Full View</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Qualifications, Experience, Schedule & Bio (Desktop-Optimized) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-teal-800 bg-teal-100/90 px-3 py-1 rounded-md">
                      Chief Dental Surgeon & Specialist
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Rajasthan University of Health Sciences (R.U.H.S)
                    </span>
                  </div>

                  <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {doctor.name} <span className="text-teal-700 font-bold text-xl sm:text-2xl">{doctor.degree}</span>
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    Practicing Chief Dental Surgeon at <strong className="text-slate-900">Akhil Dental Clinic</strong> & <strong className="text-slate-900">Puja Dental Clinic</strong>
                  </p>
                </div>

                {/* Professional Credential Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wide block">
                        Academic Degree:
                      </span>
                      <strong className="text-xs font-bold text-slate-900">
                        B.D.S · R.U.H.S
                      </strong>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Rajasthan University of Health Sciences
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wide block">
                        Clinical Experience:
                      </span>
                      <strong className="text-xs font-bold text-slate-900">
                        {doctor.experience}
                      </strong>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        5,000+ Successful Procedures
                      </p>
                    </div>
                  </div>
                </div>

                {/* Doctor Bio */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {doctor.bio}
                </p>

                {/* Clinical Specializations */}
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                    Areas of Clinical Expertise:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {doctor.specializations.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Updated Daily Consultation Schedule Box */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal-700" />
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                        Doctor Consultation Timings:
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Open All 7 Days
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-teal-50/60 border border-teal-200">
                      <span className="font-bold text-teal-950 block">
                        Akhil Dental Clinic (Kalyanpura):
                      </span>
                      <p className="text-teal-800 font-extrabold mt-1 text-base">
                        7:00 AM – 11:00 PM
                      </p>
                      <p className="text-[11px] text-teal-900/80 mt-0.5">
                        C-11 Sachivalaya Vihar · Early morning & late evening slots
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-cyan-50/60 border border-cyan-200">
                      <span className="font-bold text-cyan-950 block">
                        Puja Dental Clinic (Rampura Phatak):
                      </span>
                      <p className="text-cyan-800 font-extrabold mt-1 text-base">
                        9:00 AM – 9:00 PM
                      </p>
                      <p className="text-[11px] text-cyan-900/80 mt-0.5">
                        Shop 23 Ganesh Colony · Full day consultations
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenBooking('akhil-dental')}
                    className="px-6 py-3 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-xl shadow-md transition-colors flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation with Dr. Akhilesh</span>
                  </button>

                  <a
                    href="tel:8949775190"
                    className="px-5 py-3 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-teal-700" />
                    <span>Call 8949775190</span>
                  </a>

                  <a
                    href={`https://wa.me/918949775190?text=${encodeURIComponent(
                      'Hello Dr. Akhilesh Ray, I would like to consult regarding dental treatment at Akhil / Puja Dental Clinic.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Doctor</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Photo Lightbox Modal - Guarantees zero cropping on desktop */}
        {fullscreenImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in"
            onClick={() => setFullscreenImage(null)}
          >
            <div
              className="relative max-w-5xl max-h-[92vh] w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setFullscreenImage(null)}
                className="absolute top-3 right-3 sm:-top-12 sm:right-0 p-2.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 transition-colors"
                aria-label="Close fullscreen image"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={fullscreenImage}
                alt="Clinic photo full view"
                className="max-h-[85vh] max-w-full w-auto object-contain rounded-2xl shadow-2xl border border-white/20 bg-slate-950"
              />
              <p className="mt-3 text-xs text-slate-300 text-center font-medium">
                Akhil Dental Clinic & Healthcare Network · Sanganer, Jaipur
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
