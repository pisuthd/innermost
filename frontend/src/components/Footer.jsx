import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer
      style={{
        padding: '24px 56px',
        borderTop: '1px solid rgba(180,200,255,0.08)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo & Description on same line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link
            to="/"
            className="text-base md:text-lg mb-1 font-bold bg-gradient-to-r from-[#3eddfd] to-white bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            style={{ fontFamily: "'Orbitron', sans-serif", textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            Innermost
          </Link>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            color: 'rgba(180,200,255,0.5)',
          }}>
            Privacy-First Orderbook with AI Market Makers
          </span>
        </div>

        {/* Links & Copyright */}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: 'rgba(180,200,255,0.5)', cursor: 'pointer' }}>Privacy</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: 'rgba(180,200,255,0.5)', cursor: 'pointer' }}>Terms</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: 'rgba(180,200,255,0.5)', cursor: 'pointer' }}>Contact</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: 'rgba(180,200,255,0.5)', margin: 0 }}>
            © 2026 Innermost
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
