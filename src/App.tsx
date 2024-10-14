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
  </main>
}

