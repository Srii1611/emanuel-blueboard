export default function Footer() {
  return (
    <footer className="site-footer">
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', letterSpacing: '0.15em', color: 'var(--gold)' }}>
        Emanuel Blueboard<br />
        <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>&amp; Plastering Corp.</span>
      </div>
      <div className="footer-center">
        <div style={{ fontSize: '0.75rem', color: 'var(--plaster)', opacity: 0.4, textAlign: 'center' }}>
          © {new Date().getFullYear()} Emanuel Blueboard &amp; Plastering Corp.<br />
          49 Cedar St, Framingham, MA 01760 · Licensed &amp; Insured
        </div>
      </div>
      <a href="tel:5082508872" className="footer-phone">(508) 250-8872</a>
    </footer>
  )
}
