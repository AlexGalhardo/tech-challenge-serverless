import { generateEventPK, dynamodbTransactWrite } from "@stone-ton/aws-dynamodb-wrapper";

import { mock } from "jest-mock-extended";

// import { ActionEventEnum } from '~/models/event'
import getISOString from "~/utils/date/get-iso-string";

import createUser, { CreateUser } from "./create";

jest.mock("~/utils/date/get-iso-string");
jest.mock("@stone-ton/aws-dynamodb-wrapper");

describe("Repositories - User - Create", () => {
    const getISOStringMock = jest.mocked(getISOString);
    const generateEventPKMock = jest.mocked(generateEventPK);
    const dynamodbTransactWriteMock = jest.mocked(dynamodbTransactWrite);

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should create user", async () => {
        // Arrange
        const paramsMock = mock<CreateUser>();
        generateEventPKMock.mockReturnValue("event-pk");
        getISOStringMock.mockReturnValueOnce("2024-02-06T17:55:30.273Z");

        // Act
        await createUser(paramsMock);

        // Assert
        expect(getISOStringMock).toHaveBeenCalledTimes(1);
        // expect(generateEventPKMock).toHaveBeenCalledTimes(1)

        expect(dynamodbTransactWriteMock).toHaveBeenCalledTimes(1);
        // expect(dynamodbTransactWriteMock).toHaveBeenCalledWith([
        //   {
        //     Put: {
        //       TableName: 'users-tech-challenge-stone-sdx',
        //       Key: paramsMock.key,
        //       Item: paramsMock.body,
        //     },
        //   },
        //   {
        //     Put: {
        //       TableName: 'events-tech-challenge-stone-sdx',
        //       Key: {
        //         created_at: '2024-01-09',
        //         pk: 'teste',
        //       },
        //       Item: {
        //         ip: '127.0.0.1',
        //         pk: 'teste',
        //         user_agent: 'user-agent',
        //         action: ActionEventEnum.USER_CREATED,
        //         created_at: '2024-01-09',
        //         data_event: {
        //           ...paramsMock.key,
        //           ...paramsMock.body,
        //           created_at: '2024-01-09',
        //           updated_at: '2024-01-09',
        //         },
        //         request_id: paramsMock.metadata.request_id,
        //       },
        //     },
        //   },
        // ])
    });
});
