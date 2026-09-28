import { INDUSTRIES_DATA } from '@/lib/data/industries';
import { INDUSTRIES_SUBPAGE_DATA } from '@/lib/i18n/subpagesData';
import { SupportedLang } from '@/lib/i18n/types';
import { IndustryItem, IndustryFilterParams } from '@/lib/types';

/**
 * Industry Service
 * 
 * Provides access to industry verticals (Enterprise AI, Manufacturing, Fintech, Robotics, etc.)
 * In V1 (Static Phase): Queries typed localized datasets.
 * In V2 (Dynamic CMS Phase): Seamlessly swap with database query.
 */
export class IndustryService {
  /**
   * Retrieves all industry sectors for a given locale.
   */
  async getIndustries(params: IndustryFilterParams = {}): Promise<IndustryItem[]> {
    const { locale = 'en', search = '' } = params;
    const localized = INDUSTRIES_SUBPAGE_DATA[locale as SupportedLang];

    let items: IndustryItem[];

    if (localized && localized.length > 0) {
      items = localized.map((item) => ({
        id: item.id,
        title: item.title,
        desc: item.desc,
        questions: item.questions,
        hosts: item.hosts
      }));
    } else {
      items = INDUSTRIES_DATA.map((item, idx) => ({
        id: `ind-${idx + 1}`,
        title: item.title,
        desc: item.desc,
        questions: item.questions,
        hosts: item.hosts
      }));
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      items = items.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.desc.toLowerCase().includes(q) ||
          i.hosts.some((h) => h.toLowerCase().includes(q))
      );
    }

    return items;
  }

  /**
   * Retrieves an industry sector by its title.
   */
  async getIndustryByTitle(title: string, locale: string = 'en'): Promise<IndustryItem | null> {
    const list = await this.getIndustries({ locale: locale as any });
    return list.find((i) => i.title.toLowerCase() === title.toLowerCase()) || null;
  }
}

export const industryService = new IndustryService();
