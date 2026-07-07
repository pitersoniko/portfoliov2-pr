type Skill = {
  name: string
  category: string
  level: number
  color: string
  icon: string
}

const skills: Skill[] = [
  { name: 'Kotlin', category: 'Android Dev', level: 90, color: '#a97bff', icon: 'K' },
  { name: 'Python', category: 'ML / Scripting', level: 85, color: '#4ec9b0', icon: 'Py' },
  { name: 'React Native', category: 'Cross-platform', level: 78, color: '#61dafb', icon: 'RN' },
  { name: 'Flutter', category: 'Cross-platform', level: 72, color: '#54c5f8', icon: 'Fl' },
  { name: 'Three.js / WebGL', category: '3D Graphics', level: 70, color: '#00d9a6', icon: '3D' },
  { name: 'Android SDK', category: 'Mobile', level: 88, color: '#a97bff', icon: 'AS' },
  { name: 'YOLOv8 / RT-DETR', category: 'Computer Vision', level: 75, color: '#f97316', icon: 'CV' },
  { name: 'Jetpack Compose', category: 'UI Framework', level: 80, color: '#4ec9b0', icon: 'JC' },
]

export default function TechStack() {
  return (
    <section id="stack" style={{ padding: '6rem 0', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ marginBottom: '3.5rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>// 002 — Technical Stack</p>
          <h2
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
            }}
          >
            Core Technologies
          </h2>
          <p style={{ color: 'var(--muted-foreground)', marginTop: '0.75rem', maxWidth: 480, lineHeight: 1.6 }}>
            Production-tested stack across mobile, computer vision, and real-time 3D.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="card-hover"
              style={{
                background: 'var(--card)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                cursor: 'default',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.65rem',
                      letterSpacing: '0.12em',
                      color: 'var(--muted-foreground)',
                      textTransform: 'uppercase',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {skill.category}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      fontWeight: 600,
                      fontSize: '1.05rem',
                      color: 'var(--foreground)',
                    }}
                  >
                    {skill.name}
                  </div>
                </div>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 6,
                    background: `${skill.color}18`,
                    border: `1px solid ${skill.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Exo 2', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.7rem',
                    color: skill.color,
                    letterSpacing: '0.05em',
                    flexShrink: 0,
                  }}
                >
                  {skill.icon}
                </div>
              </div>

              {/* Progress bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ fontFamily: "'JetBrains Mono'", fontSize: '0.65rem', color: 'var(--muted-foreground)' }}>Proficiency</span>
                  <span style={{ fontFamily: "'JetBrains Mono'", fontSize: '0.65rem', color: skill.color }}>{skill.level}%</span>
                </div>
                <div style={{ height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                      borderRadius: 2,
                      transition: 'width 0.8s ease',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
