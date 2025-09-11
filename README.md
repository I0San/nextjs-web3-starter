This is a Web3 [Next.js](https://nextjs.org) starter app.

We use [ConnectKit](https://family.co/docs/connectkit), [Wagmi](https://wagmi.sh/), [Viem](https://viem.sh/) and [TanStack](https://tanstack.com/).

You can find the app also in [Railway Templates](https://railway.com/deploy) and easily deploy it.

## Getting Started

1. Install dependencies:

* at the time of this writing, the ConnectKit has still not upgraded to React 19, so a '--force' flag is used here.

```bash
npm install --force
# or
yarn install --force
```

2. Set environment variables:

NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID="Your_Project_ID" - Get at [Reown Cloud](https://dashboard.reown.com)

3. Local development:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deployment

Deploy with template on [Railway](https://railway.com/deploy).
