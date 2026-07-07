import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Array<{ x: number; y: number; vx: number; vy: number; alpha: number }> = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 217, 166, ${p.alpha})`
        ctx.fill()
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 217, 166, ${0.06 * (1 - dist / 120)})`
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
      className="grid-noise"
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />

      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,217,166,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        <div style={{ paddingTop: 100, paddingBottom: 80 }}>
          <p className="section-label" style={{ marginBottom: '1.5rem' }}>
            // Portfolio — 2025
          </p>

          <h1
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
              maxWidth: 820,
            }}
          >
            Computer Engineering
            <br />
            <span style={{ color: 'var(--primary)' }} className="accent-glow">
              Student & Programmer
            </span>
            <br />
            <span style={{ fontWeight: 300, fontSize: '0.7em', color: 'rgba(238,242,255,0.6)', letterSpacing: 0 }}>
              Former INESCTEC External Student, Certified at Kotlin development by Media XLAB
            </span>
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: 'rgba(238,242,255,0.6)',
              maxWidth: 560,
              marginBottom: '2.5rem',
            }}
          >
            Final-year Computer Engineering student building production-grade mobile applications and
            real-time computer vision systems. Specializing in Android development,
            semi-supervised ML pipelines, and 3D interactive experiences.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              View Projects
            </a>
            <a
              href="/Pedro-Rodrigues-CV.pdf"
              download="Pedro-Rodrigues-CV.pdf"
              className="btn-outline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              Download CV
            </a>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              gap: '3rem',
              marginTop: '4rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border)',
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '6+', label: 'Months at INESC TEC' },
              { value: '5+', label: 'Tech Stacks Mastered' },
              { value: '3', label: 'Major Projects' },
            ].map(stat => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    fontWeight: 700,
                    fontSize: '2rem',
                    color: 'var(--primary)',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    color: 'var(--muted-foreground)',
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: 32,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        opacity: 0.4,
      }}>
        <span style={{ fontFamily: "'JetBrains Mono'", fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: 1,
          height: 40,
          background: 'linear-gradient(to bottom, var(--primary), transparent)',
          animation: 'pulse 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  )
}
