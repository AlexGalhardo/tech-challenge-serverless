import { LambdaApiHandler } from '@stone-ton/lambda-handlers'
import { APIGatewayProxyEvent, Context } from 'aws-lambda'

import getUserController from './main'

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
) => {
  const apiHandler = new LambdaApiHandler(getUserController)

  return apiHandler.handler(event, context)
}
