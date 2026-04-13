import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <>
      <section
        className="hero hero-section"
        style={{
          backgroundImage: "url('/images/hero-banner.jpg')",
          position: 'relative',
          minHeight: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.7) 50%, rgba(13,13,13,0.4) 100%)',
          zIndex: 1,
        }} />

        {/* LEFT */}
        <div className="hero-left" style={{ zIndex: 2 }}>
          <div className="hero-eyebrow">Making Dreams Come True · Since 2001</div>

          <h1 className="hero-title">
            <span className="accent">EMANUEL</span><br />
            <span className="outline">BLUEBOARD</span><br />
            &amp; PLASTERING
          </h1>

          <p className="hero-subtitle">
            Where raw walls become refined spaces — precision blueboard, expert plastering, and flawless finishes for New England's finest homes.
          </p>

          <div className="hero-stats">
            {[
              { number: '25+', label: 'Years Active' },
              { number: '1K+', label: 'Projects Done' },
              { number: '100%', label: 'Licensed & Insured' },
            ].map(({ number, label }) => (
              <div key={label} className="hero-stat">
                <span className="stat-number">{number}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary"><span>Get Free Quote</span></a>
            <Link href="/gallery" className="btn-outline">View Our Work</Link>
          </div>
        </div>

        {/* RIGHT — keep for layout spacing, badge overlay */}
        <div className="hero-right" style={{ position: 'relative', overflow: 'hidden', zIndex: 2 }}>
          <div className="hero-badge">
            <div style={{ textAlign: 'center', color: 'var(--ink)' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', lineHeight: 1 }}>A+</div>
              <div style={{ fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Rated<br />Quality</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll-indicator" style={{ zIndex: 2 }}>
          <div className="scroll-line" />
          Scroll to explore
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {[
            'Blueboard Installation', 'Skim Coat Plastering', 'Vaulted Ceilings',
            'Water Damage Repair', 'New Construction', 'Renovation Work',
            'Framingham MA', 'Since 2001',
            'Blueboard Installation', 'Skim Coat Plastering', 'Vaulted Ceilings',
            'Water Damage Repair', 'New Construction', 'Renovation Work',
            'Framingham MA', 'Since 2001',
          ].map((item, i) => (
            <span key={i} className="marquee-item">
              {item} <span className="marquee-dot" />
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
