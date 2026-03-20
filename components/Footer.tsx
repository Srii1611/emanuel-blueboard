export default function Footer() {
  return (
    <footer style={{
      background: '#080808',
      padding: '3rem 4rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid rgba(201,168,76,0.1)',
    }}>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', letterSpacing: '0.15em', color: 'var(--gold)' }}>
        Emanuel Blueboard Corp.
      </div>
      <div style={{ fontSize: '0.75rem', color: 'var(--plaster)', opacity: 0.4, textAlign: 'center' }}>
        © {new Date().getFullYear()} Emanuel Blueboard Corporation · Framingham, MA · Licensed & Insured
      </div>
      <a href="tel:5082508872" className="footer-phone">(508) 250-8872</a>
    </footer>
  )
}
