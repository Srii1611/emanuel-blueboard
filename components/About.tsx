import Image from 'next/image'

const credentials = [
  'Fully Licensed & Insured in MA',
  '15+ Years Experience',
  '500+ Projects Completed',
  'New Construction Specialists',
  'Renovation Experts',
  'On-Time Guaranteed',
]

export default function About() {
  return (
    <section className="about" id="about">
      {/* IMAGE STACK */}
      <div className="about-image-stack fade-up">
        <Image
          src="/images/GCUD7035.JPG"
          alt="Emanuel — owner and master plasterer"
          width={500}
          height={600}
          className="about-img-main"
          style={{ objectFit: 'cover' }}
        />
        <Image
          src="/images/EPRS8484.JPG"
          alt="Finished plastering work"
          width={350}
          height={350}
          className="about-img-accent"
          style={{ objectFit: 'cover' }}
        />
        <div className="about-badge">
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', lineHeight: 1 }}>15+</div>
          <div style={{ fontSize: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700 }}>Years<br />Expert</div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="fade-up">
        <div className="section-label">The Man Behind the Work</div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1, marginBottom: '1.5rem' }}>
          Meet <span style={{ color: 'var(--gold)' }}>Emanuel</span>
        </h2>

        <blockquote className="about-quote">
          "I don't just put up walls. I build the foundation that everything else in a home hangs on."
        </blockquote>

        <p className="about-text">
          Emanuel Blueboard Corporation has been delivering precision plastering and blueboard work across MetroWest Massachusetts for over 15 years. What started as a one-man operation built on quality and word-of-mouth has grown into a trusted name among contractors, builders, and homeowners throughout the region.
        </p>
        <p className="about-text">
          We specialize in work that other crews turn down — vaulted ceilings, complex angles, tight timelines, and renovation projects that demand seamless matching. No shortcuts. No excuses. Just clean, durable work that stands up for decades.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem', marginBottom: '2.5rem' }}>
          {credentials.map(c => (
            <span key={c} className="credential">{c}</span>
          ))}
        </div>

        <a href="tel:5082508872" className="btn-primary">
          <span>📞 (508) 250-8872</span>
        </a>
      </div>
    </section>
  )
}
