"use client"

import Image from "next/image"
import { ConnectKitButton } from "connectkit"
import { ReadBalance } from "./_components/read-balance"
import { SendToken } from "./_components/send-token"
import { MintToken } from "./_components/mint-token"
import { ContractInfo } from "./_components/contract-info"
import { Footer } from "@/components/@layout/footer"
import { DeployOnRailway } from "./_components/deploy-on-railway"

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={172}
          height={37}
          priority
        />

        <ConnectKitButton />

        <div className="flex flex-col gap-4 text-sm w-full">
          <MintToken />
          <SendToken />
          <ReadBalance />
          <ContractInfo />
        </div>

        <DeployOnRailway />
      </main>

      <Footer />

    </div>
  )
}
