import { dynamodbTransactWriteRaw } from '@stone-ton/aws-dynamodb-wrapper'

import { RateLimitKey } from '~/models/rate-limit'
import { addSeconds, now } from '~/utils/epoch-date'

import incrementRateLimitRepository from './increment'

jest.mock('@stone-ton/aws-dynamodb-wrapper')
jest.mock('~/utils/epoch-date')

describe('Repositories - Rate Limit - Increment', () => {
  const dynamodbTransactWriteRawMock = jest.mocked(dynamodbTransactWriteRaw)
  const addSecondsMock = jest.mocked(addSeconds)
  const nowMock = jest.mocked(now)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should increment rate limit', async () => {
    // Arrange
    const key: RateLimitKey = {
      id: '123456789',
    }

    nowMock.mockReturnValue(1709919505)
    addSecondsMock.mockReturnValue(1710005905)

    // Act
    await incrementRateLimitRepository([key])

    // Assert
    expect(dynamodbTransactWriteRawMock).toHaveBeenCalledTimes(1)
    expect(dynamodbTransactWriteRawMock).toHaveBeenCalledWith({
      TransactItems: [
        {
          Update: {
            TableName: 'rate-limit-tech-challenge-stone-sdx',
            Key: { id: '123456789' },
            UpdateExpression: `
            SET #counter = if_not_exists(#counter, :start) + :inc,
                expire_at = if_not_exists(expire_at, :expire_at),
                created_at = if_not_exists(created_at, :created_at)`,

            ExpressionAttributeNames: { '#counter': 'counter' },
            ExpressionAttributeValues: {
              ':created_at': 1709919505,
              ':expire_at': 1710005905,
              ':inc': 1,
              ':start': 0,
            },
            ReturnValues: 'UPDATED_NEW',
          },
        },
      ],
    })
  })
})
