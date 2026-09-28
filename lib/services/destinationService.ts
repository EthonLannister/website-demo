import { DESTINATIONS_DATA } from '@/lib/data/destinations';
import { DESTINATIONS_SUBPAGE_DATA } from '@/lib/i18n/subpagesData';
import { SupportedLang } from '@/lib/i18n/types';
import { DestinationHub, DestinationFilterParams } from '@/lib/types';

/**
 * Destination Service
 * 
 * Provides access to innovation hub cities (Beijing, Shanghai, Hangzhou, Shenzhen, etc.)
 * In V1 (Static Phase): Queries typed localized datasets.
 * In V2 (Dynamic CMS Phase): Replace with CMS API/DB calls while preserving async signature.
 */
export class DestinationService {
  /**
   * Retrieves all destination hubs for a given locale.
   */
  async getDestinations(params: DestinationFilterParams = {}): Promise<DestinationHub[]> {
    const { locale = 'en', search = '' } = params;
    const localized = DESTINATIONS_SUBPAGE_DATA[locale as SupportedLang];

    let items: DestinationHub[];

    if (localized && localized.length > 0) {
      items = localized.map((item) => ({
        id: item.id,
        name: item.name,
        eyebrow: item.eyebrow,
        tagline: item.tagline,
        desc: item.desc,
        hosts: item.hosts
      }));
    } else {
      items = DESTINATIONS_DATA.map((item, idx) => ({
        id: `dest-${idx + 1}`,
        name: item.name,
        eyebrow: item.eyebrow,
        tagline: item.tagline,
        desc: item.desc,
        hosts: item.hosts
      }));
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      items = items.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.desc.toLowerCase().includes(q) ||
          d.eyebrow.toLowerCase().includes(q) ||
          d.hosts.toLowerCase().includes(q)
      );
    }

    return items;
  }

  /**
   * Retrieves a destination hub by city name.
   */
  async getDestinationByName(name: string, locale: string = 'en'): Promise<DestinationHub | null> {
    const list = await this.getDestinations({ locale: locale as any });
    return list.find((d) => d.name.toLowerCase() === name.toLowerCase()) || null;
  }
}

export const destinationService = new DestinationService();
