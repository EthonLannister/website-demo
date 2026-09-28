import { SupportedLocale } from './common';

export interface IndustryItem {
  id?: string;
  title: string;
  desc: string;
  questions: string[];
  hosts: string[];
  icon?: string;
}

export interface IndustryFilterParams {
  locale?: SupportedLocale;
  search?: string;
}
