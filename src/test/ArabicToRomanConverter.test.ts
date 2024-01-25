import { ArabicToRomanConverter } from "../ArabicToRomanConverter";

describe("Arabic to roman converter", () => {
  test("should convert 1 to I", () => {
    expect(ArabicToRomanConverter.convert(1)).toBe("I");
  });

  test("should convert 2 to II", () => {
    expect(ArabicToRomanConverter.convert(2)).toBe("II");
  });

  test("should convert 3 to III", () => {
    expect(ArabicToRomanConverter.convert(3)).toBe("III");
  });

  test("should convert 4 to IV", () => {
    expect(ArabicToRomanConverter.convert(4)).toBe("IV");
  });

  test("should convert 11 to XI", () => {
    expect(ArabicToRomanConverter.convert(11)).toBe("XI");
  });

  test("should convert 200 to CC", () => {
    expect(ArabicToRomanConverter.convert(200)).toBe("CC");
  });
});
