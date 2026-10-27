import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Quote, MessageSquare, Phone } from 'lucide-react';
import { PATIENT_REVIEWS, CLINIC_FAQS } from '../data/clinicData';

export const TestimonialsAndFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="patient-reviews" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
            Patient Stories & Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Real Experiences From Our Jaipur Patients
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Hear from families and working professionals across Sanganer, Kalyanpura, and Rampura Phatak who trust Akhil Dental & Puja Dental clinics.
          </p>
        </div>

        {/* Testimonials 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PATIENT_REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-900">
                  {review.name}
                </h4>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-0.5">
                  <span>{review.location}</span>
                </div>
                <div className="text-[10px] font-medium text-teal-700 mt-1">
                  Procedure: {review.treatment}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
              Frequently Asked Questions
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              Common Questions About Our Clinics & Pharmacy
            </h3>
          </div>

          <div className="space-y-3">
            {CLINIC_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm hover:text-teal-800 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-teal-700 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Help box */}
          <div className="mt-8 p-4 rounded-xl bg-teal-50 border border-teal-200 text-center flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs font-medium text-teal-900">
              Have another question regarding dental charges, treatments, or medicines?
            </span>
            <a
              href="tel:8949775190"
              className="px-4 py-2 text-xs font-bold text-teal-900 bg-white border border-teal-300 rounded-lg hover:bg-teal-100/60 transition-colors inline-flex items-center gap-1.5 shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700" />
              <span>Call Helpline: 8949775190</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
