'use client'
import { useState } from 'react'
import Image from 'next/image'

const images = [
  /* ── Ceilings ── */
  { src: '/images/hero-banner.jpg', alt: 'Vaulted ceiling with flawless plaster finish — new construction by Emanuel Blueboard', caption: 'Vaulted Ceiling · Finished Plaster', category: 'Ceilings' },
  { src: '/images/ceiling-diamond-plaster.jpg', alt: 'Diamond pyramid ceiling plaster detail — specialty work by Emanuel Blueboard', caption: 'Diamond Ceiling · Specialty', category: 'Ceilings' },
  { src: '/images/crew-ceiling-finish-stilts.jpg', alt: 'Plasterer on stilts finishing vaulted ceiling — MetroWest MA', caption: 'Vaulted Ceiling · Skim Coat', category: 'Ceilings' },
  { src: '/images/crew-vaulted-ceiling-plaster.jpg', alt: 'Worker plastering vaulted ceiling on stilts — new construction', caption: 'Vaulted Ceiling · In Progress', category: 'Ceilings' },
  { src: '/images/crew-skim-coat-ceiling.jpg', alt: 'Crew member applying skim coat plaster to ceiling', caption: 'Ceiling Skim Coat · Close-up', category: 'Ceilings' },
  { src: '/images/ceiling-framing-prep.jpg', alt: 'Ceiling framing and furring strips ready for blueboard installation', caption: 'Ceiling Prep · Framing', category: 'Ceilings' },
  /* ── Blueboard ── */
  { src: '/images/blueboard-vaulted-room.jpg', alt: 'Vaulted room with blueboard installed ready for plaster — new construction', caption: 'Blueboard Install · Vaulted Room', category: 'Blueboard' },
  { src: '/images/blueboard-full-room.png', alt: 'Full room blueboard installation with plaster bags ready — MetroWest MA', caption: 'Full Room · Blueboard Install', category: 'Blueboard' },
  { src: '/images/blueboard-stairwell-install.png', alt: 'Stairwell blueboard installation — new construction project', caption: 'Stairwell · Blueboard', category: 'Blueboard' },
  { src: '/images/blueboard-angled-closet.png', alt: 'Angled closet space with precision blueboard install', caption: 'Angled Space · Blueboard', category: 'Blueboard' },
  { src: '/images/crew-blueboard-install-team.jpg', alt: 'Two-man crew installing blueboard panel on scaffold', caption: 'Team Install · Blueboard', category: 'Blueboard' },
  { src: '/images/crew-blueboard-lift.jpg', alt: 'Crew lifting blueboard sheet into position — teamwork', caption: 'Blueboard Lift · Teamwork', category: 'Blueboard' },
  { src: '/images/crew-blueboard-framing.jpg', alt: 'Worker installing blueboard onto wall framing', caption: 'Wall Framing · Blueboard', category: 'Blueboard' },
  /* ── Crew ── */
  { src: '/images/team-full-crew-exterior.jpg', alt: 'Full Emanuel Blueboard crew outside completed new build — MetroWest MA', caption: 'Full Crew · New Build', category: 'Crew' },
  { src: '/images/team-crew-vaulted-room.jpg', alt: 'Five-man plastering crew in finished vaulted room', caption: 'Crew Photo · Vaulted Room', category: 'Crew' },
  { src: '/images/crew-two-plasterers.jpg', alt: 'Two plasterers working together in vaulted ceiling space', caption: 'Team Plastering · Vaulted Space', category: 'Crew' },
  { src: '/images/crew-plastering-stilts.jpg', alt: 'Plasterer on stilts applying skim coat to wall', caption: 'Stilts Work · Skim Coat', category: 'Crew' },
  { src: '/images/crew-wall-skim-coat.jpg', alt: 'Worker applying smooth skim coat plaster to wall corner', caption: 'Wall Finish · Skim Coat', category: 'Crew' },
  { src: '/images/crew-stilts-angled-ceiling.jpg', alt: 'Worker on stilts plastering angled ceiling with bucket and tools', caption: 'Angled Ceiling · Stilts', category: 'Crew' },
  { src: '/images/crew-wall-detail-closeup.jpg', alt: 'Plasterer applying finish coat — close-up detail with safety goggles', caption: 'Detail Work · Close-up', category: 'Crew' },
  { src: '/images/crew-plastering-room.jpg', alt: 'Worker plastering in freshly finished room with tools', caption: 'Room Finish · Plastering', category: 'Crew' },
]

const filters = ['All', 'Ceilings', 'Blueboard', 'Crew']

export default function Gallery() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? images : images.filter(img => img.category === active)

  return (
    <section className="gallery" id="gallery">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }} className="fade-up">
        <div>
          <div className="section-label">Real Work. Real Proof.</div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1 }}>
            Project <span style={{ color: 'var(--gold)' }}>Gallery</span>
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-masonry">
        {filtered.map((img) => (
          <div key={img.src} className="gallery-item fade-up">
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={800}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span className="gallery-caption">{img.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
