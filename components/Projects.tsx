import Image from 'next/image'

const projects = [
  { src: '/images/vaulted-ceiling-plastering-new-build.jpg', type: 'New Construction · Framingham MA', name: 'Vaulted Master Suite' },
  { src: '/images/architectural-diamond-ceiling-plaster.jpg', type: 'Specialty Ceiling · MetroWest', name: 'Architectural Diamond Ceiling' },
  { src: '/images/full-room-blueboard-new-construction.jpg', type: 'New Build · Full Room', name: 'Living Room Blueboard & Plaster' },
  { src: '/images/drop-ceiling-renovation-metrowest.jpg', type: 'Renovation · Drop Ceiling', name: 'Open Plan Ceiling Renovation' },
  { src: '/images/curved-stairwell-blueboard-installation.jpg', type: 'Specialty · Curved Walls', name: 'Curved Stairwell Installation' },
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
          <div key={p.name} className="project-card">
            <Image
              src={p.src}
              alt={p.name}
              width={380}
              height={480}
              className="project-img"
              style={{ objectFit: 'cover' }}
            />
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
