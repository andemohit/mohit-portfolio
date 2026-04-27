export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">mohit.dev</p>
            <p className="footer-tag">Senior Full-Stack Developer & Designer</p>
          </div>
          <div>
            <p className="footer-h">Sitemap</p>
            <ul className="footer-list">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-h">Elsewhere</p>
            <ul className="footer-list">
              <li><a href="https://github.com/andemohit" target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
              <li><a href="https://www.linkedin.com/in/mohit-ande-b27992a0/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
              <li><a href="https://twitter.com/andemohit" target="_blank" rel="noopener noreferrer">Twitter / X ↗</a></li>
              <li><a href="mailto:andemohit@gmail.com">Email ↗</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Mohit Ande · All rights reserved</span>
          <span>Built with Next.js & Tailwind · v5.0</span>
        </div>
      </div>
    </footer>
  );
}
