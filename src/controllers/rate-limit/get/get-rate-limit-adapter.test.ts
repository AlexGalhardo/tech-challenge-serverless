import { mock } from "jest-mock-extended";

import { RateLimit, RateLimitKey } from "~/models/rate-limit";
import getRateLimitRepository from "~/repositories/rate-limit/batch-get";

import getRateLimitAdapter from "./get-rate-limit-adapter";

jest.mock("~/repositories/rate-limit/batch-get");

describe("Controllers - Get Rate Limit - Get Rate Limit Adapter", () => {
    const getRateLimitRepositoryMock = jest.mocked(getRateLimitRepository);

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should return Rate Limit id and total_access", async () => {
        // Arrange
        const rateLimitKeyMock = mock<RateLimitKey>();
        const rateLimitMock = mock<RateLimit>();
        getRateLimitRepositoryMock.mockResolvedValue([rateLimitMock]);

        // Act
        const result = await getRateLimitAdapter(rateLimitKeyMock);

        // Assert
        expect(result).toStrictEqual([rateLimitMock]);

        expect(getRateLimitRepositoryMock).toHaveBeenCalledTimes(1);
        expect(getRateLimitRepositoryMock).toHaveBeenCalledWith([rateLimitKeyMock]);
    });

    // it('should throw not found error when key not exist', async () => {
    //   // Arrange
    //   const rateLimitKeyMock = mock<RateLimitKey>()
    //   // const rateLimitMock = mock<RateLimit>(undefined)
    //   // getRateLimitRepositoryMock.mockResolvedValue([rateLimitMock])

    //   // Act
    //   await expect(
    //     getRateLimitAdapter({ id: '' }),
    //   ).rejects.toThrow()

    //   // Assert
    //   expect(getRateLimitRepositoryMock).toHaveBeenCalledTimes(1)
    //   expect(getRateLimitRepositoryMock).toHaveBeenCalledWith(rateLimitKeyMock)
    // })
});
