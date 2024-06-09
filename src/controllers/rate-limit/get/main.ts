import { Controller } from "@stone-ton/lambda-handlers";

import getRateLimitAdapter from "./get-rate-limit-adapter";

const getRateLimitController: Controller = async (request) => {
    const result = await getRateLimitAdapter({ id: request.pathParameters?.id as string });

    return {
        body: {
            id: result[0].id,
            counter: result[0].counter,
        },
    };
};

export default getRateLimitController;
