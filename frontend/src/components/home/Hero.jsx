import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrbCanvas from '../OrbCanvas';

function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const orbOpacity = Math.max(0, 1 - scrollY / 400);

  return (
    <section className="relative min-h-screen bg-[#0f172a] overflow-hidden">
      {/* Fixed Animated Orbs - Right Side */}
      <div
        className="fixed right-0 top-0 w-1/2 h-screen"
        style={{
          opacity: orbOpacity,
          transition: 'opacity 0.3s ease-out',
          pointerEvents: orbOpacity > 0.1 ? 'auto' : 'none',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(15,23,42,0.9))',
          }}
        />
        <OrbCanvas />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-8">
          {/* Hero Content */}
          <div className="flex items-center  py-24">
            <div className="max-w-2xl">
              {/* Pre-Headline / Live Network Badge */}
              <div className="flex items-center gap-3 mb-6 text-[#3eddfd]">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/39064.png"
                  alt="Midnight"
                  className="w-5 h-5 rounded-full"
                />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  Live Now On Midnight's Preprod
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="mb-6 leading-tight text-white" style={{ fontSize: '48px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                Privacy-First FX Matching with AI Market Making
              </h1>

              {/* Subheadline */}
              <p className="text-base mb-10 text-[rgba(180,200,255,0.6)]" style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
                AI-powered market makers deliver optimal rates and deep liquidity — slippage-free, front-running-proof atomic execution
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-3">
                <Link
                  to="/trade"
                  style={{
                    padding: '12px 28px',
                    background: '#3eddfd',
                    border: 'none',
                    borderRadius: 12,
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#0f172a',
                    cursor: 'pointer',
                    letterSpacing: '0.1em',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  START PRIVATE SWAP
                </Link>
                <Link
                  to="/market-make"
                  style={{
                    padding: '12px 28px',
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(180,200,255,0.12)',
                    borderRadius: 12,
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#fff',
                    cursor: 'pointer',
                    letterSpacing: '0.1em',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  BECOME A MARKET MAKER
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
