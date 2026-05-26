'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const socialLinks = [
  { name: 'Dribbble', href: 'https://dribbble.com' },
  { name: 'LinkedIn', href: 'https://linkedin.com' },
  { name: 'Twitter', href: 'https://twitter.com' },
  { name: 'GitHub', href: 'https://github.com' },
]

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-muted-foreground mb-2 tracking-wide uppercase">
                联系
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-balance">
                如果你想讨论项目或只是打个招呼，我随时欢迎交流。
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <motion.a
                href="mailto:4215838@qq.com"
                className="inline-flex items-center gap-2 text-lg font-medium border-b border-current pb-1 hover:text-muted-foreground transition-colors duration-300"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                联系我
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Email */}
              <div>
                <h4 className="text-sm text-muted-foreground mb-2">邮箱</h4>
                <motion.a
                  href="mailto:4215838@qq.com"
                  className="text-lg hover:text-muted-foreground transition-colors duration-300"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  4215838@qq.com
                </motion.a>
              </div>

              {/* Phone */}
              <div>
                <h4 className="text-sm text-muted-foreground mb-2">电话 / 微信</h4>
                <motion.a
                  href="tel:13111410421"
                  className="text-lg hover:text-muted-foreground transition-colors duration-300"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  13111410421
                </motion.a>
              </div>

              {/* Location */}
              <div>
                <h4 className="text-sm text-muted-foreground mb-2">位置</h4>
                <p className="text-lg">上海, 中国</p>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-sm text-muted-foreground mb-4">社交媒体</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
