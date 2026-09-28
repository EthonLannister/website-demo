import { SupportedLocale } from './common';

export interface DestinationHub {
  id?: string;
  name: string;
  eyebrow: string;
  tagline: string;
  desc: string;
  hosts: string;
  region?: string;
  featured?: boolean;
}

export interface DestinationFilterParams {
  locale?: SupportedLocale;
  search?: string;
  region?: string;
}
