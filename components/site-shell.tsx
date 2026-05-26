'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/">
          zzqiang·Personal Website
        </Link>
        <nav className="desktop-nav" aria-label="主导航">
          <Link href="/#work">作品</Link>
          <Link href="/#about">关于</Link>
          <Link href="/#contact">联系</Link>
        </nav>
        <div className="nav-actions">
          <button className="icon-button" type="button" data-theme-toggle aria-label="切换主题">
            ☾
          </button>
          <button
            className="icon-button mobile-menu-toggle"
            type="button"
            data-mobile-toggle
            aria-label="打开菜单"
            aria-expanded="false"
          >
            ☰
          </button>
        </div>
      </div>
      <nav className="mobile-nav" data-mobile-nav aria-label="移动导航">
        <Link href="/#work">作品</Link>
        <Link href="/#about">关于</Link>
        <Link href="/#contact">联系</Link>
      </nav>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© 2026 zzqiang·Personal Website. 保留所有权利。</span>
        <span className="footer-links">
          <a href="#">隐私政策</a>
          <a href="#">使用条款</a>
        </span>
      </div>
    </footer>
  )
}

export function SiteEffects() {
  useEffect(() => {
    const root = document.documentElement
    const header = document.querySelector('.site-header')
    const themeToggle = document.querySelector('[data-theme-toggle]')
    const mobileToggle = document.querySelector('[data-mobile-toggle]')
    const mobileNav = document.querySelector('[data-mobile-nav]')

    let savedTheme: string | null = null
    try {
      savedTheme = localStorage.getItem('theme')
    } catch {
      savedTheme = null
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      root.classList.add('dark')
    }

    const updateThemeIcon = () => {
      if (themeToggle) {
        themeToggle.textContent = root.classList.contains('dark') ? '☀' : '☾'
      }
    }

    const saveTheme = (value: string) => {
      try {
        localStorage.setItem('theme', value)
      } catch {
        // localStorage can be unavailable in some preview modes.
      }
    }

    const onThemeClick = () => {
      root.classList.toggle('dark')
      saveTheme(root.classList.contains('dark') ? 'dark' : 'light')
      updateThemeIcon()
    }

    const onMobileClick = () => {
      const isOpen = mobileNav?.classList.toggle('open')
      if (mobileToggle) {
        mobileToggle.textContent = isOpen ? '×' : '☰'
        mobileToggle.setAttribute('aria-expanded', String(Boolean(isOpen)))
      }
    }

    const closeMobile = () => {
      mobileNav?.classList.remove('open')
      if (mobileToggle) {
        mobileToggle.textContent = '☰'
        mobileToggle.setAttribute('aria-expanded', 'false')
      }
    }

    const onScroll = () => {
      header?.classList.toggle('scrolled', window.scrollY > 20)
    }

    updateThemeIcon()
    themeToggle?.addEventListener('click', onThemeClick)
    mobileToggle?.addEventListener('click', onMobileClick)
    mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMobile))
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    document.querySelectorAll('.reveal').forEach((node) => observer.observe(node))

    return () => {
      themeToggle?.removeEventListener('click', onThemeClick)
      mobileToggle?.removeEventListener('click', onMobileClick)
      mobileNav?.querySelectorAll('a').forEach((link) => link.removeEventListener('click', closeMobile))
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return null
}

export function Sparkles() {
  useEffect(() => {
    const root = document.documentElement
    const canvas = document.querySelector('[data-sparkles]')
    if (!(canvas instanceof HTMLCanvasElement)) return

    const context = canvas.getContext('2d')
    if (!context) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const particles: Array<{
      x: number
      y: number
      radius: number
      alpha: number
      speed: number
      phase: number
    }> = []
    let animationFrame = 0
    let width = 0
    let height = 0
    let pixelRatio = 1

    const particleColor = () => (root.classList.contains('dark') ? '#ffffff' : '#000000')

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      width = Math.max(1, rect.width)
      height = Math.max(1, rect.height)
      canvas.width = Math.floor(width * pixelRatio)
      canvas.height = Math.floor(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

      const density = window.innerWidth < 640 ? 120 : 220
      particles.length = 0
      for (let index = 0; index < density; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 0.35 + Math.random() * 1.1,
          alpha: 0.18 + Math.random() * 0.6,
          speed: 0.12 + Math.random() * 0.28,
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      const color = particleColor()
      particles.forEach((particle) => {
        particle.phase += 0.025
        particle.y -= particle.speed
        particle.x += Math.sin(particle.phase) * 0.12
        if (particle.y < -8) {
          particle.y = height + 8
          particle.x = Math.random() * width
        }

        context.globalAlpha = particle.alpha * (0.55 + Math.sin(particle.phase) * 0.35)
        context.fillStyle = color
        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fill()
      })
      context.globalAlpha = 1

      if (!prefersReducedMotion) {
        animationFrame = requestAnimationFrame(draw)
      }
    }

    resize()
    draw()
    window.addEventListener('resize', resize, { passive: true })

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas className="sparkles-canvas" data-sparkles />
}
