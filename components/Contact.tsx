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
      const res = await fetch('https://formspree.io/f/mojkgjar', {
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
          PROFESSIONAL PLASTERING<br />&amp; <span style={{ color: 'var(--gold)' }}>DRYWALL SERVICES</span>
        </h2>
        <p className="cta-tagline">Smooth Finishes that Last.</p>
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

          {/* Phone — fully clickable row */}
          <a href="tel:5082508872" className="contact-row" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="contact-icon">📞</div>
            <div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">(508) 250-8872</div>
              <div className="contact-sub">Call or text anytime</div>
            </div>
          </a>

          {/* Address — clickable to Google Maps */}
          <a
            href="https://maps.google.com/?q=49+Cedar+St+Framingham+MA+01760"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-row"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="contact-icon">📍</div>
            <div>
              <div className="contact-label">Address</div>
              <div className="contact-value">49 Cedar St, Framingham, MA 01760</div>
              <div className="contact-sub">Serving all of MetroWest MA</div>
            </div>
          </a>

          {/* Hours */}
          <div className="contact-row">
            <div className="contact-icon">🕐</div>
            <div>
              <div className="contact-label">Hours</div>
              <div className="contact-value">Mon – Sat: 7am – 6pm</div>
              <div className="contact-sub">Emergency repairs available</div>
            </div>
          </div>

          {/* Service Areas */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Service Areas</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {areas.map(a => <span key={a} className="area-tag">{a}</span>)}
            </div>
          </div>

          {/* Google Maps Embed */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.25)', boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
            <a
              href="https://maps.google.com/?q=49+Cedar+St+Framingham+MA+01760"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', fontSize: '0.7rem', textAlign: 'center', padding: '0.4rem', background: 'rgba(201,168,76,0.1)', color: 'var(--gold)', letterSpacing: '0.1em', textDecoration: 'none' }}
            >
              📍 Open in Google Maps ↗
            </a>
            <iframe
              src="https://maps.google.com/maps?q=49+Cedar+St,+Framingham,+MA+01760&hl=en&z=15&output=embed"
              width="100%"
              height="260"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Emanuel Blueboard & Plastering — 49 Cedar St, Framingham, MA"
            />
          </div>
        </div>

        {/* FORM */}
        <div className="fade-up">
          <form onSubmit={handleSubmit}>
            {/* Name — full width */}
            <div style={{ marginBottom: '1rem' }}>
              <label className="form-label">Name</label>
              <input type="text" name="name" className="form-input" placeholder="John Smith" required />
            </div>
            {/* Phone — full width */}
            <div style={{ marginBottom: '1rem' }}>
              <label className="form-label">Phone</label>
              <input type="tel" name="phone" className="form-input" placeholder="(508) 555-0000" required />
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
                Something went wrong. Please call us directly at{' '}
                <a href="tel:5082508872" style={{ color: 'var(--rust)' }}>(508) 250-8872</a>.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
