import Link from 'next/link'
import { SiteEffects, SiteFooter, SiteHeader, Sparkles } from '@/components/site-shell'

const projects = [
  {
    id: 'carbon-future',
    title: '引领碳未来',
    year: '2024',
    category: '网站设计',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-05-09%2015.58.00-2c8qHpcZvCwstaQzjdbdeaIoTHEymj.png',
    alt: '引领碳未来门户网站设计预览',
    description: '引领零碳未来，心咚科技赋能纺织服装产业“碳中和”门户网站设计。',
    tags: ['UI设计', 'Figma', '门户网站'],
  },
  {
    id: 'ecommerce-app',
    title: 'UI作品集',
    year: '2024',
    category: 'PDF作品集',
    image: '/assets/covers/zhou-zhengqiang-ui-portfolio.pdf.png',
    alt: '周政强 UI 作品集 PDF 首页封面',
    description: '支持上传 PDF 格式作品文件，项目封面自动使用 PDF 首页，方便后续直接替换更新。',
    tags: ['PDF', 'UI设计', '作品集'],
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    year: '2023',
    category: '品牌设计',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=900&fit=crop&q=80',
    alt: 'Brand Identity 品牌设计预览',
    description: '为科技公司打造的完整品牌识别系统，包括标志设计、品牌指南与视觉语言。',
    tags: ['品牌', '标志', '视觉识别'],
  },
  {
    id: 'saas-landing',
    title: 'SaaS Platform',
    year: '2023',
    category: '网页设计',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=900&fit=crop&q=80',
    alt: 'SaaS Platform 着陆页设计预览',
    description: '高转化率的 SaaS 产品着陆页设计，注重清晰的价值传递与视觉叙事。',
    tags: ['着陆页', 'Webflow', '动效'],
  },
]

export default function Home() {
  return (
    <>
      <SiteEffects />
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="reveal visible">
            <p className="eyebrow">UI设计师</p>
            <h1>
              我是一名独立的数字产品设计师，
              <span className="tone">专注于创造优雅且直观的用户体验。</span>
            </h1>
            <div className="sparkles-panel" aria-hidden="true">
              <span className="spark-line spark-line-wide" />
              <span className="spark-line spark-line-wide spark-line-sharp" />
              <span className="spark-line spark-line-short" />
              <span className="spark-line spark-line-short spark-line-sharp" />
              <Sparkles />
              <span className="sparkles-mask" />
            </div>
            <p className="hero-copy">
              专注于用户界面设计的同时，我也热衷于代码实现，相信理解技术基础能够创造出更加周全的设计方案。
            </p>
            <div className="cta-row">
              <a className="button primary rainbow-button" href="#work">
                查看作品
              </a>
              <a className="button secondary" href="#contact">
                联系我
              </a>
            </div>
          </div>
          <div className="scroll-indicator" aria-hidden="true" />
        </section>

        <section id="work" className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">精选作品</p>
              <h2>My Project</h2>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <Link className="project-card reveal" href={`/project/${project.id}`} key={project.id}>
                  <div className="project-media">
                    <img src={project.image} alt={project.alt} />
                    <span className="badge media-badge">{project.category}</span>
                    <span className="hover-pill">
                      <span>查看项目 ↗</span>
                    </span>
                  </div>
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <span className="year">{project.year}</span>
                  </div>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section alt">
          <div className="narrow two-col">
            <div className="reveal">
              <p className="eyebrow">关于</p>
              <h2 className="contact-title">About Me</h2>
              <div className="body-copy">
                <p>
                  我是一名充满热情的数字产品设计师，专注于创造既美观又实用的用户界面。我相信好的设计不仅仅是视觉上的吸引力，更是关于理解用户需求并提供直观的解决方案。
                </p>
                <p>
                  在过去的六年里，我有幸与各种规模的公司合作，从初创企业到大型科技公司。这些经历让我学会了如何在不同的约束条件下工作，同时始终保持对设计质量的追求。
                </p>
              </div>
              <div className="skills-grid">
                <div>
                  <h4>设计</h4>
                  <ul>
                    <li>UI/UX设计</li>
                    <li>设计系统</li>
                    <li>交互设计</li>
                    <li>原型设计</li>
                  </ul>
                </div>
                <div>
                  <h4>工具</h4>
                  <ul>
                    <li>Figma</li>
                    <li>Sketch</li>
                    <li>Framer</li>
                    <li>Principle</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="experience reveal">
              <h3>工作经历</h3>
              <div>
                <p className="period">2022 - 至今</p>
                <h4>高级产品设计师</h4>
                <p className="body-copy">Design Studio</p>
                <p className="body-copy">主导多个数字产品的设计工作，建立设计系统并指导初级设计师。</p>
              </div>
              <div>
                <p className="period">2020 - 2022</p>
                <h4>UI/UX设计师</h4>
                <p className="body-copy">Tech Startup</p>
                <p className="body-copy">负责产品从概念到上线的完整设计流程，与工程团队紧密合作。</p>
              </div>
              <div>
                <p className="period">2018 - 2020</p>
                <h4>视觉设计师</h4>
                <p className="body-copy">Creative Agency</p>
                <p className="body-copy">为多个品牌客户提供视觉设计服务，包括品牌识别和数字营销材料。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="figma" className="section">
          <div className="narrow">
            <div className="section-head reveal figma-head">
              <h2>设计原型</h2>
              <p className="lead">通过交互原型，探索完整的用户体验流程。</p>
            </div>
            <div className="figma-frame reveal">
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZn2lGf5nuL8xHuHfAXtSS1%2F%25E9%259B%25AA%25E8%258C%2584%25E5%2595%2586%25E5%259F%258E--Copy-%3Fnode-id%3D11-499%26viewport%3D609%252C605%252C0.18%26t%3Dtxwe3n7d48k9oZw8-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26page-id%3D11%253A497"
                allowFullScreen
                title="雪茄商城 Figma Prototype"
              />
              <span className="badge figma-label">Figma Prototype</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="narrow two-col">
            <div className="reveal">
              <p className="eyebrow">联系</p>
              <h2 className="contact-title">如果你想讨论项目或只是打个招呼，我随时欢迎交流。</h2>
              <p className="contact-cta">
                <a className="button secondary" href="mailto:4215838@qq.com">
                  联系我 ↗
                </a>
              </p>
            </div>
            <div className="contact-panel reveal">
              <div className="contact-list">
                <div>
                  <h4>邮箱</h4>
                  <p>
                    <a href="mailto:4215838@qq.com">4215838@qq.com</a>
                  </p>
                </div>
                <div>
                  <h4>电话 / 微信</h4>
                  <p>
                    <a href="tel:13111410421">13111410421</a>
                  </p>
                </div>
                <div>
                  <h4>位置</h4>
                  <p>北京</p>
                </div>
              </div>
              <img className="wechat-qr" src="/assets/images/wechat-qr.png" alt="微信二维码，微信号 13111410421" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
