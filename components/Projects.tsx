import Image from 'next/image'

const projects = [
  { src: '/images/hero-banner.jpg', type: 'New Construction · Framingham MA', name: 'Vaulted Master Suite' },
  { src: '/images/ceiling-diamond-plaster.jpg', type: 'Specialty Ceiling · MetroWest', name: 'Diamond Ceiling Detail' },
  { src: '/images/blueboard-stairwell-install.png', type: 'Specialty · New Construction', name: 'Stairwell Blueboard Install' },
  { src: '/images/blueboard-full-room.png', type: 'New Construction · MetroWest', name: 'Full Room Blueboard' },
  { src: '/images/crew-vaulted-ceiling-plaster.jpg', type: 'Finish Work · MetroWest MA', name: 'Vaulted Ceiling Plastering' },
  { src: '/images/blueboard-vaulted-room.jpg', type: 'New Construction · MetroWest', name: 'Vaulted Room Blueboard' },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div style={{ padding: '0 4rem', marginBottom: '4rem' }} className="fade-up">
        <div className="section-label">Selected Work</div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1 }}>
          Featured <span style={{ color: 'var(--gold)' }}>Projects</span>
        </h2>
      </div>

      <div className="projects-scroll">
        {projects.map((p) => (
          <div key={p.name} className="project-card" style={{position:'relative', overflow:'hidden', height:'480px', borderRadius:'8px'}}>
            <Image src={p.src} alt={p.name} fill style={{objectFit:'cover'}} />
            <div className="project-info">
              <div className="project-type">{p.type}</div>
              <div className="project-name">{p.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
