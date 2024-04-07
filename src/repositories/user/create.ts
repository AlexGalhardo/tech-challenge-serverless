import { dynamodbTransactWrite } from '@stone-ton/aws-dynamodb-wrapper'

import { Event, EventBase, EventKey, EventMetadata } from '~/models/event'
import { User, UserBody, UserKey } from '~/models/user'
import getISOString from '~/utils/date/get-iso-string'

export interface CreateUser {
  key: UserKey
  body: UserBody
  metadata: EventMetadata
  event_base?: EventBase
}

const createUser = async (
  { key, body, metadata }: CreateUser,
) => {
  const now = getISOString()
  const user: User = {
    ...key,
    ...body,
    updated_at: now,
    created_at: now,
  }
  const event_key: EventKey = {
    pk: user.id,
    created_at: now,
  }
  const event: Event<User> = {
    ...event_key,
    ...metadata,
    data_event: user,
  }

  await dynamodbTransactWrite([
    {
      Put: {
        TableName: 'users-tech-challenge-stone-sdx',
        Key: key,
        Item: user,
      },
    },
    {
      Put: {
        TableName: 'events-tech-challenge-stone-sdx',
        Key: event_key,
        Item: event,
      },
    },
  ])
}

export default createUser
