'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  description: string
  category: string
  year: string
  tags: string[]
  image: string
  color: string
}

const projects: Project[] = [
  {
    id: 'carbon-future',
    title: '引领碳未来',
    description: '引领零碳未来，心咚科技赋能纺织服装产业"碳中和"门户网站设计',
    category: '网站设计',
    year: '2024',
    tags: ['UI设计', 'Figma', '门户网站'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-05-09%2015.58.00-2c8qHpcZvCwstaQzjdbdeaIoTHEymj.png',
    color: '#7C3AED',
  },
  {
    id: 'ecommerce-app',
    title: 'E-Commerce App',
    description: '简约风格的电商移动应用，专注于无缝的购物体验与直觉性的交互设计',
    category: '移动应用',
    year: '2024',
    tags: ['移动端', 'iOS', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=1200&h=900&fit=crop&q=80',
    color: '#30D158',
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: '为科技公司打造的完整品牌识别系统，包括标志设计、品牌指南与视觉语言',
    category: '品牌设计',
    year: '2023',
    tags: ['品牌', '标志', '视觉识别'],
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=900&fit=crop&q=80',
    color: '#FF375F',
  },
  {
    id: 'saas-landing',
    title: 'SaaS Platform',
    description: '高转化率的SaaS产品着陆页设计，注重清晰的价值传递与视觉叙事',
    category: '网页设计',
    year: '2023',
    tags: ['着陆页', 'Webflow', '动效'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=900&fit=crop&q=80',
    color: '#BF5AF2',
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="work" className="py-40 md:py-56">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 md:mb-32"
        >
          <motion.p 
            className="text-sm md:text-base text-muted-foreground mb-4 tracking-widest uppercase font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            精选作品
          </motion.p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-balance">
            Recent Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Link href={`/project/${project.id}`}>
                <article
                  className="group relative"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:rounded-3xl bg-secondary mb-6 lg:mb-8">
                    {/* Image */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        scale: hoveredId === project.id ? 1.08 : 1,
                      }}
                      transition={{ 
                        duration: 0.7, 
                        ease: [0.25, 0.46, 0.45, 0.94] 
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Gradient Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredId === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Category Badge */}
                    <div className="absolute top-5 left-5">
                      <motion.span 
                        className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-background/90 backdrop-blur-md text-foreground"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        {project.category}
                      </motion.span>
                    </div>

                    {/* View Project Button */}
                    <AnimatePresence>
                      {hoveredId === project.id && (
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-medium text-sm shadow-2xl"
                            initial={{ scale: 0.8, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 20 }}
                            transition={{ 
                              duration: 0.4, 
                              ease: [0.25, 0.46, 0.45, 0.94] 
                            }}
                          >
                            <span>查看项目</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Corner Arrow */}
                    <motion.div
                      className="absolute bottom-5 right-5"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{
                        opacity: hoveredId === project.id ? 1 : 0,
                        scale: hoveredId === project.id ? 1 : 0.5,
                        rotate: hoveredId === project.id ? 0 : -45,
                      }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                        <ArrowUpRight className="w-5 h-5 text-black" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    {/* Title Row */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-muted-foreground transition-colors duration-500">
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted-foreground font-medium mt-2 shrink-0">
                        {project.year}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 bg-secondary/80 rounded-full text-secondary-foreground font-medium transition-colors duration-300 hover:bg-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20 md:mt-32"
        >
          <Link 
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 text-base font-medium rounded-full border border-border hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-500"
          >
            <span>查看全部作品</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
