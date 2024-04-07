import { mock } from 'jest-mock-extended'

import { RateLimitKey } from '~/models/rate-limit'
import incrementRateLimitRepository from '~/repositories/rate-limit/increment'

import incrementRateLimitAdapter from './increment-rate-limit-adapter'

jest.mock('~/repositories/rate-limit/increment')

describe('Controllers - Post Rate Limit - Increment Rate Limit Adapter', () => {
  const incrementRateLimitRepositoryMock = jest.mocked(incrementRateLimitRepository)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return rate limit id and counter', async () => {
    // Arrange
    const rateLimitKeyMock = mock<RateLimitKey>()
    incrementRateLimitRepositoryMock.mockResolvedValue()

    // Act
    await incrementRateLimitAdapter(rateLimitKeyMock)

    // Assert
    expect(incrementRateLimitRepositoryMock).toHaveBeenCalledTimes(1)
    expect(incrementRateLimitRepositoryMock).toHaveBeenCalledWith([rateLimitKeyMock])
  })
})
