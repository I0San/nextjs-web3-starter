import { Address } from 'viem'
import { wagmiAdapter } from '@/components/@web3/web3-config'
import { queryClient } from '@/lib/query-client'
import { exampleContractAbi } from '@/schema/abi/example-contract-abi'
import { Web3Service } from '@/services/web3-service'
import { useMutation } from '@tanstack/react-query'
import { WriteContractParameters } from 'wagmi/actions'

const tokenAddress = process.env.NEXT_PUBLIC_EXAMPLE_CONTRACT as Address

const write = async () => {
  const contractConfig: WriteContractParameters<typeof exampleContractAbi> & {
    type: 'eip1559'
  } = {
    type: 'eip1559',
    abi: exampleContractAbi,
    address: tokenAddress,
    functionName: 'returnToken'
  }

  const txReceipt = await new Web3Service(wagmiAdapter.wagmiConfig).writeContract({
    contractConfig
  })

  return txReceipt
}

export const WRITE_SEND_TOKEN = 'WRITE_SEND_TOKEN'

export const useWriteSendToken = () => {
  return useMutation({
    mutationKey: [WRITE_SEND_TOKEN],
    mutationFn: write,
    onSuccess: () => {
      // Invalidate balance queries after sending token back
      queryClient.invalidateQueries({
        queryKey: ['GET_BALANCE_OF', 'READ_PUBLIC_PROPERTY']
      })
    }
  })
}
