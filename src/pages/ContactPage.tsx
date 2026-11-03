import React, { useState } from 'react';
import { PageId, EnquiryFormData } from '../types';
import { BRAND } from '../data/content';
import { CurvedDivider } from '../components/CurvedDivider';
import { LeafDecoration } from '../components/LeafDecoration';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Copy, 
  Check, 
  ExternalLink,
  Tractor,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    enquiryType: 'Dairy Product Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [copiedId, setCopiedId] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);

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
      newErrors.message = 'Please enter your message or query';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `VDF-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionId(generatedRef);
      setIsSubmitting(false);
      setIsSuccess(true);

      confetti({
        particleCount: 80,
        spread: 75,
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

  const handleWhatsAppDirect = () => {
    const msg = encodeURIComponent(
      `Hello Vasundhara Diary and Farms,\n\nName: ${formData.fullName}\nEnquiry Type: ${formData.enquiryType}\nRef: ${submissionId || 'New Enquiry'}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${BRAND.whatsapp.replace('+', '')}?text=${msg}`, '_blank');
  };

  return (
    <div className="w-full overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 bg-gradient-to-b from-white via-[#FFF9F1] to-[#FFF9F1] overflow-hidden text-left">
        <div className="absolute top-20 right-8 pointer-events-none opacity-30">
          <LeafDecoration size={70} rotation={25} color="#F04458" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#EAF5EE] text-[#27864B] px-4 py-1.5 rounded-full border border-[#27864B]/20 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#27864B]" />
              <span className="text-xs font-extrabold uppercase tracking-widest">
                CONTACT & INQUIRIES
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#164D32] tracking-tight leading-tight">
              Let's Connect &{' '}
              <span className="text-[#F04458] block sm:inline">
                Grow Together.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#556B60] leading-relaxed">
              Whether you are an agricultural distributor, dairy partner, veterinarian, or future customer, we are delighted to share our journey with you.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <CurvedDivider position="bottom" fillColor="#FFF9F1" height={40} />
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <section className="py-16 sm:py-24 bg-[#FFF9F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT SIDE: Farm Photo & Contact Information */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              {/* Farm Photo Card */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white bg-[#164D32]">
                <img
                  src="/images/cattle-shed.jpg"
                  alt="Vasundhara Farm cattle shed and green surroundings"
                  className="w-full h-64 sm:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF7185] bg-white/10 px-3 py-1 rounded-full inline-block backdrop-blur-xs mb-2">
                    PLANNED VENTURE SPECIFICATIONS
                  </span>
                  <h3 className="text-xl font-bold font-display text-white">
                    {BRAND.name} {BRAND.subname}
                  </h3>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-white/85">
                    <span className="flex items-center gap-1 font-semibold text-[#34A853]">
                      <Tractor className="w-3.5 h-3.5" /> 5.5 Fertile Acres
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-semibold text-[#FF7185]">
                      <ShieldCheck className="w-3.5 h-3.5" /> 20 Planned HF & Jersey
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Information Cards */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-[#164D32]/10 space-y-5">
                
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#164D32] border-b border-gray-100 pb-3">
                  Direct Communication Channels
                </h4>

                {/* Farm Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] text-[#27864B] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#556B60] block">
                      Farm Location
                    </span>
                    <p className="text-xs sm:text-sm text-[#26332C] font-medium leading-relaxed mt-0.5">
                      {BRAND.address}
                    </p>
                    <button
                      onClick={() => setShowMapModal(true)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#27864B] hover:text-[#164D32] mt-1.5 cursor-pointer"
                    >
                      <span>View Farm Map & Coordinates</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Contact Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFE4E8] text-[#F04458] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#556B60] block">
                      Phone Number
                    </span>
                    <a 
                      href={`tel:${BRAND.phone}`}
                      className="text-sm text-[#164D32] font-bold hover:text-[#F04458] transition-colors mt-0.5 block"
                    >
                      {BRAND.phone}
                    </a>
                    <span className="text-[11px] text-[#556B60]">Mon - Sat: 9:00 AM - 6:00 PM IST</span>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] text-[#27864B] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#556B60] block">
                      Email Address
                    </span>
                    <a 
                      href={`mailto:${BRAND.email}`}
                      className="text-sm text-[#164D32] font-bold hover:text-[#27864B] transition-colors mt-0.5 block"
                    >
                      {BRAND.email}
                    </a>
                    <span className="text-[11px] text-[#556B60]">Responses typically within 24 hours</span>
                  </div>
                </div>

                {/* WhatsApp Channel */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#556B60] block">
                      Instant WhatsApp Chat
                    </span>
                    <a 
                      href={`https://wa.me/${BRAND.whatsapp.replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#27864B] font-bold hover:underline mt-0.5 block"
                    >
                      {BRAND.whatsapp}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE: Professional Enquiry Form */}
            <div className="lg:col-span-7 text-left">
              <div className="bg-white rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-10 shadow-xl border border-[#164D32]/10 relative">
                
                <div className="mb-6 space-y-1">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#F04458] bg-[#FFE4E8] px-3.5 py-1 rounded-full inline-block">
                    OFFICIAL ENQUIRY
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#164D32]">
                    Send Us A Message
                  </h3>
                  <p className="text-xs sm:text-sm text-[#556B60]">
                    Please submit your inquiry below. All questions regarding our planned operations, partnerships, or products will be addressed promptly.
                  </p>
                </div>

                {isSuccess ? (
                  /* Success Feedback */
                  <div className="text-center py-8 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-[#EAF5EE] text-[#27864B] flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-[#164D32]">
                        Enquiry Successfully Sent!
                      </h4>
                      <p className="text-sm text-[#556B60] mt-2 max-w-md mx-auto">
                        Thank you, <strong>{formData.fullName}</strong>. Your inquiry has been registered under reference:
                      </p>
                    </div>

                    <div className="bg-[#FFF9F1] border border-[#27864B]/20 rounded-2xl p-4 max-w-sm mx-auto flex items-center justify-between">
                      <div className="text-left">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#556B60] block">
                          Reference Code
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

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={handleWhatsAppDirect}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-full text-sm font-bold shadow-md cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Continue to WhatsApp</span>
                      </button>

                      <button
                        onClick={() => {
                          setIsSuccess(false);
                          setFormData({
                            fullName: '',
                            email: '',
                            phone: '',
                            companyName: '',
                            enquiryType: 'Dairy Product Enquiry',
                            message: '',
                          });
                        }}
                        className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-bold text-[#164D32] bg-[#EAF5EE] hover:bg-[#d8edd0] transition-colors cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Live Form */
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    
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
                          placeholder="e.g. Vikram Joshi"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                            errors.fullName ? 'border-[#F04458] bg-[#FFF0F2]' : 'border-gray-200 focus:border-[#27864B]'
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
                          placeholder="e.g. vikram@example.com"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                            errors.email ? 'border-[#F04458] bg-[#FFF0F2]' : 'border-gray-200 focus:border-[#27864B]'
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
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 80880 50628"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                            errors.phone ? 'border-[#F04458] bg-[#FFF0F2]' : 'border-gray-200 focus:border-[#27864B]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-[#F04458] mt-1 font-medium">{errors.phone}</p>
                        )}
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block text-xs font-bold text-[#164D32] uppercase tracking-wider mb-1">
                          Company Name (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Business or organization"
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
                        Message *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please detail your request or collaboration proposal..."
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors resize-none ${
                          errors.message ? 'border-[#F04458] bg-[#FFF0F2]' : 'border-gray-200 focus:border-[#27864B]'
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
                        className="w-full flex items-center justify-center gap-2 bg-[#F04458] hover:bg-[#DC3348] text-white py-4 rounded-2xl font-bold tracking-wide shadow-lg shadow-[#F04458]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer disabled:opacity-75"
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

                    <p className="text-[11px] text-[#556B60] text-center pt-2">
                      🔒 Your details are stored securely and never shared with unauthorized parties.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Google Maps Location Modal Preview */}
      {showMapModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div onClick={() => setShowMapModal(false)} className="fixed inset-0 bg-black/70 backdrop-blur-xs" />
          <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-gray-200">
            <div className="bg-[#164D32] p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#FF7185]" />
                <h4 className="font-bold text-base">Farm Geographical Location</h4>
              </div>
              <button 
                onClick={() => setShowMapModal(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-gray-200 h-64 bg-gray-100 flex items-center justify-center relative">
                <img
                  src="/images/farm-landscape.jpg"
                  alt="Farm aerial land mapping"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl text-center max-w-sm">
                    <MapPin className="w-8 h-8 text-[#F04458] mx-auto animate-bounce" />
                    <h5 className="font-bold text-[#164D32] text-sm mt-1">Vasundhara Diary and Farms</h5>
                    <p className="text-xs text-[#556B60] mt-0.5">{BRAND.address}</p>
                    <span className="text-[10px] font-bold text-[#27864B] bg-[#EAF5EE] px-2.5 py-0.5 rounded-full inline-block mt-2">
                      5.5 Acres Survey Perimeter
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-[#556B60]">
                  Official site visits will be available following Phase 1 infrastructure completion.
                </span>
                <a
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold bg-[#27864B] text-white px-4 py-2 rounded-full hover:bg-[#164D32] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
