import React from 'react'
import './Anime.css'

export default function Anime() {
    return (
        <section className="anime" id="anime">
            {/* ── PART 1: SECTION HEADER ── */}
            <div className="anime-header reveal">
                <div className="section-label">Original Series</div>
                <h2 className="anime-main-heading">
                    <span className="gold-shadow-text">CRYPTO SHADOW</span><br />
                    <span className="white-sub-text">The Animated Series</span>
                </h2>
                <p className="anime-subtext">
                    An original animated series from the Machi Big Brother universe.
                    When decentralized power meets ancient shadow — the chain never lies.
                </p>
            </div>

            <div className="anime-container">
                {/* ── PART 2: EPISODE 1 HERO PLAYER ── */}
                <div className="anime-hero reveal">
                    <div className="anime-hero-left">
                        <div className="anime-episode-badge">EP 01 · PILOT</div>
                        <div className="anime-player-wrapper">
                            <video
                                controls
                                poster="/images/anime-ep1-poster.jpg"
                                preload="metadata"
                                className="anime-video-player"
                            >
                                <source src="/videos/crypto-shadow-ep1.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="anime-fallback-link">
                            <a href="https://x.com/v/status/2029222408188534877?s=20" target="_blank" rel="noopener noreferrer">
                                Watch on X →
                            </a>
                        </div>
                    </div>
                    <div className="anime-episode-info">
                        <h3 className="anime-ep-title">Episode 1: Crypto Shadow (Pilot)</h3>
                        <p className="anime-ep-desc">
                            The pilot episode. Where it all begins. In a world where blockchain
                            controls power and shadow networks run the chain — one man operates
                            on a different frequency entirely.
                        </p>
                        <div className="anime-ep-meta">
                            <span>Season 1</span>
                            <span>·</span>
                            <span>Episode 1</span>
                            <span>·</span>
                            <span>Pilot</span>
                        </div>
                        <a href="https://x.com/v/status/2029222408188534877?s=20" target="_blank" rel="noopener noreferrer" className="btn-gold anime-watch-btn">
                            Watch on X ↗
                        </a>
                    </div>
                </div>

                {/* ── PART 3: EPISODE GRID (Season 1) ── */}
                <div className="anime-grid-section reveal">
                    <h3 className="anime-grid-heading">Season 1 — Episodes</h3>
                    <div className="anime-grid">
                        {/* Card 1 - Active */}
                        <div className="anime-card anime-card-active">
                            <div className="anime-card-thumb">
                                <div className="anime-thumb-bg" style={{ backgroundImage: 'url(/images/anime-ep1-poster.jpg)' }}></div>
                                <div className="anime-card-overlay">
                                    <div className="anime-play-btn">▶</div>
                                </div>
                                <div className="anime-card-num">EP 01</div>
                            </div>
                            <div className="anime-card-body">
                                <span className="anime-card-tag">AVAILABLE</span>
                                <h4 className="anime-card-title">Crypto Shadow (Pilot)</h4>
                            </div>
                        </div>

                        {/* Card 2, 3, 4 - Locked */}
                        {[2, 3, 4].map(num => (
                            <div key={num} className="anime-card anime-card-locked">
                                <div className="anime-card-thumb">
                                    <div className="anime-card-overlay">
                                        <span className="anime-lock-icon">🔒</span>
                                        <span className="anime-locked-text">Coming Soon</span>
                                    </div>
                                    <div className="anime-card-num">EP 0{num}</div>
                                </div>
                                <div className="anime-card-body">
                                    <span className="anime-card-tag">COMING SOON</span>
                                    <h4 className="anime-card-title">Episode {num}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── PART 4: SERIES LORE BLOCK ── */}
                <div className="anime-lore reveal-left">
                    <h3 className="anime-lore-heading">About The Series</h3>
                    <p className="anime-lore-text">
                        Crypto Shadow is an original animated series set in a near-future world
                        where decentralized networks have replaced governments. One legendary
                        operator — known only as Big Brother — moves through the shadows of the
                        chain with a philosophy no algorithm can predict: absolute conviction,
                        zero fear, infinite reload.
                    </p>
                    <div className="anime-stats">
                        <div className="anime-stat-box">
                            <span className="anime-stat-val">Season 1</span>
                            <span className="anime-stat-label">Now Airing</span>
                        </div>
                        <div className="anime-stat-box">
                            <span className="anime-stat-val">4 Episodes</span>
                            <span className="anime-stat-label">Planned</span>
                        </div>
                        <div className="anime-stat-box">
                            <span className="anime-stat-val">Solana</span>
                            <span className="anime-stat-label">Powered By</span>
                        </div>
                    </div>
                </div>

                {/* ── PART 5: SUBSCRIBE / NOTIFY ROW ── */}
                <div className="anime-subscribe reveal">
                    <p>New episodes drop when the market least expects it.</p>
                    <a href="https://x.com/i/communities/2028397843573018820" target="_blank" rel="noopener noreferrer" className="btn-gold">
                        Join Community for Updates →
                    </a>
                </div>
            </div>
        </section>
    )
}
