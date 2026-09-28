import { Company, DestinationHub, ExperienceItem, ItineraryDay, FaqItem, ArticleBriefing } from './types';

export const MOCK_DESTINATIONS: DestinationHub[] = [
  {
    id: 'dest-1',
    code: 'beijing',
    cityName: 'Beijing',
    subtitle: 'Research, Foundation Models & National Policy',
    headline: 'Frontier Labs & Academic Hub',
    focusTags: ['Frontier LLMs', 'Multimodal Labs', 'Autonomous Mobility'],
    description: "The epicenter of national AI research institutions, world-class university labs, and frontier foundation model architecture."
  },
  {
    id: 'dest-2',
    code: 'shanghai',
    cityName: 'Shanghai',
    subtitle: 'Enterprise AI, Capital & Cross-Border Business',
    headline: 'Global Commercial AI Hub',
    focusTags: ['Enterprise Adoption', 'Fintech AI', 'Biotech Computation'],
    description: "Where global multinational headquarters, venture capital, and tier-one enterprise software meet scaled industrial AI adoption."
  },
  {
    id: 'dest-3',
    code: 'hangzhou',
    cityName: 'Hangzhou',
    subtitle: 'Hyperscalers, Cloud Ecosystems & Embodied AI',
    headline: 'Platform & Robotics Engine',
    focusTags: ['Cloud Infrastructure', 'E-Commerce AI', 'Dynamic Robotics'],
    description: "Home to global platform commerce, hyper-scale cloud AI compute, and the world's most agile quadruped and humanoid robotics pioneers."
  },
  {
    id: 'dest-4',
    code: 'shenzhen',
    cityName: 'Shenzhen',
    subtitle: 'Hardware Integration & Advanced Supply Chains',
    headline: 'Hardware Silicon Valley',
    focusTags: ['Hardware-AI Synthesis', 'EV Systems', 'Industrial Drones'],
    description: "The definitive capital where algorithms transform into physical smart devices, electric vehicles, and high-precision global electronics."
  },
  {
    id: 'dest-5',
    code: 'guangzhou',
    cityName: 'Guangzhou',
    subtitle: 'Low-Altitude Economy & Intelligent Mobility',
    headline: 'Next-Gen Transport Gateway',
    focusTags: ['Autonomous eVTOL', 'Aerial Mobility', 'Smart Logistics'],
    description: "Pioneering the commercialization of pilotless passenger aerial vehicles, smart urban airspace management, and automated logistics networks."
  },
  {
    id: 'dest-6',
    code: 'suzhou',
    cityName: 'Suzhou',
    subtitle: 'Precision Manufacturing & Industrial Automation',
    headline: 'Smart Industry Corridor',
    focusTags: ['Smart Factories', 'Machine Vision', 'Precision Robotics'],
    description: "Advanced industrial corridors showcasing AI visual inspection, automated robotic arms, and high-precision semiconductor assembly lines."
  }
];

export const MOCK_COMPANIES: Company[] = [
  {
    id: 'comp-1',
    nameEn: 'Unitree Robotics',
    nameZh: '宇树科技',
    slug: 'unitree',
    cityHub: 'Hangzhou',
    industry: 'Embodied AI & Humanoid Robotics',
    keyStats: "World's Top Quadruped & Humanoid Maker",
    description: "Pioneering highly agile, cost-effective quadrupedal and humanoid robots with advanced dynamic balance control and embodied intelligence algorithms.",
    tags: ['Robotics', 'Hardware', 'Motion Control']
  },
  {
    id: 'comp-2',
    nameEn: 'EHang Autonomous Aviation',
    nameZh: '亿航智能',
    slug: 'ehang',
    cityHub: 'Guangzhou',
    industry: 'Low-Altitude Urban Air Mobility',
    keyStats: "World's 1st Certified Passenger eVTOL",
    description: "Leading the global transition into urban air mobility with fully autonomous, electric vertical takeoff and landing passenger aircraft systems.",
    tags: ['Aviation', 'Autonomous Driving', 'Mobility']
  },
  {
    id: 'comp-3',
    nameEn: 'DeepSeek Research',
    nameZh: '深度求索',
    slug: 'deepseek',
    cityHub: 'Beijing / Hangzhou',
    industry: 'Foundation Models & Reasoning Architectures',
    keyStats: 'Breakthrough Reasoning & Open Weights',
    description: "Global open-source frontier model developers achieving state-of-the-art reasoning architectures, Mixture-of-Experts (MoE), and unprecedented compute efficiency.",
    tags: ['LLM', 'Reasoning', 'Open Source']
  },
  {
    id: 'comp-4',
    nameEn: 'SenseTime SenseCore',
    nameZh: '商汤科技',
    slug: 'sensetime',
    cityHub: 'Shanghai',
    industry: 'Full-Stack AI Compute & Multimodal Models',
    keyStats: 'Supercomputing Infrastructure & Vision AI',
    description: "Large-scale AI supercomputing center and foundation model ecosystem powering smart city, enterprise digital twins, automotive intelligence, and generative AI.",
    tags: ['Multimodal', 'Infrastructure', 'Vision']
  },
  {
    id: 'comp-5',
    nameEn: 'Huawei Ascend AI Campus',
    nameZh: '华为昇腾生态',
    slug: 'huawei-ascend',
    cityHub: 'Shenzhen',
    industry: 'AI Silicon, MindSpore & Pangu Models',
    keyStats: 'Full-Stack Heterogeneous AI Chips & Frameworks',
    description: "Full-stack sovereign AI hardware architecture, Ascend NPUs, MindSpore deep learning frameworks, and domain-specialized Pangu enterprise foundation models.",
    tags: ['Chips', 'Cloud', 'Enterprise']
  },
  {
    id: 'comp-6',
    nameEn: 'BYD Intelligent Manufacturing',
    nameZh: '比亚迪智能工厂',
    slug: 'byd-automotive',
    cityHub: 'Shenzhen',
    industry: 'EV Automation & Intelligent Drive Systems',
    keyStats: 'Global Leading EV Production Capacity',
    description: "State-of-the-art smart automotive mega-factories integrating computer vision inspection, robotic stamping, and end-to-end autonomous driving systems.",
    tags: ['Automotive', 'Smart Factory', 'Battery']
  }
];

export const MOCK_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'Autonomous eVTOL Aerial Mobility Flight',
    tagline: 'Feel what pilotless urban aviation looks like in reality',
    description: "Step inside a certified autonomous electric vertical takeoff and landing (eVTOL) aircraft. Experience point-to-point urban aerial transport before commercial deployment arrives in Western markets.",
    imageUrl: '/experiences/flying-car.webp',
    location: 'Guangzhou'
  },
  {
    id: 'exp-2',
    title: 'Humanoid & Quadruped Robotics Tech Lab',
    tagline: 'Inspect embodied intelligence in dynamic motion',
    description: "Walk the engineering floor of one of the world's most advanced robotics testing centers. Watch humanoid bipedal robots and quadrupedal robotic dogs execute complex real-time balance maneuvers.",
    imageUrl: '/experiences/robotics-center.webp',
    location: 'Hangzhou'
  },
  {
    id: 'exp-3',
    title: 'Lights-Out Smart Manufacturing Floor',
    tagline: 'Inside an industrial facility orchestrated by machine vision',
    description: "Tour an operational smart factory where algorithmic visual quality checks, automated guided vehicles (AGVs), and robotic arms operate with microscopic precision and zero manual intervention.",
    imageUrl: '/experiences/smart-manufacturing.webp',
    location: 'Suzhou / Shenzhen'
  },
  {
    id: 'exp-4',
    title: 'Huaqiangbei Hardware Silicon Bazaar',
    tagline: 'The heartbeat of global hardware prototyping',
    description: "Explore the legendary hardware electronics market — where microchips, custom PCBs, robotic actuators, and finished commercial smart devices are negotiated and assembled within a single urban perimeter.",
    imageUrl: '/experiences/huaqiangbei.webp',
    location: 'Shenzhen'
  },
  {
    id: 'exp-5',
    title: 'Flagship Consumer AI Ecosystems',
    tagline: 'Everyday lifestyle technology already in widespread deployment',
    description: "Experience how Chinese consumers interact seamlessly with smart electric vehicles, AI home control hubs, cashier-less supermarkets, and facial recognition mobile payments on a daily basis.",
    imageUrl: '/experiences/tech-store.webp',
    location: 'Shanghai'
  },
  {
    id: 'exp-6',
    title: 'Executive Reflection by West Lake',
    tagline: 'Synthesize breakthrough insights in a contemplative setting',
    description: "Conclude intensive technology briefings with a quiet traditional tea ceremony on the historic shores of Hangzhou's West Lake — translating technical observations into actionable business strategy.",
    imageUrl: '/experiences/west-lake-tea.webp',
    location: 'Hangzhou'
  }
];

export const MOCK_ITINERARY: ItineraryDay[] = [
  {
    dayNumber: 1,
    hubLocation: 'Arrival Hub · Context Briefing',
    themeTitle: 'China AI Landscape, Governance & Macro Briefing',
    activities: [
      'Executive airport welcome and 5-star hotel check-in',
      'Opening strategic briefing: China AI regulatory roadmap, talent density & capital allocation',
      'Mapping executive participant objectives to specific enterprise visits',
      'Curated welcome dinner with seasoned cross-border tech advisors and founders'
    ],
    targetModes: ['corporate', 'emba', 'delegation']
  },
  {
    dayNumber: 2,
    hubLocation: 'Model & Research Hub · Beijing / Shanghai',
    themeTitle: 'Frontier Foundation Models & Enterprise Scaling',
    activities: [
      'Private closed-door visit to top-tier Foundation Model lab (LLM, Multimodal & MoE)',
      'Enterprise adopter case study: How tier-one insurance and banks moved from pilot to production',
      'Academic lecture: Organizational restructuring required for agentic AI workflows',
      'C-suite executive roundtable discussion with lead AI research scientists'
    ],
    targetModes: ['corporate', 'emba']
  },
  {
    dayNumber: 3,
    hubLocation: 'Platform & Cloud Hub · Hangzhou',
    themeTitle: 'Hyperscale Infrastructure & Platform-Scale Commerce',
    activities: [
      'High-speed rail executive cabin transfer to Hangzhou',
      'Hyperscaler campus tour: Global cloud infrastructure and 1-billion-user AI services',
      'Vertical AI deep-dive matched to delegation sector preferences',
      'Sunset cultural exchange and executive reflection session at West Lake'
    ],
    targetModes: ['corporate', 'emba', 'delegation']
  },
  {
    dayNumber: 4,
    hubLocation: 'Robotics & Logistics Hub · Hangzhou / Ningbo',
    themeTitle: 'Embodied Intelligence, Humanoids & Smart Logistics',
    activities: [
      'Robotics test floor visit: Dynamic bipedal humanoids and industrial quadrupeds',
      'Smart warehouse inspection: Automated packaging, sorting, and drone dispatch networks',
      'Q&A with robotics venture founders on component cost optimization and mass manufacturing',
      'Evening executive flight transfer to the Greater Bay Area hardware ecosystem'
    ],
    targetModes: ['corporate', 'emba']
  },
  {
    dayNumber: 5,
    hubLocation: 'Hardware & Manufacturing Hub · Shenzhen',
    themeTitle: 'Silicon-to-Device Integration & Smart Gigafactories',
    activities: [
      'Global technology headquarters visit: Ascend chip ecosystem & enterprise cloud',
      'Live smart gigafactory inspection: Robotic vehicle chassis stamping & automated battery assembly',
      'Executive briefing: Supply-chain resilience, edge AI integration, and prototyping speed',
      'Dinner with hardware startup leaders and hardware accelerator partners'
    ],
    targetModes: ['corporate', 'emba', 'delegation']
  },
  {
    dayNumber: 6,
    hubLocation: 'Low-Altitude & Mobility Hub · Guangzhou / Shenzhen',
    themeTitle: 'Autonomous Aerial Transport & Hardware Prototyping',
    activities: [
      'Exclusive eVTOL flight demonstration and passenger pod trial',
      'Field inspection of Huaqiangbei hardware electronics ecosystem and agile component supply',
      'Executive strategy briefing: Low-altitude airspace management and municipal regulatory sandboxes',
      'Working dinner: Drafting individual company AI implementation roadmaps'
    ],
    targetModes: ['corporate', 'delegation']
  },
  {
    dayNumber: 7,
    hubLocation: 'Synthesis Hub · Hong Kong / Shenzhen Departure',
    themeTitle: 'Translating Field Insights into Boardroom Action Playbooks',
    activities: [
      'Strategic synthesis workshop: Translating Chinese operator speed into home-market advantages',
      'Co-creation of organizational AI deployment playbook and partner contact dossier',
      'Awarding executive program certificate of completion',
      'VIP airport transfer for international return departures'
    ],
    targetModes: ['corporate', 'emba', 'delegation']
  }
];

export const MOCK_FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Who typically participates in these private executive expeditions?',
    answer: "Our programs are curated specifically for C-level executives, corporate transformation leaders, venture investors, EMBA cohorts, and government study delegations who require direct, unfiltered exposure to how enterprise AI scales on the ground in China.",
    targetModes: ['corporate', 'emba', 'delegation']
  },
  {
    id: 'faq-2',
    question: 'What is included in the turnkey executive package?',
    answer: "Each program is turnkey: luxury 5-star hotel accommodations, domestic high-speed rail and intercity flights, guaranteed corporate campus access, bilingual tech interpreters, technical briefings, all executive banquets, travel insurance, and post-trip contact dossiers.",
    targetModes: ['corporate', 'emba', 'delegation']
  },
  {
    id: 'faq-3',
    question: 'Can the itinerary be tailored to our specific industry or sector?',
    answer: "Yes. Every private program begins with a detailed scoping phase where we map our host roster against your sector focus (e.g. healthcare, financial services, smart manufacturing, low-altitude mobility, retail) and executive learning objectives.",
    targetModes: ['corporate', 'emba']
  },
  {
    id: 'faq-4',
    question: 'How do you handle visa invitations and corporate logistics?',
    answer: "We provide official business visa invitation letters (PU letters / commercial invitations) and assist your team through consular application procedures with a dedicated concierge operations team.",
    targetModes: ['corporate', 'emba', 'delegation']
  },
  {
    id: 'faq-5',
    question: 'What is the typical lead time required to organize a private tour?',
    answer: "A standard private immersion requires 12 to 16 weeks from initial briefing scoping to on-the-ground execution. Accelerated timelines are possible for focused single-city missions.",
    targetModes: ['corporate', 'emba', 'delegation']
  }
];

export const MOCK_ARTICLES: ArticleBriefing[] = [
  {
    id: 'art-1',
    title: 'China AI Operating Model: Who Truly Owns a Failed Model Release?',
    slug: 'china-ai-talent-operating-model-visit',
    summary: 'A forensic executive framework for inspecting AI engineering team accountability: tracing a failed production release from detection to rollback in hyperscale systems.',
    category: 'Operating Model',
    author: 'Executive Intelligence Team',
    date: 'Sep 27, 2026',
    readTime: '6 min read'
  },
  {
    id: 'art-2',
    title: 'Insurance AI in China: Tracking an Autonomous Disputed Claim',
    slug: 'china-insurance-ai-study-mission',
    summary: 'Inside real-world automated claims processing: how machine vision, policyholder instant adjudication, and fraud detection algorithms interact under strict regulatory scrutiny.',
    category: 'Financial Services',
    author: 'Executive Intelligence Team',
    date: 'Sep 26, 2026',
    readTime: '8 min read'
  },
  {
    id: 'art-3',
    title: 'Evaluating Biotech AI Partners: From Benchmark Score to Wet-Lab Evidence',
    slug: 'china-biotech-ai-executive-briefing',
    summary: 'A pragmatic executive briefing for life sciences leaders: how Chinese biotech AI labs validate in-silico molecular predictions through robotic wet-lab experimentation.',
    category: 'Life Sciences',
    author: 'Executive Intelligence Team',
    date: 'Sep 25, 2026',
    readTime: '5 min read'
  }
];
