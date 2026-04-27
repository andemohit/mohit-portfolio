'use client';

import { useState } from 'react';
import * as Icon from './icons';

const socialBtnStyle: React.CSSProperties = {
  width: 40, height: 40, borderRadius: 10,
  background: 'var(--surface)', border: '1px solid var(--border)',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  color: 'var(--text-secondary)', textDecoration: 'none',
  transition: 'color .15s, border-color .15s, transform .15s',
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError('');
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSent(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head">
          <div className="section-head-left">
            <div className="label-mono">{'// contact'}</div>
            <h2 className="h-section">Let&apos;s build something.</h2>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-row">
              <span className="ic"><Icon.Phone /></span>
              <div>
                <div className="l">Phone</div>
                <div className="v mono" style={{ fontSize: 14 }}>+91 91605 57788</div>
              </div>
            </div>
            <div className="info-row">
              <span className="ic"><Icon.Mail /></span>
              <div>
                <div className="l">Email</div>
                <div className="v mono" style={{ fontSize: 14 }}>andemohit@gmail.com</div>
              </div>
            </div>
            <div className="info-row">
              <span className="ic"><Icon.Pin /></span>
              <div>
                <div className="l">Location</div>
                <div className="v" style={{ fontSize: 14 }}>Hyderabad, Telangana, India</div>
              </div>
            </div>
            <div style={{ marginTop: 10 }}>
              <span className="avail-tag">
                <Icon.Check size={12} /> Open to: full-time · freelance · collaborations
              </span>
            </div>
            <div style={{ marginTop: 36, display: 'flex', gap: 14 }}>
              <a href="https://github.com/andemohit" aria-label="GitHub" style={socialBtnStyle}><Icon.Github /></a>
              <a href="https://www.linkedin.com/in/mohit-ande-b27992a0/" aria-label="LinkedIn" style={socialBtnStyle}><Icon.Linkedin /></a>
              <a href="https://twitter.com/andemohit" aria-label="Twitter" style={socialBtnStyle}><Icon.Twitter /></a>
              <a href="mailto:andemohit@gmail.com" aria-label="Email" style={socialBtnStyle}><Icon.Mail /></a>
            </div>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <div className="field-row">
              <div className="field">
                <label htmlFor="c-name">Name</label>
                <input id="c-name" name="name" required placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="c-email">Email</label>
                <input id="c-email" type="email" name="email" required placeholder="you@domain.com" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="c-subject">Subject</label>
              <input id="c-subject" name="subject" required placeholder="Quick hello / project / role" />
            </div>
            <div className="field">
              <label htmlFor="c-msg">Message</label>
              <textarea id="c-msg" name="message" required placeholder="What are you building?" />
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 4 }}>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={sending || sent}
                style={{ minWidth: 160, justifyContent: 'center' }}
              >
                {sent
                  ? <><Icon.Check /> Message sent</>
                  : sending
                  ? <>Sending…</>
                  : <><Icon.Send /> Send message</>}
              </button>
              <span className="mono" style={{ color: 'var(--text-tertiary)', fontSize: 12 }}>
                ↵ usually replies within a day
              </span>
            </div>
            {error && (
              <p className="mono" style={{ color: 'var(--accent-red, #f87171)', fontSize: 12, marginTop: 8 }}>
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
