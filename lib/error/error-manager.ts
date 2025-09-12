import { ErrorHandler } from './error-handler'
import { WagmiErrorHandler } from './wagmi-error-handler'

export class ErrorManager {
  private error: unknown

  constructor(error: unknown) {
    this.error = error
  }

  public getErrorMessage(): string {
    if (this.error instanceof Error) {
      return new WagmiErrorHandler(this.error).getMessage()
    }
    return new ErrorHandler(this.error).getMessage()
  }
}
