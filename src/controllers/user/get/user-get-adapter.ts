import { NotFoundError } from "@stone-ton/lambda-handlers";

import { User, UserKey } from "~/models/user";
import getUser from "~/repositories/user/get";

const getUserAdapter = async (key: UserKey): Promise<User> => {
    const user = await getUser(key);

    if (!user) throw new NotFoundError();

    return user;
};

export default getUserAdapter;
