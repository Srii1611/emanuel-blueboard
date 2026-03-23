'use client'
import { useState } from 'react'
import Image from 'next/image'

const images = [
  { src: '/images/vaulted-ceiling-plastering-new-build.jpg', alt: 'Vaulted ceiling plastering in new construction home — Framingham MA', caption: 'Vaulted Ceiling · New Build', category: 'Ceilings' },
  { src: '/images/architectural-diamond-ceiling-plaster.jpg', alt: 'Architectural diamond ceiling plaster detail by Emanuel Blueboard', caption: 'Architectural Ceiling Detail', category: 'Ceilings' },
  { src: '/images/blueboard-installation-residential.jpg', alt: 'Professional blueboard installation in residential home — MetroWest MA', caption: 'Blueboard Install · Residential', category: 'Blueboard' },
  { src: '/images/full-room-blueboard-new-construction.jpg', alt: 'Full room blueboard ready for skim coat plaster — new construction', caption: 'Full Room Blueboard · New Construction', category: 'Blueboard' },
  { src: '/images/new-construction-team-install.jpg', alt: 'Emanuel Blueboard crew installing blueboard in new construction', caption: 'New Construction · Team Install', category: 'Blueboard' },
  { src: '/images/drop-ceiling-renovation-metrowest.jpg', alt: 'Drop ceiling renovation and plastering — MetroWest Massachusetts', caption: 'Drop Ceiling · Renovation', category: 'Ceilings' },
  { src: '/images/wall-repair-patching-framingham.jpg', alt: 'Plaster wall repair and patching in Framingham MA home', caption: 'Wall Repair · Patch Work', category: 'Repair' },
  { src: '/images/angled-ceiling-smooth-plaster-finish.jpg', alt: 'Smooth plaster finish on angled ceiling — close-up detail', caption: 'Angled Ceiling · Smooth Finish', category: 'Ceilings' },
  { src: '/images/blueboard-close-up-detail.jpg', alt: 'Blueboard drywall panel close-up showing seam detail', caption: 'Blueboard Close-up · Detail Work', category: 'Blueboard' },
  { src: '/images/new-build-exterior-metrowest-ma.jpg', alt: 'New home construction exterior — MetroWest MA project', caption: 'New Build · MetroWest MA', category: 'Blueboard' },
  { src: '/images/curved-stairwell-blueboard-installation.jpg', alt: 'Curved stairwell blueboard installation — specialty plastering work', caption: 'Stairwell · Curved Wall', category: 'Blueboard' },
  { src: '/images/commercial-job-site-large-scale.jpg', alt: 'Large scale commercial blueboard job site with crane delivery', caption: 'Large Scale · Commercial Job', category: 'Blueboard' },
]

const filters = ['All', 'Ceilings', 'Blueboard', 'Repair']

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
