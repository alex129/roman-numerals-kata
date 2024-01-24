import { ArabicToRomanConverter } from "../ArabicToRomanConverter";

describe("Arabic to roman converter", () => {
    test("should convert 1 to I", () => {
        expect(ArabicToRomanConverter.convert(1)).toBe("I");
    });
});
