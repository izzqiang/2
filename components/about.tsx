'use client'

import { motion } from 'framer-motion'

const skills = [
  { category: '设计', items: ['UI/UX设计', '设计系统', '交互设计', '原型设计'] },
  { category: '工具', items: ['Figma', 'Sketch', 'Framer', 'Principle'] },
  { category: '开发', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
]

const experience = [
  {
    period: '2022 — 至今',
    role: '高级产品设计师',
    company: 'Design Studio',
    description: '主导多个数字产品的设计工作，建立设计系统并指导初级设计师。',
  },
  {
    period: '2020 — 2022',
    role: 'UI/UX设计师',
    company: 'Tech Startup',
    description: '负责产品从概念到上线的完整设计流程，与工程团队紧密合作。',
  },
  {
    period: '2018 — 2020',
    role: '视觉设计师',
    company: 'Creative Agency',
    description: '为多个品牌客户提供视觉设计服务，包括品牌识别和数字营销材料。',
  },
]

export function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Intro */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-muted-foreground mb-2 tracking-wide uppercase">
                关于
              </p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
                About Me
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <p>
                我是一名充满热情的数字产品设计师，专注于创造既美观又实用的用户界面。
                我相信好的设计不仅仅是视觉上的吸引力，更是关于理解用户需求并提供直观的解决方案。
              </p>
              <p>
                在过去的六年里，我有幸与各种规模的公司合作，从初创企业到大型科技公司。
                这些经历让我学会了如何在不同的约束条件下工作，同时始终保持对设计质量的追求。
              </p>
              <p>
                除了设计工作，我也热衷于编写代码。我相信理解技术实现能够帮助我设计出更加可行且优雅的解决方案。
                我经常使用 React 和 Next.js 来构建交互原型和个人项目。
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              {skills.map((skill, index) => (
                <div key={skill.category}>
                  <h4 className="text-sm font-medium mb-3 text-foreground">
                    {skill.category}
                  </h4>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium mb-8 tracking-tight">工作经历</h3>
              
              <div className="space-y-10">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.period}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <p className="text-sm text-muted-foreground mb-2">
                      {exp.period}
                    </p>
                    <h4 className="text-lg font-medium mb-1 group-hover:text-muted-foreground transition-colors duration-300">
                      {exp.role}
                    </h4>
                    <p className="text-muted-foreground mb-3">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
