const services = [
  { num: '01', icon: '🧱', name: 'Blueboard Installation', desc: 'Professional installation of blueboard drywall panels — the essential substrate for plaster finishes. We handle new construction, additions, and full room buildouts.', tag: 'New Construction' },
  { num: '02', icon: '🪣', name: 'Skim Coat Plastering', desc: 'A smooth, hard plaster finish applied over blueboard. Produces the most durable wall surface available — superior to standard drywall finishing in every way.', tag: 'Premium Finish' },
  { num: '03', icon: '🏗️', name: 'Vaulted & Complex Ceilings', desc: 'Specialty work on angled, cathedral, coffered, and architectural ceilings. Tight seams, clean angles, and flawless curves — even on the most complex geometry.', tag: 'Specialty Work' },
  { num: '04', icon: '💧', name: 'Water Damage Repair', desc: 'Full restoration after leaks, flooding, or moisture damage. We remove, replace, and replaster — matching your existing finish so repairs are invisible.', tag: 'Restoration' },
  { num: '05', icon: '🏠', name: 'Full Room Renovation', desc: 'From gutted rooms to complete renovations, we work alongside general contractors and homeowners to deliver on-time, on-budget wall and ceiling work.', tag: 'Full Service' },
  { num: '06', icon: '🔧', name: 'Patch & Repair', desc: 'Holes, cracks, crumbling plaster, failed tape — we patch and blend seamlessly. Small jobs are never too small. We respect your home.', tag: 'Repairs' },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header fade-up">
        <div>
          <div className="section-label">What We Do</div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1, letterSpacing: '0.02em' }}>
            Our <span style={{ color: 'var(--gold)' }}>Services</span>
          </h2>
        </div>
        <p className="services-intro">
          Every wall tells a story. We make sure yours is told with precision, durability, and craftsmanship that lasts decades.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s) => (
          <div key={s.num} className="service-card fade-up">
            <div className="service-number">{s.num}</div>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
            <div className="service-name">{s.name}</div>
            <p className="service-desc">{s.desc}</p>
            <span className="service-tag">{s.tag}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
