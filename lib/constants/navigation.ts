export interface NavItem {
  id: string;
  labelKey: string;
  defaultLabel: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'programs', labelKey: 'nav.programs', defaultLabel: 'Programs', href: '/programs' },
  { id: 'companies', labelKey: 'nav.companies', defaultLabel: 'Companies', href: '/companies' },
  { id: 'destinations', labelKey: 'nav.destinations', defaultLabel: 'Destinations', href: '/destinations' },
  { id: 'industries', labelKey: 'nav.industries', defaultLabel: 'Industries', href: '/industries' },
  { id: 'blog', labelKey: 'nav.blog', defaultLabel: 'Briefings', href: '/blog' },
  { id: 'about', labelKey: 'nav.about', defaultLabel: 'About Us', href: '/about' },
];

export const FOOTER_SECTIONS = [
  {
    titleKey: 'footer.navigation',
    defaultTitle: 'Explore',
    links: [
      { href: '/programs', labelKey: 'nav.programs', defaultLabel: 'Programs' },
      { href: '/companies', labelKey: 'nav.companies', defaultLabel: 'Companies' },
      { href: '/destinations', labelKey: 'nav.destinations', defaultLabel: 'Destinations' },
      { href: '/industries', labelKey: 'nav.industries', defaultLabel: 'Industries' },
      { href: '/blog', labelKey: 'nav.blog', defaultLabel: 'Briefings' },
      { href: '/about', labelKey: 'nav.about', defaultLabel: 'About Us' },
    ]
  },
  {
    titleKey: 'footer.destinations',
    defaultTitle: 'Hubs',
    links: [
      { href: '/destinations#beijing', labelKey: 'destinations.beijing', defaultLabel: 'Beijing' },
      { href: '/destinations#shanghai', labelKey: 'destinations.shanghai', defaultLabel: 'Shanghai' },
      { href: '/destinations#hangzhou', labelKey: 'destinations.hangzhou', defaultLabel: 'Hangzhou' },
      { href: '/destinations#shenzhen', labelKey: 'destinations.shenzhen', defaultLabel: 'Shenzhen' },
    ]
  }
];
