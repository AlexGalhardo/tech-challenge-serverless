import { UserBody } from "~/models/user";

import postUserValidate from "./validate";

describe("Controllers - Post User - Validate", () => {
    it("should validate post user", () => {
        const result = postUserValidate({
            name: "alex",
            email: "alex.test@gmail.com",
            password: "qwe123BR@qwe123BR@",
        });

        expect(result).toStrictEqual({
            name: "alex",
            email: "alex.test@gmail.com",
            password: "qwe123BR@qwe123BR@",
        });
    });

    it("should throw error when body is empty", () => {
        const body = {} as UserBody;

        expect(() => postUserValidate(body)).toThrow();
    });
});
