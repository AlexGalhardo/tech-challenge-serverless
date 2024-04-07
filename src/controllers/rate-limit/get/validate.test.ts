import { UserKey } from '~/models/user'

import getUserValidate from './validate'

describe('Controllers - Get User - Validate', () => {
  it('should validate get user', () => {
    const result = getUserValidate({
      id: '00000000-0000-0000-0000-000000000001',
    })

    expect(result).toStrictEqual({
      id: '00000000-0000-0000-0000-000000000001',
    })
  })

  it('should throw error when body is empty', () => {
    const body = {} as UserKey
    expect(
      () => getUserValidate(body),
    ).toThrow()
  })
})
