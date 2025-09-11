# 🚀 Web3 NextJS Starter

This is a Web3 [Next.js](https://nextjs.org) starter app.

We use [ConnectKit](https://family.co/docs/connectkit), [Wagmi](https://wagmi.sh/), [Viem](https://viem.sh/) and [TanStack](https://tanstack.com/).

The app is configured for a simple Railway deployment as a Service Template.


[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/T7csdY?referralCode=xI5enq&utm_medium=integration&utm_source=template&utm_campaign=generic)


### Configuration

Set environment variables:

NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID="Your_Project_ID" - Get at [Reown Cloud](https://dashboard.reown.com)


### Link your Railway app for local development

- Within the service settings click the Eject button on the upstream repository
- Clone that newly created repository locally
- Install dependencies with 'npm install --force'
- Install the Railway CLI (and login if this is your first time)
- Run 'railway link' to link the local repository to your app on Railway
- Start you app for local development with 'npm run dev'
- Open [http://localhost:3000](http://localhost:3000)