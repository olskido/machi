import React, { useState, useEffect } from 'react'
import './Hero.css'

const CA = 'ATBR4i19gcQ31Rfr7ymA2XvkCQEAkNFGBtVKTmdqpump'

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  const copyCA = () => {
    navigator.clipboard.writeText(CA)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section className="hero" id="hero">
      {/* Full-bleed background image — sharp, no blur */}
      <div className="hero-bg">
        <img
          src="/images/hero-main.jpg"
          alt="Machi Big Brother"
          className="hero-bg-img"
        />
        {/* Subtle dark gradient only at edges — keeps image sharp */}
        <div className="hero-grad-left" />
        <div className="hero-grad-bottom" />
        <div className="hero-grad-top" />
      </div>

      {/* Minimal corner marks */}
      <div className="corner corner-tl" />
      <div className="corner corner-tr" />

      {/* Content — left-aligned, clean */}
      <div className={`hero-content ${loaded ? 'loaded' : ''}`}>
        <div className="hero-eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Solana Memecoin</span>
        </div>

        <h1 className="hero-title">
          <span className="title-machi">$MACHI</span>
          <span className="title-sub">Big Brother<br />Never Quits</span>
        </h1>

        <p className="hero-tagline">
          From Taiwan's hip-hop pioneer to crypto's most<br />
          legendary degen. The community coin.
        </p>

        {/* Actions */}
        <div className="hero-actions">
          <a
            href={`https://pump.fun/coin/${CA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hero-btn-buy"
          >
            Buy $MACHI
          </a>
          <a href="#story" className="btn-outline">
            Read The Story
          </a>
        </div>

        {/* CA — compact */}
        <button className="hero-ca" onClick={copyCA}>
          <span className="ca-pill-label">CA</span>
          <span className="ca-pill-addr">{CA.slice(0, 8)}…{CA.slice(-6)}</span>
          <span className={`ca-pill-action ${copied ? 'copied' : ''}`}>
            {copied ? '✓ Copied' : 'Copy'}
          </span>
        </button>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
