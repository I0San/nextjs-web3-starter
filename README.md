This is a Web3 [Next.js](https://nextjs.org) starter app.

We use [ConnectKit](https://family.co/docs/connectkit), [Wagmi](https://wagmi.sh/), [Viem](https://viem.sh/) and [TanStack](https://tanstack.com/).


[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/T7csdY?referralCode=xI5enq&utm_medium=integration&utm_source=template&utm_campaign=generic)


## Local development

1. Install dependencies:

* at the time of this writing, the ConnectKit has still not upgraded to React 19, so a '--force' flag is used here.

```bash
npm install --force
```

2. Set environment variables:

NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID="Your_Project_ID" - Get at [Reown Cloud](https://dashboard.reown.com)

3. Run development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.