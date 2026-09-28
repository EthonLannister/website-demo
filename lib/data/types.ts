export type TourMode = 'corporate' | 'emba' | 'delegation';

export interface Company {
  id: string;
  nameEn: string;
  nameZh?: string;
  slug: string;
  cityHub: string;
  industry: string;
  keyStats: string;
  logoUrl?: string;
  description: string;
  tags?: string[];
}

export interface DestinationHub {
  id: string;
  code: string;
  cityName: string;
  subtitle: string;
  headline: string;
  focusTags: string[];
  description: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
  location: string;
}

export interface ItineraryDay {
  dayNumber: number;
  hubLocation: string;
  themeTitle: string;
  activities: string[];
  targetModes: TourMode[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  targetModes?: TourMode[];
}

export interface ArticleBriefing {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  coverImage?: string;
}

export interface LeadSubmission {
  fullName: string;
  workEmail: string;
  phone?: string;
  company: string;
  jobTitle?: string;
  country?: string;
  programInterest: string;
  companySize?: string;
  sourceChannel?: string;
  message?: string;
  contactPreference: 'email' | 'phone';
}

export interface IDataRepository {
  getCompanies(): Promise<Company[]>;
  getDestinations(): Promise<DestinationHub[]>;
  getExperiences(): Promise<ExperienceItem[]>;
  getItinerary(mode?: TourMode): Promise<ItineraryDay[]>;
  getFaqs(mode?: TourMode): Promise<FaqItem[]>;
  getArticles(): Promise<ArticleBriefing[]>;
  submitLead(lead: LeadSubmission): Promise<{ success: boolean; message: string }>;
}
