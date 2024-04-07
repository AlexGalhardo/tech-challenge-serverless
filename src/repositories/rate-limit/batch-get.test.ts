import { dynamodbBatchGet } from '@stone-ton/aws-dynamodb-wrapper'

import { mock } from 'jest-mock-extended'

import { RateLimit, RateLimitKey } from '~/models/rate-limit'

import batchGetRateLimitRepository from './batch-get'

jest.mock('@stone-ton/aws-dynamodb-wrapper')

describe('Repositories - Rate Limit - Batch Get', () => {
  const dynamodbBatchGetMock = jest.mocked(dynamodbBatchGet)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should batch get rate limit', async () => {
    // Arrange
    const key: RateLimitKey = {
      id: '123456789',
    }
    const rateLimitMock = mock<RateLimit>()

    dynamodbBatchGetMock.mockResolvedValue([rateLimitMock])

    // Act
    const result = await batchGetRateLimitRepository([key])

    // Assert
    expect(result).toStrictEqual([rateLimitMock])

    expect(dynamodbBatchGetMock).toHaveBeenCalledTimes(1)
    expect(dynamodbBatchGetMock).toHaveBeenCalledWith({
      TableName: 'rate-limit-tech-challenge-stone-sdx',
      Keys: [key],
    })
  })
})
