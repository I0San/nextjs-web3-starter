# Deploy and Host NextJS Web3 Starter on Railway

##  🚀 Web3 NextJS Starter

DEMO: [here](https://nextjs-web3-starter.up.railway.app)

This is a Web3 [Next.js 16](https://nextjs.org) starter app.

We use [Reown AppKit](https://reown.com/reown-sdk), [Wagmi](https://wagmi.sh/), [Viem](https://viem.sh/), [TanStack](https://tanstack.com/) and [Shadcn/UI](https://ui.shadcn.com).

The app is configured for a simple Railway deployment as a Service Template.


## About Hosting NextJS Web3 Starter

The app is configured for a simple Railway deployment and showcases some basic smart contract interactions.

## Common Use Cases

- Setting up ConnectKit with Wagmi for connecting wallets
- Read address balance
- Read public contract properties
- Executing write methods

## Dependencies for NextJS Web3 Starter Hosting

- [Next.js](https://nextjs.org) starter app.
- [Reown AppKit](https://reown.com/reown-sdk)
- [Wagmi](https://wagmi.sh/)
- [Viem](https://viem.sh/)
- [TanStack](https://tanstack.com/)

### Deployment Dependencies

The app uses a simple ERC20 token contract for demo:

[railway-contract-example](https://eth-sepolia.blockscout.com/address/0xf5b1c4f599DFf501f2A622E8809aF7f389394A19?tab=contract)

### Implementation Details

Set environment variables:

Required:  
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID="Your_Project_ID" - Get at [Reown Cloud](https://dashboard.reown.com)

Recommended:  
NEXT_PUBLIC_APP_NAME="Your App Name"  
NEXT_PUBLIC_APP_DESCRIPTION="Your App Description"  
NEXT_PUBLIC_APP_URL="https://your-app-url.com"  
NEXT_PUBLIC_APP_ICON="https:/your-app-url/logo.png"  
NEXT_PUBLIC_EXAMPLE_CONTRACT="0xf5b1c4f599DFf501f2A622E8809aF7f389394A19"  

### Link your Railway app for local development

- Within the service settings click the Eject button on the upstream repository
- Clone that newly created repository locally
- Install the Railway CLI (and login if this is your first time)
- Run 'railway link' to link the local repository to your app on Railway
- Start you app for local development with 'npm run dev'
- Open [http://localhost:3000](http://localhost:3000)

## Why Deploy NextJS Web3 Starter on Railway?

Railway is a singular platform to deploy your infrastructure stack. Railway will host your infrastructure so you don't have to deal with configuration, while allowing you to vertically and horizontally scale it.

By deploying NextJS Web3 Starter on Railway, you are one step closer to supporting a complete full-stack application with minimal burden. Host your servers, databases, AI agents, and more on Railway.