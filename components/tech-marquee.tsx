const TECH_ROW_1: [string, string][] = [
  ['React', '#61dafb'], ['TypeScript', '#3178c6'], ['Next.js', '#ffffff'],
  ['Node.js', '#3fb950'], ['Angular', '#dd0031'], ['NestJS', '#e0234e'],
  ['MongoDB', '#4faa41'], ['PostgreSQL', '#336791'], ['Tailwind', '#38bdf8'],
  ['GraphQL', '#e10098'], ['Storybook', '#ff4785'],
];

const TECH_ROW_2: [string, string][] = [
  ['Java', '#f89820'], ['Spring', '#6db33f'], ['Flutter', '#02569b'],
  ['Firebase', '#ffca28'], ['Azure', '#0078d4'], ['Figma', '#f24e1e'],
  ['OpenAI', '#10a37f'], ['Claude', '#d97757'], ['LangChain', '#1c3d2e'],
  ['Prompt Eng.', '#bc8cff'], ['GenAI', '#58a6ff'], ['Cursor', '#ffffff'],
  ['v0', '#ffffff'], ['AEM', '#fa0f00'], ['Cypress', '#69d3a7'],
  ['MySQL', '#00758f'], ['Express', '#cccccc'],
];

function TechChip({ label, color }: { label: string; color: string }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 20, height: 20, borderRadius: 4,
      background: color + '22', border: `1px solid ${color}44`,
      fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 700,
      color, letterSpacing: '-0.01em', flexShrink: 0,
    }}>
      {label}
    </span>
  );
}

function MarqueeRow({ items, reverse }: { items: [string, string][]; reverse?: boolean }) {
  const repeated = [...items, ...items, ...items];
  return (
    <div className="marquee">
      <div className={`marquee-track${reverse ? ' reverse' : ''}`}>
        {repeated.map(([name, color], i) => (
          <span key={`${name}-${i}`} className="tech-pill">
            <TechChip label={name.slice(0, 2).toUpperCase()} color={color} />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="section-tight" id="stack">
      <div className="container">
        <div className="section-head">
          <div className="section-head-left">
            <div className="label-mono">{'// tools & technologies'}</div>
            <h2 className="h-section" style={{ fontSize: 'clamp(28px, 3.4vw, 42px)' }}>
              The stack that gets things shipped.
            </h2>
          </div>
        </div>
      </div>
      <div className="marquee-row"><MarqueeRow items={TECH_ROW_1} /></div>
      <div className="marquee-row"><MarqueeRow items={TECH_ROW_2} reverse /></div>
    </section>
  );
}
