export default function Contact() {
  return (
    <footer
      id="contact"
      style={{
        background: "var(--muted)",
        borderTop: "1px solid var(--border)",
        padding: "5rem 0 3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent glow */}
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 200,
          background:
            "radial-gradient(ellipse, rgba(0,217,166,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
        }}
      >
        {/* CTA block */}
        <div
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p
            className="section-label"
            style={{ marginBottom: "1rem" }}
          >
            // 005 — Contact
          </p>
          <h2
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
              lineHeight: 1.1,
            }}
          >
            Let's Build Something
            <br />
            <span style={{ color: "var(--primary)" }}>
              Together.
            </span>
          </h2>
          <p
            style={{
              color: "var(--muted-foreground)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: 440,
              margin: "0 auto 2rem",
            }}
          >
            Open to roles in Android development, mobile
            engineering, and applied computer vision research.
            Especially interested in positions bridging mobile
            and ML.
          </p>

          <a
            href="mailto:hello@example.com"
            className="btn-primary"
            style={{
              fontSize: "0.9rem",
              padding: "0.875rem 2rem",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Get In Touch
          </a>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "2.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            {/* Brand */}
            <div>
              <div
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  marginBottom: "0.35rem",
                }}
              >
                <span style={{ color: "var(--primary)" }}>
                  {"<"}
                </span>
                {"DF"}
                <span style={{ color: "var(--primary)" }}>
                  {" />"}
                </span>
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono'",
                  fontSize: "0.65rem",
                  color: "var(--muted-foreground)",
                  letterSpacing: "0.08em",
                }}
              >
                Computer Engineering · Former INESC TEC External Student · Porto
              </div>
            </div>

            {/* Social links */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                alignItems: "center",
              }}
            >
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/pedroasrodrigues/",
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: "GitHub",
                  href: "https://github.com/pitersoniko",
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 8,
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--muted-foreground)",
                    textDecoration: "none",
                    transition:
                      "color 0.2s, border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el =
                      e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--primary)";
                    el.style.borderColor =
                      "rgba(0,217,166,0.3)";
                    el.style.background =
                      "rgba(0,217,166,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    const el =
                      e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--muted-foreground)";
                    el.style.borderColor = "var(--border)";
                    el.style.background = "var(--card)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div
              style={{
                fontFamily: "'JetBrains Mono'",
                fontSize: "0.65rem",
                color: "var(--muted-foreground)",
                letterSpacing: "0.06em",
              }}
            >
              © 2025 — Built with React + Vite
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}