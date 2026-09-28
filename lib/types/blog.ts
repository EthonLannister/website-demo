import { SupportedLocale } from './common';

export interface BlogPost {
  id?: string;
  slug?: string;
  title: string;
  desc: string;
  date: string;
  category: string;
  categoryId: string;
  image: string;
  author?: string;
  readTime?: string;
  content?: string;
}

export interface BlogCategory {
  id: string;
  label: string;
}

export interface BlogFilterParams {
  locale?: SupportedLocale;
  categoryId?: string;
  search?: string;
}
