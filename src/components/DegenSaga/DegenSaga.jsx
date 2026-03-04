import React, { useEffect, useRef, useState } from 'react'
import './DegenSaga.css'

const events = [
  {
    date: 'Early 2025',
    type: 'win',
    title: 'The Mountain Builds',
    amount: '+$44.8M',
    desc: 'Peak unrealized profit. Account climbs toward $60M. The world watches. Machi is printing.',
    detail: '25x ETH long entered near market lows. Every candle goes green. Crypto Twitter celebrates.',
  },
  {
    date: 'Sept 2025',
    type: 'danger',
    title: 'Going Maximum Degen',
    amount: '$60M Peak',
    desc: 'Account near $60M. 25x–40x leverage on ETH longs. The strategy: never cut, only add.',
    detail: 'ETH at ~$4,700. Full Martingale mode. "If it drops, I buy more." The crowd holds its breath.',
  },
  {
    date: 'Oct 11, 2025',
    type: 'loss',
    title: 'The Cascade Begins',
    amount: 'Liquidated',
    desc: 'Market crash triggers the first cascade. The dominoes fall. Liquidation after liquidation.',
    detail: 'First of 145+ liquidations begins. But Machi doesn\'t leave. He refreshes. He deposits. He buys again.',
  },
  {
    date: 'Nov 2025',
    type: 'loss',
    title: 'Down to $16.7k',
    amount: '$16.7k Left',
    desc: 'Account decimated to $16,700. Crypto Twitter erupts. Memes flood the timeline.',
    detail: 'Response: Opens new 25x 100 ETH position immediately. Gets liquidated again within hours.',
  },
  {
    date: 'Feb 2026',
    type: 'loss',
    title: 'Quarter Million Gone',
    amount: '-$250k',
    desc: 'Deposits fresh $250k USDC. 25x ETH long. Liquidated to $8,500. Community sends fees.',
    detail: 'The $MACHI community mobilizes. Trading fees routed to his wallet. "Degen saving degen."',
  },
  {
    date: 'Mar 2026',
    type: 'reload',
    title: 'Still Reloading',
    amount: 'Story Continues',
    desc: 'March 2026: Account refilled. New positions opened. $MACHI community stronger than ever.',
    detail: 'Total: $74M+ in realized losses. Total conviction: unchanged. The legend cannot be stopped.',
  },
]

export default function DegenSaga() {
  const [activeEvent, setActiveEvent] = useState(null)
  const counterRef = useRef(null)
  const [counted, setCounted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true)
        }
      },
      { threshold: 0.3 }
    )
    if (counterRef.current) observer.observe(counterRef.current)
    return () => observer.disconnect()
  }, [counted])

  return (
    <section className="degen-saga" id="degen-saga">
      {/* Red atmospheric glow */}
      <div className="saga-glow" />

      <div className="saga-inner">
        {/* Header */}
        <div className="saga-header reveal">
          <div className="section-label" style={{ color: 'var(--red-bright)' }}>
            <span style={{ background: 'var(--red-bright)' }} />
            The Degen Saga
          </div>
          <h2 className="saga-title">
            $74 Million.<br />
            <span style={{ color: 'var(--red-bright)', textShadow: 'var(--glow-red)' }}>
              Gone.
            </span>
            <br />
            <span className="saga-title-small">And He's Still Here.</span>
          </h2>
        </div>

        {/* Loss counter */}
        <div className="loss-counter reveal" ref={counterRef}>
          <div className="counter-grid">
            <div className="counter-item">
              <span className={`counter-num ${counted ? 'animate' : ''}`}>$74M+</span>
              <span className="counter-label">Total Realized Losses</span>
            </div>
            <div className="counter-divider" />
            <div className="counter-item">
              <span className={`counter-num ${counted ? 'animate' : ''}`} style={{ color: 'var(--muted-2)' }}>145+</span>
              <span className="counter-label">Liquidation Events</span>
            </div>
            <div className="counter-divider" />
            <div className="counter-item">
              <span className={`counter-num ${counted ? 'animate' : ''}`} style={{ color: 'var(--gold-bright)' }}>25x</span>
              <span className="counter-label">Leverage Used</span>
            </div>
            <div className="counter-divider" />
            <div className="counter-item">
              <span className={`counter-num ${counted ? 'animate' : ''}`} style={{ color: 'var(--green)' }}>∞</span>
              <span className="counter-label">Times Reloaded</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="saga-timeline">
          <div className="timeline-track" />
          {events.map((event, i) => (
            <div
              key={i}
              className={`timeline-event reveal event-${event.type} ${activeEvent === i ? 'expanded' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => setActiveEvent(activeEvent === i ? null : i)}
            >
              <div className="event-connector">
                <div className={`event-dot dot-${event.type}`} />
              </div>
              <div className="event-card">
                <div className="event-header">
                  <div className="event-meta">
                    <span className="event-date">{event.date}</span>
                    <span className={`event-type-badge badge-${event.type}`}>
                      {event.type === 'win' ? '▲ PROFIT'
                        : event.type === 'danger' ? '⚡ PEAK'
                        : event.type === 'reload' ? '↻ RELOAD'
                        : '▼ LIQUIDATED'}
                    </span>
                  </div>
                  <span className={`event-amount amount-${event.type}`}>{event.amount}</span>
                </div>
                <h4 className="event-title">{event.title}</h4>
                <p className="event-desc">{event.desc}</p>
                {activeEvent === i && (
                  <p className="event-detail">{event.detail}</p>
                )}
                <button className="event-expand">
                  {activeEvent === i ? '▲ Less' : '▼ More'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom image */}
        <div className="saga-image-block reveal">
          <img src="/images/liquidation.png" alt="The Degen Saga" className="saga-main-img" />
          <div className="saga-img-caption">
            <span className="saga-caption-text">
              "The ones laughing from the sidelines rarely step on the field."
            </span>
            <span className="saga-caption-sub">— @KingOnEth defending Machi</span>
          </div>
        </div>
      </div>
    </section>
  )
}
