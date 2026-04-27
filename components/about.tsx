'use client';

import { useState } from 'react';
import * as Icon from './icons';

function WhatCard({ n, icon, title, desc }: { n: string; icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="what-card">
      <span className="what-num">{n}</span>
      <div className="what-icon">{icon}</div>
      <h3 className="what-title">{title}</h3>
      <p className="what-desc">{desc}</p>
    </div>
  );
}

export default function About() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText('andemohit@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch { /* silent */ }
  };

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <div className="section-head-left">
            <div className="label-mono">{'// about'}</div>
            <h2 className="h-section">About me.</h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-prose">
            <p>
              I&apos;m a software developer who loves building web and mobile applications that
              impact millions of lives. Currently at <strong>ValueLabs</strong> in Hyderabad,
              shipping production web apps with React, TypeScript, and Next.js.
            </p>
            <p>
              I started coding at 19 — worked through a startup, 50+ freelance projects, four
              years at Adobe on enterprise-scale e-commerce, and now ValueLabs. I write code that
              performs and design interfaces that people actually enjoy using.
            </p>
            <p>
              Outside work I&apos;m exploring GenAI tooling, prompt engineering, and ways to make
              developer workflows faster without losing craft.
            </p>
          </div>

          <div className="info-card">
            <div className="info-row">
              <span className="ic"><Icon.Pin /></span>
              <div>
                <div className="l">Location</div>
                <div className="v">Hyderabad, Telangana, India</div>
              </div>
            </div>
            <div className="info-row">
              <span className="ic"><Icon.Briefcase /></span>
              <div>
                <div className="l">Current role</div>
                <div className="v">System Analyst · ValueLabs</div>
              </div>
            </div>
            <div className="info-row">
              <span className="ic"><Icon.Mail /></span>
              <div style={{ flex: 1 }}>
                <div className="l">Email</div>
                <div className="v" style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  andemohit@gmail.com
                  <button
                    onClick={copy}
                    aria-label="Copy email"
                    style={{
                      background: 'var(--surface-2)', border: '1px solid var(--border)',
                      color: 'var(--text-secondary)', borderRadius: 6, padding: '4px 8px',
                      display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer',
                      fontFamily: 'var(--font-mono)', fontSize: 11,
                    }}
                  >
                    {copied ? <><Icon.Check /> copied</> : <><Icon.Copy /> copy</>}
                  </button>
                </div>
              </div>
            </div>
            <div className="info-row">
              <span className="ic"><Icon.Doc /></span>
              <div style={{ flex: 1 }}>
                <div className="l">Résumé</div>
                <div className="v">
                  <a
                    href="https://docs.google.com/document/d/1UjuKRn_Q5yBejXZt47Ou67WD8h8Q0DLG/export?format=pdf"
                    style={{ color: 'var(--accent)', textDecoration: 'none' }}
                  >
                    Download PDF →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 80 }}>
          <div className="eyebrow" style={{ marginBottom: 24 }}>{'// what I do'}</div>
          <div className="what-grid">
            <WhatCard n="01" icon={<Icon.Code />} title="Frontend Engineering" desc="Pixel-perfect, performant UIs with React, Angular, and Next.js. Design systems that scale." />
            <WhatCard n="02" icon={<Icon.Server />} title="Backend Development" desc="Scalable APIs and microservices in Node.js, NestJS, and Java Spring Boot. Production-grade." />
            <WhatCard n="03" icon={<Icon.Pen />} title="UI/UX Design" desc="From Figma wireframes to polished, accessible design systems — built and shipped." />
            <WhatCard n="04" icon={<Icon.Smartphone />} title="Mobile Development" desc="Cross-platform mobile apps with Flutter and React Native — same codebase, native feel, App Store / Play Store shipped." />
            <WhatCard n="05" icon={<Icon.Code />} title="AI-Augmented Workflow" desc="Prompt engineering, GenAI patterns, and agent-driven dev tools (Cursor, Claude) to ship 2× without losing craft." />
          </div>
        </div>
      </div>
    </section>
  );
}
