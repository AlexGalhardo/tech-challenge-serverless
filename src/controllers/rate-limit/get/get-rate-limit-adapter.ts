import { NotFoundError } from '@stone-ton/lambda-handlers'

import { RateLimit, RateLimitKey } from '~/models/rate-limit'
import getRateLimitRepository from '~/repositories/rate-limit/batch-get'

const getRateLimitAdapter = async (key: RateLimitKey): Promise<RateLimit[]> => {
  const rateLimit = await getRateLimitRepository([key])

  if (!rateLimit) throw new NotFoundError()

  return rateLimit
}

export default getRateLimitAdapter
