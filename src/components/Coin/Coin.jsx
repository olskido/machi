import React, { useState } from 'react'
import './Coin.css'

const CA = 'ATBR4i19gcQ31Rfr7ymA2XvkCQEAkNFGBtVKTmdqpump'

const tokenomics = [
  { label: 'Supply', value: '1,000,000,000', sub: '1 Billion Tokens' },
  { label: 'Tax', value: '0%', sub: 'No Buy/Sell Tax' },
  { label: 'Dev Alloc', value: '0%', sub: 'Community-Owned' },
  { label: 'Chain', value: 'SOL', sub: 'Solana Network' },
]

const links = [
  {
    label: 'Buy on Pump.fun',
    href: `https://pump.fun/coin/${CA}`,
    icon: <img src="/images/pumpfun.png" alt="Pump.fun" style={{ width: '1.2em', height: '1.2em' }} />,
    primary: true,
  },
  {
    label: 'DexScreener',
    href: `https://dexscreener.com/solana/${CA}`,
    icon: <img src="/images/dexscreener.png" alt="DexScreener" style={{ width: '1.2em', height: '1.2em' }} />,
    primary: false,
  },
  /* {
     label: 'X Community',
     href: 'https://x.com/i/communities/2028397843573018820',
     icon: '𝕏',
     primary: false,
   },
   {
     label: '@machibigbrother',
     href: 'https://x.com/machibigbrother',
     icon: <img src="/images/machi-logo.png" alt="Machi" style={{ width: '1.2em', height: '1.2em', borderRadius: '50%' }} />,
     primary: false,
   },*/
]

export default function Coin() {
  const [copied, setCopied] = useState(false)

  const copyCA = () => {
    navigator.clipboard.writeText(CA)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section className="coin" id="coin">
      <div className="coin-inner">
        {/* Header */}
        <div className="coin-header reveal">
          <div className="section-label">The Coin</div>
          <h2 className="coin-title">
            <span className="gold-text">$MACHI</span><br />
            Degen Saving Degen
          </h2>
          <p className="coin-desc">
            A community-born memecoin on Solana. Trading fees route directly to Machi's wallet.
            The ultimate act of degen solidarity.
          </p>
        </div>

        {/* Main content */}
        <div className="coin-layout">
          {/* Left: Coin visual + tokenomics */}
          <div className="coin-left reveal-left">
            {/* Coin art */}
            <div className="coin-art-wrapper">
              <div className="coin-glow-ring" />
              <img
                src="/images/machi-coin.png"
                alt="$MACHI Coin"
                className="coin-art"
              />
              <div className="coin-spin-ring" />
            </div>

            {/* Ticker */}
            <div className="coin-ticker">
              <span className="ticker-sym">$MACHI</span>
              <span className="ticker-chain">SOL</span>
            </div>

            {/* Tokenomics */}
            <div className="tokenomics">
              {tokenomics.map((t, i) => (
                <div key={i} className="token-row">
                  <span className="token-label">{t.label}</span>
                  <div className="token-right">
                    <span className="token-value">{t.value}</span>
                    <span className="token-sub">{t.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CA */}
            <button className="coin-ca-block" onClick={copyCA}>
              <span className="coin-ca-label">CONTRACT ADDRESS</span>
              <span className="coin-ca-addr">{CA}</span>
              <span className="coin-ca-copy">{copied ? '✓ Copied to clipboard!' : 'Click to copy'}</span>
            </button>
          </div>

          {/* Right: Chart + links */}
          <div className="coin-right reveal-right">
            {/* DEX Chart */}
            <div className="chart-container">
              <div className="chart-header">
                <span className="chart-title">$MACHI / SOL — Live Chart</span>
                <a
                  href={`https://dexscreener.com/solana/${CA}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chart-link"
                >
                  Full Chart ↗
                </a>
              </div>
              <div className="chart-frame-wrapper">
                <iframe
                  src={`https://dexscreener.com/solana/${CA}?embed=1&theme=dark&trades=0&info=0`}
                  className="chart-iframe"
                  title="$MACHI DEX Chart"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Action links */}
            <div className="coin-links">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`coin-link ${link.primary ? 'coin-link-primary' : ''}`}
                >
                  <span className="link-icon">{link.icon}</span>
                  <span className="link-label">{link.label}</span>
                  <span className="link-arrow">→</span>
                </a>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="coin-disclaimer">
              $MACHI is a community memecoin. Not financial advice. DYOR.
              This is crypto — you can lose everything. If you're okay with that, welcome aboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
