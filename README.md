# China AI Tour - Frontier Tech Immersion Platform

> 高端商业与产业科技研学考察平台，面向跨国企业高管、商学院 EMBA、投资机构与智库代表团。

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![i18n](https://img.shields.io/badge/i18n-6_Languages-orange?style=flat)](https://github.com/EthonLannister/website-demo)

---

## 🌟 核心特性 (Features)

1. **顶级杂志风与瑞士网格设计 (Editorial Swiss Grid)**:
   - 发丝线网格系统、非对称排版与精致微动效，呈现高水准的商业质感。
2. **多语言与 RTL 原生支持 (Full i18n & RTL Engine)**:
   - 支持英语 (`en`)、中文 (`zh`)、德语 (`de`)、法语 (`fr`)、西班牙语 (`es`)、阿拉伯语 (`ar`) 6 种语言；
   - 阿拉伯语模式自动启用原生从右向左 (RTL) 布局排版与字系优化。
3. **多客群动态自适应 (Multi-Persona State Machine)**:
   - 支持企业战略团 (`corporate`)、商学院研学 (`emba`)、政府/投资代表团 (`delegation`) 一键切换，动态适配日程与问答。
4. **全套独立子页面路由体系**:
   - `/programs`: 4大研学项目与 4 步互动诊断匹配器；
   - `/companies`: 参访名录，支持多维度赛道过滤与实时搜索；
   - `/destinations`: 8大创新城市（北京、上海、杭州、深圳、广州、苏州、合肥、成都）；
   - `/industries`: 8大重点科技赛道与核心议题；
   - `/blog`: 智库研究与前沿洞察文章；
   - `/about`: 研学专家委员会与平台背景。
5. **规范分层软件工程架构 (Clean Layered Architecture)**:
   - **服务层模式 (Service Pattern)**：业务数据与组件彻底解耦，为未来接入 Supabase / Headless CMS / Prisma 管理后台提供无缝对接能力。

---

## 🏗️ 架构与目录规范 (Directory Layout)

```text
website/
├── app/                  # Next.js 14 App Router 页面与 API
│   ├── about/            # 关于我们
│   ├── api/leads/        # 商务咨询线索 API
│   ├── blog/             # 智库文章
│   ├── companies/        # 参访企业库
│   ├── destinations/     # 枢纽城市
│   ├── industries/       # 产业赛道
│   ├── programs/         # 研学方案
│   ├── layout.tsx        # 根布局
│   └── page.tsx          # 首页体验流
├── components/           # 组件体系
│   ├── ui/               # 基础通用 UI 库 (Button, Badge, Card, SearchInput...)
│   ├── commercial/       # 商务报价
│   ├── conversion/       # 意向表单
│   ├── curriculum/       # 模块日程
│   ├── editorial/        # 瑞士网格与矩阵
│   ├── experiences/      # 现场沉浸卡片堆叠流
│   ├── faq/              # 交互 FAQ
│   ├── footer/           # 全局页尾
│   ├── hero/             # 首屏视觉
│   ├── marquee/          # 企业跑马灯
│   ├── navigation/       # 顶部悬浮导航与语言切换
│   └── providers/        # 全局上下文 (多语言、角色状态)
├── docs/                 # 架构与设计文档
│   ├── ARCHITECTURE.md   # 系统架构与软件工程规范
│   ├── UI设计.md         # 视觉设计 Token 规范
│   └── 系统架构书.md     # 数据库选型与中后台演进方案
├── lib/                  # 基础设施与业务逻辑
│   ├── constants/        # 全局常量 (站点配置、统一联系方式)
│   ├── services/         # 业务服务层 (Repository Pattern)
│   ├── types/            # 领域实体强类型定义 (Domain Types)
│   ├── utils/            # 工具函数库
│   ├── data/             # 基础数据集
│   └── i18n/             # 多语言词条与本地化数据
└── public/               # 静态图片、字体与矢量图标
```

更多详细架构设计原则与后台接入方案，请阅读 [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)。

---

## 🚀 快速上手 (Quick Start)

### 环境依赖
- Node.js >= 18.17.0
- pnpm / npm / yarn

### 本地开发

```bash
# 1. 安装依赖
pnpm install

# 2. 启动本地开发服务器
pnpm dev

# 访问 http://localhost:3000
```

### 生产构建

```bash
# 静态代码检查与生产编译
pnpm build

# 启动生产服务
pnpm start
```

---

## 📞 联系咨询 (Contact)

- **Platform**: China AI Tour
- **Direct Lead**: Ethon Lannister
- **Phone / WhatsApp**: +86 136 0529 1386
- **Email**: ethon210@gmail.com
- **Locations**: Shanghai · Beijing · Shenzhen, China
