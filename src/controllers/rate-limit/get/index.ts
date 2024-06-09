import { LambdaApiHandler } from "@stone-ton/lambda-handlers";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

import getRateLimitController from "./main";

export const handler = async (event: APIGatewayProxyEvent, context: Context) => {
    const apiHandler = new LambdaApiHandler(getRateLimitController);

    return apiHandler.handler(event, context);
};
