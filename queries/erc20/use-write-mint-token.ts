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
    functionName: 'mintToken'
  }

  const txReceipt = await new Web3Service(wagmiAdapter.wagmiConfig).writeContract({
    contractConfig
  })

  return txReceipt
}

export const WRITE_MINT_TOKEN = 'WRITE_MINT_TOKEN'

export const useWriteMintToken = () => {
  return useMutation({
    mutationKey: [WRITE_MINT_TOKEN],
    mutationFn: write,
    onSuccess: () => {
      // Invalidate balance queries after minting
      queryClient.invalidateQueries({
        queryKey: ['GET_BALANCE_OF', 'READ_PUBLIC_PROPERTY']
      })
    }
  })
}
