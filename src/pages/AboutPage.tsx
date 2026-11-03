import React from 'react';
import { PageId } from '../types';
import { BRAND, CORE_VALUES } from '../data/content';
import { CurvedDivider } from '../components/CurvedDivider';
import { LeafDecoration } from '../components/LeafDecoration';
import { 
  ArrowRight, 
  Compass, 
  Target, 
  Award, 
  Shield, 
  Heart, 
  Leaf, 
  Lightbulb, 
  Users, 
  CheckCircle2, 
  Tractor,
  Layers
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const valueIconMap: Record<string, React.ReactNode> = {
    Award: <Award className="w-6 h-6" />,
    Shield: <Shield className="w-6 h-6" />,
    Heart: <Heart className="w-6 h-6" />,
    Leaf: <Leaf className="w-6 h-6" />,
    Lightbulb: <Lightbulb className="w-6 h-6" />,
    Users: <Users className="w-6 h-6" />,
  };

  return (
    <div className="w-full overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 bg-gradient-to-b from-white via-[#FFF9F1] to-[#FFF9F1] overflow-hidden text-left">
        <div className="absolute top-20 right-8 pointer-events-none opacity-30">
          <LeafDecoration size={70} rotation={35} color="#27864B" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#EAF5EE] text-[#27864B] px-4 py-1.5 rounded-full border border-[#27864B]/20 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#27864B]" />
              <span className="text-xs font-extrabold uppercase tracking-widest">
                ABOUT OUR VENTURE
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#164D32] tracking-tight leading-tight">
              Rooted In The Land.{' '}
              <span className="text-[#F04458] block sm:inline">
                Inspired By The Future.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#556B60] leading-relaxed">
              Vasundhara Diary and Farms is an upcoming modern dairy farming enterprise established on 5.5 acres of fertile agricultural land, guided by science, animal welfare, and sustainable land stewardship.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <CurvedDivider position="bottom" fillColor="#FFF9F1" height={40} />
        </div>
      </section>

      {/* Company Introduction & Narrative */}
      <section className="py-16 sm:py-24 bg-[#FFF9F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left image stack */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/farm-landscape.jpg"
                  alt="Fertile 5.5 acres farmland"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF7185]">
                    Agricultural Base
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1">
                    5.5 Acres Fertile Agricultural Land
                  </h4>
                  <p className="text-xs text-white/80 mt-1">
                    Earmarked for dedicated fodder cropping and climate-controlled cattle housing.
                  </p>
                </div>
              </div>
            </div>

            {/* Right text introduction */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#27864B] bg-[#EAF5EE] px-3.5 py-1 rounded-full">
                COMPANY INTRODUCTION
              </span>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#164D32] tracking-tight">
                Building A High-Standard Modern Dairy Enterprise
              </h2>

              <div className="space-y-4 text-base text-[#26332C]/85 leading-relaxed">
                <p className="font-medium text-[#164D32] bg-white p-5 rounded-2xl border border-[#164D32]/10 shadow-xs">
                  "Vasundhara Diary and Farms is an upcoming modern dairy farming venture planned across 5.5 acres of fertile agricultural land. The project aims to establish a modernized dairy production unit with an initial planned livestock capacity of 20 HF and Jersey cattle."
                </p>

                <p>
                  Our focus is on developing a professional dairy operation through responsible animal care, modern infrastructure, hygienic practices, and sustainable agricultural management. Rather than pursuing unmonitored mass scale, we have structured our venture around a deliberate 20-cattle initial phase, ensuring every animal receives precise nutritional care, veterinary oversight, and humane housing.
                </p>

                <p className="text-sm text-[#556B60]">
                  By bridging agricultural soil health with modern cold-chain handling, Vasundhara Diary and Farms is designed to offer pure, unadulterated milk while protecting the rural ecosystem for future generations.
                </p>
              </div>

              {/* Highlights pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white p-3.5 rounded-2xl border border-gray-100 text-left">
                  <span className="text-xs text-[#556B60] block">Land Allocation</span>
                  <span className="text-sm font-bold text-[#164D32]">5.5 Fertile Acres</span>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-gray-100 text-left">
                  <span className="text-xs text-[#556B60] block">Initial Herd</span>
                  <span className="text-sm font-bold text-[#F04458]">20 HF & Jersey</span>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-gray-100 text-left">
                  <span className="text-xs text-[#556B60] block">Ecosystem</span>
                  <span className="text-sm font-bold text-[#27864B]">Closed Loop Farm</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Story: 4 Foundations */}
      <section className="py-20 bg-white border-t border-b border-[#164D32]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-14 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F04458] bg-[#FFE4E8] px-3.5 py-1 rounded-full">
              GENESIS & DEVELOPMENT
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#164D32] tracking-tight">
              Our Journey & Agricultural Foundation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#FFF9F1] p-6 rounded-3xl border border-[#164D32]/10 hover:border-[#27864B] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] text-[#27864B] flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-[#164D32] mb-2">
                Agricultural Foundation
              </h3>
              <p className="text-xs text-[#556B60] leading-relaxed">
                Securing 5.5 acres of prime arable land with high water tables, preparing soil beds for multi-cut nutrient-rich green fodder crops.
              </p>
            </div>

            <div className="bg-[#FFF9F1] p-6 rounded-3xl border border-[#164D32]/10 hover:border-[#27864B] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FFE4E8] text-[#F04458] flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-[#164D32] mb-2">
                Modern Dairy Vision
              </h3>
              <p className="text-xs text-[#556B60] leading-relaxed">
                Designing open-stall ventilated barns with automated mist cooling, rubber bedding, and touchless stainless steel milking infrastructure.
              </p>
            </div>

            <div className="bg-[#FFF9F1] p-6 rounded-3xl border border-[#164D32]/10 hover:border-[#27864B] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] text-[#27864B] flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-[#164D32] mb-2">
                HF & Jersey Livestock
              </h3>
              <p className="text-xs text-[#556B60] leading-relaxed">
                Inducting an initial 20 planned cattle herd featuring high-production Holstein Friesians and high-butterfat Jersey breeds.
              </p>
            </div>

            <div className="bg-[#FFF9F1] p-6 rounded-3xl border border-[#164D32]/10 hover:border-[#27864B] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FFE4E8] text-[#F04458] flex items-center justify-center font-bold text-sm mb-4">
                04
              </div>
              <h3 className="text-lg font-bold text-[#164D32] mb-2">
                Sustainable Development
              </h3>
              <p className="text-xs text-[#556B60] leading-relaxed">
                Implementing on-farm manure composting to enrich crop soil without chemical pesticides, establishing a zero-waste loop.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 bg-[#FFF9F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border-2 border-[#27864B]/20 text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF5EE] text-[#27864B] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#27864B]">
                OUR VISION
              </span>
              <h3 className="font-display font-extrabold text-2xl text-[#164D32] mt-1 mb-4">
                Sustainable Dairy Excellence
              </h3>
              <p className="text-base text-[#26332C]/85 leading-relaxed italic border-l-4 border-[#27864B] pl-4">
                "To build a modern, sustainable, and trusted dairy farming enterprise that combines agricultural resources, animal welfare, and efficient dairy production practices."
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border-2 border-[#FF7185]/30 text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#FFE4E8] text-[#F04458] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F04458]">
                OUR MISSION
              </span>
              <h3 className="font-display font-extrabold text-2xl text-[#164D32] mt-1 mb-4">
                Responsible Cattle & Quality Focus
              </h3>
              <p className="text-base text-[#26332C]/85 leading-relaxed italic border-l-4 border-[#F04458] pl-4">
                "To develop a well-managed dairy ecosystem focused on quality, responsible cattle care, hygienic operations, and sustainable agricultural development."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section: 6 Cards */}
      <section className="py-20 sm:py-28 bg-[#164D32] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7185] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/10">
              GUIDING PRINCIPLES
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Our Six Core Values
            </h2>
            <p className="text-sm sm:text-base text-white/80">
              The ethical compass directing every animal welfare protocol, agricultural investment, and milk handling procedure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="bg-[#0E3522] rounded-3xl p-7 border border-white/10 hover:border-[#34A853]/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#27864B]/30 border border-[#27864B] text-[#34A853] flex items-center justify-center mb-5">
                  {valueIconMap[val.icon] || <CheckCircle2 className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {val.title}
                </h3>
                <span className="text-xs font-semibold text-[#FF7185] block mt-0.5">
                  {val.subtitle}
                </span>
                <p className="text-xs sm:text-sm text-white/75 mt-3 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-16 bg-[#FFF9F1] text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#164D32]">
            Want to learn more about our 5.5-acre farm setup?
          </h3>
          <p className="text-sm text-[#556B60]">
            Explore our planned cattle housing, feeding management, and livestock specifications.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('farm')}
              className="bg-[#F04458] hover:bg-[#DC3348] text-white px-7 py-3 rounded-full font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Explore Our Farm Vision →
            </button>
            <button
              onClick={onOpenEnquiry}
              className="bg-white hover:bg-[#EAF5EE] text-[#164D32] border border-[#164D32] px-6 py-3 rounded-full font-bold text-sm transition-all cursor-pointer"
            >
              Contact Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
