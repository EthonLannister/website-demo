export type SupportedLang = 'en' | 'zh' | 'de' | 'fr' | 'es' | 'ar';

export interface PageHeaderTranslation {
  eyebrow: string;
  title: string;
  desc: string;
}

export interface PillarItem {
  num: string;
  tag: string;
  title: string;
  desc: string;
}

export interface HubCard {
  id: string;
  code: string;
  cityName: string;
  subtitle: string;
  headline: string;
  description: string;
  focusTags: string[];
}

export interface ExperienceItemTrans {
  id: string;
  title: string;
  tagline: string;
  description: string;
  location: string;
}

export interface CurriculumDay {
  dayNumber: number;
  hubLocation: string;
  themeTitle: string;
  activities: string[];
  targetModes: string[];
}

export interface EngagementModel {
  id: string;
  badge: string;
  title: string;
  desc: string;
  price: string;
  cohort: string;
  features: string[];
}

export interface FaqItemTrans {
  id: string;
  question: string;
  answer: string;
}

export interface PrincipleItem {
  title: string;
  desc: string;
}

export interface TranslationDictionary {
  nav: {
    programs: string;
    companies: string;
    industries: string;
    destinations: string;
    insights: string;
    about: string;
    planProgram: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleSub: string;
    subtitle: string;
    desc: string;
    curation: string;
    guides: string;
    logistics: string;
    ctaPrimary: string;
    ctaSecondary: string;
    overview: string;
    telemetry: {
      datesLabel: string;
      datesVal: string;
      durationLabel: string;
      durationVal: string;
      routeLabel: string;
      routeVal: string;
      groupLabel: string;
      groupVal: string;
    };
  };
  marquee: {
    label: string;
    tag: string;
  };
  swissGrid: {
    eyebrow: string;
    title: string;
    desc: string;
    pillars: PillarItem[];
  };
  hubMatrix: {
    eyebrow: string;
    title: string;
    desc: string;
    cta: string;
    hubCodeLabel: string;
    hubs: HubCard[];
  };
  experiences: {
    eyebrow: string;
    title: string;
    desc: string;
    expPrefix: string;
    scheduling: string;
    inquire: string;
    items: ExperienceItemTrans[];
  };
  curriculum: {
    eyebrow: string;
    title: string;
    desc: string;
    dayPrefix: string;
    briefingSuffix: string;
    focusPrefix: string;
    connectText: string;
    targetTracks: string;
    agendaSchedule: string;
    days: CurriculumDay[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    desc: string;
    models: EngagementModel[];
    inclusionsTitle: string;
    inclusions: string[];
    exclusionsTitle: string;
    exclusions: string[];
    cta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    desc: string;
    items: FaqItemTrans[];
    contactNote: string;
    contactLink: string;
  };
  leadForm: {
    eyebrow: string;
    title: string;
    desc: string;
    director: string;
    concierge: string;
    offices: string;
    shanghaiOffice: string;
    shanghaiAddress: string;
    intlOffice: string;
    intlAddress: string;
    visaNotice: string;
    formTitle: string;
    formSubtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    workEmailLabel: string;
    workEmailPlaceholder: string;
    orgLabel: string;
    orgPlaceholder: string;
    titleLabel: string;
    titlePlaceholder: string;
    countryLabel: string;
    countryPlaceholder: string;
    programLabel: string;
    programOptions: { value: string; label: string }[];
    sizeLabel: string;
    sizeOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    prefLabel: string;
    emailPref: string;
    phonePref: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    successReset: string;
  };
  pages: {
    programs: PageHeaderTranslation;
    companies: PageHeaderTranslation;
    industries: PageHeaderTranslation;
    destinations: PageHeaderTranslation;
    blog: PageHeaderTranslation;
    about: PageHeaderTranslation;
  };
  aboutPage: {
    roleTitle: string;
    roleP1: string;
    roleP2: string;
    visitLimen: string;
    principles: PrincipleItem[];
    ctaTitle: string;
    ctaDesc: string;
    ctaDesign: string;
    ctaExplore: string;
  };
  companiesPage: {
    searchPlaceholder: string;
    allCities: string;
    allSectors: string;
    resultsSuffix: string;
    noResults: string;
    resetFilters: string;
    requestVisit: string;
    tagFilters: { id: string; label: string }[];
    companyDescriptions: Record<string, string>;
  };
  industriesPage: {
    keyQuestions: string;
    frequentHosts: string;
    requestTrack: string;
    items: {
      id: string;
      title: string;
      desc: string;
      questions: string[];
      hosts: string[];
    }[];
  };
  programsPage: {
    tracks: {
      num: string;
      title: string;
      audience: string;
      desc: string;
      durationLabel: string;
      duration: string;
      inquire: string;
    }[];
    diagnosticEyebrow: string;
    diagnosticTitle: string;
    diagnosticDesc: string;
    diagnosticBtn: string;
    diagnosticQ1: string;
    diagnosticQ1Opts: { val: string; label: string }[];
    diagnosticQ2: string;
    diagnosticQ2Opts: { val: string; label: string }[];
    diagnosticQ3: string;
    diagnosticQ3Opts: { val: string; label: string }[];
    diagnosticQ4: string;
    diagnosticQ4Opts: { val: string; label: string }[];
    diagnosticResults: {
      corporate: string;
      investorPolicy: string;
      university: string;
      industry: string;
    };
    stepsEyebrow: string;
    stepsTitle: string;
    steps: {
      num: string;
      title: string;
      desc: string;
    }[];
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
  };
  destinationsPage: {
    frequentHosts: string;
    requestRoute: string;
    items: {
      id: string;
      name: string;
      eyebrow: string;
      tagline: string;
      desc: string;
      hosts: string;
    }[];
  };
  blogPage: {
    allTab: string;
    readBriefing: string;
    readTime: string;
    categories: { id: string; label: string }[];
    posts: {
      slug: string;
      title: string;
      desc: string;
      category: string;
      categoryId: string;
      date: string;
      image: string;
    }[];
  };
  footer: {
    desc: string;
    subhead: string;
    tracks: string;
    resources: string;
    contact: string;
    rights: string;
    methodology: string;
    terms: string;
    contactLink: string;
  };
  common: {
    exploreCompanies: string;
    exploreDestinations: string;
    designProgram: string;
    readBriefing: string;
    requestRoute: string;
  };
}
