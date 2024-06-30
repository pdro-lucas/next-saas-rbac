export class UnautherizedError extends Error {
  constructor(message?: string) {
    super(message || 'Unauthorized')
  }
}
