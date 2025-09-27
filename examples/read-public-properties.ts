/**
 * Examples of reading public properties using latest viem and wagmi
 */

import { readContract } from 'wagmi/actions'
import { readContract as viemReadContract } from 'viem'
import { wagmiConfig } from '@/components/@web3/web3-provider'
import { exampleContractAbi } from '@/schema/abi/example-contract-abi'
import { Address } from 'viem'

// Example contract address (replace with your actual contract address)
const CONTRACT_ADDRESS = '0x202c5DeDb0B352c5D8C19B0d61481C7167cA91D0' as Address

/**
 * Method 1: Using wagmi/actions (Recommended for React apps)
 * This is the preferred method when using wagmi in your React application
 */
export async function readPublicPropertyWithWagmi() {
  try {
    // Read MINT_AMOUNT (uint256)
    const mintAmount = await readContract(wagmiConfig, {
      address: CONTRACT_ADDRESS,
      abi: exampleContractAbi,
      functionName: 'MINT_AMOUNT',
    })
    console.log('MINT_AMOUNT:', mintAmount)

    // Read totalSupply (uint256)
    const totalSupply = await readContract(wagmiConfig, {
      address: CONTRACT_ADDRESS,
      abi: exampleContractAbi,
      functionName: 'totalSupply',
    })
    console.log('totalSupply:', totalSupply)

    // Read name (string)
    const name = await readContract(wagmiConfig, {
      address: CONTRACT_ADDRESS,
      abi: exampleContractAbi,
      functionName: 'name',
    })
    console.log('name:', name)

    // Read symbol (string)
    const symbol = await readContract(wagmiConfig, {
      address: CONTRACT_ADDRESS,
      abi: exampleContractAbi,
      functionName: 'symbol',
    })
    console.log('symbol:', symbol)

    // Read decimals (uint8)
    const decimals = await readContract(wagmiConfig, {
      address: CONTRACT_ADDRESS,
      abi: exampleContractAbi,
      functionName: 'decimals',
    })
    console.log('decimals:', decimals)

    return {
      mintAmount,
      totalSupply,
      name,
      symbol,
      decimals,
    }
  } catch (error) {
    console.error('Error reading public properties with wagmi:', error)
    throw error
  }
}

/**
 * Method 2: Using viem directly (Alternative approach)
 * Use this when you need more control or are not using wagmi
 */
export async function readPublicPropertyWithViem(client: any) {
  try {
    // Read MINT_AMOUNT (uint256)
    const mintAmount = await viemReadContract(client, {
      address: CONTRACT_ADDRESS,
      abi: exampleContractAbi,
      functionName: 'MINT_AMOUNT',
    })
    console.log('MINT_AMOUNT:', mintAmount)

    // Read totalSupply (uint256)
    const totalSupply = await viemReadContract(client, {
      address: CONTRACT_ADDRESS,
      abi: exampleContractAbi,
      functionName: 'totalSupply',
    })
    console.log('totalSupply:', totalSupply)

    // Read name (string)
    const name = await viemReadContract(client, {
      address: CONTRACT_ADDRESS,
      abi: exampleContractAbi,
      functionName: 'name',
    })
    console.log('name:', name)

    return {
      mintAmount,
      totalSupply,
      name,
    }
  } catch (error) {
    console.error('Error reading public properties with viem:', error)
    throw error
  }
}

/**
 * Method 3: Reading multiple properties in parallel
 * This is more efficient when you need multiple values
 */
export async function readMultiplePublicProperties() {
  try {
    const [mintAmount, totalSupply, name, symbol, decimals] = await Promise.all([
      readContract(wagmiConfig, {
        address: CONTRACT_ADDRESS,
        abi: exampleContractAbi,
        functionName: 'MINT_AMOUNT',
      }),
      readContract(wagmiConfig, {
        address: CONTRACT_ADDRESS,
        abi: exampleContractAbi,
        functionName: 'totalSupply',
      }),
      readContract(wagmiConfig, {
        address: CONTRACT_ADDRESS,
        abi: exampleContractAbi,
        functionName: 'name',
      }),
      readContract(wagmiConfig, {
        address: CONTRACT_ADDRESS,
        abi: exampleContractAbi,
        functionName: 'symbol',
      }),
      readContract(wagmiConfig, {
        address: CONTRACT_ADDRESS,
        abi: exampleContractAbi,
        functionName: 'decimals',
      }),
    ])

    return {
      mintAmount,
      totalSupply,
      name,
      symbol,
      decimals,
    }
  } catch (error) {
    console.error('Error reading multiple public properties:', error)
    throw error
  }
}

/**
 * Method 4: Generic function to read any public property
 */
export async function readAnyPublicProperty<T = any>(
  contractAddress: Address,
  functionName: string,
  args: readonly unknown[] = []
): Promise<T> {
  try {
    const result = await readContract(wagmiConfig, {
      address: contractAddress,
      abi: exampleContractAbi,
      functionName,
      args,
    })
    return result as T
  } catch (error) {
    console.error(`Error reading ${functionName}:`, error)
    throw error
  }
}

// Usage examples:
// const mintAmount = await readAnyPublicProperty<bigint>(CONTRACT_ADDRESS, 'MINT_AMOUNT')
// const name = await readAnyPublicProperty<string>(CONTRACT_ADDRESS, 'name')
// const balance = await readAnyPublicProperty<bigint>(CONTRACT_ADDRESS, 'balanceOf', ['0x...'])
