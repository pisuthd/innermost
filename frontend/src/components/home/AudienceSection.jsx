import { Link } from 'react-router-dom';

function AudienceSection() {
  return (
    <section 
      className="relative py-20 md:py-32 px-4 md:px-8 bg-[#0f172a]"
      style={{ position: 'relative', zIndex: 10 }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[rgba(15,23,42,0.8)]" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            letterSpacing: '0.18em',
            color: '#3eddfd',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}>
            Built for Two Audiences
          </p>
          <h2 
            className="text-3xl md:text-4xl lg:text-[40px] mb-4 text-[#f8fafc] tracking-tight"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
          >
            Simple for traders. <strong style={{ fontWeight: 500, color: '#3eddfd' }}>Powerful for makers.</strong>
          </h2>
        </div>

        {/* Two Column Layout - Simple */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
            maxWidth: 1000,
            margin: '0 auto'
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Traders Column */}
          <div
            style={{
              padding: '32px',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(180,200,255,0.08)',
              borderRadius: 16,
            }}
          >
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '20px',
              fontWeight: 700,
              color: '#3eddfd',
              marginBottom: '8px',
            }}>
              Traders
            </div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              color: 'rgba(180,200,255,0.6)',
              marginBottom: '20px',
            }}>
              Clean, fast, full privacy
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3eddfd' }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#cbd5e1' }}>Shielded orders</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3eddfd' }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#cbd5e1' }}>No front-running</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3eddfd' }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#cbd5e1' }}>Atomic execution</span>
              </div>
            </div>
            <Link 
              to="/trade"
              style={{
                display: 'block',
                marginTop: '24px',
                padding: '14px 24px',
                background: '#3eddfd',
                border: 'none',
                borderRadius: 12,
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                fontWeight: 700,
                color: '#0f172a',
                textAlign: 'center',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              START TRADING
            </Link>
          </div>

          {/* Market Makers Column */}
          <div
            style={{
              padding: '32px',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(180,200,255,0.08)',
              borderRadius: 16,
            }}
          >
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '20px',
              fontWeight: 700,
              color: '#3eddfd',
              marginBottom: '8px',
            }}>
              Market Makers
            </div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              color: 'rgba(180,200,255,0.6)',
              marginBottom: '20px',
            }}>
              AI-powered, local agents
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3eddfd' }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#cbd5e1' }}>Local AI agents</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3eddfd' }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#cbd5e1' }}>Auto ladder generation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3eddfd' }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#cbd5e1' }}>Dynamic spreads</span>
              </div>
            </div>
            <Link 
              to="/market-make"
              style={{
                display: 'block',
                marginTop: '24px',
                padding: '14px 24px',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(180,200,255,0.12)',
                borderRadius: 12,
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                fontWeight: 700,
                color: '#fff',
                textAlign: 'center',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              BECOME A MARKET MAKER
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AudienceSection;
