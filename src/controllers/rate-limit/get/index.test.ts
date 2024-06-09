import { LambdaApiHandler } from "@stone-ton/lambda-handlers";
import { Context, APIGatewayProxyEvent } from "aws-lambda";
import { mock } from "jest-mock-extended";

import { handler } from ".";

jest.mock("@stone-ton/lambda-handlers");

describe("Controllers - Get User", () => {
    const LambdaApiHandlerMock = jest.mocked(LambdaApiHandler);

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should be type function", () => {
        expect(typeof handler).toBe("function");
    });

    it("should execute handler", async () => {
        // Arrange
        const eventMock = mock<APIGatewayProxyEvent>();
        const contextMock = mock<Context>();

        // Act
        await handler(eventMock, contextMock);

        // Assert
        expect(LambdaApiHandlerMock).toHaveBeenCalledTimes(1);

        expect(LambdaApiHandlerMock.mock.instances[0].handler).toHaveBeenCalledTimes(1);
        expect(LambdaApiHandlerMock.mock.instances[0].handler).toHaveBeenCalledWith(eventMock, contextMock);
    });
});
