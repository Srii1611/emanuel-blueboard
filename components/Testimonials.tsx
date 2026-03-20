const reviews = [
  { initials: 'MR', name: 'Michael R.', location: 'Framingham, MA', text: '"Emanuel and his crew did our entire new build — every room, every ceiling. The finish is immaculate. Our painter said it was the best blueboard prep work he\'d ever seen."' },
  { initials: 'SL', name: 'Sarah L.', location: 'Natick, MA', text: '"We had a complicated vaulted ceiling situation that two other contractors declined. Emanuel took one look and said no problem. The result was stunning — perfect angles, perfect finish."' },
  { initials: 'JP', name: 'James P.', location: 'Ashland, MA', text: '"Water damage took out an entire wall and ceiling section. The repair blended so perfectly we couldn\'t tell where the old plaster ended and new work began. Highly recommend."' },
]

const avatarColors = [
  'linear-gradient(135deg, #c9a84c, #c0392b)',
  'linear-gradient(135deg, #1abc9c, #2980b9)',
  'linear-gradient(135deg, #2980b9, #1a1a2e)',
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div style={{ marginBottom: '4rem' }} className="fade-up">
        <div className="section-label">What Clients Say</div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1 }}>
          Real <span style={{ color: 'var(--gold)' }}>Reviews</span>
        </h2>
      </div>

      <div className="testimonials-grid">
        {reviews.map((r, i) => (
          <div key={r.name} className={`testimonial fade-up`}>
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">{r.text}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div
                className="author-avatar"
                style={{ background: avatarColors[i] }}
              >
                {r.initials}
              </div>
              <div>
                <div className="author-name">{r.name}</div>
                <div className="author-location">{r.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
