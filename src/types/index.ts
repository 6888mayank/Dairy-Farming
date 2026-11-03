export type PageId = 'home' | 'about' | 'farm' | 'products' | 'sustainability' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  href: string;
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
  status: 'Proposed Offering' | 'Planned Product' | 'Future Category';
}

export interface CattleBreed {
  name: string;
  code: 'HF' | 'Jersey';
  scientificName: string;
  origin: string;
  description: string;
  keyStrengths: string[];
  roleInDairy: string;
  image: string;
  plannedHerdContext: string;
}

export interface FarmInfrastructure {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  status: 'Planned Facility' | 'Proposed Setup';
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Cattle' | 'Pasture' | 'Infrastructure' | 'Dairy Care';
  image: string;
  caption: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  tag: string;
  description: string;
  objectives: string[];
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  enquiryType: string;
  message: string;
}
