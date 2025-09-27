// import { useReadPublicProperty } from '@/queries/erc20/use-read-public-property'
import React from 'react'
import { Address } from 'viem'
import { ReadPublicProperty } from './read-public-property'

const contractAddress = process.env.NEXT_PUBLIC_EXAMPLE_CONTRACT as Address

export const ContractInfo = () => {
  return (
    <div className='space-y-4 p-4 border rounded-lg'>
      <h3 className='text-lg font-semibold'>Contract Information</h3>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* Token Name */}
        <div className='flex items-center justify-between p-3 bg-gray-50 rounded'>
          <span className='font-medium'></span>
          <ReadPublicProperty propertyName='name' />
        </div>

        {/* Token Symbol */}
        <div className='flex items-center justify-between p-3 bg-gray-50 rounded'>
          <span className='font-medium'>Symbol:</span>
          <ReadPublicProperty propertyName='symbol' 
          />
        </div>

        {/* Decimals */}
        <div className='flex items-center justify-between p-3 bg-gray-50 rounded'>
          <span className='font-medium'>Decimals:</span>
          <ReadPublicProperty propertyName='decimals' 
          />
        </div>

        {/* Mint Amount */}
        <div className='flex items-center justify-between p-3 bg-gray-50 rounded'>
          <span className='font-medium'>Mint Amount:</span>
          <ReadPublicProperty propertyName='MINT_AMOUNT' 
          />
        </div>

        {/* Total Supply */}
        <div className='flex items-center justify-between p-3 bg-gray-50 rounded'>
          <span className='font-medium'>Supply:</span>
          <ReadPublicProperty propertyName='totalSupply' 
          />
        </div>

        {/* Total Minted */}
        <div className='flex items-center justify-between p-3 bg-gray-50 rounded'>
          <span className='font-medium'>Returned:</span>
          <ReadPublicProperty propertyName='totalMinted' 
          />
        </div>
      </div>
    </div>
  )
}