'use client'
import { useState } from 'react'

const areas = ['Framingham', 'Natick', 'Ashland', 'Holliston', 'Milford', 'Hopkinton', 'Marlborough', 'Sudbury', 'Wayland', 'Westborough', 'Southborough', 'MetroWest MA']

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* CTA BANNER */}
      <div className="cta-banner fade-up">
        <h2 className="cta-title">
          Ready to <span style={{ color: 'var(--gold)' }}>Start</span><br />Your Project?
        </h2>
        <p className="cta-subtitle">Free estimates · Fast turnaround · 25+ years of expertise</p>
        {/* Use cta-actions class — stacks on mobile, row on desktop */}
        <div className="cta-actions">
          <a href="#contact" className="btn-primary btn-large"><span>Get a Free Quote</span></a>
          <a href="tel:5082508872" className="btn-outline btn-large">Call (508) 250-8872</a>
        </div>
      </div>

      {/* CONTACT */}
      <section className="contact" id="contact">
        {/* INFO */}
        <div className="fade-up">
          <div className="section-label">Get In Touch</div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1, marginBottom: '2.5rem' }}>
            Contact <span style={{ color: 'var(--gold)' }}>Us</span>
          </h2>

          {[
            { icon: '📞', label: 'Phone', value: '(508) 250-8872', sub: 'Call or text anytime', href: 'tel:5082508872' },
            { icon: '📍', label: 'Address', value: '49 Cedar St, Framingham, MA 01760', sub: 'Serving all of MetroWest MA' },
            { icon: '🕐', label: 'Hours', value: 'Mon – Sat: 7am – 6pm', sub: 'Emergency repairs available' },
          ].map(({ icon, label, value, sub, href }) => (
            <div key={label} className="contact-row">
              <div className="contact-icon">{icon}</div>
              <div>
                <div className="contact-label">{label}</div>
                <div className="contact-value">
                  {href ? <a href={href} style={{ color: 'inherit', textDecoration: 'none' }}>{value}</a> : value}
                </div>
                <div className="contact-sub">{sub}</div>
              </div>
            </div>
          ))}

          <div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Service Areas</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {areas.map(a => <span key={a} className="area-tag">{a}</span>)}
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="fade-up">
          <form onSubmit={handleSubmit}>
            {/* Name row — stacks on mobile */}
            <div className="form-row">
              <div>
                <label className="form-label">First Name</label>
                <input type="text" name="first_name" className="form-input" placeholder="John" required />
              </div>
              <div>
                <label className="form-label">Last Name</label>
                <input type="text" name="last_name" className="form-input" placeholder="Smith" required />
              </div>
            </div>
            {/* Phone/email row — stacks on mobile */}
            <div className="form-row">
              <div>
                <label className="form-label">Phone</label>
                <input type="tel" name="phone" className="form-input" placeholder="(508) 555-0000" required />
              </div>
              <div>
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-input" placeholder="john@email.com" />
              </div>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label className="form-label">Service Needed</label>
              <select name="service" className="form-select">
                <option value="">Select a service...</option>
                <option>Blueboard Installation</option>
                <option>Skim Coat Plastering</option>
                <option>Vaulted / Complex Ceiling</option>
                <option>Water Damage Repair</option>
                <option>Full Room Renovation</option>
                <option>Patch &amp; Repair</option>
                <option>Other / Not Sure</option>
              </select>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label className="form-label">Town / City</label>
              <input type="text" name="town" className="form-input" placeholder="Framingham, Natick, Ashland..." />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label className="form-label">Project Details</label>
              <textarea name="message" className="form-textarea" placeholder="Tell us about your project — size, timeline, any special requirements..." />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', padding: '1.1rem', fontSize: '0.9rem', letterSpacing: '0.12em' }}
              disabled={status === 'sending'}
            >
              <span>
                {status === 'sending' ? 'Sending...' : status === 'success' ? '✅ Message Sent!' : 'Send Message & Request Quote'}
              </span>
            </button>

            {status === 'error' && (
              <p style={{ color: 'var(--rust)', fontSize: '0.85rem', marginTop: '0.8rem', textAlign: 'center' }}>
                Something went wrong. Please call us directly at (508) 250-8872.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
