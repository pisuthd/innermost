const milestones = [
  {
    quarter: 'Q2/2026',
    status: 'completed',
    title: 'Foundation',
    items: [
      'Private FX matching concept on Midnight',
      'Initial CLOB architecture',
      'Smart contract design'
    ]
  },
  {
    quarter: 'Q3/2026',
    status: 'current',
    title: 'Testnet Launch',
    items: [
      'Privacy-First Orderbook launch', 
      'Shielded order matching live on PreProd',
      'Local AI integration'
    ]
  },
  {
    quarter: 'Q4/2026',
    status: 'upcoming',
    title: 'Mainnet Ready',
    items: [
      'Mainnet launch',
      'Multi-currency pairs support',
      'Enhanced liquidity features'
    ]
  },
  {
    quarter: 'Q1/2027',
    status: 'upcoming',
    title: 'Scale',
    items: [
      'Institutional-grade features',
      'API access for professional traders',
      'Strategy backtesting tools'
    ]
  }
];

function RoadmapSection() {
  return (
    <section 
      className="relative py-20 md:py-32 px-4 md:px-8 bg-[#0f172a]"
      style={{ position: 'relative', zIndex: 10 }}
    >
      {/* Background */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: 'rgba(0,0,0,0.2)' }} 
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div style={{ maxWidth: 1200, margin: '0 auto', marginBottom: '48px' }}>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            letterSpacing: '0.18em',
            color: '#3eddfd',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}>
            Roadmap
          </p>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '32px',
            fontWeight: 400,
            color: '#fff',
            lineHeight: 1.2,
          }}>
            Building the Future of <strong style={{ fontWeight: 600, color: '#3eddfd' }}>Private Trading</strong>
          </h2>
        </div>

        {/* Roadmap Timeline */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            maxWidth: 1200,
            margin: '0 auto',
          }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {milestones.map((milestone, index) => (
            <div
              key={index}
              style={{
                padding: '24px',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${milestone.status === 'completed' ? 'rgba(62,221,253,0.3)' : 'rgba(180,200,255,0.08)'}`,
                borderRadius: 16,
                position: 'relative',
              }}
            >
              {/* Status Badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px'
              }}>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '11px',
                  fontWeight: 700,
                  color: milestone.status === 'completed' ? '#10b981' : milestone.status === 'current' ? '#3eddfd' : 'rgba(180,200,255,0.4)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  {milestone.quarter}
                </span>
                {milestone.status === 'completed' && (
                  <div style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#10b981',
                  }} />
                )}
                {milestone.status === 'current' && (
                  <div style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#3eddfd',
                    animation: 'pulse 2s infinite',
                  }} />
                )}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '14px',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '16px',
              }}>
                {milestone.title}
              </h3>

              {/* Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {milestone.items.map((item, itemIndex) => (
                  <div key={itemIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <div style={{
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      background: milestone.status === 'completed' ? '#10b981' : '#3eddfd',
                      marginTop: '7px',
                      flexShrink: 0,
                    }} />
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '12px',
                      color: 'rgba(180,200,255,0.6)',
                      lineHeight: 1.4,
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}

export default RoadmapSection;
