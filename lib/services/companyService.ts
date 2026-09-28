import { COMPANIES_DATA } from '@/lib/data/companies';
import { COMPANIES_SUBPAGE_DATA } from '@/lib/i18n/subpagesData';
import { SupportedLang } from '@/lib/i18n/types';
import { CompanyHost, CompanyFilterParams, CompanyTagFilter } from '@/lib/types';

/**
 * Company Service
 * 
 * Provides access to participating company hosts and corporate study visit targets.
 * In V1 (Static Phase): Queries in-memory dataset with localized description resolution.
 * In V2 (Dynamic CMS Phase): Replace the implementation below with Supabase / Headless CMS / Prisma client,
 * maintaining identical async function signatures.
 */
export class CompanyService {
  /**
   * Retrieves a filtered list of company hosts.
   */
  async getCompanies(params: CompanyFilterParams = {}): Promise<CompanyHost[]> {
    const { locale = 'en', search = '', tag = 'All', city = '' } = params;
    const subpage = COMPANIES_SUBPAGE_DATA[locale as SupportedLang] || COMPANIES_SUBPAGE_DATA.en;
    const localizedDescMap = subpage?.descriptions || {};

    let list = COMPANIES_DATA.map((company) => ({
      ...company,
      desc: localizedDescMap[company.name] || company.desc
    }));

    if (tag && tag !== 'All') {
      const lowerTag = tag.toLowerCase();
      list = list.filter((c) =>
        c.tags.some((t) => t.toLowerCase().includes(lowerTag)) ||
        (tag === 'Robotics & Hardware' && (c.tags.includes('Robotics') || c.name.includes('Unitree') || c.name.includes('DJI') || c.name.includes('Xiaomi')))
      );
    }

    if (city) {
      const lowerCity = city.toLowerCase();
      list = list.filter((c) => c.city.toLowerCase() === lowerCity);
    }

    if (search.trim()) {
      const query = search.toLowerCase().trim();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.desc.toLowerCase().includes(query) ||
          c.city.toLowerCase().includes(query) ||
          c.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    return list;
  }

  /**
   * Retrieves a single company host by its unique name or identifier.
   */
  async getCompanyByName(name: string, locale: string = 'en'): Promise<CompanyHost | null> {
    const companies = await this.getCompanies({ locale: locale as any });
    return companies.find((c) => c.name.toLowerCase() === name.toLowerCase()) || null;
  }

  /**
   * Retrieves sector filter tags for the companies directory.
   */
  async getFilterTags(locale: string = 'en'): Promise<CompanyTagFilter[]> {
    const subpage = COMPANIES_SUBPAGE_DATA[locale as SupportedLang] || COMPANIES_SUBPAGE_DATA.en;
    if (subpage?.tagFilters && subpage.tagFilters.length > 0) {
      return subpage.tagFilters;
    }
    return [
      { id: 'All', label: 'All Sectors' },
      { id: 'Foundation Models', label: 'Foundation Models' },
      { id: 'Robotics & Hardware', label: 'Robotics & Hardware' },
      { id: 'Autonomous Mobility', label: 'Autonomous Mobility' },
      { id: 'Cloud & Platforms', label: 'Cloud & Platforms' },
      { id: 'Enterprise AI', label: 'Enterprise AI' },
      { id: 'Fintech', label: 'Fintech' }
    ];
  }
}

export const companyService = new CompanyService();
