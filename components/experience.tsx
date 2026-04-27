'use client';

import { useRef, useEffect } from 'react';
import { useInView } from './hooks';
import * as Icon from './icons';

interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  desc: string;
  tags: string[];
}

const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'ValueLabs',
    role: 'System Analyst',
    period: 'Jul 2025 — Present',
    current: true,
    desc: 'Building modern web products in Hyderabad. AI-augmented engineering across React, Next.js, and Node — prompt engineering and GenAI patterns embedded in the daily workflow.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GenAI', 'Prompt Eng.'],
  },
  {
    company: 'Adobe',
    role: 'Senior Software Engineer',
    period: 'Jun 2023 — Jun 2025',
    desc: 'Architected e-commerce experiences for millions of users. Mobile-first interfaces, reusable component systems, and AEM-driven content infrastructure.',
    tags: ['React', 'TypeScript', 'Java', 'Spring Boot', 'AEM', 'Node.js', 'Storybook'],
  },
  {
    company: 'Optum Global Solutions',
    role: 'Sr. Software Engineer',
    period: 'Aug 2020 — Jun 2023',
    desc: 'Healthcare-scale web platforms — built and led the Medical Document Indexing platform; drove a 40% reduction in incident MTTR. Smart RFP, accessibility-first patterns, shared component libraries.',
    tags: ['React', 'Angular', 'Node.js', 'Web API', 'Material Design'],
  },
  {
    company: 'Walking Tree Technologies',
    role: 'Software Engineer',
    period: 'Aug 2019 — Jun 2020',
    desc: 'Full-stack web product work — feature delivery, code reviews, and design-system contributions across multiple client teams.',
    tags: ['Angular', 'TypeScript', 'Node.js', 'REST'],
  },
  {
    company: 'Oro Tech Services',
    role: 'UI & Angular Developer',
    period: 'Jan 2019 — Aug 2019',
    desc: 'Angular-based dashboards and admin tools — component architecture, state management, and integration with backend APIs.',
    tags: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
  },
  {
    company: 'Sweya Info Tech',
    role: 'UI Developer',
    period: 'Jun 2017 — Jan 2019',
    desc: 'IoT-based web applications. Started here — first taste of production code, real users, and the joy of shipping.',
    tags: ['HTML', 'CSS', 'jQuery', 'Angular', '.NET MVC'],
  },
];

function TimelineItem({ item }: { item: ExperienceEntry }) {
  const [ref, inView] = useInView({ threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`tl-item${inView ? ' in-view' : ''}${item.current ? ' current' : ''}`}
    >
      <div className="tl-period">
        {item.period}
        {item.current && <span className="pill-current">Now</span>}
      </div>
      <h3 className="tl-role">
        {item.role} <span className="at">at</span> <span className="co">{item.company}</span>
      </h3>
      <p className="tl-desc">{item.desc}</p>
      <div className="tl-tags">
        {item.tags.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head">
          <div className="section-head-left">
            <div className="label-mono">{'// experience'}</div>
            <h2 className="h-section">Where I&apos;ve worked.</h2>
          </div>
        </div>

        <div className="timeline">
          {EXPERIENCE.map((e, i) => <TimelineItem key={i} item={e} />)}
        </div>

        <div style={{ marginTop: 96 }}>
          <div className="eyebrow" style={{ marginBottom: 24 }}>{'// education'}</div>
          <div className="edu-grid">
            <div className="edu-card">
              <p className="edu-degree">MBA</p>
              <p className="edu-school">Madurai Kamaraj University</p>
              <span className="edu-period">2016 — 2018</span>
            </div>
            <div className="edu-card">
              <p className="edu-degree">BSc · Maths, Physics, CS</p>
              <p className="edu-school">Mrs. A.V.N. Degree College</p>
              <span className="edu-period">2013 — 2016</span>
            </div>
            <div className="edu-card">
              <p className="edu-degree">Intermediate · MPC</p>
              <p className="edu-school">Sri Surya Junior College</p>
              <span className="edu-period">2011 — 2013</span>
            </div>
          </div>
        </div>

        <div className="cv-banner" style={{ marginTop: 80 }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 12 }}>{'// résumé'}</div>
            <h3 style={{ fontSize: 'clamp(28px, 3.4vw, 40px)', margin: 0, letterSpacing: '-0.03em', fontWeight: 700 }}>
              Want the full picture?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: 10, maxWidth: 480 }}>
              The detailed CV — projects, references, the works.
            </p>
          </div>
          <a
            href="https://docs.google.com/document/d/1UjuKRn_Q5yBejXZt47Ou67WD8h8Q0DLG/export?format=pdf"
            download="Mohit-Ande-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Icon.Download /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
