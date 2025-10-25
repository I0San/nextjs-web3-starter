import { wagmiAdapter } from '@/components/@web3/web3-config'
import { queryClient } from '@/lib/query-client'
import { exampleContractAbi } from '@/schema/abi/example-contract-abi'
import { Web3Service } from '@/services/web3-service'
import { useMutation } from '@tanstack/react-query'
import { Address } from 'viem'
import { WriteContractParameters } from 'wagmi/actions'

export type ApproveAllowanceParams = {
  erc20address: Address
  spender: Address
  amount: bigint
  chainId?: number
  account?: Address
}

const write = async (params: ApproveAllowanceParams) => {
  const contractConfig: WriteContractParameters<typeof exampleContractAbi> & {
    type: 'eip1559'
  } = {
    type: 'eip1559',
    abi: exampleContractAbi,
    address: params.erc20address,
    functionName: 'approve',
    args: [params.spender, params.amount],
    chainId: params.chainId,
    account: params.account,
  }

  const txReceipt = await new Web3Service(wagmiAdapter.wagmiConfig).writeContract({
    contractConfig,
  })

  return txReceipt
}

export const WRITE_APPROVE_ALLOWANCE_AMOUNT = 'WRITE_APPROVE_ALLOWANCE_AMOUNT'

export const useApproveAllowance = () => {
  return useMutation({
    mutationKey: [WRITE_APPROVE_ALLOWANCE_AMOUNT],
    mutationFn: write,
    onSuccess: () => {
      // Invalidate allowance queries after approval
      queryClient.invalidateQueries({
        queryKey: ['READ_ALLOWANCE_AMOUNT'],
      })
    },
  })
}
