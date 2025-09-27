/**
 * @name useGetBalanceOf
 * @description Hook for fetching native currency or token balance.
 */

import { wagmiConfig } from '@/components/@web3/web3-provider'
import { OverridableQueryOptions } from '@/schema/query'
import { isNullish } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { Address } from 'viem'
import { getBalance, GetBalanceReturnType } from 'wagmi/actions'

type Params = {
  owner: Address
  token?: Address
  chainId?: number
}

const fetch = async (params: Params) => {
  const balance = await getBalance(wagmiConfig, {
    address: params.owner,
    token: params?.token,
    chainId: params?.chainId,
  })
  return balance
}

export const GET_BALANCE_OF = 'GET_BALANCE_OF'

export const useGetBalanceOf = (
  params: Partial<Params>,
  options?: OverridableQueryOptions
) => {
  const { enabled = true, refetchInterval, ...restOptions } = options || {}

  const _enabled = !isNullish(params?.owner) && enabled

  const _refetchInterval = _enabled
    ? isNullish(refetchInterval)
      ? 1000 * 3
      : refetchInterval
    : false

  return useQuery<GetBalanceReturnType>({
    queryKey: [GET_BALANCE_OF, params],
    queryFn: () => fetch(params as Params),
    staleTime: 1000 * 5,

    refetchInterval: _refetchInterval,

    retry: 1,

    ...restOptions,

    enabled: _enabled,
  })
}