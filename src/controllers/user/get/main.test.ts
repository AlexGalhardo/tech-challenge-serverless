import { Request } from "@stone-ton/lambda-handlers";
import { Context } from "aws-lambda";
import { mock } from "jest-mock-extended";

import { User, UserKey } from "~/models/user";

import getUserController from "./main";
import getUserAdapter from "./user-get-adapter";
import getUserValidate from "./validate";

jest.mock("./user-get-adapter");
jest.mock("./validate");

describe("Controllers - Get User - Main", () => {
    const userGetAdapterMock = jest.mocked(getUserAdapter);
    const userGetValidateMock = jest.mocked(getUserValidate);

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should execute get todo controller", async () => {
        // Arrange
        const UserKeyMock = mock<UserKey>();
        userGetValidateMock.mockReturnValue(UserKeyMock);

        const userMock = mock<User>();
        userGetAdapterMock.mockResolvedValue(userMock);

        const requestMock = mock<Request>();
        const contextMock = mock<Context>();

        // Act
        const response = await getUserController(requestMock, contextMock);

        // Assert
        expect(response).toStrictEqual({
            body: {
                id: userMock.id,
                name: userMock.name,
                email: userMock.email,
                password: userMock.password,
                updated_at: userMock.updated_at,
                created_at: userMock.created_at,
            },
        });

        expect(userGetValidateMock).toHaveBeenCalledTimes(1);
        expect(userGetValidateMock).toHaveBeenCalledWith({
            id: requestMock.pathParameters.id,
        });

        expect(userGetAdapterMock).toHaveBeenCalledTimes(1);
        expect(userGetAdapterMock).toHaveBeenCalledWith(UserKeyMock);
    });
});
