import { RateLimitKey } from "~/models/rate-limit";
import incrementRateLimit from "~/repositories/rate-limit/increment";

const incrementRateLimitAdapter = async (key: RateLimitKey) => {
    await incrementRateLimit([key]);
};

export default incrementRateLimitAdapter;
