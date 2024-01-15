import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { randomUUID } from "node:crypto";
import { handleHttpExceptionError } from "./utils/handleHttpExceptionError";
import {
    DynamoDBDocumentClient,
    HttpStatusCode,
    SITE_ACCESS_TABLE,
    USERS_TABLE,
    createUserSchema,
    headers,
} from "./utils/constants";
import Bcrypt from "./utils/bcrypt";

export const createUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        let reqBody = JSON.parse(String(event.body));

        await createUserSchema.validate(reqBody, { abortEarly: false });

        const result = await DynamoDBDocumentClient.query({
            TableName: USERS_TABLE,
            IndexName: "EmailIndex",
            KeyConditionExpression: "email = :email",
            ExpressionAttributeValues: {
                ":email": String(reqBody.email),
            },
        }).promise();

        if (result.Items?.[0]) {
            return {
                statusCode: HttpStatusCode.BAD_REQUEST,
                headers,
                body: JSON.stringify({
                    success: false,
                    error: "Email already registered.",
                }),
            };
        }

        reqBody.password = await Bcrypt.hash(reqBody.password);

        const newUser = {
            id: randomUUID(),
            ...reqBody,
            created_at: new Date().toISOString(),
            updated_at: null,
        };

        await DynamoDBDocumentClient.transactWrite({
            TransactItems: [
                {
                    Put: {
                        TableName: USERS_TABLE,
                        Item: newUser,
                        ConditionExpression: "attribute_not_exists(email)",
                    },
                },
            ],
        }).promise();

        return {
            statusCode: HttpStatusCode.CREATED,
            headers,
            body: JSON.stringify({
                success: true,
                data: newUser,
            }),
        };
    } catch (error) {
        return handleHttpExceptionError(error);
    }
};

export const getUserById = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const { Item } = await DynamoDBDocumentClient.get({
            TableName: USERS_TABLE,
            Key: {
                id: String(event.pathParameters?.id),
            },
        }).promise();

        if (!Item) {
            return {
                statusCode: HttpStatusCode.NOT_FOUND,
                headers,
                body: JSON.stringify({
                    success: false,
                    message: "User not found",
                }),
            };
        }

        return {
            statusCode: HttpStatusCode.OK,
            headers,
            body: JSON.stringify({
                success: true,
                data: Item,
            }),
        };
    } catch (error) {
        return handleHttpExceptionError(error);
    }
};

export const incrementSiteAccess = async (): Promise<APIGatewayProxyResult> => {
    try {
        const { Item } = await DynamoDBDocumentClient.get({
            TableName: SITE_ACCESS_TABLE,
            Key: { id: "1" },
        }).promise();

        if (!Item) {
            await DynamoDBDocumentClient.put({
                TableName: SITE_ACCESS_TABLE,
                Item: {
                    id: "1",
                    total_access: 1,
                },
            }).promise();

            return {
                statusCode: HttpStatusCode.CREATED,
                headers,
                body: JSON.stringify({
                    success: true,
                    data: {
                        total_access: 1,
                    },
                }),
            };
        }

        const { Attributes } = await DynamoDBDocumentClient.update({
            TableName: SITE_ACCESS_TABLE,
            Key: {
                id: "1",
            },
            UpdateExpression: "SET total_access = if_not_exists(total_access, :zero) + :one",
            ExpressionAttributeValues: {
                ":one": 1,
                ":zero": 0,
            },
            ReturnValues: "ALL_NEW",
        }).promise();

        return {
            statusCode: HttpStatusCode.CREATED,
            headers,
            body: JSON.stringify({
                success: true,
                data: {
                    total_site_access: Attributes?.total_access,
                },
            }),
        };
    } catch (error) {
        return handleHttpExceptionError(error);
    }
};

export const getTotalSiteAccess = async (): Promise<APIGatewayProxyResult> => {
    try {
        const { Item } = await DynamoDBDocumentClient.get({
            TableName: SITE_ACCESS_TABLE,
            Key: {
                id: "1",
            },
        }).promise();

        return {
            statusCode: HttpStatusCode.OK,
            headers,
            body: JSON.stringify({
                success: true,
                data: {
                    total_site_access: Item?.total_access,
                },
            }),
        };
    } catch (error) {
        return handleHttpExceptionError(error);
    }
};
