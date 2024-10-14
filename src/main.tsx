import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { InternetIdentityProvider } from 'ic-use-internet-identity'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Actors from './actor.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <InternetIdentityProvider>
        <Actors>
          <App />
        </Actors>
      </InternetIdentityProvider>
    </QueryClientProvider>
  </StrictMode>,
)
