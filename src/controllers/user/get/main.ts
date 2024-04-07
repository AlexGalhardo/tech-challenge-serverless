import { Controller } from '@stone-ton/lambda-handlers'

import { UserKey } from '~/models/user'

import getUserAdapter from './user-get-adapter'
import getUserValidate from './validate'

const getUserController: Controller = async (request: any) => {
  const key: UserKey = getUserValidate({ id: request.pathParameters?.id })

  const user = await getUserAdapter(key)

  return {
    body: {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      updated_at: user.updated_at,
      created_at: user.created_at,
    },
  }
}

export default getUserController
