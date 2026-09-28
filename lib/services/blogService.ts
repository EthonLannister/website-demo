import { BLOG_SUBPAGE_DATA } from '@/lib/i18n/subpagesData';
import { SupportedLang } from '@/lib/i18n/types';
import { BlogPost, BlogCategory, BlogFilterParams } from '@/lib/types';

/**
 * Blog / Briefings Service
 * 
 * Provides research briefings, executive dispatches, and policy insights.
 * In V1 (Static Phase): Queries localized post repository.
 * In V2 (Dynamic CMS Phase): Replace with CMS API endpoint or headless CMS (e.g. Strapi / Ghost / Payload).
 */
export class BlogService {
  /**
   * Retrieves a list of blog posts with optional category filtering and search.
   */
  async getBlogPosts(params: BlogFilterParams = {}): Promise<BlogPost[]> {
    const { locale = 'en', categoryId = 'all', search = '' } = params;
    const subpage = BLOG_SUBPAGE_DATA[locale as SupportedLang] || BLOG_SUBPAGE_DATA.en;
    const posts = subpage?.posts || [];

    let filtered = posts.map((p) => ({
      slug: p.slug,
      title: p.title,
      desc: p.desc,
      category: p.category,
      categoryId: p.categoryId,
      date: p.date,
      image: p.image
    }));

    if (categoryId && categoryId !== 'all') {
      filtered = filtered.filter((p) => p.categoryId === categoryId);
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    return filtered;
  }

  /**
   * Retrieves available categories for the blog section.
   */
  async getBlogCategories(locale: string = 'en'): Promise<BlogCategory[]> {
    const subpage = BLOG_SUBPAGE_DATA[locale as SupportedLang] || BLOG_SUBPAGE_DATA.en;
    if (subpage?.categories && subpage.categories.length > 0) {
      return subpage.categories;
    }
    return [
      { id: 'all', label: 'All' },
      { id: 'field-notes', label: 'Field Notes' },
      { id: 'models', label: 'Foundational Models' },
      { id: 'robotics', label: 'Robotics & Factory' },
      { id: 'briefings', label: 'Executive Briefings' },
      { id: 'travel', label: 'Travel & Payments' }
    ];
  }

  /**
   * Retrieves a single blog post by its URL slug.
   */
  async getBlogPostBySlug(slug: string, locale: string = 'en'): Promise<BlogPost | null> {
    const posts = await this.getBlogPosts({ locale: locale as any });
    return posts.find((p) => p.slug === slug) || null;
  }
}

export const blogService = new BlogService();
