import { dynamodbGet } from '@stone-ton/aws-dynamodb-wrapper'

import { User, UserKey } from '~/models/user'

const getUser = async (key: UserKey): Promise<User | undefined> => {
  const result = await dynamodbGet({
    TableName: 'users-tech-challenge-stone-sdx',
    Key: key,
  })

  return result as User
}

export default getUser
