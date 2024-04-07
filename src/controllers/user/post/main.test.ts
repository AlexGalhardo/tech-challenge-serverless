import { Request } from '@stone-ton/lambda-handlers'
import { Context } from 'aws-lambda'
import { randomUUID } from 'crypto'
import { mock } from 'jest-mock-extended'

import { ActionEventEnum } from '~/models/event'
import { UserBody } from '~/models/user'
import createUser from '~/repositories/user/create'

import Bcrypt from '~/utils/bcrypt'

import postUserController from './main'
import postUserValidate from './validate'

jest.mock('~/repositories/user/create')
jest.mock('./validate')

describe('Controllers - Post User', () => {
  const postUserValidateMock = jest.mocked(postUserValidate)
  const createUserMock = jest.mocked(createUser)
  const randomUUIDMock = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should execute post user controller', async () => {
    // Arrange
    const userMock = mock<UserBody>()
    postUserValidateMock.mockReturnValue(userMock)

    const requestId = '00000000-0000-0000-0000-000000000000'
    const userAgent = 'vscode-restclient'
    const userId = randomUUID()
    userMock.password = await Bcrypt.hash('qwe123BR@qwe123BR@')

    const requestMock = mock<Request>({
      user: {
        id: userId,
      },
      body: userMock,
      ip: '127.0.0.1',
      requestContext: {
        requestId,
        identity: {
          userAgent,
        },
      },
    })
    const contextMock = mock<Context>()

    randomUUIDMock.mockReturnValue(userId)

    // Act
    const response = await postUserController(requestMock, contextMock)

    // Assert
    expect(response).toStrictEqual({
      body: {
        key: { id: userId },
        body: userMock,
        metadata: {
          action: ActionEventEnum.USER_CREATED,
          ip: requestMock.ip,
          request_id: requestId,
          user_agent: userAgent,
        },
      },
    })

    expect(postUserValidateMock).toHaveBeenCalledTimes(1)
    expect(postUserValidateMock).toHaveBeenCalledWith(userMock)

    expect(createUserMock).toHaveBeenCalledTimes(1)
    expect(createUserMock).toHaveBeenCalledWith({
      key: { id: userId },
      body: userMock,
      metadata: {
        action: ActionEventEnum.USER_CREATED,
        ip: requestMock.ip,
        request_id: requestId,
        user_agent: userAgent,
      },
    })
  })
})
