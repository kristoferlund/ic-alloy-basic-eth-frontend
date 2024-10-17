import Login from './components/login'
import { useInternetIdentity } from 'ic-use-internet-identity';
import Wallet from './components/wallet';
import { Toaster } from './components/ui/toaster';

function AppInner() {
  const { identity } = useInternetIdentity();

  if (!identity) {
    return <Login />
  }

  return (
    <Wallet />
  )
}

export default function App() {
  return <main>
    <AppInner />
    <Toaster />

    <div className="links">
      <a
        href="https://github.com/kristoferlund/ic-alloy-basic-eth-frontend"
        target="_blank" rel="noreferrer"
      >
        <img src="https://img.shields.io/github/license/kristoferlund/ic-alloy-basic-eth-frontend" />
      </a>

      <a
        href="https://github.com/kristoferlund/ic-alloy-basic-eth-frontend"
        target="_blank" rel="noreferrer"
      >
        <img src="https://img.shields.io/github/stars/kristoferlund/ic-alloy-basic-eth-frontend" />
      </a>
      <a href="https://github.com/kristoferlund" target="_blank" rel="noreferrer">
        <img src="https://img.shields.io/github/followers/kristoferlund" />
      </a>
    </div>
  </main>
}

