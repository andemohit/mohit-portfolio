'use client';

import { useEffect, useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-inner">
        <a href="#top" className="brand" onClick={close}>
          mohit.dev<span className="brand-cursor" />
        </a>
        <div className="nav-links">
          <a href="#about" className="nav-link">about</a>
          <a href="#projects" className="nav-link">projects</a>
          <a href="#experience" className="nav-link">experience</a>
          <a href="#contact" className="nav-link">contact</a>
        </div>
        <div className="nav-right">
          <span className="pill-available">
            <span className="dot" /> Available for work
          </span>
          <button
            type="button"
            className="nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="nav-mobile-panel"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="13" x2="20" y2="13" />
                <line x1="4" y1="19" x2="14" y2="19" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="nav-mobile-panel"
        className={`nav-mobile${open ? ' open' : ''}`}
        role="menu"
        aria-hidden={!open}
      >
        <a href="#about" onClick={close}>about</a>
        <a href="#projects" onClick={close}>projects</a>
        <a href="#experience" onClick={close}>experience</a>
        <a href="#contact" onClick={close}>contact</a>
      </div>
    </nav>
  );
}
