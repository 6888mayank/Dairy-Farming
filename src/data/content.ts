import { ProductItem, CattleBreed, FarmInfrastructure, GalleryItem, RoadmapPhase, BreedingGeneticsInfo } from '../types';

export const BRAND = {
  name: "VASUNDHARA",
  subname: "DIARY AND FARMS",
  registeredOfficeName: "Vasundhara Farms and Dairy",
  tagline: "Rooted In Nature. Growing With Purpose.",
  finalMessage: "Nature's Land. Modern Dairy. A Better Tomorrow.",
  concept: "Modern Dairy Farming | Fresh Milk Production | Sustainable Agriculture | Animal Welfare",
  land: "5.5 Acres",
  landSubtitle: "Fertile Agricultural Land",
  livestock: "20 Planned",
  livestockSubtitle: "HF & Jersey Livestock",
  visionType: "Modern Dairy",
  visionSubtitle: "Production Vision",
  phone: "+91 80880 50628",
  phonePlain: "+918088050628",
  email: "bharathkm@gmail.com",
  address: "Survey number 159, Megalahundi, Chamarajanagara Taluk, Chamarajanagara District, PIN – 571312",
  village: "Megalahundi",
  taluk: "Chamarajanagara Taluk",
  district: "Chamarajanagara District",
  pin: "571312",
  state: "Karnataka",
  whatsapp: "+918088050628",
  mapsUrl: "https://maps.google.com/?q=Megalahundi,+Chamarajanagara,+Karnataka+571312",
  officeHours: {
    weekdays: "Monday to Friday : 7:00 am to 4:00 pm",
    weekends: "Saturday & Sunday : 7:00 am to 12:00 pm"
  }
};

export const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'farm', label: 'Our Farm', href: '#farm' },
  { id: 'products', label: 'Products', href: '#products' },
  { id: 'sustainability', label: 'Sustainability', href: '#sustainability' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

export const HERO_STATS = [
  {
    icon: 'land',
    value: '5.5 Acres',
    label: 'Fertile Agricultural Land',
    context: 'Planned Project Specification',
    detail: 'Dedicated to fodder cultivation, modern cattle housing, and sustainable dairy operations.'
  },
  {
    icon: 'cow',
    value: '20 Planned',
    label: 'HF & Jersey Livestock',
    context: 'Planned Livestock Capacity',
    detail: 'Focus on purebred Holstein Friesian and Jersey cattle for balanced, quality milk production.'
  },
  {
    icon: 'leaves',
    value: 'Modern Dairy',
    label: 'Production Vision',
    context: 'Future-Ready Approach',
    detail: 'Hygienic milking infrastructure, scientific cattle care, and responsible environmental stewardship.'
  }
];

export const OFFERINGS: ProductItem[] = [
  {
    id: 'fresh-milk',
    name: 'Fresh Cow Milk',
    tagline: 'Quality-focused fresh milk production',
    category: 'Daily Dairy',
    description: 'Planned farm-fresh cow milk sourced from well-nourished HF and Jersey cattle, cooled immediately under controlled hygienic conditions.',
    image: '/images/milk.jpg',
    highlights: ['Natural nutrition profile', 'Rapid 4°C bulk cooling', 'Hygienic touchless extraction'],
    status: 'Proposed Offering'
  },
  {
    id: 'buttermilk',
    name: 'Organic Fresh Buttermilk',
    tagline: 'No added preservatives, chemical-free delicious beverage',
    category: 'Cultured Beverage',
    packageSize: '200 ml pouch',
    description: 'No added preservatives, chemical-free delicious beverage, from 100% organic curd hydration and natural.',
    whyOrganic: "In today's fast life, our buttermilk prepared from the livestock, which consumes chemical free food and water that makes it 100% Organic and with no emulsifiers, added flavours and preservatives makes it safe to consume.",
    advantages: [
      "A great source of calcium and protein and easy to digest",
      "Helps in digestion and prevents acidity build up since it contains probiotics for strong gut health",
      "Hydrating and nourishing throughout the year"
    ],
    image: '/images/buttermilk.jpg',
    highlights: ['200 ml pouch with cow brand', '100% Organic & chemical-free', 'Probiotic gut wellness', 'Zero emulsifiers or preservatives'],
    status: 'Proposed Offering'
  },
  {
    id: 'curd',
    name: 'Curd (Dahi)',
    tagline: 'A planned dairy product offering',
    category: 'Fermented Dairy',
    description: 'Thick, traditional whole-milk curd naturally cultured for rich probiotic goodness, velvety texture, and authentic farm taste.',
    image: '/images/curd.jpg',
    highlights: ['Traditional natural culture', 'Thick creamy consistency', 'Wholesome natural flavor'],
    status: 'Planned Product'
  },
  {
    id: 'paneer',
    name: 'Paneer (Cottage Cheese)',
    tagline: 'A proposed fresh dairy product category',
    category: 'Fresh Dairy',
    description: 'Freshly pressed soft artisanal paneer crafted from wholesome cow milk, offering tender texture and superior culinary freshness.',
    image: '/images/paneer.jpg',
    highlights: ['Soft and melt-in-mouth', 'High natural protein', 'Pure cow milk curdling'],
    status: 'Proposed Offering'
  },
  {
    id: 'ghee',
    name: 'Traditional Ghee',
    tagline: 'Traditional dairy product offering',
    category: 'Clarified Butter',
    description: 'Golden, slow-cooked pure cow ghee prepared using time-honored artisanal methods for rich aroma, granular texture, and exceptional purity.',
    image: '/images/ghee.jpg',
    highlights: ['Rich golden granular texture', 'Traditional slow simmer', 'Wholesome dairy aroma'],
    status: 'Proposed Offering'
  },
  {
    id: 'farming-support',
    name: 'Dairy Farming Support',
    tagline: 'Modern cattle management & farm operations',
    category: 'Agri Ecosystem',
    description: 'Collaborative knowledge sharing, responsible dairy cattle management, and modern sustainable farming practices for regional growth.',
    image: '/images/cattle-shed.jpg',
    highlights: ['Best practices sharing', 'Responsible animal welfare', 'Fodder cycle planning'],
    status: 'Future Category'
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    num: '01',
    metric: 'Rich Soil',
    title: 'Fertile Agricultural Land',
    description: 'Rich fertile terrain optimized for multi-cut green fodder cultivation, hygienic cattle housing, and closed-loop farm ecology.',
    icon: 'Tractor'
  },
  {
    num: '02',
    metric: 'High Welfare',
    title: 'Planned Dairy Unit',
    description: 'A focused, manageable initial herd capacity engineered for uncompromising animal care, individual monitoring, and quality control.',
    icon: 'ShieldCheck'
  },
  {
    num: '03',
    metric: 'HF & Jersey',
    title: 'Livestock Focus',
    description: 'Synergistic pairing of high-yield Holstein Friesians and high-fat Jersey cows for an ideal balance of volume and rich nutritional quality.',
    icon: 'Sparkles'
  },
  {
    num: '04',
    metric: 'Sustainable',
    title: 'Farming Vision',
    description: 'Circular agriculture recycling cow manure into organic fertilizer for fodder crops, conserving groundwater, and minimizing waste.',
    icon: 'Sprout'
  },
  {
    num: '05',
    metric: 'Animal Welfare',
    title: 'Responsible Cattle Care',
    description: 'Stress-free ventilated housing, rubber floor matting, 24/7 freshwater supply, balanced ration diets, and regular veterinary rounds.',
    icon: 'HeartHandshake'
  },
  {
    num: '06',
    metric: 'Modern Vision',
    title: 'Future-Ready Dairy Farming',
    description: 'Digital herd records, cold-chain preservation protocols, and scientific cattle husbandry designed to set benchmark standards.',
    icon: 'Cpu'
  }
];

export const CATTLE_BREEDS: CattleBreed[] = [
  {
    name: "Holstein Friesian (HF)",
    code: "HF",
    scientificName: "Bos taurus",
    origin: "Netherlands / Northern Europe",
    description: "Renowned globally as the premier dairy breed, Holstein Friesians are distinguished by their striking black-and-white coats and exceptional milk production volume. In our planned modern dairy unit, HF cows will form a primary foundation for efficient, consistent yield.",
    keyStrengths: [
      "World-class milk production efficiency",
      "Calm temperament and responsive to comfortable barn housing",
      "Adaptable to scientific total mixed ration (TMR) feeding",
      "Consistent lactation performance under modern herd management"
    ],
    roleInDairy: "Provides the primary volume base for fresh milk production, supporting commercial viability and regular dairy supply.",
    image: "/images/hf-cow.jpg",
    plannedHerdContext: "Part of the initial 20-cattle planned herd alongside Jersey cattle."
  },
  {
    name: "Jersey Cattle",
    code: "Jersey",
    scientificName: "Bos taurus",
    origin: "Channel Island of Jersey",
    description: "Distinguished by their beautiful fawn-brown coats and gentle large eyes, Jersey cows are celebrated for their milk's rich butterfat, protein density, and distinctive creamy flavor. They exhibit remarkable feed conversion efficiency and superior heat tolerance.",
    keyStrengths: [
      "High milk solids with elevated butterfat and protein content",
      "Exceptional feed conversion efficiency per kilogram of body weight",
      "High heat and climatic resilience in subtropical farming conditions",
      "Gentle, docile demeanor that excels in humane welfare-centered farming"
    ],
    roleInDairy: "Enriches the milk composition with natural creaminess and body, ideal for wholesome drinking milk and traditional ghee processing.",
    image: "/images/jersey-cow.jpg",
    plannedHerdContext: "Part of the initial 20-cattle planned herd alongside Holstein Friesian cattle."
  }
];

export const INFRASTRUCTURE_FACILITIES: FarmInfrastructure[] = [
  {
    title: "Modern Cattle Housing",
    subtitle: "Comfort-Driven Open Ventilation Shed",
    description: "Planned high-roof shed with natural convective airflow, anti-slip rubber bedding mats, dedicated loafing areas, and automated mist cooling systems for summer heat mitigation.",
    iconName: "Home",
    status: "Planned Facility",
    features: ["Natural cross ventilation", "Cushioned rubber resting cubicles", "Hygiene-first concrete alleys", "Thermal insulation roof"]
  },
  {
    title: "Feeding Management",
    subtitle: "Total Mixed Ration (TMR) & Fresh Green Fodder",
    description: "Planned scientific nutrition system utilizing farm-grown green fodder (sorghum, maize, Napier grass) combined with dry roughage and balanced mineral concentrates.",
    iconName: "Wheat",
    status: "Planned Facility",
    features: ["Farm-grown multi-cut fodder", "Automated TMR blending", "Continuous freshwater troughs", "Individual feed allocation"]
  },
  {
    title: "Milking Infrastructure",
    subtitle: "Hygienic Milking Parlor Setup",
    description: "Proposed stainless-steel milking stalls with automated vacuum pulsation and teat sanitization protocols, preventing contamination from hand milking.",
    iconName: "Pipette",
    status: "Proposed Setup",
    features: ["Hands-free automated extraction", "Pre and post-milking teat dip", "Stainless steel milk pipelines", "Zero human contact"]
  },
  {
    title: "Milk Storage & Cold Chain",
    subtitle: "Rapid Bulk Milk Chilling (BMC)",
    description: "Planned on-site insulated stainless steel Bulk Milk Cooler designed to pull fresh milk temperature down from 37°C to under 4°C within 90 minutes.",
    iconName: "ThermometerSnowflake",
    status: "Planned Facility",
    features: ["Rapid 4°C chilled preservation", "SS-304 food-grade bulk tank", "Continuous digital temperature logging", "Clean-in-place (CIP) sanitization"]
  },
  {
    title: "Animal Healthcare",
    subtitle: "Preventive Veterinary Protocols",
    description: "Comprehensive health calendar featuring scheduled vaccinations, deworming, periodic blood testing, foot-bath biosecurity, and on-call veterinary care.",
    iconName: "HeartPulse",
    status: "Planned Facility",
    features: ["Routine veterinary rounds", "Strict vaccination scheduling", "Biosecurity disinfection barriers", "Individual health logs"]
  },
  {
    title: "Farm Management",
    subtitle: "Digital Dairy Recordkeeping",
    description: "Modern data management tracking individual cattle identification, breeding cycles, lactation history, daily feed consumption, and overall farm performance.",
    iconName: "Database",
    status: "Proposed Setup",
    features: ["RFID tag cattle identification", "Daily lactation logs", "Pedigree and breeding records", "Transparent operational metrics"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Holstein Friesian & Jersey in Pasture',
    category: 'Cattle',
    image: '/images/hero-dairy.jpg',
    caption: 'Planned herd composition bringing together HF volume and Jersey butterfat in lush open pastures.'
  },
  {
    id: 'g2',
    title: 'Modern Ventilated Cattle Shed',
    category: 'Infrastructure',
    image: '/images/cattle-shed.jpg',
    caption: 'Architectural vision for spacious, airy cattle housing with automated water bowls and clean bedding.'
  },
  {
    id: 'g3',
    title: 'Artisanal Dairy Product Range',
    category: 'Dairy Care',
    image: '/images/dairy-products.jpg',
    caption: 'Planned pure milk, granular ghee, thick curd, and fresh cottage paneer categories.'
  },
  {
    id: 'g4',
    title: 'Fertile Agricultural Pastures',
    category: 'Pasture',
    image: '/images/farm-landscape.jpg',
    caption: 'Rich agricultural land earmarked for fodder cropping, cattle infrastructure, and sustainable dairy farming.'
  },
  {
    id: 'g-buttermilk',
    title: 'Organic Fresh Buttermilk (200 ml)',
    category: 'Dairy Care',
    image: '/images/buttermilk.jpg',
    caption: 'Pure organic buttermilk pouch with zero preservatives, naturally cultured for digestive probiotics.'
  },
  {
    id: 'g5',
    title: 'Purebred Holstein Friesian Dairy Cow',
    category: 'Cattle',
    image: '/images/hf-cow.jpg',
    caption: 'High-yield Holstein Friesian breed profile selected for scientific dairy management.'
  },
  {
    id: 'g6',
    title: 'Gentle Fawn Jersey Cow in Meadow',
    category: 'Cattle',
    image: '/images/jersey-cow.jpg',
    caption: 'Jersey cattle celebrated for dense milk solids, docile nature, and heat adaptability.'
  },
  {
    id: 'g7',
    title: 'Farm Fresh Chilled Milk Glass Bottle',
    category: 'Dairy Care',
    image: '/images/milk.jpg',
    caption: 'Unadulterated fresh cow milk directly chilled to maintain biological purity.'
  },
  {
    id: 'g8',
    title: 'Traditional Granular Cow Ghee',
    category: 'Dairy Care',
    image: '/images/ghee.jpg',
    caption: 'Golden slow-simmered pure cow ghee showcasing traditional Indian dairy mastery.'
  },
  {
    id: 'g9',
    title: 'Artisanal Fresh Paneer Blocks',
    category: 'Dairy Care',
    image: '/images/paneer.jpg',
    caption: 'High-protein fresh cottage paneer planned with pure milk coagulation.'
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "Dairy Infrastructure Development",
    tag: "Foundation & Construction",
    description: "Developing the 5.5-acre agricultural plot, constructing the modern ventilated cattle barn, installing water borewells, solar power backup, and preparing green fodder fields.",
    objectives: [
      "Land contouring, drainage, and security fencing across 5.5 acres",
      "Construction of high-roof, natural-ventilation cattle shed",
      "Installation of automated water lines and fodder storage silos",
      "Initial multi-cut green fodder cultivation (Napier & Lucerne)"
    ]
  },
  {
    phase: "Phase 2",
    title: "Livestock Establishment",
    tag: "Herd Induction & Welfare",
    description: "Careful induction of the initial 20 HF and Jersey cattle through verified disease-free breeding farms, establishing nutritional baselines and veterinary acclimatization.",
    objectives: [
      "Induction of initial 20 HF & Jersey cattle under quarantine protocols",
      "Individual ear-tag identification and health charting",
      "Establishment of daily TMR nutritional management routine",
      "Veterinary health profiling and biosecurity audit"
    ]
  },
  {
    phase: "Phase 3",
    title: "Hygienic Milk Handling & Production",
    tag: "Milking & Cold Chain Setup",
    description: "Commissioning the hygienic milking systems, rapid Bulk Milk Cooler (BMC), and establishing strict zero-adulteration quality assurance protocols.",
    objectives: [
      "Operational commissioning of stainless steel milking stalls",
      "Cold-chain bulk milk cooling system testing (under 4°C)",
      "Daily milk quality parameter testing (fat, SNF, bacterial load)",
      "Pilot distribution trials and feedback integration"
    ]
  },
  {
    phase: "Phase 4",
    title: "Dairy Product Expansion",
    tag: "Value-Added Categories",
    description: "Gradual introduction of proposed value-added dairy categories including natural curd (dahi), fresh paneer, and traditional cow ghee.",
    objectives: [
      "Clean-room small-batch curd culturing facility setup",
      "Fresh paneer processing and vacuum-packing unit",
      "Artisanal bilona/traditional ghee simmering unit",
      "Sustainable glass bottle delivery model rollout"
    ]
  }
];

export const CORE_VALUES = [
  {
    title: "Quality",
    subtitle: "Purity Without Compromise",
    description: "Commitment to 100% natural, unadulterated milk produced under clean hygienic environments with rigorous testing standards.",
    icon: "Award"
  },
  {
    title: "Integrity",
    subtitle: "Honesty In Every Practice",
    description: "Transparent farm management, truthful communication of project status, and ethical dairy trade with every partner.",
    icon: "Shield"
  },
  {
    title: "Animal Welfare",
    subtitle: "Cattle Comfort As Core",
    description: "Compassionate, humane animal husbandry prioritizing nutrition, resting comfort, medical care, and stress-free living.",
    icon: "Heart"
  },
  {
    title: "Sustainability",
    subtitle: "Respecting The Land",
    description: "Closed-loop agricultural practices recycling farm biomass into organic manure to sustain soil vitality and ecological balance.",
    icon: "Leaf"
  },
  {
    title: "Innovation",
    subtitle: "Modernizing Dairy",
    description: "Embracing modern dairy engineering, cold-chain science, and digital herd management to elevate industry standards.",
    icon: "Lightbulb"
  },
  {
    title: "Responsibility",
    subtitle: "Serving The Community",
    description: "Dedicated to nourishing communities with wholesome nutrition while preserving the local rural ecosystem for future generations.",
    icon: "Users"
  }
];

export const BREEDING_GENETICS_INFO: BreedingGeneticsInfo = {
  title: "Sexed Semen of Top Breeds",
  subtitle: "Advanced Herd Genetics & Humane Livestock Management",
  leadParagraph: "Using female-sorted semen for HF from genetically superior cows that allows cattle farmers to produce female calves to optimize milk production and herd management, letting farmers reliably grow and replace their milking herd from top performing cows.",
  points: [
    {
      title: "Targeted replacement Heifers",
      description: "Female sorted semen ensures a 90% probability of getting a heifer calf, letting farmers reliably grow and replace their milking herd from top performing cows."
    },
    {
      title: "Reduction of unwanted male calves",
      description: "Standard dairy breeding yields roughly 50% bull calves, which often have low market value in specialized dairy systems. Sexed semen cuts down on these surplus male dairy calves."
    },
    {
      title: "Lower risk of calving difficulties",
      description: "Heifer calves are generally smaller at birth than bull calves, which helps reduce labor complications and injuries during delivery."
    },
    {
      title: "Better biosecurity",
      description: "By raising replacement heifers in-house instead of purchasing live cattle from external farms, a dairy operation lowers the risk of introducing contagious diseases."
    }
  ]
};
