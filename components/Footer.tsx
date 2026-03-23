export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Top row — links */}
      <div className="footer-top">
        <div className="footer-col">
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', letterSpacing: '0.15em', color: 'var(--gold)', marginBottom: '0.8rem' }}>
            Emanuel Blueboard<br />
            <span style={{ fontSize: '1rem', opacity: 0.7 }}>&amp; Plastering Corp.</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--plaster)', opacity: 0.5, lineHeight: 1.6 }}>
            Making Dreams Come True Since 2001.
          </p>
        </div>

        <div className="footer-col">
          <div className="footer-heading">Services</div>
          <a href="/#services" className="footer-link">Blueboard Installation</a>
          <a href="/#services" className="footer-link">Skim Coat Plastering</a>
          <a href="/#services" className="footer-link">Vaulted Ceilings</a>
          <a href="/#services" className="footer-link">Water Damage Repair</a>
          <a href="/#services" className="footer-link">Patch &amp; Repair</a>
        </div>

        <div className="footer-col">
          <div className="footer-heading">Contact</div>
          <a href="tel:5082508872" className="footer-link">📞 (508) 250-8872</a>
          <a href="https://maps.google.com/?q=49+Cedar+St+Framingham+MA+01760" className="footer-link" target="_blank" rel="noopener noreferrer">📍 49 Cedar St, Framingham, MA</a>
          <span className="footer-link" style={{ cursor: 'default' }}>🕐 Mon – Sat: 7am – 6pm</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div style={{ fontSize: '0.75rem', color: 'var(--plaster)', opacity: 0.4 }}>
          © {new Date().getFullYear()} Emanuel Blueboard &amp; Plastering Corp. · All rights reserved.
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--plaster)', opacity: 0.4 }}>
          MA HIC #198451 · Licensed &amp; Insured
        </div>
      </div>
    </footer>
  )
}
