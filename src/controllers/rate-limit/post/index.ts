import { LambdaApiHandler } from "@stone-ton/lambda-handlers";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

import postRateLimitController from "./main";

export const handler = async (event: APIGatewayProxyEvent, context: Context) => {
    const apiHandler = new LambdaApiHandler(postRateLimitController);

    return apiHandler.handler(event, context);
};
