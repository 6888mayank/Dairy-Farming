import React, { useState, useEffect } from 'react';
import { EnquiryFormData } from '../types';
import { BRAND } from '../data/content';
import { X, Send, CheckCircle2, MessageSquare, Phone, ShieldAlert, Sparkles, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
  initialProduct?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialType = 'General Enquiry',
  initialProduct = '',
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    enquiryType: initialType,
    message: initialProduct ? `Inquiring regarding planned availability for ${initialProduct}.` : '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [copiedId, setCopiedId] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setErrors({});
      setFormData(prev => ({
        ...prev,
        enquiryType: initialType || 'General Enquiry',
        message: initialProduct ? `Inquiring regarding planned availability for ${initialProduct}.` : prev.message,
      }));
    }
  }, [isOpen, initialType, initialProduct]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number';
    } else if (formData.phone.trim().replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number (min 8 digits)';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us how we can assist you';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch & log state
    setTimeout(() => {
      const generatedRef = `VDF-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionId(generatedRef);
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 700);
  };

  const copyRefToClipboard = () => {
    if (submissionId) {
      navigator.clipboard.writeText(submissionId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Vasundhara Diary and Farms,\n\nI am contacting regarding: ${formData.enquiryType}\nReference ID: ${submissionId}\nName: ${formData.fullName}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${BRAND.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#164D32]/15 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#164D32] to-[#27864B] p-6 text-white relative">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7185]">
            <Sparkles className="w-3.5 h-3.5" /> Vasundhara Connect Portal
          </div>
          <h3 className="text-2xl font-bold text-white mt-1">
            {isSuccess ? 'Enquiry Received' : "Let's Connect & Grow Together"}
          </h3>
          <p className="text-white/80 text-xs sm:text-sm mt-1">
            Planned 5.5 Acres Modern Dairy Venture • 20 HF & Jersey Livestock
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSuccess ? (
            /* Success Confirmation State */
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#EAF5EE] text-[#27864B] flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#164D32]">
                  Thank you, {formData.fullName}!
                </h4>
                <p className="text-[#556B60] text-sm mt-2 max-w-md mx-auto">
                  Your enquiry regarding <strong>{formData.enquiryType}</strong> has been recorded. Our team will review your message and reach out shortly via email or phone.
                </p>
              </div>

              {/* Reference ID Pill */}
              <div className="bg-[#FFF9F1] border border-[#27864B]/20 rounded-2xl p-4 max-w-sm mx-auto flex items-center justify-between">
                <div className="text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#556B60] block">
                    Enquiry Reference
                  </span>
                  <span className="text-lg font-mono font-bold text-[#164D32]">
                    {submissionId}
                  </span>
                </div>
                <button
                  onClick={copyRefToClipboard}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:border-[#27864B] text-[#164D32] transition-colors cursor-pointer"
                >
                  {copiedId ? <Check className="w-3.5 h-3.5 text-[#27864B]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-full text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-bold text-[#164D32] bg-[#EAF5EE] hover:bg-[#d8edd0] transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Enquiry Form State */
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              
              {/* Notice Banner */}
              <div className="bg-[#FFF9F1] border-l-4 border-[#27864B] p-3 rounded-r-xl text-xs text-[#26332C]/80 leading-relaxed">
                <strong>Project Notice:</strong> Vasundhara Diary and Farms is an upcoming venture with planned 5.5 acres infrastructure and 20 cattle capacity. Product offerings are currently planned.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#164D32] uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.fullName 
                        ? 'border-[#F04458] bg-[#FFF0F2]' 
                        : 'border-gray-200 focus:border-[#27864B]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-[#F04458] mt-1 font-medium">{errors.fullName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-[#164D32] uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. ramesh@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.email 
                        ? 'border-[#F04458] bg-[#FFF0F2]' 
                        : 'border-gray-200 focus:border-[#27864B]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-[#F04458] mt-1 font-medium">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-[#164D32] uppercase tracking-wider mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 80880 50628"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.phone 
                        ? 'border-[#F04458] bg-[#FFF0F2]' 
                        : 'border-gray-200 focus:border-[#27864B]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-[#F04458] mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>

                {/* Company / Organization (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-[#164D32] uppercase tracking-wider mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Optional business name"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#27864B] text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Enquiry Type Dropdown */}
              <div>
                <label className="block text-xs font-bold text-[#164D32] uppercase tracking-wider mb-1">
                  Enquiry Type *
                </label>
                <select
                  value={formData.enquiryType}
                  onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#27864B] text-sm focus:outline-none transition-colors bg-white cursor-pointer"
                >
                  <option value="Dairy Product Enquiry">Dairy Product Enquiry</option>
                  <option value="Business Partnership">Business Partnership</option>
                  <option value="Distribution Enquiry">Distribution Enquiry</option>
                  <option value="Agricultural Collaboration">Agricultural Collaboration</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-[#164D32] uppercase tracking-wider mb-1">
                  Your Message *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your enquiry, partnership interests, or questions..."
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors resize-none ${
                    errors.message 
                      ? 'border-[#F04458] bg-[#FFF0F2]' 
                      : 'border-gray-200 focus:border-[#27864B]'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-[#F04458] mt-1 font-medium">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#F04458] hover:bg-[#DC3348] text-white py-3.5 rounded-2xl font-bold tracking-wide shadow-lg shadow-[#F04458]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Enquiry →</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#556B60]">
                <ShieldAlert className="w-3.5 h-3.5 text-[#27864B]" />
                <span>Your contact information is strictly handled in accordance with our privacy policy.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
