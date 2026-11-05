import React, { useState, useEffect } from 'react';
import { PageId, GalleryItem } from '../types';
import { BRAND, HERO_STATS, OFFERINGS, WHY_CHOOSE_ITEMS, GALLERY_ITEMS } from '../data/content';
import { LeafDecoration } from '../components/LeafDecoration';
import { CurvedDivider } from '../components/CurvedDivider';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Compass, 
  Target, 
  MapPin, 
  Layers, 
  Maximize2,
  Calendar,
  HeartHandshake,
  Sprout,
  Cpu,
  Tractor,
  Phone,
  Mail
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (type?: string, product?: string) => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenEnquiry,
  onOpenLightbox,
}) => {
  const dynamicPhrases = [
    "Modern Dairy Farming.",
    "Sustainable Agriculture.",
    "Responsible Cattle Care.",
    "Pure Farm Freshness."
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % dynamicPhrases.length);
        setIsFading(false);
      }, 450);
    }, 2800);
    return () => clearInterval(timer);
  }, [dynamicPhrases.length]);

  return (
    <div className="w-full overflow-hidden">
      
      {/* =========================================================================
          SECTION B & C: HERO SECTION & FLOATING STATISTICS BAR
          ========================================================================= */}
      <section className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 bg-gradient-to-b from-white via-[#FFF9F1] to-[#FFF9F1] overflow-hidden">
        
        {/* Subtle decorative leaf elements in corners */}
        <div className="absolute top-20 left-4 lg:left-12 pointer-events-none opacity-40 animate-float-slow">
          <LeafDecoration size={64} rotation={-25} color="#27864B" />
        </div>
        <div className="absolute top-28 right-6 lg:right-16 pointer-events-none opacity-30">
          <LeafDecoration size={72} rotation={45} color="#F04458" />
        </div>
        <div className="absolute bottom-16 left-8 pointer-events-none opacity-20">
          <LeafDecoration size={80} rotation={120} color="#27864B" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Hero Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* LEFT SIDE: Hero Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Small Green Badge */}
              <div className="inline-flex items-center gap-2 bg-[#EAF5EE] text-[#27864B] px-4 py-1.5 rounded-full border border-[#27864B]/20 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#27864B] animate-pulse" />
                <span className="text-xs font-extrabold uppercase tracking-widest">
                  FRESHNESS ROOTED IN NATURE
                </span>
              </div>

              {/* Dynamic Animated Main Heading ("Chalta Hua") */}
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#164D32] tracking-tight leading-[1.14]">
                Where Nature Meets{' '}
                <span className="relative inline-block text-[#F04458] min-w-[280px] sm:min-w-[420px] pb-1">
                  <span
                    className={`inline-block transition-all duration-500 transform ${
                      isFading 
                        ? 'opacity-0 -translate-y-3 blur-xs' 
                        : 'opacity-100 translate-y-0 blur-none'
                    } animate-text-flow`}
                  >
                    {dynamicPhrases[phraseIndex]}
                  </span>
                  {/* Flowing animated accent underline */}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#F04458] via-[#FF7185] to-[#27864B] rounded-full animate-pulse" />
                </span>
              </h1>

              {/* Supporting Description */}
              <p className="text-base sm:text-lg text-[#26332C]/85 leading-relaxed max-w-2xl font-normal">
                Building a modern dairy farming ecosystem rooted in animal welfare, scientific herd nutrition, and sustainable agriculture — bringing wholesome, farm-fresh milk from our pastures to your family.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* 1. Explore Our Farm → (Watermelon Red) */}
                <button
                  onClick={() => onNavigate('farm')}
                  className="inline-flex items-center justify-center gap-3 bg-[#F04458] hover:bg-[#DC3348] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-[#F04458]/30 hover:shadow-xl hover:shadow-[#F04458]/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
                >
                  <span>Explore Our Farm</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>

                {/* 2. Get In Touch (White background with green border) */}
                <button
                  onClick={() => onOpenEnquiry('General Enquiry')}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#EAF5EE] text-[#164D32] border-2 border-[#164D32] hover:border-[#27864B] px-7 py-3.5 rounded-full font-bold text-base transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <span>Get In Touch</span>
                </button>
              </div>

              {/* Planned Notice tag */}
              <div className="pt-2 flex items-center gap-2 text-xs text-[#556B60]">
                <ShieldCheck className="w-4 h-4 text-[#27864B] shrink-0" />
                <span>Modern Dairy Farming Ecosystem • Purebred HF & Jersey Livestock</span>
              </div>
            </div>

            {/* RIGHT SIDE: Hero Cow Image with Organic Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative background glow & organic pill border */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#27864B]/20 via-[#FF7185]/20 to-[#164D32]/10 rounded-[2.5rem] blur-xl" />
                
                {/* Image Container with rounded shape */}
                <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-[#FFF9F1] group">
                  <img
                    src="/images/hero-dairy.jpg"
                    alt="Holstein Friesian and Jersey cows in lush green pasture"
                    className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Overlay for photo depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 border border-white">
                    <span className="w-2 h-2 rounded-full bg-[#F04458]" />
                    <span className="text-[11px] font-bold text-[#164D32] uppercase tracking-wider">
                      HF & Jersey Livestock
                    </span>
                  </div>

                  {/* Bottom Image Caption Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white shadow-lg text-left">
                    <p className="text-xs font-bold text-[#164D32] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#F04458]" />
                      <span>Natural Pastures & Responsible Care</span>
                    </p>
                    <p className="text-[11px] text-[#556B60] mt-0.5">
                      Holstein Friesian & Jersey cattle planned for balanced quality milk yield.
                    </p>
                  </div>
                </div>

                {/* Floating mini stats badge overlapping right edge */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-[#27864B]/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] text-[#27864B] flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-extrabold text-[#164D32]">Megalahundi</div>
                    <div className="text-[10px] uppercase font-bold text-[#27864B] tracking-wider">Chamarajanagara</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* =========================================================================
              C. HERO STATISTICS BAR (Floating White Rounded Statistics Panel)
              ========================================================================= */}
          <div className="mt-14 sm:mt-20">
            <div className="bg-white rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-[#164D32]/8 border border-[#164D32]/10 transition-transform duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                
                {/* Column 1: Agricultural Land */}
                <div className="flex items-start gap-4 pt-4 md:pt-0 first:pt-0">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF5EE] text-[#27864B] flex items-center justify-center shrink-0 shadow-xs">
                    <Tractor className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#164D32]">
                      5.5 Acres
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#27864B] mt-0.5">
                      Fertile Agricultural Land
                    </div>
                    <p className="text-xs text-[#556B60] mt-1.5 leading-relaxed">
                      Planned project specification dedicated to fodder crops & modern dairy infrastructure.
                    </p>
                  </div>
                </div>

                {/* Column 2: Cow / Livestock */}
                <div className="flex items-start gap-4 pt-6 md:pt-0 md:pl-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFE4E8] text-[#F04458] flex items-center justify-center shrink-0 shadow-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#164D32]">
                      20 Planned
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#F04458] mt-0.5">
                      HF & Jersey Livestock
                    </div>
                    <p className="text-xs text-[#556B60] mt-1.5 leading-relaxed">
                      Planned herd capacity focusing on high-volume HF and butterfat-rich Jersey cows.
                    </p>
                  </div>
                </div>

                {/* Column 3: Green Leaves / Production Vision */}
                <div className="flex items-start gap-4 pt-6 md:pt-0 md:pl-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF5EE] text-[#27864B] flex items-center justify-center shrink-0 shadow-xs">
                    <Sprout className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#164D32]">
                      Modern Dairy
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#27864B] mt-0.5">
                      Production Vision
                    </div>
                    <p className="text-xs text-[#556B60] mt-1.5 leading-relaxed">
                      Combining animal welfare, touchless milking hygiene, and sustainable agriculture.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Continuous Flowing Marquee Ticker ("Chalta Hua" Ribbon) */}
          <div className="mt-10 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden bg-gradient-to-r from-[#164D32] via-[#0E3522] to-[#164D32] text-white py-3.5 border-y border-[#27864B]/40 shadow-lg">
            <div className="animate-marquee flex items-center gap-8 text-xs sm:text-sm font-bold tracking-wider uppercase">
              <span className="flex items-center gap-2 text-[#FF7185]">
                <Sparkles className="w-4 h-4 text-[#F04458]" /> Where Nature Meets Modern Dairy Farming
              </span>
              <span className="text-[#34A853]">✦</span>
              <span className="text-white/95">🌱 Sustainable Agricultural Pastures</span>
              <span className="text-[#34A853]">✦</span>
              <span className="text-[#FF7185]">🐄 Purebred HF & Jersey Herd</span>
              <span className="text-[#34A853]">✦</span>
              <span className="text-white/95">🥛 Fresh Milk & Organic Buttermilk (200 ml)</span>
              <span className="text-[#34A853]">✦</span>
              <a href="tel:+918088050628" className="text-[#34A853] hover:underline flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> +91 80880 50628
              </a>
              <span className="text-[#34A853]">✦</span>
              <a href="mailto:bharathkm@gmail.com" className="text-white/95 hover:underline flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> bharathkm@gmail.com
              </a>
              <span className="text-[#34A853]">✦</span>
              <span className="text-[#FF7185]">🏡 Modern Ventilated Cattle Housing</span>
              <span className="text-[#34A853]">✦</span>
              <span className="text-white/95">🌿 Closed-Loop Organic Farm Ecology</span>
              <span className="text-[#34A853]">✦</span>

              {/* Seamless duplicate for smooth infinite loop */}
              <span className="flex items-center gap-2 text-[#FF7185]">
                <Sparkles className="w-4 h-4 text-[#F04458]" /> Where Nature Meets Modern Dairy Farming
              </span>
              <span className="text-[#34A853]">✦</span>
              <span className="text-white/95">🌱 Sustainable Agricultural Pastures</span>
              <span className="text-[#34A853]">✦</span>
              <span className="text-[#FF7185]">🐄 Purebred HF & Jersey Herd</span>
              <span className="text-[#34A853]">✦</span>
              <span className="text-white/95">🥛 Fresh Milk & Organic Buttermilk (200 ml)</span>
              <span className="text-[#34A853]">✦</span>
              <a href="tel:+918088050628" className="text-[#34A853] hover:underline flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> +91 80880 50628
              </a>
              <span className="text-[#34A853]">✦</span>
              <a href="mailto:bharathkm@gmail.com" className="text-white/95 hover:underline flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> bharathkm@gmail.com
              </a>
              <span className="text-[#34A853]">✦</span>
              <span className="text-[#FF7185]">🏡 Modern Ventilated Cattle Housing</span>
              <span className="text-[#34A853]">✦</span>
              <span className="text-white/95">🌿 Closed-Loop Organic Farm Ecology</span>
              <span className="text-[#34A853]">✦</span>
            </div>
          </div>

        </div>

        {/* Organic curved divider along bottom of hero */}
        <div className="mt-14">
          <CurvedDivider position="bottom" fillColor="#FFF9F1" variant="organic" height={56} />
        </div>
      </section>

      {/* =========================================================================
          SECTION D: ABOUT OUR FARM SECTION (Split Layout)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FFF9F1] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* LEFT: Large Rounded Photograph of clean modern cattle shed */}
            <div className="lg:col-span-6 relative">
              <div className="relative">
                {/* Decorative back framing */}
                <div className="absolute -top-4 -left-4 w-full h-full rounded-[2.5rem] bg-[#27864B]/10 -z-0" />
                
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white z-10 group">
                  <img
                    src="/images/cattle-shed.jpg"
                    alt="Clean modern ventilated cattle shed with cows"
                    className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-md text-left">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#27864B]">
                      Planned Dairy Infrastructure
                    </span>
                    <h4 className="text-sm font-bold text-[#164D32] mt-0.5">
                      Spacious, Naturally Ventilated Cattle Housing
                    </h4>
                    <p className="text-[11px] text-[#556B60] mt-1">
                      Designed with rubber bedding, clean feeding alleys, and fresh water access.
                    </p>
                  </div>
                </div>

                {/* Subtle Leaf Decoration on corner */}
                <div className="absolute -bottom-6 -right-6 pointer-events-none opacity-80">
                  <LeafDecoration size={60} rotation={20} color="#27864B" />
                </div>
              </div>
            </div>

            {/* RIGHT: About Our Farm Text */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 bg-[#EAF5EE] text-[#27864B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                <Sprout className="w-3.5 h-3.5" />
                ABOUT OUR FARM
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#164D32] tracking-tight leading-tight">
                Growing With Nature.{' '}
                <span className="text-[#27864B] block sm:inline">
                  Building For Tomorrow.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#26332C]/85 leading-relaxed">
                Vasundhara Diary and Farms is an upcoming modern dairy farming venture located in Megalahundi, Chamarajanagara, focused on developing an exemplary sustainable dairy ecosystem.
              </p>

              <p className="text-sm sm:text-base text-[#556B60] leading-relaxed">
                Our vision is to combine modern dairy infrastructure, responsible animal care, and sustainable agricultural practices to build a trusted dairy farming enterprise. By honoring the land and providing optimal animal welfare, we aim to establish a gold-standard regional dairy ecosystem.
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-2xl border border-[#164D32]/10 shadow-xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#F04458]">
                    Livestock Welfare
                  </div>
                  <div className="text-sm font-bold text-[#164D32] mt-1">
                    Purebred HF & Jersey
                  </div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#164D32]/10 shadow-xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#27864B]">
                    Land Foundation
                  </div>
                  <div className="text-sm font-bold text-[#164D32] mt-1">
                    Fertile Pastures
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2.5 bg-[#164D32] hover:bg-[#27864B] text-white px-7 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-md transition-all duration-300 cursor-pointer group"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION E: OUR SERVICES / OFFERINGS
          Section background: Soft Cream (#FFF9F1)
          Five beautiful rounded cards with pastel pink backgrounds (#FFF0F2)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FFF9F1] relative border-t border-b border-[#164D32]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F04458] bg-[#FFE4E8] px-4 py-1 rounded-full inline-block">
              FUTURE DAIRY OFFERINGS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#164D32] tracking-tight">
              Complete Dairy Solutions Under One Roof
            </h2>
            <p className="text-sm sm:text-base text-[#556B60] leading-relaxed">
              Planned dairy product categories focused on purity, freshness, and hygienic processing. All items are proposed offerings for future farm commissioning.
            </p>
          </div>

          {/* 5 Pastel Pink Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {OFFERINGS.map((card, idx) => (
              <div
                key={card.id}
                className={`group rounded-3xl p-6 sm:p-7 bg-[#FFF0F2] border border-[#FF7185]/25 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Card Image */}
                  <div className="relative rounded-2xl overflow-hidden aspect-4/3 mb-5 bg-white border border-[#FF7185]/20">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#F04458] text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                      {card.status}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="text-left space-y-1.5">
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#164D32] group-hover:text-[#F04458] transition-colors">
                      {card.name}
                    </h3>
                    <p className="text-xs font-bold text-[#27864B] uppercase tracking-wider">
                      {card.tagline}
                    </p>
                    <p className="text-sm text-[#26332C]/80 mt-2 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <ul className="mt-4 pt-4 border-t border-[#FF7185]/20 space-y-1.5 text-left">
                    {card.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#556B60]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#27864B] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore Link */}
                <div className="pt-6 mt-4 border-t border-[#FF7185]/20 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#556B60]">
                    Category: {card.category}
                  </span>
                  <button
                    onClick={() => onOpenEnquiry('Dairy Product Enquiry', card.name)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#F04458] hover:text-[#DC3348] transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Planned Notice Disclaimer */}
          <div className="mt-12 p-4 rounded-2xl bg-white border border-[#27864B]/20 text-center max-w-2xl mx-auto shadow-xs">
            <p className="text-xs text-[#556B60] leading-relaxed">
              <strong className="text-[#164D32]">Important Notice:</strong> Product categories are planned offerings and are not represented as currently available until formal commissioning and certification.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION F: WHY CHOOSE VASUNDHARA?
          Full-width deep forest green section (#164D32) with curved top edges
          ========================================================================= */}
      <section className="relative bg-[#164D32] text-white pt-24 pb-28 overflow-hidden">
        
        {/* Curved Top Divider into forest green */}
        <div className="absolute top-0 left-0 right-0">
          <CurvedDivider position="top" fillColor="#FFF9F1" variant="organic" height={54} />
        </div>

        {/* Ambient background decoration */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#27864B]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#F04458]/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7185] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/10">
              OUR STRATEGIC PILLARS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Why Choose Vasundhara?
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Designed from the ground up for purity, transparency, and sustainable agricultural excellence.
            </p>
          </div>

          {/* 6 Feature Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Feature 1: Fertile Land */}
            <div className="bg-[#0E3522] rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-[#34A853]/40 transition-all duration-300 text-left group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#27864B]/30 border border-[#27864B] text-[#34A853] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Tractor className="w-6 h-6 text-white" />
                </div>
                <span className="font-mono text-xs font-bold text-white/40">01</span>
              </div>
              <div className="text-xl sm:text-2xl font-display font-extrabold text-white">
                Rich Soil
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF7185] mt-0.5">
                Fertile Agricultural Land
              </div>
              <p className="text-xs sm:text-sm text-white/75 mt-3 leading-relaxed">
                Dedicated land for fodder cultivation, modern cattle housing, and sustainable closed-loop dairy farming operations.
              </p>
            </div>

            {/* Feature 2: High Welfare */}
            <div className="bg-[#0E3522] rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-[#34A853]/40 transition-all duration-300 text-left group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#27864B]/30 border border-[#27864B] text-[#34A853] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <span className="font-mono text-xs font-bold text-white/40">02</span>
              </div>
              <div className="text-xl sm:text-2xl font-display font-extrabold text-white">
                High Welfare
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF7185] mt-0.5">
                Planned Dairy Unit
              </div>
              <p className="text-xs sm:text-sm text-white/75 mt-3 leading-relaxed">
                A focused initial capacity ensuring high attention to individual animal welfare, biosecurity, and uncompromising milk quality.
              </p>
            </div>

            {/* Feature 3: HF & Jersey */}
            <div className="bg-[#0E3522] rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-[#34A853]/40 transition-all duration-300 text-left group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#27864B]/30 border border-[#27864B] text-[#34A853] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="font-mono text-xs font-bold text-white/40">03</span>
              </div>
              <div className="text-xl sm:text-2xl font-display font-extrabold text-white">
                HF & Jersey
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF7185] mt-0.5">
                Livestock Focus
              </div>
              <p className="text-xs sm:text-sm text-white/75 mt-3 leading-relaxed">
                A strategic pairing of Holstein Friesian volume and Jersey creamy butterfat density for rich, nutritious dairy output.
              </p>
            </div>

            {/* Feature 4: Sustainable */}
            <div className="bg-[#0E3522] rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-[#34A853]/40 transition-all duration-300 text-left group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#27864B]/30 border border-[#27864B] text-[#34A853] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sprout className="w-6 h-6 text-white" />
                </div>
                <span className="font-mono text-xs font-bold text-white/40">04</span>
              </div>
              <div className="text-xl sm:text-2xl font-display font-extrabold text-white">
                Sustainable
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#34A853] mt-0.5">
                Farming Vision
              </div>
              <p className="text-xs sm:text-sm text-white/75 mt-3 leading-relaxed">
                Organic manure recycling, water conservation, solar power integration, and natural green fodder crop rotation.
              </p>
            </div>

            {/* Feature 5: Animal Welfare */}
            <div className="bg-[#0E3522] rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-[#34A853]/40 transition-all duration-300 text-left group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#27864B]/30 border border-[#27864B] text-[#34A853] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HeartHandshake className="w-6 h-6 text-white" />
                </div>
                <span className="font-mono text-xs font-bold text-white/40">05</span>
              </div>
              <div className="text-xl sm:text-2xl font-display font-extrabold text-white">
                Animal Welfare
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF7185] mt-0.5">
                Responsible Cattle Care
              </div>
              <p className="text-xs sm:text-sm text-white/75 mt-3 leading-relaxed">
                Ventilated comfortable barns, balanced nutrition, clean bedding, round-the-clock freshwater, and regular veterinary oversight.
              </p>
            </div>

            {/* Feature 6: Modern Vision */}
            <div className="bg-[#0E3522] rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-[#34A853]/40 transition-all duration-300 text-left group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#27864B]/30 border border-[#27864B] text-[#34A853] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className="font-mono text-xs font-bold text-white/40">06</span>
              </div>
              <div className="text-xl sm:text-2xl font-display font-extrabold text-white">
                Modern Vision
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#34A853] mt-0.5">
                Future-Ready Dairy Farming
              </div>
              <p className="text-xs sm:text-sm text-white/75 mt-3 leading-relaxed">
                Digital record keeping, modern rapid bulk milk cooling to 4°C, and scientific livestock management.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION G: OUR FARM GALLERY (Masonry-style Image Gallery)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FFF9F1] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 text-left">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#27864B] bg-[#EAF5EE] px-4 py-1.5 rounded-full inline-block">
                VISUAL SHOWCASE
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#164D32] tracking-tight mt-2">
                A Glimpse Into Our Farming Vision
              </h2>
            </div>
            <p className="text-sm text-[#556B60] max-w-md">
              Photographs capturing our agricultural land, planned cattle breeds, modern infrastructure, and fresh dairy offerings.
            </p>
          </div>

          {/* Masonry / Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.slice(0, 6).map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 cursor-pointer"
              >
                <div className="aspect-4/3 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                </div>

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7185]">
                    {item.category}
                  </span>
                  <h4 className="text-white font-bold text-base mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-white/80 text-xs mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-white/90 font-semibold">
                    <Maximize2 className="w-3.5 h-3.5 text-[#FF7185]" />
                    <span>Click to view full photo</span>
                  </div>
                </div>

                {/* Normal bottom label */}
                <div className="p-4 bg-white text-left group-hover:hidden">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#27864B]">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-[#164D32] truncate mt-0.5">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Farm Gallery Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('farm')}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#EAF5EE] text-[#164D32] border-2 border-[#164D32] px-8 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-sm cursor-pointer"
            >
              <span>Explore Farm Specifications & Livestock →</span>
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION H: OUR VISION & MISSION (Two Large Premium Cards)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FFF9F1] border-t border-[#164D32]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1: OUR VISION */}
            <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-lg border-2 border-[#27864B]/20 text-left overflow-hidden group hover:border-[#27864B] transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EAF5EE] rounded-bl-full -z-0 opacity-60" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#EAF5EE] text-[#27864B] flex items-center justify-center mb-6 shadow-sm">
                  <Compass className="w-7 h-7" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#27864B]">
                  FORWARD DIRECTION
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#164D32] mt-1 mb-4">
                  OUR VISION
                </h3>
                <blockquote className="text-base sm:text-lg text-[#26332C]/90 leading-relaxed italic border-l-4 border-[#27864B] pl-4">
                  "To build a modern, sustainable, and trusted dairy farming enterprise that combines agricultural resources, animal welfare, and efficient dairy production practices."
                </blockquote>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-[#556B60]">
                  <CheckCircle2 className="w-4 h-4 text-[#27864B]" />
                  <span>Fertile Agricultural & Soil Foundation</span>
                </div>
              </div>
            </div>

            {/* Card 2: OUR MISSION */}
            <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-lg border-2 border-[#FF7185]/30 text-left overflow-hidden group hover:border-[#F04458] transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFE4E8] rounded-bl-full -z-0 opacity-60" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#FFE4E8] text-[#F04458] flex items-center justify-center mb-6 shadow-sm">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F04458]">
                  CORE COMMITMENT
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#164D32] mt-1 mb-4">
                  OUR MISSION
                </h3>
                <blockquote className="text-base sm:text-lg text-[#26332C]/90 leading-relaxed italic border-l-4 border-[#F04458] pl-4">
                  "To develop a well-managed dairy ecosystem focused on quality, responsible cattle care, hygienic operations, and sustainable agricultural development."
                </blockquote>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-[#556B60]">
                  <CheckCircle2 className="w-4 h-4 text-[#F04458]" />
                  <span>Purebred Livestock & Animal Welfare Focus</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION I: PARTNERSHIP & COLLABORATION
          ========================================================================= */}
      <section className="partnership-section py-20 sm:py-28 text-center text-white">
        {/* Background Image with Deep Gradient Overlay */}
        <div className="partnership-bg-overlay" />
        <img
          src="/images/farm-landscape.jpg"
          alt="Lush green farm landscape panorama"
          className="partnership-bg-img"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <div className="partnership-badge">
              <Sparkles className="w-3.5 h-3.5 text-[#FF7185]" />
              <span>PARTNERSHIP & COLLABORATION</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Let's Build A Better Dairy Future Together.
            </h2>

            <p className="text-base sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              Connect with Vasundhara Diary and Farms to explore strategic dairy distribution, sustainable agricultural alliances, and high-welfare herd breeding opportunities.
            </p>
          </div>

          {/* 3 Interactive Partnership Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            {/* Card 1: Retail & Distribution */}
            <div className="partnership-card group">
              <div>
                <div className="partnership-card-icon">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-[11px] font-bold text-[#FF7185] uppercase tracking-wider block mb-1">
                  Commercial Avenue
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF7185] transition-colors">
                  Dairy Retail & Distribution
                </h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Pre-booking pure farm-fresh milk, 200 ml organic buttermilk pouches, and traditional granular ghee for premium retail, institutional, and residential channels.
                </p>
              </div>
              <button
                onClick={() => onOpenEnquiry('Distribution Enquiry')}
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#34A853] group-hover:text-white transition-colors cursor-pointer"
              >
                <span>Distribution Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 2: Agricultural Alliances */}
            <div className="partnership-card group">
              <div>
                <div className="partnership-card-icon">
                  <Sprout className="w-6 h-6 text-white" />
                </div>
                <span className="text-[11px] font-bold text-[#34A853] uppercase tracking-wider block mb-1">
                  Agri Synergy
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#34A853] transition-colors">
                  Fodder & Sustainable Farming
                </h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Engaging regional farmers in high-protein green fodder cropping (Napier, Maize, Lucerne) and closed-loop organic bio-manure soil revitalization.
                </p>
              </div>
              <button
                onClick={() => onOpenEnquiry('Agricultural Collaboration')}
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#34A853] group-hover:text-white transition-colors cursor-pointer"
              >
                <span>Agricultural Alliance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 3: Herd Genetics & Welfare */}
            <div className="partnership-card group">
              <div>
                <div className="partnership-card-icon">
                  <HeartHandshake className="w-6 h-6 text-white" />
                </div>
                <span className="text-[11px] font-bold text-[#FF7185] uppercase tracking-wider block mb-1">
                  Livestock Science
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF7185] transition-colors">
                  Breeding & Veterinary Exchange
                </h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Collaborative research with veterinarians and livestock specialists on sexed semen genetics, disease biosecurity, and benchmark cattle welfare protocols.
                </p>
              </div>
              <button
                onClick={() => onOpenEnquiry('Business Partnership')}
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#34A853] group-hover:text-white transition-colors cursor-pointer"
              >
                <span>Breeding Collaboration</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-partnership-primary group"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onNavigate('products')}
              className="btn-partnership-secondary"
            >
              <span>View Proposed Offerings</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
