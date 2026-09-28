export interface CompanyHost {
  name: string;
  logo: string;
  city: string;
  desc: string;
  tags: string[];
}

export const COMPANIES_DATA: CompanyHost[] = [
  {
    name: 'Alibaba Group',
    logo: '/logos/alibaba-brand.svg',
    city: 'Hangzhou',
    desc: 'Platform-scale AI across cloud, commerce, logistics and enterprise operations.',
    tags: ['Cloud & Platforms', 'Foundation Models']
  },
  {
    name: 'Ant Group',
    logo: '/logos/antgroup-brand.svg',
    city: 'Hangzhou',
    desc: 'Digital finance, risk intelligence and AI-enabled financial infrastructure.',
    tags: ['Fintech', 'Enterprise AI']
  },
  {
    name: 'Baidu',
    logo: '/logos/baidu-brand.svg',
    city: 'Beijing',
    desc: "Foundation models, intelligent search and one of China's largest autonomous-driving programs.",
    tags: ['Foundation Models', 'Autonomous Mobility']
  },
  {
    name: 'DeepSeek',
    logo: '/logos/deepseek-text.svg',
    city: 'Hangzhou',
    desc: 'Frontier model research focused on efficient training, reasoning and open model ecosystems.',
    tags: ['Foundation Models', 'AI Research']
  },
  {
    name: 'DJI',
    logo: '/logos/dji.png',
    city: 'Shenzhen',
    desc: 'Commercial drone platforms combining sensing, autonomy, imaging and edge intelligence.',
    tags: ['Robotics & Hardware', 'Drones']
  },
  {
    name: 'Huawei',
    logo: '/logos/huawei-text.svg',
    city: 'Shenzhen',
    desc: 'Full-stack AI spanning compute silicon, Ascend infrastructure, framework and enterprise software.',
    tags: ['Hardware & Chips', 'Enterprise AI']
  },
  {
    name: 'Unitree Robotics',
    logo: '/logos/unitree.png',
    city: 'Hangzhou',
    desc: 'Mass-produced quadrupedal and humanoid robots with dynamic physical locomotion.',
    tags: ['Robotics & Hardware', 'Embodied AI']
  },
  {
    name: 'XPeng',
    logo: '/logos/xpeng.png',
    city: 'Guangzhou',
    desc: 'Intelligent electric vehicles, navigation-assisted autonomous driving and low-altitude flying cars.',
    tags: ['Autonomous Mobility', 'Electric Vehicles']
  },
  {
    name: 'Tencent',
    logo: '/logos/tencent-brand.svg',
    city: 'Shenzhen',
    desc: 'Hunyuan multimodal models, WeChat ecosystem AI, digital health and enterprise productivity tools.',
    tags: ['Foundation Models', 'Enterprise AI']
  },
  {
    name: 'Lenovo',
    logo: '/logos/lenovo.svg',
    city: 'Beijing / Shanghai',
    desc: 'Hybrid AI infrastructure, edge compute solutions and AI PC hardware architectures.',
    tags: ['Hardware & Chips', 'Enterprise AI']
  },
  {
    name: 'Hikvision',
    logo: '/logos/hikvision.png',
    city: 'Hangzhou',
    desc: 'Industrial computer vision, multi-spectral perception and intelligent IoT sensing systems.',
    tags: ['Machine Vision', 'Robotics & Hardware']
  },
  {
    name: 'Moonshot AI',
    logo: '/logos/moonshot-text.svg',
    city: 'Beijing',
    desc: 'Kimi conversational AI assistant with ultra-long context reasoning and document synthesis.',
    tags: ['Foundation Models', 'AI Agents']
  },
  {
    name: 'Zhipu AI',
    logo: '/logos/zhipu-text.svg',
    city: 'Beijing',
    desc: 'GLM series foundation models, bilingual reasoning engines and enterprise API solutions.',
    tags: ['Foundation Models', 'AI Research']
  },
  {
    name: 'MiniMax',
    logo: '/logos/minimax-text.svg',
    city: 'Shanghai',
    desc: 'Full-modal generative intelligence spanning text, real-time voice synthesis and video generation.',
    tags: ['Foundation Models', 'Generative Media']
  },
  {
    name: 'Kuaishou / Kling AI',
    logo: '/logos/kling-text.svg',
    city: 'Beijing',
    desc: 'High-fidelity cinematic generative video models and creator tool ecosystems.',
    tags: ['Generative Media', 'Computer Vision']
  },
  {
    name: 'ByteDance / Volcengine',
    logo: '/logos/volcengine-text-1.svg',
    city: 'Beijing / Shanghai',
    desc: 'Doubao LLM family, cloud AI infra, multimodal agents and enterprise developer toolchains.',
    tags: ['Cloud & Platforms', 'Foundation Models']
  },
  {
    name: 'Xiaomi',
    logo: '/logos/xiaomimimo-text.svg',
    city: 'Beijing',
    desc: 'Human × Car × Home smart ecosystem with automated EV manufacturing and on-device AI.',
    tags: ['Autonomous Mobility', 'Robotics & Hardware']
  },
  {
    name: 'Bilibili',
    logo: '/logos/bilibili-text.svg',
    city: 'Shanghai',
    desc: 'Community video intelligence, multimodal recommendations and GenAI creator suites.',
    tags: ['Generative Media', 'Consumer AI']
  },
  {
    name: 'EHang',
    logo: '/logos/ehang.svg',
    city: 'Guangzhou',
    desc: 'World’s first commercially certified passenger-carrying pilotless autonomous eVTOL aircraft.',
    tags: ['Autonomous Mobility', 'Robotics & Hardware']
  },
  {
    name: 'BYD',
    logo: '/logos/byd.svg',
    city: 'Shenzhen',
    desc: 'Gigafactory smart automation, blade battery architectures and Xuanji AI intelligent vehicle systems.',
    tags: ['Autonomous Mobility', 'Smart Manufacturing']
  },
  {
    name: 'iFlytek',
    logo: '/logos/iflytek.svg',
    city: 'Hefei',
    desc: 'Cognitive intelligence, speech perception, healthcare diagnostic AI and education hardware.',
    tags: ['Speech & Audio', 'Enterprise AI']
  },
  {
    name: 'SenseTime',
    logo: '/logos/sensetime.svg',
    city: 'Shanghai',
    desc: 'SenseNova foundation model suite, SenseCore AI compute data centers and autonomous driving solutions.',
    tags: ['Foundation Models', 'Computer Vision']
  },
  {
    name: 'NIO',
    logo: '/logos/nio.svg',
    city: 'Shanghai / Hefei',
    desc: 'Smart electric vehicles, NOMI on-board AI agent, and automated battery swapping station networks.',
    tags: ['Autonomous Mobility', 'Electric Vehicles']
  }
];
