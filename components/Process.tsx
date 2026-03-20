const steps = [
  { num: '01', title: 'Free Consultation', desc: 'Call or message us. We visit your site, assess the scope, and talk through your timeline and budget — no pressure, no obligation.' },
  { num: '02', title: 'Detailed Quote', desc: 'You receive a clear, itemized quote. No hidden costs, no vague estimates. You know exactly what you\'re paying for before we start.' },
  { num: '03', title: 'Expert Execution', desc: 'Our crew shows up on time and works clean. We protect your property, communicate daily, and deliver on every commitment.' },
  { num: '04', title: 'Final Walkthrough', desc: 'Before we call it done, you inspect every inch. We don\'t leave until you\'re 100% satisfied with the finished result.' },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div style={{ marginBottom: '5rem', textAlign: 'center' }} className="fade-up">
        <div className="section-label" style={{ justifyContent: 'center' }}>
          <span>How It Works</span>
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1 }}>
          Our <span style={{ color: 'var(--gold)' }}>Process</span>
        </h2>
      </div>

      <div className="process-steps">
        {steps.map((s) => (
          <div key={s.num} className="step fade-up" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
            <div className="step-num">{s.num}</div>
            <div className="step-title">{s.title}</div>
            <p className="step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
