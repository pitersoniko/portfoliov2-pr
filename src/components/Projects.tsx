import { useState } from "react";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  tags: string[];
  accent: string;
  image: string;
  status: "Released" | "In Development" | "Research" | "Unreleased" | "Finished";
  links: { label: string; href: string }[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "synclabel",
    title: "SyncLabel",
    subtitle: "Semi-supervised CV Annotation Pipeline",
    description:
      "Automated video annotation system eliminating the bottleneck of manual labeling in computer vision datasets. Built for research-grade throughput on constrained annotation budgets.",
    problem:
      "Solved the manual labeling bottleneck in CV pipelines by combining object detection with temporal tracking — cutting dataset preparation time by ~70% through semi-supervised propagation.",
    tags: [
      "Python",
      "YOLOv8",
      "RT-DETR",
      "OpenCV",
      "Computer Vision",
    ],
    accent: "#f97316",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=720&h=420&fit=crop&auto=format",
    status: "Research",
    featured: true,
    links: [{ label: "GitHub", href: "https://github.com/pitersoniko/ProjetoFinalLEI" }],
  },
  {
    id: "tuvr",
    title: "TUVR",
    subtitle: "Inteligent Urban Mobility",
    description:
      "A modern mobile application developed to revolutionize how users interact with public transit. This app operates as a digital wallet and native ticket validation system, effectively replacing traditional physical transit passes.",
    problem:
      "Engineered to solve critical public transit inefficiencies, the application streamlines the daily commute by eradicating ticketing queues and the reliance on physical currency, offering users a seamless, fully digital payment flow.",
    tags: [
      "React Native",
      "React Navigation",
      "SupaBase",
      "Node.js"
    ],
    accent: "#00d9a6",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=720&h=420&fit=crop&auto=format",
    status: "In Development",
    links: [{ label: "GitHub", href: "https://github.com/pitersoniko/TUVR_App" }],
  },
  {
    id: "android-inesc",
    title: "INESC TEC Android - External Student",
    subtitle: "Codebase Modernization & Architecture Refactor",
    description:
      "End-to-end refactoring of a production research application. Migrated from legacy Java patterns to idiomatic Kotlin + Jetpack Compose, resolving years of accumulated technical debt.",
    problem:
      "Eliminated critical technical debt blocking feature development: restructured the data layer to repository pattern, introduced Coroutines for async operations, and established a testable MVVM baseline.",
    tags: [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Coroutines",
      "Room DB",
    ],
    accent: "#a97bff",
    image:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=720&h=420&fit=crop&auto=format",
    status: "Finished",
    links: [{ label: "INESCTEC", href: "https://www.inesctec.pt/pt/pessoas/pedro-antonio-rodrigues" }],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" style={{ padding: "6rem 0" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <div style={{ marginBottom: "3.5rem" }}>
          <p
            className="section-label"
            style={{ marginBottom: "0.75rem" }}
          >
            // 004 — Projects
          </p>
          <h2
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Selected Work
          </h2>
          <p
            style={{
              color: "var(--muted-foreground)",
              marginTop: "0.75rem",
              maxWidth: 480,
              lineHeight: 1.6,
            }}
          >
            Each project addresses a specific engineering
            problem. Click any card for the full breakdown.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {projects.map((project) => {
            const isExpanded = expanded === project.id;
            return (
              <div
                key={project.id}
                className="card-hover"
                style={{
                  background: "var(--card)",
                  border: `1px solid ${isExpanded ? project.accent + "40" : "var(--border)"}`,
                  borderRadius: 8,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition:
                    "border-color 0.25s ease, box-shadow 0.25s ease",
                  boxShadow: isExpanded
                    ? `0 0 40px ${project.accent}10`
                    : "none",
                }}
                onClick={() =>
                  setExpanded(isExpanded ? null : project.id)
                }
              >
                {/* Card header */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "1.5rem",
                    padding: "2rem",
                    alignItems: "start",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginBottom: "0.75rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono'",
                          fontSize: "0.6rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: project.accent,
                          background: `${project.accent}15`,
                          border: `1px solid ${project.accent}30`,
                          padding: "0.2rem 0.6rem",
                          borderRadius: 4,
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Exo 2'",
                        fontWeight: 700,
                        fontSize: "1.3rem",
                        marginBottom: "0.35rem",
                        color: "var(--foreground)",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter'",
                        fontSize: "0.9rem",
                        color: "var(--muted-foreground)",
                        marginBottom: "1rem",
                      }}
                    >
                      {project.subtitle}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter'",
                        fontSize: "0.9rem",
                        color: "rgba(238,242,255,0.65)",
                        lineHeight: 1.7,
                      }}
                    >
                      {project.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.45rem",
                        marginTop: "1.25rem",
                      }}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "'JetBrains Mono'",
                            fontSize: "0.65rem",
                            letterSpacing: "0.06em",
                            padding: "0.2rem 0.55rem",
                            borderRadius: 4,
                            background:
                              "rgba(255,255,255,0.04)",
                            border: "1px solid var(--border)",
                            color: "var(--muted-foreground)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Thumbnail */}
                  <div
                    style={{
                      width: 200,
                      height: 130,
                      borderRadius: 6,
                      overflow: "hidden",
                      background: "#0d1525",
                      flexShrink: 0,
                      position: "relative",
                    }}
                    className="project-thumb"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: 0.7,
                        transition: "opacity 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        ((
                          e.currentTarget as HTMLImageElement
                        ).style.opacity = "1")
                      }
                      onMouseLeave={(e) =>
                        ((
                          e.currentTarget as HTMLImageElement
                        ).style.opacity = "0.7")
                      }
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(135deg, ${project.accent}20 0%, transparent 60%)`,
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Expanded detail */}
                {isExpanded && (
                  <div
                    style={{
                      borderTop: `1px solid ${project.accent}25`,
                      padding: "1.75rem 2rem",
                      background: `${project.accent}05`,
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        gap: "2rem",
                        alignItems: "start",
                      }}
                    >
                      <div>
                        <h4
                          style={{
                            fontFamily: "'JetBrains Mono'",
                            fontSize: "0.65rem",
                            letterSpacing: "0.14em",
                            color: project.accent,
                            textTransform: "uppercase",
                            marginBottom: "0.6rem",
                          }}
                        >
                          Engineering Problem Solved
                        </h4>
                        <p
                          style={{
                            fontSize: "0.9rem",
                            color: "rgba(238,242,255,0.7)",
                            lineHeight: 1.75,
                          }}
                        >
                          {project.problem}
                        </p>
                      </div>

                      {project.links.length > 0 && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                            flexShrink: 0,
                          }}
                        >
                          {project.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              className="btn-outline"
                              style={{
                                fontSize: "0.75rem",
                                padding: "0.5rem 1rem",
                              }}
                              onClick={(e) =>
                                e.stopPropagation()
                              }
                            >
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                              </svg>
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Expand toggle indicator */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "0.75rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                      transform: isExpanded
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      opacity: 0.4,
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .project-thumb { display: none !important; }
        }
      `}</style>
    </section>
  );
}