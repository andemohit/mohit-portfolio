'use client';

import { useMagnetic } from './hooks';
import * as Icon from './icons';

function HeroLabel() {
  return (
    <div className="hero-label">
      <span className="label-mono">{'// full-stack developer & designer'}</span>
    </div>
  );
}

function HeroHeadline() {
  const words = ['Building', 'Digital', 'Products.'];
  return (
    <h1 className="h-display hero-headline" aria-label={words.join(' ')}>
      {words.map((w, i) => (
        <span key={i}>
          <span
            className={`word${i === words.length - 1 ? ' accent' : ''}`}
            style={{ animationDelay: `${0.15 + i * 0.12}s` }}
          >
            {w}
          </span>
          {i < words.length - 1 && <br />}
        </span>
      ))}
    </h1>
  );
}

function HeroSub() {
  return (
    <p className="hero-sub">
      Senior Full-Stack Developer at{' '}
      <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>ValueLabs</strong>.
      &nbsp;Crafting high-performance web applications and delightful user experiences with 8+ years
      of engineering depth — AI-augmented, design-led.
    </p>
  );
}

function MagneticBtn({
  href,
  children,
  primary,
  download,
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  download?: string;
  target?: string;
  rel?: string;
}) {
  const ref = useMagnetic(0.25);
  return (
    <a
      ref={ref}
      href={href}
      download={download}
      target={target}
      rel={rel}
      className={`btn ${primary ? 'btn-primary' : 'btn-ghost'}`}
    >
      {children}
    </a>
  );
}

function HeroCTAs() {
  return (
    <div className="hero-cta-row">
      <MagneticBtn href="#projects" primary>
        View projects <Icon.Arrow />
      </MagneticBtn>
      <MagneticBtn
        href="https://docs.google.com/document/d/1UjuKRn_Q5yBejXZt47Ou67WD8h8Q0DLG/export?format=pdf"
        download="Mohit-Ande-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.Download /> Download résumé
      </MagneticBtn>
    </div>
  );
}

function HeroSocial() {
  const items = [
    { label: 'GitHub', href: 'https://github.com/andemohit', Ic: Icon.Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohit-ande-b27992a0/', Ic: Icon.Linkedin },
    { label: 'Twitter / X', href: 'https://twitter.com/andemohit', Ic: Icon.Twitter },
    { label: 'Email', href: 'mailto:andemohit@gmail.com', Ic: Icon.Mail },
  ];
  return (
    <div className="hero-social" role="list">
      {items.map(({ label, href, Ic }) => (
        <a key={label} href={href} aria-label={label} title={label}>
          <Ic size={18} />
        </a>
      ))}
    </div>
  );
}

function CodeBlock() {
  return (
    <div className="code-card" aria-label="profile.ts">
      <div className="code-titlebar">
        <span className="code-dot" />
        <span className="code-dot" />
        <span className="code-dot" />
        <span className="code-tab">
          <Icon.TS /> profile.ts
        </span>
      </div>
      <pre className="code-body">
        <code>
          <div className="code-line">
            <span className="code-ln">1</span>
            <span><span className="tk-com">{'// developer profile · v5.0'}</span></span>
          </div>
          <div className="code-line">
            <span className="code-ln">2</span>
            <span>
              <span className="tk-key">const</span>{' '}
              <span className="tk-fn">mohit</span>{' = '}
              <span className="tk-pun">{'{'}</span>
            </span>
          </div>
          <div className="code-line">
            <span className="code-ln">3</span>
            <span>
              {'  '}<span className="tk-prop">role</span><span className="tk-pun">: </span>
              <span className="tk-str">&quot;Senior Full-Stack Developer&quot;</span><span className="tk-pun">,</span>
            </span>
          </div>
          <div className="code-line">
            <span className="code-ln">4</span>
            <span>
              {'  '}<span className="tk-prop">company</span><span className="tk-pun">: </span>
              <span className="tk-str">&quot;ValueLabs&quot;</span><span className="tk-pun">,</span>
            </span>
          </div>
          <div className="code-line">
            <span className="code-ln">5</span>
            <span>
              {'  '}<span className="tk-prop">skills</span><span className="tk-pun">: [</span>
              <span className="tk-str">&quot;React&quot;</span><span className="tk-pun">, </span>
              <span className="tk-str">&quot;Next.js&quot;</span><span className="tk-pun">, </span>
              <span className="tk-str">&quot;TypeScript&quot;</span><span className="tk-pun">,</span>
            </span>
          </div>
          <div className="code-line">
            <span className="code-ln">6</span>
            <span>
              {'           '}<span className="tk-str">&quot;Node.js&quot;</span><span className="tk-pun">, </span>
              <span className="tk-str">&quot;GenAI&quot;</span><span className="tk-pun">, </span>
              <span className="tk-str">&quot;Prompt Eng.&quot;</span><span className="tk-pun">],</span>
            </span>
          </div>
          <div className="code-line">
            <span className="code-ln">7</span>
            <span>
              {'  '}<span className="tk-prop">passion</span><span className="tk-pun">: </span>
              <span className="tk-str">&quot;UI/UX + Engineering + AI&quot;</span><span className="tk-pun">,</span>
            </span>
          </div>
          <div className="code-line">
            <span className="code-ln">8</span>
            <span>
              {'  '}<span className="tk-prop">available</span><span className="tk-pun">: </span>
              <span className="tk-key">true</span><span className="tk-pun">,</span>
              <span style={{ display: 'inline-block', width: 8, height: 14, background: 'var(--accent)', verticalAlign: '-2px', marginLeft: 4, animation: 'blink 1.1s infinite steps(1)' }} />
            </span>
          </div>
          <div className="code-line">
            <span className="code-ln">9</span>
            <span><span className="tk-pun">{'};'}</span></span>
          </div>
        </code>
      </pre>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            <HeroLabel />
            <HeroHeadline />
            <HeroSub />
            <HeroCTAs />
            <HeroSocial />
          </div>
          <div>
            <CodeBlock />
          </div>
        </div>
      </div>
    </section>
  );
}
