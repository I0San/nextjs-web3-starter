import { Config } from 'wagmi'
import {
  estimateFeesPerGas,
  estimateMaxPriorityFeePerGas,
  simulateContract,
  switchChain,
  waitForTransactionReceipt,
  writeContract,
  WriteContractParameters,
} from 'wagmi/actions'

export class Web3Service {
  private chainId: number

  constructor(private wagmiConfig: Config) {
    this.chainId = wagmiConfig.getClient().chain.id
  }

  async getFeeEstimates({ chainId }: { chainId: number | undefined }) {
    const [feesPerGas, maxPriorityFeePerGas] = await Promise.all([
      estimateFeesPerGas(this.wagmiConfig, {
        chainId: chainId,
        type: 'eip1559',
      }),
      estimateMaxPriorityFeePerGas(this.wagmiConfig, {
        chainId: chainId,
      }),
    ])
    console.log(' feesPerGas -> ', feesPerGas)
    console.log(' maxPriorityFeePerGas -> ', maxPriorityFeePerGas)

    return {
      feesPerGas,
      maxPriorityFeePerGas,
    }
  }

  async writeContract({
    contractConfig,
  }: {
    contractConfig: WriteContractParameters & { type: 'eip1559' }
  }) {
    const { feesPerGas, maxPriorityFeePerGas } = await this.getFeeEstimates({
      chainId: this.chainId,
    })

    const internalContractConfig: WriteContractParameters = {
      ...contractConfig,
      maxFeePerGas: feesPerGas.maxFeePerGas,
      maxPriorityFeePerGas: maxPriorityFeePerGas,
      type: 'eip1559',
    }

    await this.switchToRequired().catch(() => {
      throw new Error('Please switch network')
    })

    const simulateRes = await simulateContract(
      this.wagmiConfig,
      internalContractConfig
    )

    console.log(' simulateRes -> ', simulateRes)

    // Execute the transaction
    const hash = await writeContract(this.wagmiConfig, simulateRes.request)

    const txReceipt = await waitForTransactionReceipt(this.wagmiConfig, {
      hash: hash,
    })

    return txReceipt
  }

  getChainId() {
    return this.chainId
  }

  switchToRequired() {
    return switchChain(this.wagmiConfig, {
      chainId: this.chainId,
    })
  }
}