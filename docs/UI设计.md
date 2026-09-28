# China AI Tour (china-ai-tour.com) 完整 UI/UX 设计规范与复刻手册

本手册基于对 `china-ai-tour.com` 线上生产环境源码、CSS 样式表、Next.js RSC Chunk、媒体资源与 DOM 结构的深度逆向分析编写，旨在为设计与前端开发团队提供百分之百还原该站点视觉风格与交互体验的指导规范。

---

## 一、 核心设计美学定位 (Design Philosophy)

该网站的设计风格定位为 **“高端商业智库 × 瑞士国际主义排版 × 纪实工业美学”**。
它彻底摒弃了普通科技网站常见的“荧光青蓝底色、发光粒子网、浮夸3D模型”等刻板印象，而是借鉴了《金融时报》(FT)、Monocle 杂志以及麦肯锡/贝恩咨询公司研究报告的审美范式：
- **纸质触感底色 (Tactile Paper Canvas)**：全局背景采用温暖舒缓的蛋壳暖纸色，取代冷白背景，营造权威与耐读感。
- **冷峻工业纪实 (Industrial Documentary)**：摄影素材全部以 86% 灰度脱色处理，展现严肃深度的科技与制造实景。
- **极致紧凑排版 (Hyper-tight Typography)**：大幅面显示字体采用负字距与超紧行高，带来极强的新闻大标题张力。
- **瑞士发丝线网格 (Swiss Hairline Grid)**：卡片间距采用 1px 细线边界分割，无圆角、无浮夸投影，讲究理性与秩序。

---

## 二、 核心设计 Token 规范 (Design Tokens)

### 1. 颜色体系 (Color Palette - "Taste Tokens")

| Token 名称 | 十六进制色值 | RGB / Alpha | 应用场景与设计意图 |
| :--- | :--- | :--- | :--- |
| `--taste-paper` | `#f4efe6` | `rgb(244, 239, 230)` | **核心主画布底色**。仿高级铜版纸与泛黄羊皮纸质感，低反光、耐阅读。 |
| `--taste-navy` | `#071f33` | `rgb(7, 31, 51)` | **深海夜空蓝**。用于首屏 Hero、深色反色区块、悬浮胶囊导航背景。 |
| `--taste-ink` | `#132a3e` | `rgb(19, 42, 62)` | **深墨蓝黑**。页面在浅色底上的正文字体颜色，比纯黑更柔和高贵。 |
| `--taste-coral` | `#de9366` | `rgb(222, 147, 102)` | **陶土珊瑚橙**。品牌核心点睛色，用于次要高光标题、CTA 重点标注、序号。 |
| `--taste-mist` | `#dce4df` | `rgb(220, 228, 223)` | **薄雾鼠尾草绿**。辅助冷色中性点缀，常用于浅色卡片微背景。 |
| `--taste-muted` | `#e6e2da` | `rgb(230, 226, 218)` | **浅灰米色**。用于背景切换时的对比色块。 |
| `--taste-rule` | `rgba(19, 42, 62, 0.16)` | `16% 不透明度的 ink` | **发丝网格线**。用于卡片间 1px 的极细分割线。 |
| `--taste-footer`| `#041522` | `rgb(4, 21, 34)` | **曜黑夜幕**。用于页脚背景，增强网页沉淀感。 |

### 2. 字体排版规范 (Typography System)

#### (1) 字体家族 (Font Families)
- **Display 标题字体**：`Cabinet Grotesk`（来自 Fontshare 的现代几何怪诞无衬线体，笔画刚劲有力，几何张力强）。
- **Sans 正文与 UI 字体**：`Lexend`（专为提升阅读速度和辨识度打造的高可读性 Google 字体）。
- **中文排版适配推荐**：`思源黑体 (Source Han Sans CN)` 或 `汉仪旗黑`，设置 `letter-spacing: -0.02em` 以保持力量感。
- **RTL 阿拉伯语适配**：`Segoe UI, Tahoma, Arial, sans-serif`。

#### (2) 标题字号阶梯 (Fluid Clamps)
网站全部采用现代 CSS 视口流式缩放函数：
- **Hero H1 主标题**：`font-size: clamp(3.2rem, 5.4vw, 5.7rem)`，行高 `line-height: 0.88`，字距 `letter-spacing: -0.055em`。
- **Section H2 二级标题**：`font-size: clamp(3.2rem, 6vw, 6.6rem)`，紧密贴合。
- **FAQ 大标题**：`font-size: clamp(4rem, 8vw, 8rem)`。
- **引用箴言 (Blockquote)**：`font-size: clamp(2rem, 3.6vw, 4rem)`，行高 `1.08`，字距 `-0.04em`。
- **眉题 / 业务小分类 (Eyebrow)**：`font-size: 0.75rem ~ 0.875rem`，全大写，字距 `letter-spacing: 0.15em`，颜色为 `--taste-coral`。

---

## 三、 招牌设计特征与微交互 (Signature UX Details)

### 1. H1 标题内的“胶囊图”嵌入技法 (Inline Heading Capsule Image)
在 Hero 主标题末尾，使用 CSS `::after` 嵌入了药丸形状的机器人展厅实景摄影：
```css
.taste-original-copy #page-hero h1:after {
  content: "";
  display: inline-block;
  width: clamp(4.5rem, 8vw, 8rem);
  height: 0.58em;
  margin-inline-start: 0.18em;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 9999px;
  background: url('/experiences/robotics-center.jpeg') center 44% / cover;
  filter: grayscale(1) contrast(1.15);
  vertical-align: 0.02em;
}
```
**设计心理学**：文字与视觉图像的打破交融，瞬间抓住高管用户注意力。

### 2. 纪实摄影的低饱和“灰度-彩色”转换 (Documentary Grayscale Filter)
所有展会、产线、飞行器、外景摄影均注入统一滤镜：
```css
/* 默认低饱和灰度质感 */
.taste-original-copy #experiences article img {
  filter: grayscale(0.86) contrast(1.1);
  transition: filter 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s ease;
}

/* 交互或激活时自然恢复生动全彩 */
.taste-original-copy #experiences article:hover img {
  filter: grayscale(0) contrast(1);
  transform: scale(1.02);
}
```

### 3. 悬浮胶囊毛玻璃导航 (Floating Glassmorphism Pill Nav)
- 导航居中固定在视口顶部 1.5rem 处，全圆角胶囊造型（`rounded-full`）。
- 样式声明：
  ```css
  header > div > div:first-child {
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 9999px;
    background: rgba(7, 31, 51, 0.86);
    backdrop-filter: blur(18px);
    box-shadow: 0 18px 55px rgba(7, 31, 51, 0.18);
  }
  ```
- 悬停动效：导航内链接 hover 颜色变为 `--taste-coral`。

### 4. 瑞士 12 列发丝线网格系统 (12-Column Hairline Grid)
不使用通常的 `margin` 或 `border` 做卡片隔断，而是将容器背景色设为发丝线颜色，通过 `gap: 1px` 自然形成网格：
```css
.swiss-grid-container {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1px;
  background-color: var(--taste-rule);
  border: 1px solid var(--taste-rule);
}
.swiss-grid-item {
  background-color: var(--taste-paper);
  border-radius: 0;
  box-shadow: none;
  min-height: 24rem;
  padding: clamp(2rem, 3.4vw, 3.5rem);
}
```

### 5. 吸顶卡片层叠推进动效 (GSAP Sticky Stacking Cards)
在 `#experiences` 模块，卡片在桌面端配置为 `position: sticky; top: 7.5rem`。配合 GSAP ScrollTrigger 实现逐层向上收纳的卡片堆叠效果：
```javascript
gsap.fromTo("#experiences article", 
  { y: 56, scale: 0.94, opacity: 0.65 }, 
  {
    y: 0,
    scale: 1,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top 96%",
      end: "top 52%",
      scrub: 0.65
    }
  }
);
```

### 6. 无限平滑跑马灯 (Dual-Speed Seamless Marquee)
合作伙伴 Logo 墙与页脚标语采用双倍内容 + CSS 硬件加速位移：
```css
@keyframes logo-marquee-reverse {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  display: flex;
  width: max-content;
  animation: logo-marquee-reverse 35s linear infinite;
}
.animate-marquee:hover {
  animation-play-state: paused; /* 鼠标移入暂停，方便查看 */
}
```

---

## 四、 页面结构模块划分 (Page Section Blueprints)

1. **`#page-hero` (首屏英雄区)**
   - 左侧：大字标题（含胶囊嵌入图）、副标题（珊瑚橙色）、核心交付标签（Market-specific curation / Bilingual guides / End-to-end logistics）、双 CTA 按钮。
   - 右侧：半透明遥测数据板（Key Facts: 周期 5-10天、团组 6-30人、全中国范围、12-16周筹备期、定制报价）。
   - 背景：多边形裁切蒙版 + 延迟检测加载的工业流水线循环静音视频。
2. **`#context` (背景与认知框架)**
   - 眉题：`GLOBAL LEADERS × CHINA · AI`。
   - 核心陈述：从 Demo 走向大规模量产（From Pilot to Production）。
   - 12列瑞士网格：5大洞察维度（监管透镜、硬件供应链、规模与成本、落地工程模式、垂直行业赋能）。
3. **`#company-network` & `#destinations` (中国AI创新版图)**
   - 六大枢纽：北京、上海、杭州、深圳、广州、苏州。
   - 跑马灯 Logo 墙：DeepSeek、智谱AI、月之暗面、MiniMax、通义千问、华为昇腾、联想、阿里巴巴、腾讯、比亚迪、宇树科技等。
4. **`#experiences` (高光实景体验)**
   - 6 大标杆卡片吸顶堆叠：
     - eVTOL 飞行汽车试乘 (亿航智能)
     - 具身智能人形与四足机器人 (宇树科技)
     - 工业 AI 视觉与智能工厂 (比亚迪/智能制造)
     - 日常科技旗舰店体验 (智能汽车/全屋智能)
     - 华强北万象硬件生态
     - 西湖龙井茶歇与复盘研讨
5. **`#program` & `#program-itinerary` (模块化 7 日研学大纲)**
   - Day 1：抵达与中国 AI 宏观政策/资本全景
   - Day 2：前沿大模型与多模态实验室 (北京/上海)
   - Day 3：超大规模云原生与数字化金融 (杭州)
   - Day 4：具身智能、人形机器人与电商物流
   - Day 5：硬件与供应链一体化落地 (深圳)
   - Day 6：低空飞行器与低空出行生态 (广州)
   - Day 7：回程前研学成果转化与企业落地战略 Playbook 梳理
6. **`#pricing` (商业模式与交付清单)**
   - 三大模式：商学院 EMBA 模块、企业高管战略考察团、政企与投资机构代表团。
   - 权益对比表：Included（包含项，绿色勾选） vs Not Included（不包含项，灰色横杠）。
7. **`#faq` (高管咨询风琴折叠问答)**
   - 原生 HTML5 `<details name="...">` 单开独占手风琴，无状态延迟。
8. **`#blog` (智库前沿内参文章)**
   - 封面卡片、专业标签、作者、时间戳。
9. **`#contact` (线索留存与企业直连)**
   - 高转化多字段意向表单，异步提交并提示。
   - 创始人直连方式（电话、微信、邮箱、领英）与上海及南非办公室实体地址。
10. **`footer` (页脚跑马灯与索引导航)**
    - 深黑色底色，横向平滑跑马灯，完整多语言切换链接与版权归属。
