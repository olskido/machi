import React, { useState } from 'react'
import './Story.css'

const eras = [
  {
    id: 'music',
    era: '1990 — 2003',
    title: 'The Hip-Hop Pioneer',
    subtitle: 'From Compton Streets to Taiwanese Stages',
    image: '/images/music-era.png',

    tags: ['L.A. Boyz', 'MACHI Entertainment', 'Warner Music TW'],
    color: '#f0c040',
    body: `Born November 7, 1972, in Yunlin County, Taiwan — immigrated to California at age 2. Growing up in Southern California, Jeffrey soaked up the raw energy of Beastie Boys, N.W.A., and Rage Against the Machine.

At just 18, he co-founded L.A. Boyz with his brother Stanley and cousin Steven — bringing hip-hop culture to Asia before it was cool. Their debut album SHIAM! sold 130,000+ copies. Billboard nominations. Los Angeles Times profiles. Legends.

After L.A. Boyz disbanded in 1997, Jeffrey founded MACHI Entertainment — a full hip-hop label under Warner Music Taiwan. He wasn't just an artist anymore. He was the Big Brother.`,
    stat: { label: 'Albums Released', value: '16+' },
  },
  {
    id: 'tech',
    era: '2010 — 2020',
    title: 'The Tech Mogul',
    subtitle: 'Building Asia\'s Streaming Empire',
    image: '/images/tech-mogul.png',
    tags: ['17 Media', 'M17 Entertainment', 'Paktor', '$60M Exit'],
    color: '#3b82f6',
    body: `Never went past high school. Built a multi-million dollar tech empire anyway.

Post-music, Jeffrey merged his internet company with a Japanese firm for ~$60M. Then in 2015, he founded 17 Media — one of Asia's biggest live-streaming platforms. Singapore-based Paktor acquired control; the companies merged into M17 Entertainment.

Millions of users. International expansion. By 2020, he stepped back to focus on something wilder: the blockchain. The tech era proved one thing — Jeffrey Huang doesn't just adapt to the future. He builds it.`,
    stat: { label: 'Platform Users', value: 'Millions' },
  },
  {
    id: 'crypto',
    era: '2017 — 2023',
    title: 'The Crypto King',
    subtitle: 'DeFi Pioneer & NFT Whale',
    image: '/images/nft-whale.png',
    tags: ['Mithril', 'Cream Finance', '200+ BAYCs', 'DeFi Pioneer'],
    color: '#8b5cf6',
    body: `2017: Mithril (MITH) — a "social mining" token that became one of Asia's most talked-about ICOs. First Taiwanese project listed on Binance? Possibly.

2020: Cream Finance — a Compound fork that became a cornerstone DeFi protocol, reaching hundreds of millions in TVL.

NFT era: One of the largest Bored Ape Yacht Club holders in existence. At peak, his wallet held 200+ BAYCs worth ~$9.5M. He didn't just buy NFTs — he moved markets.

The man who earned the nickname "Big Brother" in music earned it again in crypto — as the whale whose wallet moves made headlines across every major crypto media outlet.`,
    stat: { label: 'BAYC Held (Peak)', value: '200+' },
  },
  {
    id: 'degen',
    era: '2024 — NOW',
    title: 'The Immortal Degen',
    subtitle: 'Hyperliquid\'s Most Legendary Trader',
    image: '/images/liquidation.png',
    tags: ['Hyperliquid', '25x ETH Longs', '$74M Loss', 'Still Buying'],
    color: '#ef4444',
    body: `This is where legends are made and portfolios are destroyed.

September 2025: Jeffrey enters Hyperliquid with 25x–40x leveraged ETH longs near all-time highs. By peak, his account sits at nearly $60M with $44.8M unrealized profit.

Then: October 11, 2025. The cascade begins.

145+ liquidations. $74M in realized losses. Accounts zeroed to $10k–$25k. Every time: he deposits again. Reloads. 25x. Same trade.

While the entire internet watches, mocks, and secretly respects — Machi keeps pressing buy. Because conviction isn't measured in wins. It's measured in how many times you get back up.`,
    stat: { label: 'Times Got Back Up', value: '∞' },
  },
]

export default function Story() {
  const [activeEra, setActiveEra] = useState(0)
  const era = eras[activeEra]

  return (
    <section className="story" id="story">
      <div className="story-inner">
        {/* Header */}
        <div className="story-header reveal">
          <div className="section-label">The Legend</div>
          <h2 className="story-title">
            One Man.<br />
            <span className="gold-text">Four Lifetimes.</span>
          </h2>
          <p className="story-desc">
            Jeffrey Huang has lived more lives than most people dream of.<br />
            Each chapter wilder than the last.
          </p>
        </div>

        {/* Era tabs */}
        <div className="era-tabs reveal">
          {eras.map((e, i) => (
            <button
              key={e.id}
              className={`era-tab ${activeEra === i ? 'active' : ''}`}
              onClick={() => setActiveEra(i)}
              style={{ '--era-color': e.color }}
            >
              <span className="era-tab-number">0{i + 1}</span>
              <span className="era-tab-label">{e.title.split(' ').slice(-1)[0]}</span>
            </button>
          ))}
        </div>

        {/* Era content */}
        <div className="era-content" key={era.id}>
          <div className="era-image-col reveal-left">
            <div className="era-img-wrapper">
              <img src={era.image} alt={era.title} className="era-img" />
              <div className="era-img-overlay" style={{ '--era-color': era.color }} />
              <div className="era-img-badge">
                <span className="badge-value">{era.stat.value}</span>
                <span className="badge-label">{era.stat.label}</span>
              </div>
            </div>
          </div>

          <div className="era-text-col reveal-right">
            <div className="era-period">{era.era}</div>
            <h3 className="era-heading" style={{ color: era.color }}>{era.title}</h3>
            <p className="era-subheading">{era.subtitle}</p>

            <div className="era-tags">
              {era.tags.map((t) => (
                <span key={t} className="era-tag" style={{ '--era-color': era.color }}>{t}</span>
              ))}
            </div>

            <div className="era-body">
              {era.body.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Portrait sidebar */}
        <div className="story-portrait reveal">
          <div className="portrait-wrapper">
            <img src="/images/portrait-dark.png" alt="Jeffrey Huang" className="portrait-img" />
            <div className="portrait-caption">
              <span className="portrait-name">Jeffrey Huang</span>
              <span className="portrait-aka">黃立成 · Machi Big Brother</span>
            </div>
          </div>
          <blockquote className="portrait-quote">
            "I have never stolen any money. The story continues."
            <cite>— @machibigbrother, March 2026</cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
