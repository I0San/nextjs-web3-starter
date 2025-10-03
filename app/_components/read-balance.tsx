import { useReadPublicProperty } from '@/queries/erc20/use-read-public-property'
import { useGetBalanceOf } from '@/queries/get-balance-of'
import Link from 'next/link'
import React from 'react'
import { Address, formatEther } from 'viem'
import { useAccount } from 'wagmi'

const EXPLORER_URL = 'https://sepolia.etherscan.io'

export const ReadBalance = () => {
  const { address } = useAccount()

  const { data, isLoading, error } = useGetBalanceOf({
    owner: address,
    token: process.env.NEXT_PUBLIC_EXAMPLE_CONTRACT as Address,
  })

  const { data: supply, isLoading: isLoadingSupply, error: errorSupply } = useReadPublicProperty({
    contractAddress: process.env.NEXT_PUBLIC_EXAMPLE_CONTRACT as Address,
    propertyName: 'totalSupply',
  })

  const { data: returned, isLoading: isLoadingReturned, error: errorReturned } = useReadPublicProperty({
    contractAddress: process.env.NEXT_PUBLIC_EXAMPLE_CONTRACT as Address,
    propertyName: 'totalReturned',
  })

  return (
    <div className='border rounded-lg p-4 space-y-2'>

      <div className='flex items-center justify-between w-full gap-2'>
        <Link className='hover:underline' href={`${EXPLORER_URL}/address/${address}`} target='_blank'>
          You balance:
        </Link>
        <span>{error ? 'Err' : isLoading ? <span className='animate-pulse'>...</span> : formatEther(data?.value || BigInt(0))}</span>
      </div>

      <div className='flex items-center justify-between w-full gap-2'>
        <Link className='hover:underline' href={`${EXPLORER_URL}/token/${process.env.NEXT_PUBLIC_EXAMPLE_CONTRACT}`} target='_blank'>
          Total supply:
        </Link>
        <span>{errorSupply ? 'Err' : isLoadingSupply ? <span className='animate-pulse'>...</span> : formatEther(supply as bigint) || '0'}</span>
      </div>

      <div className='flex items-center justify-between w-full gap-2'>
        <Link className='hover:underline' href={`${EXPLORER_URL}/token/${process.env.NEXT_PUBLIC_EXAMPLE_CONTRACT}`} target='_blank'>
          Returned:
        </Link>
        <span>{errorReturned ? 'Err' : isLoadingReturned ? <span className='animate-pulse'>...</span> : formatEther(returned as bigint) || '0'}</span>
      </div>
    </div>
  )
}