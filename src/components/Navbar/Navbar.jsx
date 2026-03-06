import React, { useState, useEffect } from 'react'
import './Navbar.css'

const CA = 'ATBR4i19gcQ31Rfr7ymA2XvkCQEAkNFGBtVKTmdqpump'

const navLinks = [
  { label: 'Story', href: '#story' },
  { label: 'The Saga', href: '#degen-saga' },
  { label: 'Memes', href: '#memes' },
  { label: 'Council', href: '#council' },
  { label: 'Anime', href: '#anime' },
  { label: 'Whitepaper', href: '#whitepaper' },
  { label: '$MACHI', href: '#coin' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [copied, setCopied] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const copyCA = () => {
    navigator.clipboard.writeText(CA)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          {/* Logo */}
          <a href="#" className="nav-logo">
            <img src="/images/machi-coin.png" alt="$MACHI" className="nav-logo-img" />
            <span className="nav-logo-text">$MACHI</span>
          </a>

          {/* Desktop links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="nav-link">{link.label}</a>
              </li>
            ))}
          </ul>

          {/* CA + Buy */}
          <div className="nav-actions">
            <button className="ca-badge" onClick={copyCA} title="Copy contract address">
              <span className="ca-label">CA:</span>
              <span className="ca-addr">{CA.slice(0, 6)}…{CA.slice(-4)}</span>
              <span className="ca-copy-icon">{copied ? '✓' : '⧉'}</span>
            </button>
            <a
              href={`https://pump.fun/coin/${CA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold nav-buy"
              style={{ color: '#fff' }}
            >
              Buy $MACHI
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="ca-badge mobile-ca" onClick={copyCA}>
            CA: {CA.slice(0, 8)}…{copied ? ' ✓ Copied!' : ''}
          </button>
          <a
            href={`https://pump.fun/coin/${CA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ marginTop: '0.5rem', textAlign: 'center', color: '#fff' }}
          >
            Buy $MACHI
          </a>
        </div>
      </nav>
    </>
  )
}
