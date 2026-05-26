'use client'

import { motion } from 'framer-motion'
import { Figma, Maximize2 } from 'lucide-react'
import { useState } from 'react'

interface FigmaEmbedProps {
  url: string
  title?: string
  aspectRatio?: 'video' | 'square' | 'portrait'
}

export function FigmaEmbed({ 
  url, 
  title = 'Figma Prototype',
  aspectRatio = 'video'
}: FigmaEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Convert Figma URL to embed URL
  const getEmbedUrl = (originalUrl: string) => {
    // If already an embed URL, return as is
    if (originalUrl.includes('/embed')) {
      return originalUrl
    }
    
    // For prototype URLs, we need to use the embed format
    // Figma embed URL format: https://www.figma.com/embed?embed_host=share&url=<url>
    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(originalUrl)}`
  }

  const embedUrl = getEmbedUrl(url)

  const aspectRatioClass = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[9/16]'
  }[aspectRatio]

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true }}
        className="w-full"
      >
        <div className={`relative ${aspectRatioClass} w-full rounded-2xl lg:rounded-3xl overflow-hidden bg-secondary border border-border group`}>
          {/* Loading State */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-secondary">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-background/80 flex items-center justify-center">
                  <Figma className="w-6 h-6 text-foreground animate-pulse" />
                </div>
                <p className="text-sm text-muted-foreground">加载 Figma 原型中...</p>
              </div>
            </div>
          )}
          
          {/* Iframe */}
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full"
            allowFullScreen
            allow="fullscreen"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            style={{ border: 'none' }}
          />

          {/* Fullscreen Button */}
          <button
            onClick={() => setIsFullscreen(true)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
            aria-label="全屏查看"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Figma Badge */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Figma className="w-3.5 h-3.5" />
            <span>Figma Prototype</span>
          </div>
        </div>
      </motion.div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          onClick={() => setIsFullscreen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full max-w-[1800px] rounded-2xl overflow-hidden border border-border bg-secondary"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={embedUrl}
              title={title}
              className="w-full h-full"
              allowFullScreen
              allow="fullscreen"
              style={{ border: 'none' }}
            />
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="关闭全屏"
            >
              <span className="text-xl leading-none">&times;</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

// FigmaShowcase component for homepage
export function FigmaShowcase() {
  return (
    <section id="figma" className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            设计原型
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            通过交互原型，探索完整的用户体验流程
          </p>
        </motion.div>

        <FigmaEmbed 
          url="https://www.figma.com/proto/Zn2lGf5nuL8xHuHfAXtSS1/%E9%9B%AA%E8%8C%84%E5%95%86%E5%9F%8E--Copy-?node-id=11-499&viewport=609%2C605%2C0.18&t=txwe3n7d48k9oZw8-1&scaling=min-zoom&content-scaling=fixed&page-id=11%3A497"
          title="雪茄商城 - Figma Prototype"
        />
      </div>
    </section>
  )
}
