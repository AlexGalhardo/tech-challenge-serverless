import { NotFoundError } from "@stone-ton/lambda-handlers";
import { mock } from "jest-mock-extended";

import { User, UserKey } from "~/models/user";
import getUser from "~/repositories/user/get";

import getUserAdapter from "./user-get-adapter";

jest.mock("~/repositories/user/get");

describe("Controllers - Get User - Get User Adapter", () => {
    const userGetMock = jest.mocked(getUser);

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should return user when key exist", async () => {
        // Arrange
        const todoMock = mock<User>();
        userGetMock.mockResolvedValue(todoMock);

        const keyMock = mock<UserKey>();

        // Act
        const result = await getUserAdapter(keyMock);

        // Assert
        expect(result).toStrictEqual(todoMock);

        expect(userGetMock).toHaveBeenCalledTimes(1);
        expect(userGetMock).toHaveBeenCalledWith(keyMock);
    });

    it("should throw not found error when key not exist", async () => {
        // Arrange
        userGetMock.mockResolvedValue(undefined);
        const keyMock = mock<UserKey>();

        // Act
        await expect(getUserAdapter(keyMock)).rejects.toThrow(new NotFoundError());

        // Assert
        expect(userGetMock).toHaveBeenCalledTimes(1);
        expect(userGetMock).toHaveBeenCalledWith(keyMock);
    });
});
