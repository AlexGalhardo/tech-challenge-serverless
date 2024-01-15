import { HttpStatusCode, headers } from "./constants";
import * as yup from "yup";

class HttpError extends Error {
    constructor(
        public statusCode: number,
        body: Record<string, unknown> = {},
    ) {
        super(JSON.stringify(body));
    }
}

export const handleHttpExceptionError = (error: unknown) => {
    if (error instanceof yup.ValidationError) {
        return {
            statusCode: HttpStatusCode.BAD_REQUEST,
            headers,
            body: JSON.stringify({
                success: false,
                message: error.errors,
            }),
        };
    }

    if (error instanceof SyntaxError) {
        return {
            statusCode: HttpStatusCode.BAD_REQUEST,
            headers,
            body: JSON.stringify({ success: false, message: error.message }),
        };
    }

    if (error instanceof HttpError) {
        return {
            statusCode: error.statusCode,
            headers,
            body: JSON.stringify({ success: false, message: error.message }),
        };
    }

    return {
        statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
        headers,
        body: JSON.stringify({ success: false, message: error }),
    };
};
