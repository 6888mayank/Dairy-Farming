import React from 'react';
import { PageId } from '../types';
import { BRAND, CATTLE_BREEDS, INFRASTRUCTURE_FACILITIES, BREEDING_GENETICS_INFO } from '../data/content';
import { CurvedDivider } from '../components/CurvedDivider';
import { LeafDecoration } from '../components/LeafDecoration';
import { 
  ArrowRight, 
  Home, 
  Wheat, 
  Pipette, 
  ThermometerSnowflake, 
  HeartPulse, 
  Database, 
  ShieldCheck, 
  CheckCircle2, 
  Tractor,
  Layers,
  Sparkles,
  Dna,
  Award
} from 'lucide-react';

interface FarmPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

export const FarmPage: React.FC<FarmPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const infraIconMap: Record<string, React.ReactNode> = {
    Home: <Home className="w-6 h-6" />,
    Wheat: <Wheat className="w-6 h-6" />,
    Pipette: <Pipette className="w-6 h-6" />,
    ThermometerSnowflake: <ThermometerSnowflake className="w-6 h-6" />,
    HeartPulse: <HeartPulse className="w-6 h-6" />,
    Database: <Database className="w-6 h-6" />,
  };

  return (
    <div className="w-full overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-24 bg-gradient-to-b from-white via-[#FFF9F1] to-[#FFF9F1] overflow-hidden text-left">
        <div className="absolute top-24 right-10 pointer-events-none opacity-30">
          <LeafDecoration size={68} rotation={25} color="#27864B" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#EAF5EE] text-[#27864B] px-4 py-1.5 rounded-full border border-[#27864B]/20 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#27864B]" />
              <span className="text-xs font-extrabold uppercase tracking-widest">
                INFRASTRUCTURE & HERD VISION
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#164D32] tracking-tight leading-tight">
              Discover Our Modern{' '}
              <span className="text-[#F04458] block sm:inline">
                Dairy Farming Vision.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#556B60] leading-relaxed">
              Combining humane cattle comfort, scientific nutrition, automated milking hygiene, and advanced breeding genetics to build an exemplary modern dairy ecosystem.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <CurvedDivider position="bottom" fillColor="#FFF9F1" height={40} />
        </div>
      </section>

      {/* SECTION 1: Our Agricultural Land (5.5 Acres) */}
      <section className="py-16 sm:py-24 bg-[#FFF9F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl border border-[#164D32]/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-5 text-left">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#27864B] bg-[#EAF5EE] px-3.5 py-1 rounded-full">
                  AGRICULTURAL FOUNDATION
                </span>

                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#164D32] tracking-tight">
                  Fertile Agricultural Land & Fodder Pastures
                </h2>

                <p className="text-base text-[#26332C]/85 leading-relaxed">
                  Our venture is built upon 5.5 acres of fertile agricultural soil strategically zoned to ensure self-sufficiency, biological security, and closed-loop farm sustainability.
                </p>

                <div className="space-y-3 pt-2 text-sm text-[#556B60]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#27864B] shrink-0 mt-0.5" />
                    <span><strong>Fodder Cultivation:</strong> Multi-cut green fodder cultivation (hybrid Napier grass, maize, lucerne) guaranteeing continuous fresh fiber and nutrient intake.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#27864B] shrink-0 mt-0.5" />
                    <span><strong>Dairy Infrastructure:</strong> Open ventilated high-roof cattle barn, clean feeding mangers, milking parlor, and rapid cold-chain storage.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#27864B] shrink-0 mt-0.5" />
                    <span><strong>Eco Recycling:</strong> Bio-digester and compost pits turning cow dung into nutrient-dense organic fertilizer to replenish soil health.</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <div className="bg-[#EAF5EE] text-[#164D32] px-4 py-2 rounded-xl text-xs font-bold">
                    Zone 1: Fodder & Silage
                  </div>
                  <div className="bg-[#FFE4E8] text-[#F04458] px-4 py-2 rounded-xl text-xs font-bold">
                    Zone 2: Cattle Barns
                  </div>
                  <div className="bg-[#FCF6EC] text-[#27864B] px-4 py-2 rounded-xl text-xs font-bold">
                    Zone 3: Milk Chilling
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-gray-100 aspect-4/3">
                  <img
                    src="/images/farm-landscape.jpg"
                    alt="5.5 acres fertile farm aerial view"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#164D32] text-white p-4 rounded-2xl shadow-xl text-left max-w-xs">
                  <div className="text-xl font-bold font-display">5.5 Acres</div>
                  <div className="text-[11px] text-white/80">Fertile agricultural land for planned dairy development</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Livestock (Holstein Friesian & Jersey Cattle) */}
      <section className="py-20 sm:py-28 bg-white border-t border-b border-[#164D32]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          {/* Header with 20 Planned Highlight */}
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F04458] bg-[#FFE4E8] px-4 py-1.5 rounded-full inline-block">
              LIVESTOCK SELECTION
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#164D32] tracking-tight">
              Our Planned Dairy Livestock
            </h2>

            {/* Crucial Banner */}
            <div className="inline-flex items-center gap-3 bg-[#164D32] text-white px-5 py-3 rounded-2xl shadow-md">
              <ShieldCheck className="w-6 h-6 text-[#FF7185] shrink-0" />
              <div>
                <span className="text-xs text-[#FF7185] font-bold uppercase tracking-wider block">
                  Livestock Selection & Herd Health
                </span>
                <span className="text-base font-extrabold tracking-wide">
                  Purebred HF & Jersey Herd Management
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#556B60] leading-relaxed">
              We focus on a synergistic pairing of two world-renowned dairy breeds: Holstein Friesian for balanced milk production volume and Jersey for superior butterfat richness and heat adaptability.
            </p>
          </div>

          {/* 2 Large Visual Breed Cards */}
          <div className="space-y-16">
            
            {/* Breed 1: HOLSTEIN FRIESIAN (HF) */}
            <div className="bg-[#FFF9F1] rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-10 border border-[#164D32]/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Breed Image */}
                <div className="lg:col-span-5 relative">
                  <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-4/3 bg-white">
                    <img
                      src="/images/hf-cow.jpg"
                      alt="Holstein Friesian dairy cow in pasture"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Holstein Friesian (HF)
                  </div>
                </div>

                {/* Breed Text */}
                <div className="lg:col-span-7 space-y-4 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#27864B] bg-[#EAF5EE] px-3 py-1 rounded-full">
                      Primary Yield Focus
                    </span>
                    <span className="text-xs text-[#556B60]">Origin: Netherlands</span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#164D32]">
                    Holstein Friesian (HF)
                  </h3>

                  <p className="text-sm sm:text-base text-[#26332C]/85 leading-relaxed">
                    Renowned globally as the premier dairy breed, Holstein Friesians are distinguished by their striking black-and-white coats and exceptional milk production volume. In our planned modern dairy unit, HF cows will form a primary foundation for efficient, consistent yield.
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#164D32] mb-2">
                      Key Strengths & Role in Commercial Dairy:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#556B60]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                        <span>World-class milk production efficiency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                        <span>Calm temperament and responsive to comfortable barn housing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                        <span>Adaptable to scientific total mixed ration (TMR) feeding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                        <span>Consistent lactation performance under modern herd management</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-gray-100 text-xs text-[#26332C]/80">
                    <strong>Planned Role:</strong> Provides the primary volume base for fresh milk production, supporting commercial viability and regular dairy supply.
                  </div>
                </div>

              </div>
            </div>

            {/* Breed 2: JERSEY CATTLE */}
            <div className="bg-[#FFF9F1] rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-10 border border-[#164D32]/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Breed Text */}
                <div className="lg:col-span-7 space-y-4 text-left order-2 lg:order-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F04458] bg-[#FFE4E8] px-3 py-1 rounded-full">
                      High Butterfat & Rich Solids
                    </span>
                    <span className="text-xs text-[#556B60]">Origin: Channel Island of Jersey</span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#164D32]">
                    Jersey Cattle
                  </h3>

                  <p className="text-sm sm:text-base text-[#26332C]/85 leading-relaxed">
                    Distinguished by their beautiful fawn-brown coats and gentle large eyes, Jersey cows are celebrated for their milk's rich butterfat, protein density, and distinctive creamy flavor. They exhibit remarkable feed conversion efficiency and superior heat tolerance.
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#164D32] mb-2">
                      Key Strengths & Role in Commercial Dairy:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#556B60]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#F04458] shrink-0 mt-0.5" />
                        <span>High milk solids with elevated butterfat and protein content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#F04458] shrink-0 mt-0.5" />
                        <span>Exceptional feed conversion efficiency per kilogram body weight</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#F04458] shrink-0 mt-0.5" />
                        <span>High heat and climatic resilience in subtropical farming conditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#F04458] shrink-0 mt-0.5" />
                        <span>Gentle, docile demeanor that excels in humane welfare-centered farming</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-gray-100 text-xs text-[#26332C]/80">
                    <strong>Planned Role:</strong> Enriches the milk composition with natural creaminess and body, ideal for wholesome drinking milk and traditional ghee processing.
                  </div>
                </div>

                {/* Breed Image */}
                <div className="lg:col-span-5 relative order-1 lg:order-2">
                  <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-4/3 bg-white">
                    <img
                      src="/images/jersey-cow.jpg"
                      alt="Jersey cow grazing in clover field"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Jersey Cattle
                  </div>
                </div>

              </div>
            </div>

            {/* Feature: Sexed Semen of Top Breeds */}
            <div className="mt-12 bg-gradient-to-br from-[#0E3522] via-[#164D32] to-[#1E6040] rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 text-white shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-[#34A853]/20 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7185] bg-white/10 px-3.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                    <Dna className="w-3.5 h-3.5 text-[#FF7185]" /> ADVANCED BREEDING GENETICS
                  </span>
                  <span className="text-xs text-white/70 font-medium">
                    Sustainable Herd Replacement Strategy
                  </span>
                </div>

                <div className="max-w-4xl space-y-3">
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                    {BREEDING_GENETICS_INFO.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                    {BREEDING_GENETICS_INFO.leadParagraph}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
                  {BREEDING_GENETICS_INFO.points.map((point, idx) => (
                    <div 
                      key={idx}
                      className="bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-6 border border-white/10 backdrop-blur-xs flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#27864B]/30 border border-[#27864B] text-[#34A853] flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          <span>{point.title}</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-white/60 border-t border-white/10">
                  <span>Scientific cattle breeding protocol deployed under veterinary guidance.</span>
                  <button
                    onClick={onOpenEnquiry}
                    className="text-xs font-bold text-[#FF7185] hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Discuss Dairy Breeding Collaboration</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: Modern Dairy Infrastructure (6 Cards) */}
      <section className="py-20 sm:py-28 bg-[#FFF9F1] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#27864B] bg-[#EAF5EE] px-4 py-1.5 rounded-full inline-block">
              ENGINEERING & WELFARE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#164D32] tracking-tight">
              Modern Dairy Infrastructure
            </h2>
            <p className="text-sm sm:text-base text-[#556B60]">
              Every facility has been designed to maximize animal comfort, bio-security, and touchless milk extraction. Facilities are planned project specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {INFRASTRUCTURE_FACILITIES.map((facility) => (
              <div
                key={facility.title}
                className="bg-white rounded-3xl p-7 border border-[#164D32]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF5EE] text-[#27864B] flex items-center justify-center">
                      {infraIconMap[facility.iconName] || <Home className="w-6 h-6" />}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F04458] bg-[#FFE4E8] px-2.5 py-1 rounded-full">
                      {facility.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#164D32]">
                    {facility.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#27864B] block mt-0.5">
                    {facility.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-[#556B60] mt-3 leading-relaxed">
                    {facility.description}
                  </p>

                  <ul className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                    {facility.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#26332C]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#27864B] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-16 bg-[#164D32] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Interested in partnering or exploring our dairy operations?
          </h3>
          <p className="text-sm text-white/80">
            Connect with our agricultural team to discuss distribution, collaborations, or farm visits upon commissioning.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry()}
              className="bg-[#F04458] hover:bg-[#DC3348] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Send Enquiry →
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer"
            >
              View Proposed Products
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
