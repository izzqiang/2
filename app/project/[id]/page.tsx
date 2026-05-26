import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteEffects, SiteFooter, SiteHeader } from '@/components/site-shell'

type Project = {
  title: string
  description: string
  overview: string
  category: string
  image: string
  imageAlt: string
  meta: Array<{ label: string; value: string }>
  tags: string[]
  gallery?: Array<{ image: string; alt: string }>
  figma?: { title: string; description: string; src: string }
  pdf?: { src: string; cover: string }
  action?: { label: string; href: string }
}

const projects: Record<string, Project> = {
  'carbon-future': {
    title: '引领碳未来',
    description: '引领零碳未来，心咚科技赋能纺织服装产业“碳中和”。',
    overview:
      '为心咚科技打造的碳中和门户网站，致力于引领纺织服装产业走向零碳未来。网站设计以绿色环保为核心理念，通过现代化的视觉语言展现碳中和的技术实力与行业愿景。整体设计注重信息层级清晰、用户体验流畅，同时传达出科技赋能可持续发展的品牌价值。',
    category: '网站设计',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-05-09%2015.58.00-2c8qHpcZvCwstaQzjdbdeaIoTHEymj.png',
    imageAlt: '引领碳未来门户网站截图',
    meta: [
      { label: '客户', value: '心咚科技' },
      { label: '角色', value: '首席设计师' },
      { label: '时间', value: '3 个月' },
      { label: '年份', value: '2024' },
    ],
    tags: ['UI设计', 'Figma', '门户网站', '企业官网', '碳中和'],
    figma: {
      title: '交互原型',
      description: '通过 Figma 原型直接体验完整的交互流程，了解设计细节和用户体验。',
      src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQwGkpCkqaDRICUJW3xVyOi%2F%25E5%25AE%2598%25E7%25BD%2591%25E5%258D%2587%25E7%25BA%25A7-V-2.0--Copy-%3Fnode-id%3D416-527%26viewport%3D2097%252C885%252C0.2%26t%3DsYqjUXtLHHvW2ble-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26page-id%3D416%253A525',
    },
    gallery: [
      {
        image:
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-05-09%2015.58.00-2c8qHpcZvCwstaQzjdbdeaIoTHEymj.png',
        alt: '引领碳未来项目展示图',
      },
    ],
  },
  'ecommerce-app': {
    title: 'UI作品集',
    description: '周政强 UI 设计作品集，支持直接上传 PDF 文件展示。',
    overview:
      '这里改为 PDF 作品展示模块。后续更新时，可以直接替换 assets/pdfs/zhou-zhengqiang-ui-portfolio.pdf，并重新生成或替换 assets/covers/zhou-zhengqiang-ui-portfolio.pdf.png 作为封面。',
    category: 'PDF作品集',
    image: '/assets/covers/zhou-zhengqiang-ui-portfolio.pdf.png',
    imageAlt: '周政强 UI 作品集 PDF 首页封面',
    meta: [
      { label: '文件类型', value: 'PDF' },
      { label: '角色', value: 'UI设计师' },
      { label: '经验', value: '5 年' },
      { label: '年份', value: '2024' },
    ],
    tags: ['PDF', 'UI设计', '作品集', '可更新'],
    pdf: {
      src: '/assets/pdfs/zhou-zhengqiang-ui-portfolio.pdf#view=FitH',
      cover: '/assets/covers/zhou-zhengqiang-ui-portfolio.pdf.png',
    },
    action: {
      label: '打开 PDF ↗',
      href: '/assets/pdfs/zhou-zhengqiang-ui-portfolio.pdf',
    },
  },
  'brand-identity': {
    title: 'Brand Identity',
    description: '为科技公司打造的完整品牌识别系统。',
    overview:
      '为一家人工智能科技公司打造的全方位品牌识别系统。从品牌策略、视觉识别到应用规范，我们建立了一套完整的品牌体系。设计理念融合了科技感与人文关怀，通过简洁有力的视觉语言传达品牌的创新精神。',
    category: '品牌设计',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1600&h=1000&fit=crop&q=90',
    imageAlt: 'Brand Identity 项目主图',
    meta: [
      { label: '客户', value: 'AI 科技公司' },
      { label: '角色', value: '品牌设计师' },
      { label: '时间', value: '3 个月' },
      { label: '年份', value: '2023' },
    ],
    tags: ['品牌', '标志', '视觉识别', '品牌策略'],
    gallery: [
      {
        image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=800&fit=crop&q=80',
        alt: 'Brand Identity 展示图 1',
      },
      {
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop&q=80',
        alt: 'Brand Identity 展示图 2',
      },
      {
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&q=80',
        alt: 'Brand Identity 展示图 3',
      },
    ],
  },
  'saas-landing': {
    title: 'SaaS Platform',
    description: '高转化率的 SaaS 产品着陆页设计。',
    overview:
      '为一款项目管理 SaaS 产品设计的高转化着陆页。我们通过用户研究了解目标受众的痛点，然后运用说服设计原则，创造了一个既信息丰富又引人入胜的着陆页。通过 A/B 测试不断优化，最终将注册转化率提升了 45%。',
    category: '网页设计',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=1000&fit=crop&q=90',
    imageAlt: 'SaaS Platform 项目主图',
    meta: [
      { label: '客户', value: 'SaaS 初创公司' },
      { label: '角色', value: '网页设计师' },
      { label: '时间', value: '2 个月' },
      { label: '年份', value: '2023' },
    ],
    tags: ['着陆页', 'Webflow', '动效', '转化优化'],
    action: {
      label: '访问网站 ↗',
      href: 'https://example.com',
    },
    gallery: [
      {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80',
        alt: 'SaaS Platform 展示图 1',
      },
      {
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop&q=80',
        alt: 'SaaS Platform 展示图 2',
      },
      {
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=800&fit=crop&q=80',
        alt: 'SaaS Platform 展示图 3',
      },
    ],
  },
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects[id]

  if (!project) {
    notFound()
  }

  return (
    <>
      <SiteEffects />
      <SiteHeader />
      <main>
        <section className="detail-header">
          <div className="container">
            <Link className="back-link" href="/#work">
              ← 返回作品
            </Link>
            <div className="detail-grid">
              <div className="reveal visible">
                <p className="eyebrow">{project.category}</p>
                <h1>{project.title}</h1>
                <p className="lead">{project.description}</p>
              </div>
              <div className="meta-grid reveal visible">
                {project.meta.map((item) => (
                  <div key={item.label}>
                    <p className="meta-label">{item.label}</p>
                    <p className="meta-value">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            {project.action && (
              <p className="detail-action">
                <a className="button primary" href={project.action.href} target="_blank" rel="noopener noreferrer">
                  {project.action.label}
                </a>
              </p>
            )}
          </div>
        </section>

        <section className="section detail-media-section">
          <div className="container">
            <div className="detail-hero-media reveal visible">
              <img src={project.image} alt={project.imageAlt} />
            </div>
          </div>
        </section>

        <section className="section border-top">
          <div className="container detail-grid">
            <div className="reveal">
              <h2 className="contact-title">项目概述</h2>
            </div>
            <div className="reveal">
              <p className="lead">{project.overview}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {project.figma && (
          <section className="section border-top">
            <div className="container">
              <div className="section-head reveal">
                <h2>{project.figma.title}</h2>
                <p className="lead">{project.figma.description}</p>
              </div>
              <div className="figma-frame reveal">
                <iframe src={project.figma.src} allowFullScreen title={`${project.title} Figma Prototype`} />
                <span className="badge figma-label">Figma Prototype</span>
              </div>
            </div>
          </section>
        )}

        {project.pdf && (
          <section className="section border-top">
            <div className="container">
              <div className="section-head reveal">
                <h2>PDF预览</h2>
                <p className="lead">可直接在页面中浏览 PDF；如果浏览器不支持内嵌预览，可以点击上方按钮打开文件。</p>
              </div>
              <div className="pdf-frame reveal">
                <iframe src={project.pdf.src} title="周政强 UI 作品集 PDF" />
              </div>
            </div>
          </section>
        )}

        {project.gallery && (
          <section className="section">
            <div className="container">
              <h2 className="contact-title reveal">项目展示</h2>
              <div className="gallery-stack gallery-offset">
                {project.gallery.map((item) => (
                  <div className="gallery-media reveal" key={item.alt}>
                    <img src={item.image} alt={item.alt} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section border-top next-project">
          <p className="eyebrow reveal">下一个项目</p>
          <Link className="reveal" href="/#work">
            查看更多作品
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
