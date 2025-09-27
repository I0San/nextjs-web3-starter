import React from 'react'
import { Address, formatEther } from 'viem'
import { useReadPublicProperty } from '@/queries/erc20/use-read-public-property'

const contractAddress = process.env.NEXT_PUBLIC_EXAMPLE_CONTRACT as Address

interface Props {
  propertyName: 'MINT_AMOUNT' | 'totalMinted' | 'totalSupply' | 'name' | 'symbol' | 'decimals'
}

export const ReadPublicProperty = ({ propertyName }: Props) => {
  const { data, isLoading, error } = useReadPublicProperty({
    contractAddress,
    propertyName,
  })

  const formatValue = (value: any, propertyName: string) => {
    if (error) return 'Error'
    if (isLoading) return <span className='animate-pulse'>...</span>
    
    switch (propertyName) {
      case 'MINT_AMOUNT':
      case 'totalMinted':
      case 'totalSupply':
        return formatEther(value) || '0'
      case 'decimals':
        return value?.toString() || '0'
      case 'name':
      case 'symbol':
        return value || 'N/A'
      default:
        return value?.toString() || 'N/A'
    }
  }

  return (
    <span>{formatValue(data, propertyName)}</span>
  )
}
