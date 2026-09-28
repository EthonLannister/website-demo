import { IDataRepository, Company, DestinationHub, ExperienceItem, ItineraryDay, FaqItem, ArticleBriefing, LeadSubmission, TourMode } from './types';
import { MOCK_COMPANIES, MOCK_DESTINATIONS, MOCK_EXPERIENCES, MOCK_ITINERARY, MOCK_FAQS, MOCK_ARTICLES } from './mockData';

export class StaticDataRepository implements IDataRepository {
  async getCompanies(): Promise<Company[]> {
    return MOCK_COMPANIES;
  }

  async getDestinations(): Promise<DestinationHub[]> {
    return MOCK_DESTINATIONS;
  }

  async getExperiences(): Promise<ExperienceItem[]> {
    return MOCK_EXPERIENCES;
  }

  async getItinerary(mode: TourMode = 'corporate'): Promise<ItineraryDay[]> {
    return MOCK_ITINERARY.filter(day => day.targetModes.includes(mode));
  }

  async getFaqs(mode: TourMode = 'corporate'): Promise<FaqItem[]> {
    return MOCK_FAQS.filter(faq => !faq.targetModes || faq.targetModes.includes(mode));
  }

  async getArticles(): Promise<ArticleBriefing[]> {
    return MOCK_ARTICLES;
  }

  async submitLead(lead: LeadSubmission): Promise<{ success: boolean; message: string }> {
    console.log('[MOCK REPOSITORY] Received new executive lead inquiry:', lead);
    // Simulate slight asynchronous processing latency
    await new Promise(resolve => setTimeout(resolve, 600));
    return {
      success: true,
      message: 'Thank you. Your immersion brief has been submitted. Our executive director will respond within 1 business day.'
    };
  }
}
