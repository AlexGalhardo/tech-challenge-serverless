import { LambdaApiHandler } from "@stone-ton/lambda-handlers";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

import postUserController from "./main";

export const handler = async (event: APIGatewayProxyEvent, context: Context) => {
    const apiHandler = new LambdaApiHandler(postUserController);

    return apiHandler.handler(event, context);
};
