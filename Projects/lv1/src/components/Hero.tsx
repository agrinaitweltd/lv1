import { useState, useEffect, useRef } from 'react'
import './Hero.css'

const phrases = ['Spotless', 'Transformed', 'Like New']

const stats = [
  { end: 50, suffix: '+', label: 'HAPPY CUSTOMERS' },
  { end: 100, suffix: '%', label: 'SATISFACTION' },
  { end: 5, suffix: '★', label: 'STAR RATED' },
]

function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }
    rafRef.current = requestAnimationFrame(step)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [end, duration, start])

  return count
}

function AnimatedStat({ end, suffix, label, delay }: { end: number; suffix: string; label: string; delay: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setVisible(true), delay); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const count = useCountUp(end, 2000, visible)

  return (
    <div className="hero__stat" ref={ref} style={{ animationDelay: `${1.2 + delay / 1000}s` }}>
      <span className="hero__stat-value">{count}{suffix}</span>
      <span className="hero__stat-label">{label}</span>
    </div>
  )
}

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const phraseIdx = useRef(0)
  const pauseRef = useRef(false)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.2}px, 0)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const current = phrases[phraseIdx.current]
    if (pauseRef.current) return
    let delay: number
    if (!isDeleting) {
      if (displayText.length < current.length) {
        delay = 80 + Math.random() * 60
      } else {
        pauseRef.current = true
        const t = setTimeout(() => { pauseRef.current = false; setIsDeleting(true) }, 2200)
        return () => clearTimeout(t)
      }
    } else {
      if (displayText.length > 0) {
        delay = 35 + Math.random() * 20
      } else {
        setIsDeleting(false)
        phraseIdx.current = (phraseIdx.current + 1) % phrases.length
        return
      }
    }
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1))
      } else {
        setDisplayText(current.slice(0, displayText.length - 1))
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="top">
      <div className="hero__bg" ref={bgRef}>
        <div className="hero__bg-gradient" aria-hidden="true" />
        <div className="hero__orb hero__orb--one" aria-hidden="true" />
        <div className="hero__orb hero__orb--two" aria-hidden="true" />
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__overlay" />
      </div>
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__slogan">Teenage Owned Business</p>
          <h1 className="hero__title">
            LV Exterior{' '}
            <span className="hero__typed">
              {displayText}
              <span className="hero__cursor" />
            </span>
          </h1>
          <p className="hero__subtitle">
            Professional exterior cleaning at unbeatable prices. Driveways, patios, fences &amp; bins — we bring the shine back to your property.
          </p>
          <div className="hero__buttons">
            <a href="#contact" className="btn hero__btn-quote" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}>
              Get a Free Quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#services" className="btn hero__btn-services" onClick={(e) => { e.preventDefault(); scrollTo('#services') }}>
              OUR SERVICES
            </a>
          </div>
          <div className="hero__trust-row">
            <div className="hero__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Teenage Owned</span>
            </div>
            <div className="hero__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Affordable Prices</span>
            </div>
            <div className="hero__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Free Quotes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__stats">
        <div className="container hero__stats-inner">
          {stats.map((s, i) => (
            <AnimatedStat key={s.label} end={s.end} suffix={s.suffix} label={s.label} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}
