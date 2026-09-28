# China AI Tour - 系统架构与软件工程开发规范文档

> 本文档详细阐述了本项目的前端与全栈架构规范、代码分层原则、目录结构组织以及未来从静态向动态管理后台（CMS / 数据库）平滑演进的实施路径。

---

## 一、 系统总体架构 (System Architecture)

本项目遵循**分层架构模式 (Layered Architecture)** 与 **仓储/服务抽象模式 (Repository / Service Pattern)**，严格分离关注点，确保表现层与数据源完全解耦。

```
┌──────────────────────────────────────────────────────────┐
│                   1. 表现层 (Presentation Layer)           │
│   Next.js App Router (app/*) + React Components          │
│   - UI Primitives (components/ui/*)                      │
│   - Feature Sections (components/hero, editorial...)     │
│   - Providers (LanguageProvider, TourModeProvider)       │
└─────────────────────────────┬────────────────────────────┘
                              │ 调用 (Async Calls)
                              ▼
┌──────────────────────────────────────────────────────────┐
│                 2. 服务层 (Service / API Layer)            │
│   lib/services/* (companyService, destinationService...) │
│   - 业务逻辑编排                                           │
│   - 统一异步契约 (Promise<T>)                             │
│   - 输入校验与数据适配器 (Data Transformers)                │
└─────────────────────────────┬────────────────────────────┘
                              │ 抽象屏蔽
                              ▼
┌──────────────────────────────────────────────────────────┐
│               3. 领域与类型层 (Domain / Types Layer)        │
│   lib/types/* (company.ts, blog.ts, program.ts...)       │
│   - 统一业务实体强类型定义                                  │
│   - 消除隐式 any 与类型断言                               │
└─────────────────────────────┬────────────────────────────┘
                              │ 驱动
                              ▼
┌──────────────────────────────────────────────────────────┐
│                4. 数据接入层 (Data Access Layer)           │
│   当前阶段 (V1): 本地强类型数据仓库 (lib/data/*, subpages)   │
│   未来演进 (V2): Supabase / Headless CMS / Prisma / REST  │
└──────────────────────────────────────────────────────────┘
```

---

## 二、 项目目录规范 (Directory Structure)

```text
website/
├── app/                        # Next.js 14 App Router 页面路由
│   ├── about/page.tsx          # 关于我们与智库背景页面
│   ├── api/                    # 后端 API 路由 (Edge & Node.js 运行时)
│   │   └── leads/route.ts      # 商务线索与意向提交 API (对接 Service)
│   ├── blog/page.tsx           # 商业洞察与研学文章列表
│   ├── companies/page.tsx      # 参访企业智库名录与交互筛选
│   ├── destinations/page.tsx   # 创新枢纽城市矩阵 (北京/上海/杭州/深圳...)
│   ├── industries/page.tsx     # 重点产业赛道与核心议题
│   ├── programs/page.tsx       # 4大研学体系与在线诊断匹配
│   ├── globals.css             # 全局 Tailwind CSS 样式与瑞士网格变量
│   ├── layout.tsx              # 全局根布局 (含多语言与角色 Provider)
│   └── page.tsx                # 平台首页单页核心体验流
│
├── components/                 # 组件层
│   ├── ui/                     # 通用原子 UI 组件库 (Atomic UI Primitives)
│   │   ├── Badge.tsx           # 状态徽章、赛道标签
│   │   ├── Button.tsx          # 统一交互按钮 (多尺寸、变体)
│   │   ├── Card.tsx            # 瑞士网格发丝线交互卡片
│   │   ├── Container.tsx       # 响应式安全视口容器
│   │   ├── SearchInput.tsx     # 带搜索/清空图标的输入组件
│   │   ├── SectionHeader.tsx   # 规范化章节大标题与眉题
│   │   └── index.ts            # UI 组件统一出口
│   ├── commercial/             # 商业合作与定制报价组件
│   ├── conversion/             # 转化组件 (LeadCaptureForm 商务咨询表单)
│   ├── curriculum/             # 模块化行程日程组件 (ModularAgenda)
│   ├── editorial/              # 瑞士网格与创新枢纽矩阵组件 (HubMatrix, SwissGrid)
│   ├── experiences/            # 独家参访沉浸卡片堆叠流 (StickyStackDeck)
│   ├── faq/                    # 常见问答组件 (FaqSection)
│   ├── footer/                 # 全局统一页尾 (SiteFooter)
│   ├── hero/                   # 首屏 Hero 视觉组件 (HeroBackdrop, TelemetryCard)
│   ├── marquee/                # 跑马灯组件 (LogoMarquee)
│   ├── navigation/             # 顶部悬浮导航与多语言选择器 (FloatingNavbar)
│   └── providers/              # 全局状态上下文 (LanguageProvider, TourModeProvider)
│
├── docs/                       # 项目架构与设计文档
│   ├── ARCHITECTURE.md         # 架构规范与演进指南 (本文档)
│   ├── UI设计.md               # 视觉设计系统与 Token 规范
│   └── 系统架构书.md           # 平台详细技术方案与数据库选型
│
├── lib/                        # 核心业务逻辑与基础设施
│   ├── constants/              # 全局不可变常量
│   │   ├── navigation.ts       # 路由链接与页脚导航定义
│   │   ├── siteConfig.ts       # 平台元数据与官方联系方式 (统一数据源)
│   │   └── index.ts
│   ├── services/               # 业务服务层 (Repository Pattern)
│   │   ├── blogService.ts      # 博客研学文章服务
│   │   ├── companyService.ts   # 参访企业数据与分类筛选服务
│   │   ├── destinationService.ts # 枢纽城市数据服务
│   │   ├── industryService.ts  # 产业赛道数据服务
│   │   ├── leadService.ts      # 客户线索收集与校验服务
│   │   ├── programService.ts   # 研学方案与诊断推理服务
│   │   └── index.ts
│   ├── types/                  # 领域实体强类型定义 (Domain Types)
│   │   ├── blog.ts             # 博客文章实体
│   │   ├── common.ts           # 分页、服务响应、语言类型
│   │   ├── company.ts          # 参访企业实体与筛选参数
│   │   ├── destination.ts      # 枢纽城市实体
│   │   ├── industry.ts         # 产业赛道实体
│   │   ├── lead.ts             # 咨询线索实体
│   │   ├── program.ts          # 研学项目与诊断输入
│   │   └── index.ts
│   ├── utils/                  # 通用工具函数库
│   │   ├── cn.ts               # Tailwind 类名条件合并
│   │   ├── formatters.ts       # 日期、电话、文本截断格式化
│   │   └── index.ts
│   ├── data/                   # 静态初始基础数据集 (V1)
│   └── i18n/                   # 国际化多语言本地化配置 (6种语言及词条字典)
│
└── public/                     # 静态公共资源 (由 Next.js 优化托管)
    ├── blog-covers/            # 文章封面图
    ├── experiences/            # 研学现场沉浸高清摄影图
    ├── fonts/                  # 字体文件
    └── logos/                  # 参访企业矢量 SVG 与高精度 Logo
```

---

## 三、 服务层设计与未来后台 CMS 接入指南

### 1. 服务层的核心价值
在现阶段，平台内容展示在前端；但为适应未来的管理后台（如发布新企业、编辑文章、查看客户意向），页面组件**绝不直接硬编码或硬导入数据文件**，而是统一经由 `lib/services/*`。

### 2. 演进为动态后台的代码示例 (零改动 UI 原则)

例如在 `lib/services/companyService.ts` 中，未来接入 Supabase / Headless CMS 时，只需修改方法内部的实现：

```typescript
// 当前 V1 (读取本地数据):
async getCompanies(params: CompanyFilterParams = {}): Promise<CompanyHost[]> {
  // 从本地 COMPANIES_DATA 及多语言字典过滤
  return filtered;
}

// 未来 V2 (接入 Supabase / CMS 数据库):
async getCompanies(params: CompanyFilterParams = {}): Promise<CompanyHost[]> {
  const { data, error } = await supabase
    .from('companies')
    .select('*')
    .eq('is_published', true);
    
  if (error) throw error;
  return data;
}
```

**对 UI 层的影响：0 行代码改动！** `app/companies/page.tsx` 无需做任何修改，因为它依赖的是稳定的 `CompanyService` 契约。

---

## 四、 国际化 (i18n) 设计原则

1. **6 国语言全量覆盖**：
   - 英语 (`en`)、中文 (`zh`)、德语 (`de`)、法语 (`fr`)、西班牙语 (`es`)、阿拉伯语 (`ar`)。
2. **RTL (从右到左) 自动适应**：
   - 切换为阿拉伯语时，`document.documentElement.dir` 自动切换为 `rtl`，并自动调整字体、对齐和间距。
3. **状态保持与自动收起**：
   - 多语言下拉选择器支持点击外部区域自动收起、`Escape` 键收起以及路由切换自动收起。

---

## 五、 代码开发与提交规范

1. **强类型约束**：所有对外方法与参数必须声明强类型，禁止使用 `any`。
2. **单一数据源 (Single Source of Truth)**：
   - 联系方式、邮箱、电话等全局业务常数，统一从 `lib/constants/siteConfig.ts` 导入，严禁散落硬编码。
3. **样式组织**：
   - 优先使用 `components/ui` 基础组件；
   - 复杂样式使用 `cn(...)` 工具函数组织。
