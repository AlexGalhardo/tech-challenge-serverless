import { dynamodbGet } from '@stone-ton/aws-dynamodb-wrapper'
import { mock } from 'jest-mock-extended'

import { User } from '~/models/user'

import getUser from './get'

jest.mock('@stone-ton/aws-dynamodb-wrapper')

describe('Repositories - User - Get', () => {
  const dynamoGetMock = jest.mocked(dynamodbGet)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should get user correctly', async () => {
    const userMock = mock<User>()
    dynamoGetMock.mockResolvedValue(userMock)

    const result = await getUser({
      id: 'id',
    })

    expect(result).toEqual(userMock)

    expect(dynamoGetMock).toHaveBeenCalledTimes(1)
    expect(dynamoGetMock).toHaveBeenCalledWith({
      TableName: expect.anything(),
      Key: {
        id: 'id',
      },
    })
  })
})
