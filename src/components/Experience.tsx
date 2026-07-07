export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 0', background: 'var(--muted)', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ marginBottom: '3.5rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>// 003 — Experience & Certifications</p>
          <h2
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              letterSpacing: '-0.01em',
            }}
          >
            Professional Highlights
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.5rem',
            alignItems: 'start',
          }}
        >
          {/* INESC TEC Experience */}
          <div
            className="card-hover"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '2rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 8,
                  background: 'rgba(0,217,166,0.1)',
                  border: '1px solid rgba(0,217,166,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.8">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Exo 2'", fontWeight: 700, fontSize: '1.05rem' }}>Programmer</div>
                <div style={{ fontFamily: "'JetBrains Mono'", fontSize: '0.7rem', color: 'var(--primary)', letterSpacing: '0.08em' }}>INESC TEC — Porto, Portugal</div>
              </div>
              <div style={{ marginLeft: 'auto', fontFamily: "'JetBrains Mono'", fontSize: '0.65rem', color: 'var(--muted-foreground)', whiteSpace: 'nowrap' }}>2023 — Present</div>
            </div>

            <h3 style={{ fontFamily: "'Exo 2'", fontWeight: 600, fontSize: '1rem', marginBottom: '0.75rem' }}>
              Android Project 2.0 — Technical Refactoring
            </h3>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Led the elimination of accumulated technical debt in a production Android application,
              migrating legacy code to modern Kotlin patterns and Jetpack Compose. Reduced codebase
              complexity by restructuring the architecture to MVVM, enabling maintainability for the
              ongoing research pipeline.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Kotlin', 'Jetpack Compose', 'MVVM', 'Android SDK', 'Git'].map(tag => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'JetBrains Mono'",
                    fontSize: '0.65rem',
                    letterSpacing: '0.06em',
                    padding: '0.25rem 0.6rem',
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right column: Certification + Education */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Certification — highlighted */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(0,217,166,0.08) 0%, rgba(0,217,166,0.02) 100%)',
                border: '1px solid rgba(0,217,166,0.25)',
                borderRadius: 8,
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 120,
                  height: 120,
                  background: 'radial-gradient(circle, rgba(0,217,166,0.12) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 6,
                    background: 'rgba(0,217,166,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono'",
                    fontSize: '0.6rem',
                    letterSpacing: '0.14em',
                    color: 'var(--primary)',
                    textTransform: 'uppercase',
                    background: 'rgba(0,217,166,0.1)',
                    border: '1px solid rgba(0,217,166,0.2)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 4,
                  }}
                >
                  Certified
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'Exo 2'",
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  marginBottom: '0.5rem',
                  lineHeight: 1.3,
                }}
              >
                Android Development with Kotlin
              </h3>
              <div
                style={{
                  fontFamily: "'JetBrains Mono'",
                  fontSize: '0.7rem',
                  color: 'var(--primary)',
                  letterSpacing: '0.08em',
                  marginBottom: '0.75rem',
                }}
              >
                Media XLab
              </div>
              <p style={{ color: 'var(--muted-foreground)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                Validated expertise in Kotlin for Android platform development — covering coroutines,
                Jetpack libraries, architecture patterns, and production deployment practices.
              </p>
            </div>

            {/* Education */}
            <div
              className="card-hover"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: '1.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 7,
                    background: 'rgba(99,102,241,0.12)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.8">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "'Exo 2'", fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>
                    BSc Computer Engineering
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono'", fontSize: '0.7rem', color: '#6366f1', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>
                    Instituto Politécnico — Final Year
                  </div>
                  <p style={{ color: 'var(--muted-foreground)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    Focus on Mobile Systems, Computer Graphics, and Machine Learning pipelines.
                    Applied research track alongside INESC TEC placement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
