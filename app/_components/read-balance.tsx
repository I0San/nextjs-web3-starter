import { useGetBalanceOf } from '@/queries/get-balance-of'
import React from 'react'
import { Address, formatEther } from 'viem'
import { useAccount } from 'wagmi'

export const ReadBalance = () => {
  const { address } = useAccount()
  const { data, isLoading, error } = useGetBalanceOf({
    owner: address,
    token: process.env.NEXT_PUBLIC_EXAMPLE_CONTRACT as Address,
  })

  return (
    <div className='border rounded-lg p-4 flex items-center justify-between w-full gap-2'>
      <span>You balance:</span>
      <span>{error ? 'Err' : isLoading ? <span className='animate-pulse'>...</span> : formatEther(data?.value || BigInt(0))} MSGT</span>
    </div>
  )
}