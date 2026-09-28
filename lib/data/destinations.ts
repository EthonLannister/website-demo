export interface CityHub {
  name: string;
  eyebrow: string;
  tagline: string;
  desc: string;
  hosts: string;
}

export const DESTINATIONS_DATA: CityHub[] = [
  {
    name: 'Beijing',
    eyebrow: 'Research, models & policy',
    tagline: 'Foundation models · research · autonomous mobility',
    desc: "China's densest concentration of AI research institutions, frontier model companies and policy-facing technology ecosystems.",
    hosts: 'Baidu · Moonshot AI · Zhipu AI · ByteDance / Volcengine · Xiaomi'
  },
  {
    name: 'Shanghai',
    eyebrow: 'Enterprise AI & global business',
    tagline: 'Enterprise adoption · capital · multimodal AI',
    desc: 'A global business center where model companies, multinationals and industry operators meet enterprise-scale AI deployment.',
    hosts: 'MiniMax · SenseTime · Bilibili · Lenovo'
  },
  {
    name: 'Hangzhou',
    eyebrow: 'Platforms, fintech & robotics',
    tagline: 'Cloud AI · digital finance · embodied intelligence',
    desc: 'Home to platform-scale commerce, financial technology and a fast-growing robotics and model ecosystem.',
    hosts: 'Alibaba Group · Ant Group · DeepSeek · Unitree Robotics · Hikvision'
  },
  {
    name: 'Shenzhen',
    eyebrow: 'Hardware & intelligent manufacturing',
    tagline: 'AI infrastructure · drones · EVs · supply chains',
    desc: 'The place to understand how algorithms become devices, vehicles, factories and globally scaled hardware products.',
    hosts: 'Huawei · DJI · Tencent · BYD'
  },
  {
    name: 'Guangzhou',
    eyebrow: 'Mobility & commercial innovation',
    tagline: 'Electric mobility · aerial transport · commerce',
    desc: 'A major Greater Bay Area hub for automotive intelligence, low-altitude mobility and consumer-scale commercial innovation.',
    hosts: 'XPeng · EHang'
  },
  {
    name: 'Suzhou',
    eyebrow: 'Advanced manufacturing',
    tagline: 'Industrial automation · semiconductors · biomedicine',
    desc: 'An advanced manufacturing base suited to sector-specific programs spanning automation, precision industry and industrial parks.',
    hosts: 'Inovance · Foxconn Automation · Bosch AI Park'
  },
  {
    name: 'Hefei',
    eyebrow: 'Speech AI, EVs & science',
    tagline: 'Speech intelligence · mobility · research commercialisation',
    desc: 'A science-led innovation hub connecting university research, specialised AI and next-generation vehicle manufacturing.',
    hosts: 'iFlytek · NIO'
  },
  {
    name: 'Chengdu',
    eyebrow: 'Digital economy & western China',
    tagline: 'Software · digital services · regional innovation',
    desc: "A gateway to western China's digital economy and a useful lens on how AI ecosystems grow beyond coastal megacities.",
    hosts: 'Tencent Games AI Lab · Baidu Western Cloud Center'
  }
];
