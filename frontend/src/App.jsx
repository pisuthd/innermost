import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tokens from './pages/Tokens'
import Trade from './pages/Trade'
import MarketMake from './pages/MarketMake'
import { WalletProvider } from './context/WalletContext'
import ErrorModal from './components/ErrorModal'
import { useWallet } from './context/WalletContext'

function GlobalErrorHandler() {
  const { error } = useWallet()
  const [isErrorOpen, setIsErrorOpen] = useState(false)

  useEffect(() => {
    if (error) {
      setIsErrorOpen(true)
    }
  }, [error])

  return (
    <ErrorModal
      isOpen={isErrorOpen}
      error={error}
      onClose={() => setIsErrorOpen(false)}
    />
  )
}

export default function App() {
  return (
    <WalletProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tokens" element={<Tokens />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/market-make" element={<MarketMake />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <GlobalErrorHandler />
    </WalletProvider>
  )
}
