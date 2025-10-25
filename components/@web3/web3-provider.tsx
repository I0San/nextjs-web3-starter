'use client'

import { wagmiAdapter, projectId } from './web3-config'
import { queryClient } from '@/lib/query-client'
import { QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import { sepolia } from '@reown/appkit/networks'
import { type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = {
  name: process.env.NEXT_PUBLIC_APP_NAME!,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION!,
  url: process.env.NEXT_PUBLIC_APP_URL!, // origin must match your domain & subdomain
  icons: [process.env.NEXT_PUBLIC_APP_ICON!]
}

// Create the modal
// OPTIONS: https://docs.reown.com/appkit/next/core/options
const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [sepolia],
  defaultNetwork: sepolia,
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    email: false, // default to true
    socials: [
      // "google",
    ],
    emailShowWallets: true, // default to true
    swaps: false,
    onramp: false,
  },
  defaultAccountTypes: { eip155: "eoa" },
  featuredWalletIds: [
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", // MetaMask
    "18388be9ac2d02726dbac9777c96efaac06d744b2f6d580fccdd4127a6d01fd1", // Rabby
    "5864e2ced7c293ed18ac35e0db085c09ed567d67346ccb6f58a0327a75137489", // Fireblocks
    "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927", // Ledger Live
  ],
  enableNetworkSwitch: false,
})

function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default ContextProvider