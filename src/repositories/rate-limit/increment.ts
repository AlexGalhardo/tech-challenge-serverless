import { dynamodbTransactWriteRaw } from "@stone-ton/aws-dynamodb-wrapper";

import { RateLimitKey } from "~/models/rate-limit";
import { addSeconds, now } from "~/utils/epoch-date";

const incrementRateLimitRepository = async (keys: RateLimitKey[]): Promise<void> => {
    const expire_at = addSeconds(86400); // 1 dia
    const created_at = now();

    await dynamodbTransactWriteRaw({
        TransactItems: keys.map(({ id }) => ({
            Update: {
                TableName: "rate-limit-tech-challenge-stone-sdx",
                Key: {
                    id,
                },
                UpdateExpression: `
            SET #counter = if_not_exists(#counter, :start) + :inc,
                expire_at = if_not_exists(expire_at, :expire_at),
                created_at = if_not_exists(created_at, :created_at)`,
                ExpressionAttributeNames: {
                    "#counter": "counter",
                },
                ExpressionAttributeValues: {
                    ":inc": 1,
                    ":start": 0,
                    ":expire_at": expire_at,
                    ":created_at": created_at,
                },
                ReturnValues: "UPDATED_NEW",
            },
        })),
    });
};

export default incrementRateLimitRepository;
