import { Controller } from "@stone-ton/lambda-handlers";
import { randomUUID } from "node:crypto";

import { ActionEventEnum } from "~/models/event";
import { UserBody, UserKey } from "~/models/user";
import createUser from "~/repositories/user/create";
import Bcrypt from "~/utils/bcrypt";

import postUserValidate from "./validate";

const postUserController: Controller = async (request) => {
    const body: UserBody = postUserValidate(request.body);
    const key: UserKey = { id: request.user?.id ?? randomUUID() };

    body.password = await Bcrypt.hash(body.password);

    await createUser({
        key,
        body,
        metadata: {
            action: ActionEventEnum.USER_CREATED,
            request_id: request.requestContext.requestId,
            ip: request.ip,
            user_agent: String(request.requestContext.identity.userAgent),
        },
    });

    return {
        body: {
            key,
            body,
            metadata: {
                action: ActionEventEnum.USER_CREATED,
                request_id: request.requestContext.requestId,
                ip: request.ip,
                user_agent: request.requestContext.identity.userAgent,
            },
        },
    };
};

export default postUserController;
