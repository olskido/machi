import React, { useState } from 'react'
import './Council.css'

const supporters = [
  {
    handle: '@KingOnEth',
    name: 'KING',
    avatar: '👑',
    verified: true,
    date: 'March 2026',
    label: 'ALPHA DEFENDER',
    url: 'https://x.com/KingOnEth/status/2028830447296241916',
    screenshot: '/images/kol-king.png',
    excerpt: `"The fact that @machibigbrother was even in a position to have $74M is already elite. You don't accidentally get there. Because the ones laughing from the sidelines rarely step on the field. Respect to @machibigbrother for playing the game at that level."`,
    fullTweet: [
      "Don't be like these lames pocket watching and posting about it.",
      "What another man does with his money has nothing to do with you.",
      "The fact that @machibigbrother was even in a position to have $74M is already elite. You don't accidentally get there.",
      "And let's be honest $74M clearly wasn't his last. Meanwhile, most of the people laughing wouldn't know what to do with $1,000... let alone $74M.",
      "Stop worrying about another man's pockets. Go build something. Go take risks. Go create the kind of life where losing $74M is even a possibility for you.",
      "Because the ones laughing from the sidelines rarely step on the field.",
      "Respect to @machibigbrother for playing the game at that level. Hopefully one day I could meet and connect with this legend and learn from him.",
      "Sending more blessings to Machi — KING",
    ],
  },
  {
    handle: '@BAYC1999',
    name: 'Robbie 🍌',
    avatar: '🦍',
    verified: true,
    date: 'March 2, 2026',
    label: 'APE COUNCIL',
    url: 'https://x.com/BAYC1999/status/2028577108398920007',
    screenshot: '/images/kol-machi-tweet.png',
    excerpt: `"What happened with the last lawsuit? Did it ever get settled and your innocence proven? Just repost that if so and he will know you mean business."`,
    fullTweet: [
      "What happened with the last lawsuit? Did it ever get settled and your innocence proven?",
      "Just repost that if so and he will know you mean business.",
    ],
  },
  {
    handle: '@sooon_eth',
    name: 'sooon.eth',
    avatar: '🌊',
    verified: true,
    date: 'Aug 16, 2023',
    label: 'NFT DEFENDER',
    url: 'https://x.com/sooon_eth/status/1691600948030795981',
    screenshot: null,
    excerpt: `"Machi big brother provides liquidity to an industry that's illiquid. He isn't hurting NFTs whatsoever. Machi pretty much is your exit liquidity."`,
    fullTweet: [
      "Machi big brother provides liquidity to an industry that's illiquid. He isn't hurting NFTs whatsoever. Machi pretty much is your exit liquidity.",
      "But seriously it's not Machi to blame. It's the community members that dumped and the high expectations set from previous experiences.",
    ],
  },
  {
    handle: '@MightyDylanK',
    name: 'Dylan K',
    avatar: '⚡',
    verified: true,
    date: 'Sep 2023',
    label: 'DAO SUPPORTER',
    url: 'https://x.com/MightyDylanK/status/1703117778062889039',
    screenshot: null,
    excerpt: `"Finally a proposal I can support. @machibigbrother you got my full support. Well done."`,
    fullTweet: [
      "Finally a proposal I can support.",
      "@machibigbrother you got my full support. Well done.",
    ],
  },
]

export default function Council() {
  const [active, setActive] = useState(0)
  const current = supporters[active]

  return (
    <section className="council" id="council">
      <div className="council-inner">

        {/* Header */}
        <div className="council-header reveal">
          <div className="section-label">The Council</div>
          <h2 className="council-title">
            Real Ones<br />
            <span className="gold-text">Stood Up.</span>
          </h2>
          <p className="council-desc">
            When CT came for Big Brother, these voices cut through the noise.
          </p>
        </div>

        {/* Machi's own statement */}
        <div className="machi-statement reveal">
          <div className="statement-badge">FROM THE MAN HIMSELF · MAR 2, 2026</div>
          <div className="statement-card">
            <div className="statement-quote-mark">"</div>
            <blockquote className="statement-quote">
              Brother I will sue for defamation.<br />
              I have never stolen any money.
            </blockquote>
            <div className="statement-footer">
              <span className="statement-handle">@machibigbrother</span>
              <span className="statement-stats">286 ❤️ · 102k views</span>
            </div>
          </div>
        </div>

        {/* KOL layout */}
        <div className="council-layout">
          {/* Sidebar tabs */}
          <div className="council-tabs reveal">
            <div className="tabs-label">Voices of Support</div>
            {supporters.map((s, i) => (
              <button
                key={i}
                className={`council-tab ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="tab-avatar">{s.avatar}</span>
                <div className="tab-info">
                  <span className="tab-name">{s.name}</span>
                  <span className="tab-handle">{s.handle}</span>
                </div>
                <span className="tab-badge">{s.label}</span>
              </button>
            ))}
          </div>

          {/* Active tweet panel */}
          <div className="council-panel reveal-right" key={active}>
            {current.screenshot && (
              <div className="panel-screenshot">
                <img src={current.screenshot} alt="" className="panel-screenshot-img" />
              </div>
            )}

            <div className="panel-body">
              {/* Author row */}
              <div className="panel-author">
                <div className="panel-avatar">{current.avatar}</div>
                <div className="panel-author-info">
                  <div className="panel-name-row">
                    <span className="panel-name">{current.name}</span>
                    {current.verified && <span className="panel-verified">✓</span>}
                  </div>
                  <span className="panel-handle">{current.handle}</span>
                </div>
                <span className="panel-x">𝕏</span>
              </div>

              <div className="panel-label">{current.label}</div>

              {/* Tweet body */}
              <div className="panel-tweet">
                {current.fullTweet.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              {/* Footer */}
              <div className="panel-footer">
                <span className="panel-date">{current.date}</span>
                <a
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel-link"
                >
                  View on X →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="council-note reveal">
          <div className="divider" />
          <p>
            The $MACHI community rallied behind Big Brother — routing trading fees directly to
            his wallet as degen solidarity.{' '}
            <a
              href="https://x.com/i/communities/2028397843573018820"
              target="_blank"
              rel="noopener noreferrer"
              className="note-link"
            >
              Join the X Community →
            </a>
          </p>
        </div>

      </div>
    </section>
  )
}
