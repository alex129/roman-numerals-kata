import { ArabicToRomanConverter } from "../ArabicToRomanConverter";

describe("Arabic to roman converter", () => {
    test("should convert 1 to I", () => {
        expect(ArabicToRomanConverter.convert(1)).toBe("I");
    });

    test("should convert 2 to II", () => {
        expect(ArabicToRomanConverter.convert(2)).toBe("II");
    });
});
