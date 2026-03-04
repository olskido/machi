import React from 'react'
import './Community.css'

const CA = 'ATBR4i19gcQ31Rfr7ymA2XvkCQEAkNFGBtVKTmdqpump'

const communityLinks = [
  { label: '$MACHI on Pump.fun', href: `https://pump.fun/coin/${CA}`, icon: <img src="/images/pumpfun.png" alt="Pump.fun" style={{ width: '1.2em', height: '1.2em' }} /> },
  { label: 'X Community (907+ Members)', href: 'https://x.com/i/communities/2028397843573018820', icon: '𝕏' },
  { label: '@machibigbrother', href: 'https://x.com/machibigbrother', icon: <img src="/images/machi-logo.png" alt="Machi" style={{ width: '1.2em', height: '1.2em', borderRadius: '50%' }} /> },
  { label: 'Chart on DexScreener', href: `https://dexscreener.com/solana/${CA}`, icon: <img src="/images/dexscreener.png" alt="DexScreener" style={{ width: '1.2em', height: '1.2em' }} /> },
]

const socials = [
  { label: 'X', href: 'https://x.com/machibigbrother', icon: '𝕏' },
  { label: 'Community', href: 'https://x.com/i/communities/2028397843573018820', icon: '👥' },
  { label: 'Pump.fun', href: `https://pump.fun/coin/${CA}`, icon: <img src="/images/pumpfun.png" alt="Pump.fun" style={{ width: '1.2em', height: '1.2em' }} /> },
]

export default function Community() {
  return (
    <section className="community" id="community">
      {/* CTA Block */}
      <div className="cta-block">
        <div className="cta-bg">
          <img src="/images/hero-main.png" alt="" className="cta-bg-img" aria-hidden />
          <div className="cta-overlay" />
        </div>
        <div className="cta-content reveal">
          <div className="cta-coin">
            <img src="/images/machi-coin.png" alt="$MACHI" className="cta-coin-img" />
          </div>
          <h2 className="cta-heading">
            Join the Brotherhood.<br />
            <span className="gold-text">Hold $MACHI.</span>
          </h2>
          <p className="cta-sub">
            907+ members strong. The community that degens together, wins together.
            Big Brother never quits — and neither do we.
          </p>
          <div className="cta-links">
            {communityLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`cta-link ${i === 0 ? 'cta-link-primary' : ''}`}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/images/machi-coin.png" alt="$MACHI" className="footer-logo-img" />
                <span className="footer-logo-text">$MACHI</span>
              </div>
              <p className="footer-tagline">
                From hip-hop to HL perps.<br />
                Big Brother Never Quits.
              </p>
              <div className="footer-socials">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social">
                    <span>{s.icon}</span>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* CA */}
            <div className="footer-ca">
              <span className="footer-ca-label">Contract Address (Solana)</span>
              <span className="footer-ca-addr">{CA}</span>
              <div className="footer-divider" />
              <p className="footer-note">
                $MACHI is a community memecoin with no official team, no VC allocation,
                and no promises. It exists because the internet loves a legend.
                This is not financial advice. DYOR.
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">
              © 2026 $MACHI Community — Not affiliated with Jeffrey Huang personally
            </span>
            <span className="footer-cjk">大哥永不放弃</span>
          </div>
        </div>
      </footer>
    </section>
  )
}
