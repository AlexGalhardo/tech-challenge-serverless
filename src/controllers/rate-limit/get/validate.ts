import { BadRequestError } from "@stone-ton/lambda-handlers";
import Joi from "joi";

import { RateLimitKey } from "~/models/rate-limit";

const getRateLimitSchema = Joi.object({
    id: Joi.string().max(36).required(),
}).required();

const getRateLimitValidate = (data: RateLimitKey) => {
    const { value, error } = getRateLimitSchema.validate(data, { abortEarly: false });

    if (error) throw new BadRequestError(error.message, error.details);

    return value;
};

export default getRateLimitValidate;
