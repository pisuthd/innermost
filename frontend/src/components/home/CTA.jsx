import { Link } from 'react-router-dom';

function CTA() {
  return (
    <section 
      className="relative py-20 md:py-32 px-4 md:px-8"
      style={{ 
        padding: '80px 56px',
        textAlign: 'center',
        borderTop: '1px solid rgba(180,200,255,0.08)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <h2 style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '32px',
        fontWeight: 400,
        color: '#fff',
        marginBottom: '32px',
      }}>
        Ready to Trade Privately on <strong style={{ fontWeight: 500, color: '#3eddfd' }}>Midnight</strong>?
      </h2>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '16px' }}>
        <Link
          to="/trade"
          style={{
            padding: '16px 32px',
            background: '#3eddfd',
            border: 'none',
            borderRadius: 12,
            fontFamily: "'Space Mono', monospace",
            fontSize: 14,
            fontWeight: 700,
            color: '#000',
            cursor: 'pointer',
            letterSpacing: '0.05em',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
          }}
        >
          START TRADING
        </Link>

        <Link
          to="/market-make"
          style={{
            padding: '16px 32px',
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(180,200,255,0.12)',
            borderRadius: 12,
            fontFamily: "'Space Mono', monospace",
            fontSize: 14,
            fontWeight: 700,
            color: '#fff',
            cursor: 'pointer',
            letterSpacing: '0.05em',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
          }}
        >
          BECOME A MARKET MAKER
        </Link>
      </div>

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '13px',
        color: 'rgba(180,200,255,0.5)',
        margin: 0,
      }}>
        Simple, private, slippage-free execution • AI-powered market making
      </p>
    </section>
  );
}

export default CTA;
