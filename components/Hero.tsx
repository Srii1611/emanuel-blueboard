import Image from 'next/image'

export default function Hero() {
  return (
    <>
      <section className="hero">
        {/* LEFT */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8rem 4rem 4rem', position: 'relative', zIndex: 2 }}>
          <div className="hero-eyebrow">MetroWest Massachusetts · Since 2009</div>

          <h1 className="hero-title">
            <span className="accent">Master</span><br />
            <span className="outline">Plaster</span><br />
            &amp; Board
          </h1>

          <p className="hero-subtitle">
            Where raw walls become refined spaces — precision blueboard, expert plastering, and flawless finishes for New England's finest homes.
          </p>

          <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
            {[
              { number: '15+', label: 'Years Active' },
              { number: '500+', label: 'Projects Done' },
              { number: '100%', label: 'Licensed & Insured' },
            ].map(({ number, label }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="stat-number">{number}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="#contact" className="btn-primary"><span>Get Free Quote</span></a>
            <a href="#gallery" className="btn-outline">View Our Work</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right" style={{ position: 'relative', overflow: 'hidden' }}>
          <Image
            src="/images/EPRS8484.JPG"
            alt="Expert plastering — clean angled ceiling work"
            fill
            className="hero-img-main"
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-badge">
            <div style={{ textAlign: 'center', color: 'var(--ink)' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', lineHeight: 1 }}>A+</div>
              <div style={{ fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Rated<br />Quality</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '4rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.5, zIndex: 3 }}>
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
            'Framingham MA', 'MetroWest MA',
            'Blueboard Installation', 'Skim Coat Plastering', 'Vaulted Ceilings',
            'Water Damage Repair', 'New Construction', 'Renovation Work',
            'Framingham MA', 'MetroWest MA',
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
