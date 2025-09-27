"use client"

import { sepolia } from "wagmi/chains"
import { WagmiProvider, createConfig, http } from "wagmi"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ConnectKitProvider, getDefaultConfig } from "connectkit"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID
const rpcUrl = alchemyId 
  ? `https://eth-sepolia.g.alchemy.com/v2/${alchemyId}`
  : sepolia.rpcUrls.default.http[0]

export const wagmiConfig = createConfig(
  getDefaultConfig({
    chains: [ sepolia ],
      transports: {
        [sepolia.id]: http(rpcUrl),
      },
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    appName: process.env.NEXT_PUBLIC_APP_NAME!,
    appDescription: process.env.NEXT_PUBLIC_APP_DESCRIPTION!,
    appUrl: process.env.NEXT_PUBLIC_APP_URL!,
    appIcon: process.env.NEXT_PUBLIC_APP_ICON!,
  })
)

const queryClient = new QueryClient()

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </WagmiProvider>
  )
}