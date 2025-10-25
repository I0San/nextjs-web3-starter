# 🚀 Web3 NextJS Starter

DEMO: [here](https://nextjs-web3-starter.up.railway.app)

This is a Web3 [Next.js 16](https://nextjs.org) starter app.

We use [Reown AppKit](https://reown.com/reown-sdk), [Wagmi](https://wagmi.sh/), [Viem](https://viem.sh/), [TanStack](https://tanstack.com/) and [Shadcn/UI](https://ui.shadcn.com).

The app is configured for a simple Railway deployment as a Service Template.


[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/nextjs-web3-starter?referralCode=xI5enq)


### Configuration

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