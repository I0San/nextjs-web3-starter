import { WriteContractErrorType } from 'wagmi/actions'
import { ErrorHandler } from './error-handler'

export class WagmiErrorHandler extends ErrorHandler {
  constructor(error: WriteContractErrorType | unknown) {
    super(error)
  }
  getErrorMessageBySignature = (signature: string): string | null => {
    switch (signature) {
      case '0xe450d38c':
        return 'Insufficient balance to execute transaction'
      case '0x4c250823':
        return 'Insufficient allowance to execute transaction'

      default:
        return null
    }
  }

  public getMessage(): string {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cause = (this.error as WriteContractErrorType)?.cause as any

    return (
      this.getErrorMessageBySignature(cause?.signature) ??
      cause?.reason ??
      cause?.shortMessage ??
      cause?.metaMessages?.[0] ??
      'A contract error occurred'
    )
  }
}
