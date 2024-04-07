import { dynamodbBatchGet } from '@stone-ton/aws-dynamodb-wrapper'
import { NotFoundError } from '@stone-ton/lambda-handlers'

import { RateLimit, RateLimitKey } from '~/models/rate-limit'

const batchGetRateLimitRepository = async (
  keys: RateLimitKey[],
): Promise<RateLimit[] | undefined> => {
  const result = await dynamodbBatchGet<RateLimit>({
    TableName: 'rate-limit-tech-challenge-stone-sdx',
    Keys: keys,
  })

  if (!result) throw new NotFoundError()

  return result
}

export default batchGetRateLimitRepository
