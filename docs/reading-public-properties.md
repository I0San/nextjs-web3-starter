# Reading Public Properties with Latest Viem/Wagmi

This guide explains how to read public properties from smart contracts using the latest viem and wagmi libraries.

## What are Public Properties?

Public properties in Solidity are state variables that are automatically exposed as getter functions. For example:

```solidity
contract MyContract {
    uint256 public totalSupply = 1000000;
    string public name = "MyToken";
    address public owner;
}
```

These automatically generate getter functions that can be called without parameters.

## Method 1: Using wagmi/actions (Recommended for React Apps)

### Basic Usage

```typescript
import { readContract } from 'wagmi/actions'
import { wagmiConfig } from '@/components/@web3/web3-provider'

// Read a public property
const totalSupply = await readContract(wagmiConfig, {
  address: '0x...', // Contract address
  abi: contractAbi,
  functionName: 'totalSupply', // Name of the public property
})
```

### Using the Custom Hook

```typescript
import { useReadPublicProperty } from '@/queries/erc20/use-read-public-property'

function MyComponent() {
  const { data, isLoading, error } = useReadPublicProperty({
    contractAddress: '0x...',
    propertyName: 'totalSupply',
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  
  return <div>Total Supply: {data?.toString()}</div>
}
```

## Method 2: Using Viem Directly

```typescript
import { readContract } from 'viem'

const totalSupply = await readContract(client, {
  address: '0x...',
  abi: contractAbi,
  functionName: 'totalSupply',
})
```

## Method 3: Reading Multiple Properties in Parallel

```typescript
const [totalSupply, name, symbol] = await Promise.all([
  readContract(wagmiConfig, {
    address: contractAddress,
    abi: contractAbi,
    functionName: 'totalSupply',
  }),
  readContract(wagmiConfig, {
    address: contractAddress,
    abi: contractAbi,
    functionName: 'name',
  }),
  readContract(wagmiConfig, {
    address: contractAddress,
    abi: contractAbi,
    functionName: 'symbol',
  }),
])
```

## Available Public Properties in Your Contract

Based on your ABI, you can read these public properties:

- `MINT_AMOUNT` (uint256) - The amount of tokens minted per transaction
- `totalMinted` (uint256) - Total number of tokens minted
- `totalSupply` (uint256) - Total supply of tokens
- `name` (string) - Token name
- `symbol` (string) - Token symbol
- `decimals` (uint8) - Token decimals

## Type Safety

The custom hook provides type safety for the property names:

```typescript
type PublicPropertyName = 
  | 'MINT_AMOUNT'
  | 'totalMinted' 
  | 'totalSupply'
  | 'name'
  | 'symbol'
  | 'decimals'
```

## Error Handling

```typescript
const { data, isLoading, error } = useReadPublicProperty({
  contractAddress: '0x...',
  propertyName: 'totalSupply',
})

if (error) {
  console.error('Failed to read property:', error)
  // Handle error appropriately
}
```

## Performance Considerations

- Public properties are cached by default with a 30-second stale time
- Use `refetchInterval` to control how often data is refetched
- For properties that change frequently, use shorter intervals
- For static properties (like name, symbol), longer intervals are fine

## Examples in Your Codebase

1. **Individual Property Reading**: `app/_components/read-public-property.tsx`
2. **Contract Information Display**: `app/_components/contract-info.tsx`
3. **Custom Hook**: `queries/erc20/use-read-public-property.ts`
4. **Comprehensive Examples**: `examples/read-public-properties.ts`

## Best Practices

1. **Use the custom hook** for React components
2. **Handle loading and error states** appropriately
3. **Use parallel requests** when reading multiple properties
4. **Cache results** to avoid unnecessary network requests
5. **Type your return values** for better development experience

## Common Pitfalls

1. **Forgetting to handle loading states** - Always show loading indicators
2. **Not handling errors** - Network requests can fail
3. **Using wrong property names** - Make sure the property name matches your ABI
4. **Not providing contract address** - The hook won't work without it
5. **Mixing up function calls** - Public properties don't take parameters (except for indexed mappings)
