import { now, checkExpired, addSeconds, epochToISOString, ISOToEpoch } from "./epoch-date";

describe("Utils - Epoch date", () => {
    it("should return date in epoch format", () => {
        expect(typeof now()).toEqual("number");
    });

    it("should return true when date is expired", () => {
        expect(checkExpired(now() - 1)).toBe(true);
    });

    it("should add seconds", () => {
        expect(addSeconds(300)).toBe(now() + 300);
    });

    it("should convert epoch to iso string", () => {
        expect(epochToISOString(1599849074)).toBe("2020-09-11T18:31:14.000Z");
    });

    it("should convert iso to epoch", () => {
        expect(ISOToEpoch("2020-09-11T18:31:14.000Z")).toBe(1599849074);
    });
});
