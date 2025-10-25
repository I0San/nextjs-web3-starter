import "./globals.css"
import type { Metadata } from "next"
import { headers } from 'next/headers'
import { Geist, Geist_Mono } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import Web3Provider from '@/components/@web3/web3-provider'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Web3 NextJS 15 Starter",
  description: "Railway Template with NextJS, Reown AppKit, Wagmi, Viem and TanStack Query",
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersObj = await headers()
  const cookies = headersObj.get('cookie')
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Web3Provider cookies={cookies}>{children}</Web3Provider>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
