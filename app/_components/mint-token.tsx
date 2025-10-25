import React from 'react'
import { toast } from 'sonner'
import { useAccount } from 'wagmi'
import { Button } from '@/components/ui/button'
import { useWriteMintToken } from '@/queries/erc20/use-write-mint-token'
import { useGetBalanceOf } from '@/queries/get-balance-of'


export const MintToken = () => {
  const { address, isConnected } = useAccount()
  const { data: balance } = useGetBalanceOf({owner: address})
  const mintToken = useWriteMintToken()

  const handleMintToken = async () => {

    if (!isConnected) {
      toast.error('Please connect your wallet to mint the token.')
      return
    }
    
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