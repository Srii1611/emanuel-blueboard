'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 900,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: scrolled ? '0.8rem 4rem' : '1.2rem 4rem',
      background: 'rgba(13,13,13,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(201,168,76,0.2)',
      transition: 'all 0.3s ease',
    }}>
      <Link href="/" style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.5rem',
        letterSpacing: '0.15em',
        color: 'var(--gold)',
        textDecoration: 'none',
      }}>
        EBC <span style={{ color: 'var(--cream)' }}>|</span> Emanuel Blueboard
      </Link>

      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {[
          { label: 'Services', href: '#services' },
          { label: 'Gallery', href: '#gallery' },
          { label: 'About', href: '#about' },
          { label: 'Process', href: '#process' },
        ].map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="nav-link">{label}</a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-link nav-cta">Get a Quote</a>
        </li>
      </ul>
    </nav>
  )
}
