import React from 'react';
import { PageId } from '../types';
import { ROADMAP_PHASES } from '../data/content';
import { CurvedDivider } from '../components/CurvedDivider';
import { LeafDecoration } from '../components/LeafDecoration';
import {
  HeartHandshake,
  Sprout,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Droplet,
  Sun,
  ShieldCheck,
  Layers
} from 'lucide-react';

interface SustainabilityPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="w-full overflow-hidden">

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 bg-gradient-to-b from-white via-[#FFF9F1] to-[#FFF9F1] overflow-hidden text-left">
        <div className="absolute top-20 right-8 pointer-events-none opacity-30">
          <LeafDecoration size={72} rotation={45} color="#27864B" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#EAF5EE] text-[#27864B] px-4 py-1.5 rounded-full border border-[#27864B]/20 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#27864B]" />
              <span className="text-xs font-extrabold uppercase tracking-widest">
                SUSTAINABILITY & ANIMAL WELFARE
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#164D32] tracking-tight leading-tight">
              Growing Responsibly.{' '}
              <span className="text-[#27864B] block sm:inline">
                Farming Sustainably.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#556B60] leading-relaxed">
              True dairy quality begins with the respect we accord to our animals and the soil that feeds them. Discover our sustainable model, closed-loop soil enrichment, and animal welfare practices.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <CurvedDivider position="bottom" fillColor="#FFF9F1" height={40} />
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section className="py-16 sm:py-24 bg-[#FFF9F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-20">

          {/* Pillar 1: Responsible Animal Care */}
          <div className="bg-white rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 shadow-lg border border-[#164D32]/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden aspect-4/3 shadow-md border-2 border-gray-100">
                  <img
                    src="/images/hero-dairy.jpg"
                    alt="Healthy cows resting comfortably"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-[#FFE4E8] text-[#F04458] p-3 rounded-2xl text-xs font-bold shadow-md">
                  Pillar 01 • Animal Welfare
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F04458]">
                  <HeartHandshake className="w-4 h-4" /> Animal First Philosophy
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#164D32]">
                  Responsible Animal Care
                </h3>

                <p className="text-sm sm:text-base text-[#26332C]/85 leading-relaxed">
                  Our livestock is treated with dignity, compassion, and scientific care. We maintain that happy, healthy cows naturally provide pure, high-quality milk.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#556B60]">
                  <div className="bg-[#FFF9F1] p-3 rounded-xl border border-gray-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#164D32] block">Clean Cattle Housing</strong>
                      Spacious, naturally ventilated open sheds with cushioned rubber resting mats.
                    </div>
                  </div>

                  <div className="bg-[#FFF9F1] p-3 rounded-xl border border-gray-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#164D32] block">Balanced Nutrition</strong>
                      Total mixed ration (TMR) combining fresh green fodder, dry roughage, and minerals.
                    </div>
                  </div>

                  <div className="bg-[#FFF9F1] p-3 rounded-xl border border-gray-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#164D32] block">Veterinary Supervision</strong>
                      Routine health inspections, scheduled vaccinations, and preventive healthcare.
                    </div>
                  </div>

                  <div className="bg-[#FFF9F1] p-3 rounded-xl border border-gray-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#164D32] block">Fresh Drinking Water</strong>
                      24/7 automated continuous freshwater troughs ensuring constant hydration.
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#EAF5EE] rounded-xl text-xs text-[#164D32] font-medium">
                  <strong>Health Monitoring:</strong> Individual cow wellness logs tracking appetite, rumination cycles, and lactation curves.
                </div>
              </div>

            </div>
          </div>

          {/* Pillar 2: Sustainable Agriculture */}
          <div className="bg-white rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 shadow-lg border border-[#164D32]/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#27864B]">
                  <Sprout className="w-4 h-4" /> Earth Stewardship
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#164D32]">
                  Sustainable Agriculture
                </h3>

                <p className="text-sm sm:text-base text-[#26332C]/85 leading-relaxed">
                  A modern dairy farm must operate in synergy with its surrounding land. Our agricultural model focuses on biological enrichment, organic fodder, and resource conservation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#556B60]">
                  <div className="bg-[#FFF9F1] p-3 rounded-xl border border-gray-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#164D32] block">Responsible Land Use</strong>
                      Careful soil zoning preventing nutrient depletion and erosion across farm pastures.
                    </div>
                  </div>

                  <div className="bg-[#FFF9F1] p-3 rounded-xl border border-gray-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#164D32] block">Green Fodder Cropping</strong>
                      Multi-cut perennial grasses ensuring uninterrupted organic cattle feed.
                    </div>
                  </div>

                  <div className="bg-[#FFF9F1] p-3 rounded-xl border border-gray-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#164D32] block">Water Management</strong>
                      Drip and micro-irrigation networks conserving valuable groundwater reserves.
                    </div>
                  </div>

                  <div className="bg-[#FFF9F1] p-3 rounded-xl border border-gray-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#164D32] block">Organic Composting</strong>
                      Transforming cattle manure into bio-rich vermicompost to fertilize fodder crops.
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#EAF5EE] rounded-xl text-xs text-[#164D32] font-medium">
                  <strong>Zero Synthetic Dependency:</strong> Planned reduction of synthetic fertilizers through on-site organic slurry recirculation.
                </div>
              </div>

              <div className="lg:col-span-5 relative order-1 lg:order-2">
                <div className="rounded-3xl overflow-hidden aspect-4/3 shadow-md border-2 border-gray-100">
                  <img
                    src="/images/farm-landscape.jpg"
                    alt="Green agricultural fields on dairy farm"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -left-3 bg-[#EAF5EE] text-[#27864B] p-3 rounded-2xl text-xs font-bold shadow-md">
                  Pillar 02 • Closed-Loop Eco Cycle
                </div>
              </div>

            </div>
          </div>

          {/* Pillar 3: Modern Dairy Management */}
          <div className="bg-white rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 shadow-lg border border-[#164D32]/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden aspect-4/3 shadow-md border-2 border-gray-100">
                  <img
                    src="/images/cattle-shed.jpg"
                    alt="Modern dairy facility and automated milking equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-[#164D32] text-white p-3 rounded-2xl text-xs font-bold shadow-md">
                  Pillar 03 • Future-Ready Operations
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#164D32]">
                  <Cpu className="w-4 h-4 text-[#27864B]" /> High-Tech Hygiene
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#164D32]">
                  Modern Dairy Management
                </h3>

                <p className="text-sm sm:text-base text-[#26332C]/85 leading-relaxed">
                  Integrating digital tracking, cold-chain science, and rigorous biosecurity to build trust and accountability into daily operations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#556B60]">
                  <div className="bg-[#FFF9F1] p-3 rounded-xl border border-gray-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#164D32] block">Organized Livestock Records</strong>
                      Individual cattle RFID tagging, pedigree histories, and health logs.
                    </div>
                  </div>

                  <div className="bg-[#FFF9F1] p-3 rounded-xl border border-gray-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#164D32] block">Hygienic Milking Practices</strong>
                      Automated vacuum milking pulsation preventing human contact or contamination.
                    </div>
                  </div>

                  <div className="bg-[#FFF9F1] p-3 rounded-xl border border-gray-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#164D32] block">Milk Storage Management</strong>
                      Continuous 4°C bulk milk chiller with digital temp logger and sanitization.
                    </div>
                  </div>

                  <div className="bg-[#FFF9F1] p-3 rounded-xl border border-gray-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#164D32] block">Efficient Farm Operations</strong>
                      Standardized daily SOPs from morning feeding to evening disinfection.
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#EAF5EE] rounded-xl text-xs text-[#164D32] font-medium">
                  <strong>Transparent Quality:</strong> Daily recording of fat, SNF, and microbial purity benchmarks.
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: Future Roadmap (Phases 1-4) */}
      <section className="py-20 sm:py-28 bg-[#164D32] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7185] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/10">
              STRATEGIC EXECUTION
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Future Development Roadmap
            </h2>
            <p className="text-sm sm:text-base text-white/80">
              A structured phased plan to progress from land development to value-added dairy offerings.
            </p>
            <div className="inline-block mt-2">
              <span className="text-xs bg-[#F04458] text-white px-3.5 py-1 rounded-full font-bold">
                * All roadmap items represent future planned development goals
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROADMAP_PHASES.map((r, idx) => (
              <div
                key={r.phase}
                className="bg-[#0E3522] rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-[#34A853]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7185] bg-white/10 px-3 py-1 rounded-full">
                      {r.phase}
                    </span>
                    <span className="text-xs font-mono text-white/40">Step 0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {r.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#34A853] block mt-0.5">
                    {r.tag}
                  </span>

                  <p className="text-xs text-white/75 mt-3 leading-relaxed">
                    {r.description}
                  </p>

                  <ul className="mt-4 pt-4 border-t border-white/10 space-y-2">
                    {r.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#34A853] shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#FFF9F1] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold text-[#164D32]">
            Partner with us in building a sustainable dairy future
          </h3>
          <p className="text-sm text-[#556B60]">
            We welcome agricultural researchers, veterinarians, and sustainable farming advocates.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenEnquiry()}
              className="bg-[#F04458] hover:bg-[#DC3348] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Contact Our Project Team →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
