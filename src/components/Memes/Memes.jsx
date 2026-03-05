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
  {
    id: 11,
    img: '/images/memes1/1.jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 12,
    img: '/images/memes1/2.jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 13,
    img: '/images/memes1/AEq49mbX-8dTsUHV.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 14,
    img: '/images/memes1/Gemini_Generated_Image_cctgnvcctgnvcctg.png',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 15,
    img: '/images/memes1/HCf5gIXWYAACyk_.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 16,
    img: '/images/memes1/HCfF0C3XIAArBvY.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 17,
    img: '/images/memes1/HCfsqQabMAEnL3s.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 18,
    img: '/images/memes1/HCftgJJXcAADsbm.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 19,
    img: '/images/memes1/HCfzh8eW4AA6QAj.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 20,
    img: '/images/memes1/HCg48wwawAAYBdx.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 21,
    img: '/images/memes1/HCgiH9xWoAAUvt6.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 22,
    img: '/images/memes1/HCgoCPgWkAA3O0l.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 23,
    img: '/images/memes1/HCgqdOYXYAE6CNd.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 24,
    img: '/images/memes1/HCgsJ0UboAA3jcf.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 25,
    img: '/images/memes1/HCgvT3BXkAAB0ig.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 26,
    img: '/images/memes1/HCgvvu3XUAIUujJ.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 27,
    img: '/images/memes1/HChH1TmXkAATVzu.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 28,
    img: '/images/memes1/HChUz2vWoAAL5fL.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 29,
    img: '/images/memes1/HCk-ZxiWMAENQ68.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 30,
    img: '/images/memes1/HCk6MiMWEAA1PF_.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 31,
    img: '/images/memes1/HCk6jeQWAAEFJjO.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 32,
    img: '/images/memes1/HCk7iFCXIAAmrZV.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 33,
    img: '/images/memes1/HCkEfN9WQAAVs4R.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 34,
    img: '/images/memes1/HCkNhbqX0AAlukS.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 35,
    img: '/images/memes1/HCk_wW0XkAAB1-C.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 36,
    img: '/images/memes1/HCkzmejWQAAoT_H.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 37,
    img: '/images/memes1/HCl0-PJawAIkgeW.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 38,
    img: '/images/memes1/HCl2GweaQAA0BZb.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 39,
    img: '/images/memes1/HClG8RnWsAAMHig.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 40,
    img: '/images/memes1/HClN4kOWYAEsnx6.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 41,
    img: '/images/memes1/HClQ-n6XgAI9K6U.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 42,
    img: '/images/memes1/HClTVZIWQAAQ8_J.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 43,
    img: '/images/memes1/HClW0oWawAkKrLV.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 44,
    img: '/images/memes1/HClZk66XcAEwaH6.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 45,
    img: '/images/memes1/HClZvecbAAAH7b3.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 46,
    img: '/images/memes1/HCleiaDW4AAjghH.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 47,
    img: '/images/memes1/HClhGUPX0AAPaBj.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 48,
    img: '/images/memes1/HCliEzQXUAApaCE.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 49,
    img: '/images/memes1/HClmhXGawAADZQQ.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 50,
    img: '/images/memes1/HCm2ZM6XsAAEg4O.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 51,
    img: '/images/memes1/HCm489qW4AAfVG6.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 52,
    img: '/images/memes1/HCm4AnXawAU9B0H.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 53,
    img: '/images/memes1/HCm59fbXoAE9W-D.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 54,
    img: '/images/memes1/HCmBMmzaMAAGHUE.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 55,
    img: '/images/memes1/HCmBxXTX0AIS96y.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 56,
    img: '/images/memes1/HCmC8ggXoAAL1Xf.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 57,
    img: '/images/memes1/HCmEnnsX0AEd8LP.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 58,
    img: '/images/memes1/HCmKeaaawAAva91.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 59,
    img: '/images/memes1/HCmM2S6awAQNDxx.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 60,
    img: '/images/memes1/HCmNzp0W4AEdQ0W.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 61,
    img: '/images/memes1/HCmRnAOXkAAWTNc.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 62,
    img: '/images/memes1/HCmVoHfawAALaBR.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 63,
    img: '/images/memes1/HCmd33yWAAAjElN.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 64,
    img: '/images/memes1/HCmsAi5WUAEIYlf.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 65,
    img: '/images/memes1/HCmyS8cawAAzhu3.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 66,
    img: '/images/memes1/HCn3BUGXYAAMPCL.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 67,
    img: '/images/memes1/HCnEy-NbwAAu2yJ.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 68,
    img: '/images/memes1/HCnNTRgXIAAtdCa.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 69,
    img: '/images/memes1/HCnPb5UbUAAVYWW.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 70,
    img: '/images/memes1/HCnVIwOXsAE_skQ.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 71,
    img: '/images/memes1/HCngmpiawAIk7mn.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 72,
    img: '/images/memes1/HCnomLNaMAAb2Dq.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 73,
    img: '/images/memes1/HCoGuv8awAIdCjj.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 74,
    img: '/images/memes1/HCoKSurWoAA6s9v.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 75,
    img: '/images/memes1/HCoZzMNaoAAno7z.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 76,
    img: '/images/memes1/HCooBZCWgAEvQwf.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 77,
    img: '/images/memes1/HCov9CEWgAAQiLw.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 78,
    img: '/images/memes1/HCpJsA9W4AAJBVD.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 79,
    img: '/images/memes1/HCpTzNtXMAAcY_v.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 80,
    img: '/images/memes1/HCpwb_nW4AEkJzf.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 81,
    img: '/images/memes1/NME2Q3Qyhlh23CSn.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 82,
    img: '/images/memes1/e (8).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 83,
    img: '/images/memes1/gg.jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 84,
    img: '/images/memes1/hero-main.jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 85,
    img: '/images/memes1/u5FzHlYVoqKq8V-I.jpeg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 86,
    img: '/images/memes1/unnamed (1).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 87,
    img: '/images/memes1/unnamed (10).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 88,
    img: '/images/memes1/unnamed (11).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 89,
    img: '/images/memes1/unnamed (12).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 90,
    img: '/images/memes1/unnamed (13).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 91,
    img: '/images/memes1/unnamed (14).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 92,
    img: '/images/memes1/unnamed (15).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 93,
    img: '/images/memes1/unnamed (16).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 94,
    img: '/images/memes1/unnamed (17).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 95,
    img: '/images/memes1/unnamed (18).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 96,
    img: '/images/memes1/unnamed (19) (copy).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 97,
    img: '/images/memes1/unnamed (19).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 98,
    img: '/images/memes1/unnamed (2).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 99,
    img: '/images/memes1/unnamed (20).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 100,
    img: '/images/memes1/unnamed (21).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 101,
    img: '/images/memes1/unnamed (22).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 102,
    img: '/images/memes1/unnamed (23).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 103,
    img: '/images/memes1/unnamed (24).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 104,
    img: '/images/memes1/unnamed (25).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 105,
    img: '/images/memes1/unnamed (26).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 106,
    img: '/images/memes1/unnamed (27).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 107,
    img: '/images/memes1/unnamed (3).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 108,
    img: '/images/memes1/unnamed (4).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 109,
    img: '/images/memes1/unnamed (5).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 110,
    img: '/images/memes1/unnamed (6).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 111,
    img: '/images/memes1/unnamed (7).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 112,
    img: '/images/memes1/unnamed (8).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 113,
    img: '/images/memes1/unnamed (9).jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
  },
  {
    id: 114,
    img: '/images/memes1/unnamed.jpg',
    caption: 'Machi Community Meme',
    tag: 'COMMUNITY MEME',
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
