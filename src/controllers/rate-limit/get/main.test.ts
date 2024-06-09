// import { Request } from '@stone-ton/lambda-handlers'

// import { Context } from 'aws-lambda'
import { mock } from "jest-mock-extended";

import { RateLimit, RateLimitKey } from "~/models/rate-limit";

import getRateLimitAdapter from "./get-rate-limit-adapter";
// import getRateLimitController from './main'
import getRateLimitValidate from "./validate";

jest.mock("./get-rate-limit-adapter");
jest.mock("./validate");

describe("Controllers - Get Rate Limit - Main", () => {
    const rateLimitGetAdapterMock = jest.mocked(getRateLimitAdapter);
    const rateLimitGetValidateMock = jest.mocked(getRateLimitValidate);

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should execute get rate limit controller", async () => {
        // Arrange
        const rateLimitKeyMock = mock<RateLimitKey>();
        rateLimitGetValidateMock.mockReturnValue(rateLimitKeyMock);

        const rateLimitMock = mock<RateLimit>();
        rateLimitGetAdapterMock.mockResolvedValue([rateLimitMock]);

        // const requestMock = mock<Request>()
        // const contextMock = mock<Context>()

        // Act
        // const response = await getRateLimitController(requestMock, contextMock)

        // expect(response).toStrictEqual({
        //   body: {
        //     ...rateLimitMock,
        //   },
        // })

        // expect(rateLimitGetAdapterMock).toHaveBeenCalledTimes(1)
        // expect(rateLimitGetAdapterMock).toHaveBeenCalledWith(rateLimitKeyMock)
    });
});
