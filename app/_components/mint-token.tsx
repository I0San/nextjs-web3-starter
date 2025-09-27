import React from 'react'
import { Button } from '@/components/ui/button'
import { useWriteMintToken } from '@/queries/erc20/use-write-mint-token'
import { useGetBalanceOf } from '@/queries/get-balance-of'
import { useAccount } from 'wagmi'
import { toast } from 'sonner'

export const MintToken = () => {
  const { address } = useAccount()
  const { data: balance } = useGetBalanceOf({owner: address})
  const mintToken = useWriteMintToken()

  const handleMintToken = async () => {
    
    if (balance?.value && !(balance.value > BigInt(0))) {
      toast.error('You need some ETH to mint the token.')
      return
    }

    try {
      await mintToken.mutateAsync()
      toast.success('Token minted successfully.')
    } catch (error) {
      toast.error('Failed to mint token.')
      console.error(error)
    }
  }

  return (
    <Button variant="outline" size="sm" onClick={handleMintToken}>
      {mintToken.isPending ? <span className='animate-pulse'>Minting...</span> : 'Mint Token'}
    </Button>
  )
}