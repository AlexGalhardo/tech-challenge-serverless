import { Request } from '@stone-ton/lambda-handlers'
import { Context } from 'aws-lambda'
import { mock } from 'jest-mock-extended'

import incrementRateLimitAdapter from './increment-rate-limit-adapter'
import postRateLimitController from './main'

jest.mock('./increment-rate-limit-adapter')

describe('Controllers - Post Rate Limit - Main', () => {
  const incrementRateLimitAdapterMock = jest.mocked(incrementRateLimitAdapter)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should execute post Rate Limit controller', async () => {
    // Arrange
    incrementRateLimitAdapterMock.mockResolvedValue(undefined)

    const requestMock = mock<Request>()
    const contextMock = mock<Context>()

    // Act
    const response = await postRateLimitController(requestMock, contextMock)

    expect(response).toStrictEqual({
      body: {
        success: true,
      },
    })

    expect(incrementRateLimitAdapterMock).toHaveBeenCalledTimes(1)
  })
})
