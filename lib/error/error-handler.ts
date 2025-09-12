export class ErrorHandler extends Error {
  protected error: unknown

  constructor(error: unknown) {
    super(error instanceof Error ? error.message : 'An unknown error occurred')
    this.error = error
  }

  public getMessage(): string {
    if (this.error instanceof Error) {
      return this.error.message
    }
    return 'An unknown error occurred'
  }
}
