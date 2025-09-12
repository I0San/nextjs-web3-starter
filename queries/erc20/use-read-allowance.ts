
import { wagmiConfig } from '@/components/@web3/web3-provider'
import { OverridableQueryOptions } from '@/schema/query'
import { isNullish } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { Address, erc20Abi } from 'viem'
import { readContract } from 'wagmi/actions'

export type ReadAllowanceParams = {
  ownerAddress: Address
  erc20address: Address
  spender: Address
}

const fetch = async (params: ReadAllowanceParams) => {
  const hash = await readContract(wagmiConfig, {
    abi: erc20Abi,
    address: params.erc20address,
    functionName: 'allowance',
    args: [params.ownerAddress, params.spender],
  })
  return hash
}

export const READ_ALLOWANCE_AMOUNT = 'READ_ALLOWANCE_AMOUNT'

export const useReadAllowance = (
  params: Partial<ReadAllowanceParams>,
  options?: OverridableQueryOptions
) => {
  const { enabled = true, ...restOptions } = options || {}

  const _enabled =
    !isNullish(params.erc20address) &&
    !isNullish(params.spender) &&
    !isNullish(params.ownerAddress) &&
    enabled

  return useQuery({
    queryKey: [READ_ALLOWANCE_AMOUNT, params],
    queryFn: () => fetch(params as ReadAllowanceParams),

    enabled: _enabled,

    ...restOptions,
  })
}
