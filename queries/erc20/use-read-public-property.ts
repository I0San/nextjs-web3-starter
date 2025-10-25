/**
 * @name useReadPublicProperty
 * @description Hook for reading public properties from smart contracts using wagmi
 */

import { wagmiAdapter } from '@/components/@web3/web3-config'
import { OverridableQueryOptions } from '@/schema/query'
import { isNullish } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { Address } from 'viem'
import { readContract } from 'wagmi/actions'
import { exampleContractAbi } from '@/schema/abi/example-contract-abi'

type PublicPropertyName = 
  | 'MINT_AMOUNT'
  | 'totalReturned' 
  | 'totalSupply'
  | 'name'
  | 'symbol'
  | 'decimals'

type Params = {
  contractAddress: Address
  propertyName: PublicPropertyName
  chainId?: number
}

const fetch = async (params: Params) => {
  const result = await readContract(wagmiAdapter.wagmiConfig, {
    address: params.contractAddress,
    abi: exampleContractAbi,
    functionName: params.propertyName,
    chainId: params?.chainId,
  })
  return result
}

export const READ_PUBLIC_PROPERTY = 'READ_PUBLIC_PROPERTY'

export const useReadPublicProperty = (
  params: Partial<Params>,
  options?: OverridableQueryOptions
) => {
  const { enabled = true, ...restOptions } = options || {}

  const _enabled = 
    !isNullish(params?.contractAddress) && 
    !isNullish(params?.propertyName) && 
    enabled

  return useQuery({
    queryKey: [READ_PUBLIC_PROPERTY, params],
    queryFn: () => fetch(params as Params),
    enabled: _enabled,
    refetchInterval: 1000 * 1,
    ...restOptions
  })
}
