import { useState, useEffect } from 'react'

const links = [
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s, border-color 0.3s',
        background: scrolled ? 'rgba(7, 12, 20, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <a
            href="#"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'var(--foreground)',
              textDecoration: 'none',
              letterSpacing: '0.04em',
            }}
          >
            <span style={{ color: 'var(--primary)' }}>{'<'}</span>
            {'DF'}
            <span style={{ color: 'var(--primary)' }}>{' />'}</span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.78rem',
                  letterSpacing: '0.1em',
                  color: 'var(--muted-foreground)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.75rem' }}>
              Hire Me
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="show-mobile"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: 'var(--foreground)',
              display: 'none',
            }}
            aria-label="Toggle menu"
          >
            <div style={{ width: 24, display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ display: 'block', height: 2, background: open ? 'var(--primary)' : 'currentColor', transition: 'background 0.2s' }} />
              <span style={{ display: 'block', height: 2, background: open ? 'var(--primary)' : 'currentColor', transition: 'background 0.2s' }} />
              <span style={{ display: 'block', height: 2, background: open ? 'var(--primary)' : 'currentColor', transition: 'background 0.2s' }} />
            </div>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div style={{
            borderTop: '1px solid var(--border)',
            paddingBottom: '1rem',
          }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.75rem 0',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.82rem',
                  letterSpacing: '0.1em',
                  color: 'var(--muted-foreground)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
