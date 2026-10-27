import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Phone,
  CheckCircle2,
  Building2,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import { FACILITIES, DENTAL_SERVICES } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultClinicId?: string;
  defaultServiceName?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultClinicId = 'akhil-dental',
  defaultServiceName = '',
}) => {
  const [selectedClinic, setSelectedClinic] = useState<string>(defaultClinicId);
  const [selectedService, setSelectedService] = useState<string>(defaultServiceName || 'Root Canal Treatment (RCT)');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (10:00 AM - 1:00 PM)');
  const [notes, setNotes] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<{
    bookingId: string;
    clinicName: string;
    clinicAddress: string;
    phone: string;
    service: string;
    date: string;
    time: string;
  } | null>(null);

  useEffect(() => {
    if (defaultClinicId) {
      // only dental clinics can have dental bookings
      if (defaultClinicId === 'madhv-medical') {
        setSelectedClinic('akhil-dental');
      } else {
        setSelectedClinic(defaultClinicId);
      }
    }
  }, [defaultClinicId]);

  useEffect(() => {
    if (defaultServiceName) {
      setSelectedService(defaultServiceName);
    }
  }, [defaultServiceName]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const facility = FACILITIES.find((f) => f.id === selectedClinic) || FACILITIES[0];
    const generatedId = `AD-${Math.floor(1000 + Math.random() * 9000)}`;

    const bookingData = {
      bookingId: generatedId,
      clinicName: facility.name,
      clinicAddress: facility.address,
      phone: facility.mobile,
      service: selectedService,
      date: appointmentDate || 'Earliest Available Date',
      time: timeSlot,
    };

    setConfirmedBooking(bookingData);
  };

  const handleWhatsAppConfirmation = () => {
    if (!confirmedBooking) return;
    const msg = `*Appointment Request - ${confirmedBooking.clinicName}*\nBooking ID: ${confirmedBooking.bookingId}\nPatient: ${patientName}\nPhone: ${patientPhone}\nClinic: ${confirmedBooking.clinicName}\nAddress: ${confirmedBooking.clinicAddress}\nTreatment: ${confirmedBooking.service}\nPreferred Date: ${confirmedBooking.date}\nTime Slot: ${confirmedBooking.time}\nNotes: ${notes || 'None'}`;
    const url = `https://wa.me/918949775190?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setPatientName('');
    setPatientPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmedBooking ? (
          <div>
            <div className="text-xs font-bold text-teal-800 uppercase tracking-wide">
              Direct Clinic Consultation
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
              Book a Dental Appointment
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              Schedule your visit at Akhil Dental Clinic or Puja Dental Clinic. Helpline: <strong className="text-slate-800">8949775190</strong>
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Select Clinic Branch */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-2">
                  1. Choose Clinic Location:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <label
                    className={`p-3 rounded-xl border cursor-pointer text-left transition-all ${
                      selectedClinic === 'akhil-dental'
                        ? 'border-teal-600 bg-teal-50/60 ring-2 ring-teal-500/10'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="clinic"
                      value="akhil-dental"
                      checked={selectedClinic === 'akhil-dental'}
                      onChange={() => setSelectedClinic('akhil-dental')}
                      className="sr-only"
                    />
                    <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                      <span>Akhil Dental Clinic</span>
                      {selectedClinic === 'akhil-dental' && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                      C-11 Sachivalaya Vihar, Kalyanpura, Sanganer
                    </p>
                    <span className="text-[10px] font-mono font-medium text-teal-800 mt-1 block">
                      Mob: 8949775190
                    </span>
                  </label>

                  <label
                    className={`p-3 rounded-xl border cursor-pointer text-left transition-all ${
                      selectedClinic === 'puja-dental'
                        ? 'border-cyan-600 bg-cyan-50/60 ring-2 ring-cyan-500/10'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="clinic"
                      value="puja-dental"
                      checked={selectedClinic === 'puja-dental'}
                      onChange={() => setSelectedClinic('puja-dental')}
                      className="sr-only"
                    />
                    <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                      <span>Puja Dental Clinic</span>
                      {selectedClinic === 'puja-dental' && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                      Shop 23 Ganesh Colony, Rampura Phatak, Sanganer
                    </p>
                    <span className="text-[10px] font-mono font-medium text-cyan-800 mt-1 block">
                      Mob: 8949775190
                    </span>
                  </label>
                </div>
              </div>

              {/* Treatment Needed */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                  2. Select Treatment or Service Needed:
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 rounded-xl border border-slate-300 focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-100 outline-none"
                >
                  {DENTAL_SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.category})
                    </option>
                  ))}
                  <option value="General Dental Checkup & Consultation">
                    General Dental Checkup & Consultation
                  </option>
                  <option value="Emergency Toothache Relief">
                    Emergency Toothache Relief
                  </option>
                </select>
              </div>

              {/* Patient Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Patient Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Sharma"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / Mobile Number:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 8949775190"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none"
                  />
                </div>
              </div>

              {/* Date and Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Date:
                  </label>
                  <input
                    type="date"
                    required
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Time Preference:
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none"
                  >
                    <option value="Morning (7:00 AM - 10:00 AM)">Early Morning (7:00 AM - 10:00 AM)</option>
                    <option value="Midday (10:00 AM - 2:00 PM)">Midday (10:00 AM - 2:00 PM)</option>
                    <option value="Afternoon (2:00 PM - 6:00 PM)">Afternoon (2:00 PM - 6:00 PM)</option>
                    <option value="Evening (6:00 PM - 9:00 PM)">Evening (6:00 PM - 9:00 PM)</option>
                    <option value="Late Evening (9:00 PM - 11:00 PM)">Late Evening (9:00 PM - 11:00 PM - Akhil Clinic)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Symptoms or Special Request (Optional):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sharp pain in lower molar, need teeth whitening, etc."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Appointment Booking</span>
                </button>
              </div>

              <div className="text-center">
                <p className="text-[11px] text-slate-500">
                  Prefer instant telephonic appointment? Call directly at{' '}
                  <a href="tel:8949775190" className="font-bold text-teal-800 hover:underline">
                    8949775190
                  </a>
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Appointment Reserved!
            </h3>

            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Your appointment request has been logged under Booking Token:{' '}
              <strong className="text-teal-900 font-mono text-sm">{confirmedBooking.bookingId}</strong>
            </p>

            {/* Booking Details Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Clinic:</span>
                <strong className="text-slate-900">{confirmedBooking.clinicName}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Address:</span>
                <span className="text-slate-700 text-right max-w-xs">{confirmedBooking.clinicAddress}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Mobile Helpline:</span>
                <strong className="text-teal-800">{confirmedBooking.phone}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Treatment:</span>
                <span className="text-slate-900 font-medium">{confirmedBooking.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Scheduled:</span>
                <span className="text-slate-900 font-medium">{confirmedBooking.date} · {confirmedBooking.time}</span>
              </div>
            </div>

            <div className="space-y-2.5 pt-2 max-w-md mx-auto">
              <button
                onClick={handleWhatsAppConfirmation}
                className="w-full py-3 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Details via WhatsApp (8949775190)</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${confirmedBooking.phone}`}
                  className="py-2.5 px-3 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>Call {confirmedBooking.phone}</span>
                </a>

                <button
                  onClick={handleReset}
                  className="py-2.5 px-3 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
