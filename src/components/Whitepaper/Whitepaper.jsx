import React from 'react'
import './Whitepaper.css'

export default function Whitepaper() {
    const sections = [
        "01 — The Man Behind the Coin",
        "02 — The Problem With Manufactured Community",
        "03 — The Philosophy of $MACHI",
        "04 — Tokenomics",
        "05 — Community Architecture",
        "06 — Ecosystem and Trading",
        "07 — Development Roadmap",
        "08 — Risk Disclosure",
        "09 — Closing Remarks",
        "10 — Legal Disclaimer"
    ];

    return (
        <section className="whitepaper" id="whitepaper">
            <div className="whitepaper-inner">
                {/* PART 1 — Section Header */}
                <div className="whitepaper-header reveal">
                    <div className="section-label">Official Document</div>
                    <h2 className="whitepaper-title">
                        <span className="gold-text">$MACHI</span><br />
                        Whitepaper v1.0
                    </h2>
                    <p className="whitepaper-desc">
                        A transparent record of what $MACHI is, where it came from,
                        and why it exists. Written without manufactured hype. Read it.
                    </p>
                </div>

                {/* PART 2 — Document Preview Card */}
                <div className="whitepaper-card reveal">
                    <div className="wp-card-left">
                        <img src="/images/machi-coin.png" alt="$MACHI Coin" className="wp-coin-img" />
                        <h3 className="wp-coin-title">$MACHI</h3>
                        <span className="wp-subtitle">Community Whitepaper</span>
                        <span className="wp-version">Version 1.0 — March 2026</span>
                    </div>
                    <div className="wp-card-right">
                        <ul className="wp-sections">
                            {sections.map((sec, idx) => {
                                const [num, title] = sec.split(' — ');
                                return (
                                    <li key={idx} className="wp-section-item">
                                        <span className="wp-sec-num">{num}</span>
                                        <span className="wp-sec-title">{title}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* PART 3 — Download and Key Stats row */}
                <div className="whitepaper-footer reveal">
                    <a
                        href="/whitepaper/MACHI_Whitepaper_v1.docx"
                        download
                        className="btn-gold wp-download-btn"
                    >
                        Download Whitepaper — PDF
                    </a>
                    <div className="wp-stats">
                        <span className="wp-stat-pill">25 Pages</span>
                        <span className="wp-stat-pill">10 Sections</span>
                        <span className="wp-stat-pill">Version 1.0</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
