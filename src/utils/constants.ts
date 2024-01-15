import * as yup from "yup";
import AWS from "aws-sdk";

export const DynamoDBDocumentClient = new AWS.DynamoDB.DocumentClient();

export const USERS_TABLE = String(process.env.USERS_TABLE);
export const SITE_ACCESS_TABLE = String(process.env.SITE_ACCESS_TABLE);

export const createUserSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup
        .string()
        .required()
        .min(8, "Password must has at least 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        ),
});

export const headers = {
    "content-type": "application/json",
};

export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}
