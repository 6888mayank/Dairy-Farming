import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { BRAND } from '../data/content';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-10 max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#164D32] p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            {isPrivacy ? (
              <ShieldCheck className="w-6 h-6 text-[#FF7185]" />
            ) : (
              <FileText className="w-6 h-6 text-[#FF7185]" />
            )}
            <h3 className="text-xl font-bold">
              {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm text-[#26332C]/85 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                <strong>1. Information Collection:</strong> Vasundhara Diary and Farms values your privacy. We only collect details provided voluntarily through our enquiry forms, such as your full name, email address, phone number, and message inquiries.
              </p>
              <p>
                <strong>2. Use of Information:</strong> Contact information is utilized strictly to respond to business inquiries, distribution proposals, or agricultural collaborations regarding our planned 5.5-acre modern dairy project.
              </p>
              <p>
                <strong>3. Confidentiality:</strong> We do not sell, rent, or trade your personal information with third-party advertising brokers or unauthorized entities.
              </p>
              <p>
                <strong>4. Data Security:</strong> Industry-standard procedural precautions are maintained to safeguard all incoming inquiry records.
              </p>
              <p>
                <strong>5. Inquiries:</strong> For privacy concerns, reach out to us at <code>{BRAND.email}</code>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Project Status Disclosure:</strong> Vasundhara Diary and Farms is an upcoming modern dairy venture on 5.5 acres of fertile agricultural land with an initial planned capacity of 20 HF and Jersey livestock. All images, layouts, and infrastructural depictions represent planned project specifications and future development targets.
              </p>
              <p>
                <strong>2. Proposed Offerings:</strong> All dairy items (fresh milk, pasteurized milk, curd, paneer, and ghee) are presented as proposed or future product offerings and do not constitute an active offer of commercial sale until formal commissioning.
              </p>
              <p>
                <strong>3. Intellectual Property:</strong> All brand logos, custom graphics, texts, and original photography are the proprietary property of Vasundhara Diary and Farms.
              </p>
              <p>
                <strong>4. Accuracy:</strong> We aim for factual transparency; no operational awards or non-verified certifications are claimed on this website.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FFF9F1] border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#164D32] hover:bg-[#27864B] text-white text-xs font-bold transition-colors cursor-pointer"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};
