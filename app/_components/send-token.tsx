import { toast } from 'sonner'
import { useAccount } from 'wagmi'
import { Address, parseEther } from 'viem'
import { Button } from '@/components/ui/button'
import { useReadAllowance } from '@/queries/erc20/use-read-allowance'
import { useApproveAllowance } from '@/queries/erc20/use-write-approve-allowance'
import { useGetBalanceOf } from '@/queries/get-balance-of'
import { useWriteSendToken } from '@/queries/erc20/use-write-send-token'


export const SendToken = () => {
  const { address, isConnected } = useAccount()
  const sendToken = useWriteSendToken()
  const approveAllowance = useApproveAllowance()
  const { data: ethBalance } = useGetBalanceOf({ owner: address })
  
  const readAllowance = useReadAllowance({
    erc20address: process.env.NEXT_PUBLIC_EXAMPLE_CONTRACT as Address,
    ownerAddress: address,
    spender: process.env.NEXT_PUBLIC_EXAMPLE_CONTRACT as Address
  })
  
  const handleSendToken = async () => {

    if (!isConnected) {
      toast.error('Please connect your wallet to send the token.')
      return
    }

    if (ethBalance?.value && !(ethBalance.value > BigInt(0))) {
      toast.error('You need some ETH to send the token.')
      return
    }

    if (readAllowance.data && readAllowance.data < parseEther('1')) {
      try {
        await approveAllowance.mutateAsync({
          erc20address: process.env.NEXT_PUBLIC_EXAMPLE_CONTRACT as Address,
          spender: process.env.NEXT_PUBLIC_EXAMPLE_CONTRACT as Address,
          amount: parseEther('1')
        })
        toast.success('Token approved successfully.')
      } catch (error) {
        toast.error('Failed to approve token.')
        console.error(error)
        return
      }
    }

    try {
      await sendToken.mutateAsync()
      toast.success('Token sent successfully.')
    } catch (error) {
      toast.error('Failed to send token.')
      console.error(error)
    }
  }

  return (
    <Button variant="outline" size="sm" onClick={handleSendToken}>
      {sendToken.isPending ? <span className='animate-pulse'>Sending...</span> : 'Send Token Back'}
    </Button>
  )
} 