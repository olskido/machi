import React, { useState } from 'react'
import './Memes.css'

const allMemes = [
  {
    id: 1,
    img: '/images/meme-muscle.png',
    caption: 'Liquidated 145 times. Still built different. 💪',
    tag: 'GYM BRO',
  },
  {
    id: 2,
    img: '/images/meme-pizza.png',
    caption: 'The whole crypto forest feasting on Big Brother\'s liquidity 🍕',
    tag: 'COMMUNITY FEAST',
  },
  {
    id: 3,
    img: '/images/meme-whale.png',
    caption: 'Machi vs the market. He has a pigeon. He will win. 🐦',
    tag: 'WHALE HUNTER',
  },
  {
    id: 4,
    img: '/images/meme-fantasy.png',
    caption: 'Coffee. Mountains. 25x. Same energy. ☕',
    tag: 'ZEN MODE',
  },
  {
    id: 5,
    img: '/images/meme-monk.png',
    caption: '888 — Something very good is coming your way. Trust Big Brother 🙏',
    tag: 'SPIRITUAL',
  },
  // Hidden until "see more"
  {
    id: 6,
    img: '/images/meme-viking.png',
    caption: 'How Machi handles a bad Twitter ratio ⚡',
    tag: 'BERSERKER',
  },
  {
    id: 7,
    img: '/images/meme-space.png',
    caption: 'Already thinking about the next 25x from orbit 🌍',
    tag: 'GALAXY BRAIN',
  },
  {
    id: 8,
    img: '/images/meme-puppet.png',
    caption: 'Big Brother pulling the strings of the entire market 🎭',
    tag: 'PUPPET MASTER',
  },
  {
    id: 9,
    img: '/images/meme-cartoon.png',
    caption: 'The smile of a man who just re-opened after liquidation 😁',
    tag: 'UNBOTHERED',
  },
  {
    id: 10,
    img: '/images/meme-bayc.png',
    caption: 'The man and his ape. A love story. 🦍',
    tag: 'APE GANG',
  },
]

export default function Memes() {
  const [showAll, setShowAll] = useState(false)
  const [lightbox, setLightbox] = useState(null)

  const visibleMemes = showAll ? allMemes : allMemes.slice(0, 5)

  return (
    <section className="memes" id="memes">
      <div className="memes-inner">
        {/* Header */}
        <div className="memes-header reveal">
          <div className="section-label">Community Memes</div>
          <h2 className="memes-title">
            The Internet Made Him<br />
            <span className="gold-text">A Legend.</span>
          </h2>
          <p className="memes-desc">
            When you lose $74M and the community makes memes instead of mourning.
          </p>
        </div>

        {/* Meme Grid — masonry-style mixed sizes */}
        <div className={`meme-grid ${showAll ? 'expanded' : ''}`}>
          {visibleMemes.map((meme, i) => (
            <div
              key={meme.id}
              className={`meme-card reveal ${i === 0 ? 'meme-featured' : ''}`}
              style={{ animationDelay: `${i * 0.07}s` }}
              onClick={() => setLightbox(meme)}
            >
              <div className="meme-img-wrap">
                <img src={meme.img} alt={meme.caption} className="meme-img" loading="lazy" />
                <div className="meme-hover-overlay">
                  <span className="meme-view-btn">View</span>
                </div>
                <span className="meme-tag">{meme.tag}</span>
              </div>
              <p className="meme-caption">{meme.caption}</p>
            </div>
          ))}
        </div>

        {/* See More / See Less button */}
        {!showAll && (
          <div className="meme-see-more reveal">
            <div className="see-more-fade" />
            <button className="see-more-btn" onClick={() => setShowAll(true)}>
              <span>See More Memes</span>
              <span className="see-more-count">+{allMemes.length - 5} more</span>
            </button>
          </div>
        )}

        {showAll && (
          <div className="meme-collapse reveal">
            <button className="btn-outline" onClick={() => setShowAll(false)}>
              Show Less ↑
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="memes-cta reveal">
          <span className="cta-text">Got your own Machi meme?</span>
          <a
            href="https://x.com/i/communities/2028397843573018820"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Post In The Community →
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox.img} alt={lightbox.caption} className="lightbox-img" />
            <div className="lightbox-caption">
              <span className="lightbox-tag">{lightbox.tag}</span>
              <p>{lightbox.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
