import { useEffect, useRef, type RefObject } from 'react'

const ANIM_CLASSES = ['.fade-in', '.slide-in-left', '.slide-in-right', '.scale-in', '.stagger-children', '.slide-in-up', '.rotate-in', '.blur-in', '.counter-up', '.clip-reveal', '.flip-in-left', '.zoom-pop', '.slide-in-bottom']

export function useInView<T extends HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')

            // Counter animation for .counter-up elements
            if (entry.target.classList.contains('counter-up')) {
              animateCounter(entry.target)
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    const el = ref.current
    if (el) {
      const selector = ANIM_CLASSES.join(',')
      const children = el.querySelectorAll(selector)
      children.forEach((child) => observer.observe(child))
      ANIM_CLASSES.forEach((cls) => {
        if (el.classList.contains(cls.slice(1))) observer.observe(el)
      })
    }

    return () => observer.disconnect()
  }, [])

  return ref
}

function animateCounter(el: Element) {
  const target = el.getAttribute('data-count') || el.textContent || ''
  const numMatch = target.match(/[\d,]+/)
  if (!numMatch) return

  const raw = numMatch[0].replace(/,/g, '')
  const end = parseInt(raw, 10)
  if (isNaN(end)) return

  const prefix = target.slice(0, target.indexOf(numMatch[0]))
  const suffix = target.slice(target.indexOf(numMatch[0]) + numMatch[0].length)
  const useCommas = numMatch[0].includes(',')
  const duration = 1800
  const start = performance.now()

  function step(now: number) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = Math.round(eased * end)
    const formatted = useCommas ? current.toLocaleString() : String(current)
    el.textContent = prefix + formatted + suffix
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
