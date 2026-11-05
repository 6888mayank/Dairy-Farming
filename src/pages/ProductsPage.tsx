import React from 'react';
import { PageId, ProductItem } from '../types';
import { CurvedDivider } from '../components/CurvedDivider';
import { LeafDecoration } from '../components/LeafDecoration';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ThermometerSnowflake, 
  HeartHandshake, 
  FlaskConical, 
  Utensils 
} from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (type?: string, product?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const productsList = [
    {
      id: 'fresh-cow-milk',
      name: 'Fresh Cow Milk',
      tagline: 'Planned farm-fresh raw milk with natural cream layer',
      category: 'Raw Cow Milk',
      description: 'Wholesome fresh milk sourced directly from well-nourished Holstein Friesian and Jersey cows, chilled immediately below 4°C to preserve natural bioactive purity.',
      image: '/images/milk.jpg',
      status: 'Proposed Offering',
      features: ['Immediate rapid cooling below 4°C', 'Touchless automated milking', 'Balanced natural fat & SNF solids']
    },
    {
      id: 'organic-fresh-buttermilk',
      name: 'Organic Fresh Buttermilk',
      tagline: 'No added preservatives, chemical-free delicious beverage',
      category: 'Cultured Beverage (200 ml)',
      description: 'No added preservatives, chemical-free delicious beverage, from 100% organic curd hydration and natural.',
      image: '/images/buttermilk.jpg',
      status: 'Proposed Offering',
      features: ['200 ml handy pouch packaging', '100% Organic curd hydration', 'No preservatives or emulsifiers']
    },
    {
      id: 'pasteurized-milk',
      name: 'Pasteurized Whole Milk',
      tagline: 'Gently pasteurized for safety and maximum shelf stability',
      category: 'Pasteurized Milk',
      description: 'Controlled low-temperature, long-time (LTLT) or HTST pasteurization designed to eliminate harmful bacteria while preserving essential whey proteins and vitamins.',
      image: '/images/hero-dairy.jpg',
      status: 'Planned Product',
      features: ['Gentle heat treatment', 'Intact natural creaminess', 'Zero chemical additives or preservatives']
    },
    {
      id: 'fresh-curd',
      name: 'Fresh Curd (Dahi)',
      tagline: 'Naturally cultured whole-milk traditional dahi',
      category: 'Fermented Dairy',
      description: 'Thick, velvety natural curd slowly fermented with active live cultures, offering balanced acidity, rich gut-friendly probiotics, and homemade consistency.',
      image: '/images/curd.jpg',
      status: 'Proposed Offering',
      features: ['Naturally cultured', 'Thick whole-milk texture', 'Rich probiotic goodness']
    },
    {
      id: 'paneer',
      name: 'Artisanal Fresh Paneer',
      tagline: 'Tender cottage cheese cubes prepared from whole cow milk',
      category: 'Fresh Dairy Cheese',
      description: 'Soft, melt-in-mouth cottage paneer handcrafted from farm-fresh cow milk without starch or synthetic binders, ideal for nutritious daily culinary dishes.',
      image: '/images/paneer.jpg',
      status: 'Proposed Offering',
      features: ['High natural dairy protein', 'Freshly pressed texture', 'Zero artificial firming agents']
    },
    {
      id: 'traditional-ghee',
      name: 'Traditional Granular Ghee',
      tagline: 'Slow-simmered pure cow ghee with golden aromatic grains',
      category: 'Clarified Butter',
      description: 'Golden, fragrant cow ghee slowly clarified over mild flame to achieve authentic nutty aroma and rich granular crystalline texture.',
      image: '/images/ghee.jpg',
      status: 'Proposed Offering',
      features: ['Traditional slow-clarification method', 'Rich natural golden hue', 'Wholesome granular consistency']
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 bg-gradient-to-b from-white via-[#FFF9F1] to-[#FFF9F1] overflow-hidden text-left">
        <div className="absolute top-20 right-8 pointer-events-none opacity-30">
          <LeafDecoration size={70} rotation={30} color="#F04458" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#FFE4E8] text-[#F04458] px-4 py-1.5 rounded-full border border-[#FF7185]/20 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F04458]" />
              <span className="text-xs font-extrabold uppercase tracking-widest">
                PROPOSED DAIRY PRODUCT PORTFOLIO
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#164D32] tracking-tight leading-tight">
              Freshness Inspired{' '}
              <span className="text-[#F04458] block sm:inline">
                By Nature.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#556B60] leading-relaxed">
              Planned dairy offerings crafted from pure Holstein Friesian and Jersey cow milk. Every item is a proposed category to be established in future operational phases.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <CurvedDivider position="bottom" fillColor="#FFF9F1" height={40} />
        </div>
      </section>

      {/* Product Cards Grid: Pastel pink & cream backgrounds */}
      <section className="py-16 sm:py-24 bg-[#FFF9F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          {/* Important Disclosure Banner */}
          <div className="bg-white border-2 border-[#F04458]/30 rounded-2xl p-5 mb-14 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#F04458] shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-[#164D32]">
                  Proposed Product Offerings Notice
                </h4>
                <p className="text-xs text-[#556B60]">
                  All product categories described below are planned offerings and are not currently for commercial sale until our dairy infrastructure is commissioned.
                </p>
              </div>
            </div>
            <button
              onClick={() => onOpenEnquiry('Distribution Enquiry')}
              className="shrink-0 text-xs font-bold bg-[#164D32] text-white px-4 py-2 rounded-full hover:bg-[#27864B] transition-colors cursor-pointer"
            >
              Partner / Pre-Register →
            </button>
          </div>

          {/* 5 Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsList.map((prod) => (
              <div
                key={prod.id}
                className="bg-[#FFF0F2] rounded-3xl p-6 sm:p-7 border border-[#FF7185]/25 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image container */}
                  <div className="relative rounded-2xl overflow-hidden aspect-4/3 mb-5 bg-white border border-[#FF7185]/20">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#F04458] text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                      {prod.status}
                    </div>
                  </div>

                  {/* Title & Category */}
                  <span className="text-[11px] font-bold text-[#27864B] uppercase tracking-wider block">
                    {prod.category}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-[#164D32] mt-0.5 group-hover:text-[#F04458] transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#556B60] mt-1">
                    {prod.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#26332C]/85 mt-3 leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Features list */}
                  <div className="mt-4 pt-4 border-t border-[#FF7185]/20 space-y-1.5">
                    {prod.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#556B60]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#27864B] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enquire Now CTA */}
                <div className="pt-6 mt-4 border-t border-[#FF7185]/20 flex items-center justify-between">
                  <span className="text-[11px] text-[#556B60] italic">
                    Planned Category
                  </span>
                  <button
                    onClick={() => onOpenEnquiry('Dairy Product Enquiry', prod.name)}
                    className="inline-flex items-center gap-2 bg-[#F04458] hover:bg-[#DC3348] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-md shadow-[#F04458]/20 transition-all cursor-pointer group-hover:shadow-lg"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Spotlight Feature: Organic Fresh Buttermilk Details */}
          <div className="mt-16 bg-white rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 border-2 border-[#27864B]/20 shadow-xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Product Pouch Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFF9F1] bg-[#FFF9F1] aspect-4/3 sm:aspect-square">
                  <img
                    src="/images/buttermilk.jpg"
                    alt="Vasundhara Organic Fresh Buttermilk 200 ml pouch"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#27864B] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    200 ml Pouch Pack
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#164D32]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                    100% Organic Curd Hydration
                  </div>
                </div>
              </div>

              {/* Product Story & Italicized Advantages */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 bg-[#EAF5EE] text-[#27864B] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest">
                  PROPOSED INNOVATION • 200 ML POUCH
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#164D32] tracking-tight">
                    Why Organic Buttermilk?
                  </h3>
                  <p className="text-base text-[#26332C]/85 leading-relaxed">
                    In today's fast life, our buttermilk prepared from the livestock, which consumes chemical free food and water that makes it 100% Organic and with no emulsifiers, added flavours and preservatives makes it safe to consume.
                  </p>
                </div>

                {/* Advantages of buttermilk: in italics */}
                <div className="bg-[#FFF9F1] rounded-2xl p-6 border border-[#27864B]/20 space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#164D32]">
                    Advantages of Buttermilk:
                  </h4>
                  <ul className="space-y-2.5 text-sm text-[#26332C]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                      <span className="italic">A great source of calcium and protein and easy to digest</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                      <span className="italic">Helps in digestion and prevents acidity build up since it contains probiotics for strong gut health</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#27864B] shrink-0 mt-0.5" />
                      <span className="italic">Hydrating and nourishing throughout the year</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenEnquiry('Dairy Product Enquiry', 'Organic Fresh Buttermilk (200 ml)')}
                    className="bg-[#F04458] hover:bg-[#DC3348] text-white px-7 py-3 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                  >
                    Enquire for Distribution →
                  </button>
                  <span className="text-xs text-[#556B60]">
                    Zero chemical preservatives • 200 ml pouch format
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="py-20 sm:py-28 bg-[#164D32] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7185] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/10">
              SAFETY & HYGIENE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Our Quality Commitment
            </h2>
            <p className="text-sm sm:text-base text-white/80">
              Strict protocols engineered into our planned dairy operations to guarantee uncompromised purity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            <div className="bg-[#0E3522] rounded-3xl p-7 border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-[#27864B]/30 border border-[#27864B] text-[#34A853] flex items-center justify-center mb-5">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Hygienic Milk Handling
              </h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Touchless stainless-steel milking pipelines, teat disinfection pre/post extraction, and zero open-bucket handling.
              </p>
            </div>

            <div className="bg-[#0E3522] rounded-3xl p-7 border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-[#27864B]/30 border border-[#27864B] text-[#34A853] flex items-center justify-center mb-5">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Responsible Cattle Care
              </h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Balanced green fodder nutrition, zero hormonal yield boosters, clean living stalls, and prompt veterinary attention.
              </p>
            </div>

            <div className="bg-[#0E3522] rounded-3xl p-7 border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-[#27864B]/30 border border-[#27864B] text-[#34A853] flex items-center justify-center mb-5">
                <ThermometerSnowflake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Proper Storage Practices
              </h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Immediate rapid chilling inside food-grade Bulk Milk Coolers below 4°C within 90 minutes to arrest bacterial proliferation.
              </p>
            </div>

            <div className="bg-[#0E3522] rounded-3xl p-7 border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-[#27864B]/30 border border-[#27864B] text-[#34A853] flex items-center justify-center mb-5">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Quality-Focused Processing
              </h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Small-batch curd incubation, slow artisanal ghee simmering, and sterile glass-bottle or food-grade packing.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#FFF9F1] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold text-[#164D32]">
            Discuss Distribution & Pre-Commissioning Inquiries
          </h3>
          <p className="text-xs sm:text-sm text-[#556B60]">
            Are you a retailer, distributor, or institutional partner interested in our upcoming dairy produce?
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenEnquiry('Distribution Enquiry')}
              className="bg-[#F04458] hover:bg-[#DC3348] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Connect With Farm Team →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
