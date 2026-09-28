export interface IndustryItem {
  title: string;
  desc: string;
  questions: string[];
  hosts: string[];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    title: 'Enterprise AI',
    desc: 'From copilots and agents to infrastructure, governance and operating-model change.',
    questions: [
      'What has moved beyond pilot?',
      'How are leaders measuring value?'
    ],
    hosts: ['Alibaba Group', 'Huawei', 'Lenovo', 'Zhipu AI']
  },
  {
    title: 'Manufacturing',
    desc: 'Smart factories, machine vision, robotics, quality systems and industrial data.',
    questions: [
      'Where does AI change throughput?',
      'How are hardware and software integrated?'
    ],
    hosts: ['BYD', 'Unitree Robotics', 'Hikvision', 'Xiaomi']
  },
  {
    title: 'Financial Services',
    desc: 'Risk, service automation, digital finance, compliance and financial inclusion.',
    questions: [
      'How is AI governed in regulated workflows?',
      'Which use cases have scaled?'
    ],
    hosts: ['Ant Group', 'Alibaba Group', 'Baidu']
  },
  {
    title: 'Mobility',
    desc: 'Electric vehicles, intelligent driving, aerial mobility and connected infrastructure.',
    questions: [
      'Where is autonomy commercially viable?',
      'How do regulation and data shape rollout?'
    ],
    hosts: ['XPeng', 'BYD', 'EHang', 'NIO']
  },
  {
    title: 'Robotics & Embodied AI',
    desc: 'Humanoids, quadrupeds, drones and the supply chains behind physical intelligence.',
    questions: [
      'Which deployments are production-ready?',
      'What is driving cost reduction?'
    ],
    hosts: ['Unitree Robotics', 'DJI', 'EHang']
  },
  {
    title: 'Media & Consumer AI',
    desc: 'Generative video, recommendation systems, creator tools and consumer AI products.',
    questions: [
      'How is AI changing distribution?',
      'Which product loops accelerate adoption?'
    ],
    hosts: ['Kuaishou / Kling AI', 'Bilibili', 'MiniMax', 'ByteDance / Volcengine']
  },
  {
    title: 'Energy & Resources',
    desc: 'Battery systems, industrial inspection, autonomous operations and energy intelligence.',
    questions: [
      'How does AI improve asset productivity?',
      'Which technologies transfer across markets?'
    ],
    hosts: ['BYD', 'DJI', 'NIO']
  },
  {
    title: 'Public Services',
    desc: 'Education, healthcare, city operations and policy-facing AI deployment.',
    questions: [
      'How are public outcomes evaluated?',
      'What governance patterns are emerging?'
    ],
    hosts: ['iFlytek', 'Baidu', 'Hikvision']
  }
];
