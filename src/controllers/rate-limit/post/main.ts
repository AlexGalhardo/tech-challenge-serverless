import { Controller } from "@stone-ton/lambda-handlers";

import incrementRateLimitAdapter from "./increment-rate-limit-adapter";

const postRateLimitController: Controller = async (request) => {
    await incrementRateLimitAdapter({
        id: request.pathParameters?.id as string,
    });

    return {
        body: {
            success: true,
        },
    };
};

export default postRateLimitController;
