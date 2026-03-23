'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/#about' },
    { label: 'Process', href: '/#process' },
  ]

  return (
    <>
      <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Image
            src="/images/emanuel-blueboard-logo.png"
            alt="Emanuel Blueboard Corporation"
            width={140}
            height={140}
            style={{ objectFit: 'contain', height: '120px', width: '120px' }}
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="nav-links-desktop">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className="nav-link">{label}</Link>
            </li>
          ))}
          <li>
            <a href="/#contact" className="nav-link nav-cta">Get a Quote</a>
          </li>
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`ham-line ${menuOpen ? 'open-1' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'open-2' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'open-3' : ''}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'drawer-open' : ''}`}>
        {links.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
        <a
          href="/#contact"
          className="mobile-nav-link mobile-nav-cta"
          onClick={() => setMenuOpen(false)}
        >
          Get a Quote
        </a>
      </div>
    </>
  )
}
