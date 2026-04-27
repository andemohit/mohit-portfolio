import * as Icon from './icons';

interface FeaturedProject {
  n: string;
  name: string;
  desc: string;
  tags: string[];
  year: string;
  href: string;
  thumbClass: string;
  monogram: string;
}

interface MoreProject {
  name: string;
  href: string;
  desc: string;
  tags: string[];
  year: string;
}

const PROJECTS_FEATURED: FeaturedProject[] = [
  {
    n: '01',
    name: 'ScreenWise AI',
    desc: 'Personal product — AI-powered screen-time coach. Prompt-engineered insights, habit nudges, weekly reports. Built solo end-to-end.',
    tags: ['Next.js', 'TypeScript', 'OpenAI', 'Vercel'],
    year: '2025',
    href: 'https://screen-wise-ai.vercel.app/',
    thumbClass: 'thumb-grad-1',
    monogram: 'SW',
  },
  {
    n: '02',
    name: 'Evitrix',
    desc: 'Marketing site for a tech consultancy — fast, conversion-focused landing with bespoke component system.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    year: '2025',
    href: 'https://www.evitrix.in/',
    thumbClass: 'thumb-grad-2',
    monogram: 'EV',
  },
  {
    n: '03',
    name: 'Maruti Engineering',
    desc: 'Industrial engineering & fabrication website — product catalog, lead capture, fully responsive build.',
    tags: ['Next.js', 'TypeScript', 'CMS'],
    year: '2025',
    href: 'https://marutiengineering.co.in/',
    thumbClass: 'thumb-grad-3',
    monogram: 'ME',
  },
];

const PROJECTS_MORE: MoreProject[] = [
  { name: 'V&S Electrical Solutions', href: 'https://www.vselectricalsolutions.com/', desc: 'Service-business landing site with quote form & gallery.', tags: ['Next.js', 'Tailwind'], year: '2025' },
  { name: 'Dr. Revathi', href: 'https://dr-revathi.vercel.app/', desc: 'Medical practice site — appointments, services, contact.', tags: ['Next.js', 'Vercel'], year: '2025' },
  { name: 'Maruthi Dental Clinic', href: 'https://v0-maruthidentilclinic.vercel.app/', desc: 'Dental clinic website with treatments & booking flow.', tags: ['Next.js', 'v0'], year: '2025' },
];

function ProjThumb({ thumbClass, monogram, mockKind }: { thumbClass: string; monogram: string; mockKind: 'window' | 'mono' }) {
  return (
    <div className={`proj-thumb ${thumbClass} thumb-dots`}>
      {mockKind === 'window' ? (
        <div className="mock-window">
          <div className="mock-bar">
            <span className="d" /><span className="d" /><span className="d" />
            <span style={{ marginLeft: 10, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-tertiary)' }}>
              {`https://${monogram.toLowerCase()}.app`}
            </span>
          </div>
          <div className="mock-content">
            <div className="mock-row w-50" />
            <div className="mock-row w-90" />
            <div className="mock-row w-70" />
            <div className="mock-row w-30" />
          </div>
        </div>
      ) : (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-mono)', fontSize: 80, fontWeight: 700,
          color: 'rgba(255,255,255,0.18)', letterSpacing: '-0.04em',
        }}>
          {monogram}
        </div>
      )}
      <div className="proj-thumb-fade" />
    </div>
  );
}

function ProjectCard({ p, mockKind }: { p: FeaturedProject; mockKind: 'window' | 'mono' }) {
  return (
    <a
      className="proj-card fade-in"
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${p.name} — visit site`}
    >
      <ProjThumb thumbClass={p.thumbClass} monogram={p.monogram} mockKind={mockKind} />
      <span className="proj-year">{p.year}</span>
      <span className="proj-arrow"><Icon.ArrowUpRight /></span>
      <div className="proj-meta">
        <span className="proj-num">PROJECT — {p.n}</span>
        <h3 className="proj-name">{p.name}</h3>
        <p className="proj-desc">{p.desc}</p>
        <div className="proj-tags">
          {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head">
          <div className="section-head-left">
            <div className="label-mono">{'// selected work'}</div>
            <h2 className="h-section">Projects that ship.</h2>
          </div>
          <a href="#" className="btn btn-ghost">All projects <Icon.Arrow /></a>
        </div>

        <div className="proj-grid">
          {PROJECTS_FEATURED.map((p, i) => (
            <ProjectCard key={p.n} p={p} mockKind={i === 0 ? 'window' : 'mono'} />
          ))}
        </div>

        <div style={{ marginTop: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>{'// also recently shipped'}</div>
          <div className="proj-secondary-grid">
            {PROJECTS_MORE.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-secondary-card"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                  <span style={{ fontWeight: 600, fontSize: 15 }}>{p.name}</span>
                  <span className="mono" style={{ color: 'var(--text-tertiary)', fontSize: 11 }}>{p.year}</span>
                </div>
                <p style={{ margin: '0 0 10px', color: 'var(--text-secondary)', fontSize: 13.5, lineHeight: 1.5 }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {p.tags.map((t) => <span key={t} className="tag" style={{ fontSize: 10.5, padding: '3px 8px' }}>{t}</span>)}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
