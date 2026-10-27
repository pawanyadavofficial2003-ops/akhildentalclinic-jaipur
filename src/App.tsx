/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DoctorProfiles } from './components/DoctorProfiles';
import { CentersExplorer } from './components/CentersExplorer';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveMapSection } from './components/InteractiveMapSection';
import { MadhvPharmacySection } from './components/MadhvPharmacySection';
import { ClinicStandards } from './components/ClinicStandards';
import { TestimonialsAndFaq } from './components/TestimonialsAndFaq';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedClinicForBooking, setSelectedClinicForBooking] = useState('akhil-dental');
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');
  const [selectedFacilityForMap, setSelectedFacilityForMap] = useState('akhil-dental');

  const handleOpenBooking = (clinicId?: string, serviceName?: string) => {
    if (clinicId) setSelectedClinicForBooking(clinicId);
    if (serviceName) setSelectedServiceForBooking(serviceName);
    setIsBookingOpen(true);
  };

  const handleNavigateToMap = (facilityId: string) => {
    setSelectedFacilityForMap(facilityId);
    const element = document.getElementById('interactive-map');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCenters = () => {
    const element = document.getElementById('explore-centers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-500/20 selection:text-teal-900">
      {/* Primary Top Bar */}
      <Navbar
        onOpenBooking={(preferredClinicId) =>
          handleOpenBooking(preferredClinicId, 'General Dental Checkup & Consultation')
        }
        onSelectFacility={handleNavigateToMap}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={() =>
            handleOpenBooking('akhil-dental', 'General Dental Checkup & Consultation')
          }
          onExploreCenters={handleExploreCenters}
        />

        {/* 2. Doctor Profiles Component (Dr. Akhilesh Ray B.D.S R.U.H.S, credentials, photos, consultation schedule) */}
        <DoctorProfiles onOpenBooking={(clinicId) => handleOpenBooking(clinicId)} />

        {/* 3. Centers Explorer (Akhil Dental, Puja Dental, Madhv Medical Store with uploaded photos & updated timings) */}
        <CentersExplorer
          onOpenBooking={(clinicId) => handleOpenBooking(clinicId)}
          onNavigateToMap={handleNavigateToMap}
        />

        {/* 3. Comprehensive Dental Services (All 10 Services for both Dental Clinics) */}
        <ServicesSection
          onSelectServiceForBooking={(serviceName) =>
            handleOpenBooking('akhil-dental', serviceName)
          }
        />

        {/* 4. Interactive Location Maps & Navigation Links */}
        <InteractiveMapSection
          selectedFacilityId={selectedFacilityForMap}
          onSelectFacility={setSelectedFacilityForMap}
          onOpenBooking={(facilityId) => handleOpenBooking(facilityId)}
        />

        {/* 5. Madhv Medical Store Dedicated Pharmacy Hub */}
        <MadhvPharmacySection
          onNavigateToMap={() => handleNavigateToMap('madhv-medical')}
        />

        {/* 6. Clinical Standards & Sterilization */}
        <ClinicStandards />

        {/* 7. Patient Testimonials & FAQ */}
        <TestimonialsAndFaq />
      </main>

      {/* Primary Footer */}
      <Footer />

      {/* Floating Action Bar for Instant Access */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href="https://wa.me/918949775190?text=Hello%20Akhil%20Dental%20Clinic,%20I%20would%20like%20to%20consult%20or%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-full shadow-lg shadow-emerald-950/20 hover:scale-105 transition-all flex items-center justify-center group"
          title="Chat on WhatsApp (8949775190)"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-semibold px-0 group-hover:px-2">
            WhatsApp 8949775190
          </span>
        </a>

        <a
          href="tel:8949775190"
          className="p-3 bg-teal-700 hover:bg-teal-800 active:bg-teal-900 text-white rounded-full shadow-lg shadow-teal-950/20 hover:scale-105 transition-all flex items-center justify-center group"
          title="Direct Dental Call: 8949775190"
          aria-label="Direct Dental Helpline Call"
        >
          <Phone className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-semibold px-0 group-hover:px-2">
            Call 8949775190
          </span>
        </a>
      </div>

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultClinicId={selectedClinicForBooking}
        defaultServiceName={selectedServiceForBooking}
      />
    </div>
  );
}
