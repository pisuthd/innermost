const features = [
  {
    name: 'Shielded Orderbook',
    desc: 'True limit-order matching. Prices & amounts never appear on-chain.',
  },
  {
    name: 'Local AI Agents',
    desc: 'Run Ollama/WebLLM agents on your device. Your strategy never leaves.',
  },
  {
    name: 'Atomic Matching',
    desc: 'Front-running proof execution. No slippage, noMEV.',
  },
];

function KeyFeatures() {
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
        <div style={{ maxWidth: 800, margin: '0 auto', marginBottom: '48px' }}>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            letterSpacing: '0.18em',
            color: '#3eddfd',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}>
            Features
          </p>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '32px',
            fontWeight: 400,
            color: '#fff',
            lineHeight: 1.2,
          }}>
            Privacy-First <strong style={{ fontWeight: 600, color: '#3eddfd' }}>Trading Infrastructure</strong>
          </h2>
        </div>

        {/* 3 Features Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            maxWidth: 1000,
            margin: '0 auto',
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                padding: '32px',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(180,200,255,0.08)',
                borderRadius: 16,
                textAlign: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#3eddfd',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                {feature.name}
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(180,200,255,0.6)',
                  lineHeight: 1.5,
                }}
              >
                {feature.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;
