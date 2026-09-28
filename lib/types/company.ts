import { SupportedLocale } from './common';

export interface CompanyHost {
  id?: string;
  name: string;
  logo: string;
  city: string;
  desc: string;
  tags: string[];
  websiteUrl?: string;
  industryCategory?: string;
  featured?: boolean;
}

export interface CompanyFilterParams {
  locale?: SupportedLocale;
  search?: string;
  tag?: string;
  city?: string;
}

export interface CompanyTagFilter {
  id: string;
  label: string;
}
