import React, { useState, useEffect } from 'react'
import './Anime.css'

const episodes = [
    {
        id: 1,
        num: "01",
        title: "The Ledger",
        desc: "The pilot episode. Where it all begins. In a world where blockchain controls power and shadow networks run the chain — one man operates on a different frequency entirely.",
        videoSrc: "/videos/the-ledger-ep1.mp4",
        posterSrc: "/images/memes1/lucid-origin_Aspect_Ratio_16_9_Style_hyper-detailed_3D_animated_cinematic_frame_Create_a_powe-0.jpg",
        link: "https://x.com/ketchuppp22/status/2030933075912282429",
        available: true
    },
    {
        id: 2,
        num: "02",
        title: "Ape",
        desc: "Episode 2 follows the next chapter of the saga. Watch it directly on X via the community link below.",
        videoSrc: "",
        posterSrc: "/images/anime-ep2-poster.jpg",
        link: "https://x.com/ketchuppp22/status/2032800622756466811?s=46",
        available: true
    },
    {
        id: 3,
        num: "03",
        title: "Revenge",
        desc: "Watch it directly on X via the community link below.",
        videoSrc: "",
        posterSrc: "/images/anime-ep3-poster.jpg",
        link: "https://x.com/i/status/2035359400336982492",
        available: true
    },
    { id: 4, num: "04", title: "Episode 4", available: false }
];

export default function Anime() {
    const [activeEp, setActiveEp] = useState(episodes[0]); // Set EP1 as active initially

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#anime') {
                setActiveEp(episodes[0]);
            }
        };
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

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
                {/* ── PART 2: HERO PLAYER ── */}
                <div className="anime-hero reveal">
                    <div className="anime-hero-left">
                        <div className="anime-episode-badge">EP {activeEp.num}</div>
                        <div className="anime-player-wrapper">
                            <video
                                key={activeEp.videoSrc}
                                controls
                                poster={activeEp.posterSrc || '/images/memes1/lucid-origin_Aspect_Ratio_16_9_Style_hyper-detailed_3D_animated_cinematic_frame_Create_a_powe-0.jpg'}
                                preload="metadata"
                                className="anime-video-player"
                            >
                                <source src={activeEp.videoSrc} type="video/mp4" />
                            </video>
                        </div>
                        <div className="anime-fallback-link">
                            <a href={activeEp.link} target="_blank" rel="noopener noreferrer">
                                Watch on X →
                            </a>
                        </div>
                    </div>
                    <div className="anime-episode-info">
                        <h3 className="anime-ep-title">Episode {activeEp.id}: {activeEp.title}</h3>
                        <p className="anime-ep-desc">
                            {activeEp.desc}
                        </p>
                        <div className="anime-ep-meta">
                            <span>Season 1</span>
                            <span>·</span>
                            <span>Episode {activeEp.id}</span>
                            {activeEp.id === 1 && <span>·</span>}
                            {activeEp.id === 1 && <span>Pilot</span>}
                        </div>
                        <a href={activeEp.link} target="_blank" rel="noopener noreferrer" className="btn-gold anime-watch-btn">
                            Watch on X ↗
                        </a>
                    </div>
                </div>

                {/* ── PART 3: EPISODE GRID (Season 1) ── */}
                <div className="anime-grid-section reveal">
                    <h3 className="anime-grid-heading">Season 1 — Episodes</h3>
                    <div className="anime-grid">
                        {episodes.filter(ep => ep.available).map(ep => (
                            <div
                                key={ep.id}
                                className={`anime-card ${activeEp.id === ep.id ? 'anime-card-active' : 'anime-card-available'}`}
                                onClick={() => setActiveEp(ep)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="anime-card-thumb">
                                    <div className="anime-thumb-bg" style={{ backgroundImage: `url(${ep.posterSrc || '/images/memes1/lucid-origin_Aspect_Ratio_16_9_Style_hyper-detailed_3D_animated_cinematic_frame_Create_a_powe-0.jpg'})` }}></div>
                                    <div className="anime-card-overlay">
                                        <div className="anime-play-btn">▶</div>
                                    </div>
                                    <div className="anime-card-num">EP {ep.num}</div>
                                </div>
                                <div className="anime-card-body">
                                    <span className="anime-card-tag">AVAILABLE</span>
                                    <h4 className="anime-card-title">{ep.title}</h4>
                                </div>
                            </div>
                        ))}

                        {/* Locked */}
                        {episodes.filter(ep => !ep.available).map(ep => (
                            <div key={ep.id} className="anime-card anime-card-locked">
                                <div className="anime-card-thumb">
                                    <div className="anime-card-overlay">
                                        <span className="anime-lock-icon">🔒</span>
                                        <span className="anime-locked-text">Coming Soon</span>
                                    </div>
                                    <div className="anime-card-num">EP {ep.num}</div>
                                </div>
                                <div className="anime-card-body">
                                    <span className="anime-card-tag">COMING SOON</span>
                                    <h4 className="anime-card-title">{ep.title}</h4>
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
                    <a href="https://x.com/i/communities/2029464249416684023" target="_blank" rel="noopener noreferrer" className="btn-gold">
                        Join Community for Updates →
                    </a>
                </div>
            </div>
        </section>
    )
}
