'use client'
import { useState } from 'react'
import Image from 'next/image'

const images = [
  { src: '/images/EPRS8484.JPG', alt: 'Angled vaulted ceiling — plastered finish', caption: 'Vaulted Ceiling · New Build', category: 'Ceilings' },
  { src: '/images/FSPS9920.JPG', alt: 'Diamond ceiling plaster detail', caption: 'Architectural Ceiling Detail', category: 'Ceilings' },
  { src: '/images/ISVC9343.JPG', alt: 'Blueboard installation worker', caption: 'Blueboard Install · Residential', category: 'Blueboard' },
  { src: '/images/QMWO3515.JPG', alt: 'Large room blueboard ready for plaster', caption: 'Full Room Blueboard · New Construction', category: 'Blueboard' },
  { src: '/images/XJNO5519.JPG', alt: 'Team working on new construction', caption: 'New Construction · Team Install', category: 'Blueboard' },
  { src: '/images/THJP2626.JPG', alt: 'Ceiling drop installation', caption: 'Drop Ceiling · Renovation', category: 'Ceilings' },
  { src: '/images/WDQP0406.JPG', alt: 'Wall repair and patching', caption: 'Wall Repair · Patch Work', category: 'Repair' },
  { src: '/images/HZNC7100.JPG', alt: 'Angled ceiling close-up', caption: 'Angled Ceiling · Smooth Finish', category: 'Ceilings' },
  { src: '/images/QKOP5402.JPG', alt: 'Close-up blueboard detail', caption: 'Blueboard Close-up · Detail Work', category: 'Blueboard' },
  { src: '/images/HPWQ5817.JPG', alt: 'New construction exterior', caption: 'New Build · MetroWest MA', category: 'Blueboard' },
  { src: '/images/VHNO6568.JPG', alt: 'Stairwell blueboard', caption: 'Stairwell · Curved Wall', category: 'Blueboard' },
  { src: '/images/CSHV7891.JPG', alt: 'Crane delivery large job site', caption: 'Large Scale · Commercial Job', category: 'Blueboard' },
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
