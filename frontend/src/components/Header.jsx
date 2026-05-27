import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useWallet } from '../context/WalletContext';
import WalletInfoModal from './WalletInfoModal';

function Header() {
  const location = useLocation();
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isWalletInfoOpen, setIsWalletInfoOpen] = useState(false);
  const { isConnected, walletAddress, isLoading, connectWallet, disconnectWallet, truncateAddress } = useWallet();

  const navItems = [
    { label: 'Trade', path: '/trade' },
    { label: 'Market Make', path: '/market-make' },
    { label: 'Tokens', path: '/tokens' }
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#0f172a]/60 backdrop-blur-2xl border border-[#334155]/50 rounded-2xl px-4 py-3 md:px-6 md:py-3 w-[calc(100%-32px)] max-w-5xl">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#3eddfd] to-white bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Innermost
          </Link>

          <div className="hidden ml-4 md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${location.pathname === item.path
                  ? 'text-[#3eddfd]'
                  : 'text-[#cbd5e1] hover:text-[#3eddfd]'
                  }`}
                style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}
              >
                {item.label}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="text-sm font-medium text-[#cbd5e1] hover:text-[#3eddfd] transition-colors flex items-center gap-1"
                style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}
              >
                More
                <svg
                  className={`w-4 h-4 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isMoreOpen && (
                <div className="absolute top-full left-0 mt-2 bg-[#1e293b] border border-[#334155] rounded-lg shadow-lg overflow-hidden min-w-[150px]">
                  <a
                    href="https://github.com/pisuthd/innermost"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-[#cbd5e1] hover:text-[#3eddfd] hover:bg-[#334155] transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-4">
          {isConnected ? (
            <>
              <button
                onClick={() => setIsWalletInfoOpen(true)}
                className="px-4 py-2 bg-[#1e293b] text-[#3eddfd] font-semibold rounded-lg border border-[#3eddfd]/30 hover:bg-[#334155] hover:border-[#3eddfd]/50 transition-all text-sm"
              >
                Wallet Info
              </button>
              <button
                onClick={disconnectWallet}
                className="px-4 py-2 bg-[#1e293b] text-[#3eddfd] font-semibold rounded-lg border border-[#3eddfd]/30 hover:bg-[#334155] hover:border-[#3eddfd]/50 transition-all text-sm"
              >
                Disconnect
              </button>
            </>
          ) : (
            <button
              onClick={connectWallet}
              disabled={isLoading}
              style={{
                padding: '12px 28px',
                background: '#3eddfd',
                border: 'none',
                borderRadius: 12,
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                fontWeight: 700,
                color: '#0f172a',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                letterSpacing: '0.1em',
                transition: 'all 0.3s ease',
                opacity: isLoading ? 0.5 : 1,
              }}
            >
              {isLoading ? 'CONNECTING...' : 'CONNECT WALLET'}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;