import { BadRequestError } from '@stone-ton/lambda-handlers'
import Joi from 'joi'

import { UserKey } from '~/models/user'

const getUserSchema = Joi.object({
  id: Joi.string().max(36).required(),
}).required()

const getUserValidate = (data: UserKey) => {
  const { value, error } = getUserSchema.validate(data, { abortEarly: false })

  if (error) throw new BadRequestError(error.message, error.details)

  return value
}

export default getUserValidate
