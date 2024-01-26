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

  test("should convert 46 to XLVI", () => {
    expect(ArabicToRomanConverter.convert(46)).toBe("XLVI");
  });

  test("should convert 78 to LXXVIII", () => {
    expect(ArabicToRomanConverter.convert(78)).toBe("LXXVIII");
  });

  test("should convert 200 to CC", () => {
    expect(ArabicToRomanConverter.convert(200)).toBe("CC");
  });

  test("should convert 210 to CCX", () => {
    expect(ArabicToRomanConverter.convert(210)).toBe("CCX");
  });

  test("should convert 846 to DCCCXLVI", () => {
    expect(ArabicToRomanConverter.convert(846)).toBe("DCCCXLVI");
  });

  test("should convert 1999 to MCMXCIX", () => {
    expect(ArabicToRomanConverter.convert(1999)).toBe("MCMXCIX");
  });

  test("should convert 2020 to MMXX", () => {
    expect(ArabicToRomanConverter.convert(2020)).toBe("MMXX");
  });

  test("should convert 2008 to MMVIII", () => {
    expect(ArabicToRomanConverter.convert(2008)).toBe("MMVIII");
  });

  test("should convert 5000 to _V", () => {
    expect(ArabicToRomanConverter.convert(5000)).toBe("_V");
  });

  test("should convert 6000 to _VM", () => {
    expect(ArabicToRomanConverter.convert(6000)).toBe("_VM");
  });

  test("should convert 5001 to _VI", () => {
    expect(ArabicToRomanConverter.convert(5001)).toBe("_VI");
  });

  test("should convert 10000 to _V_V", () => {
    expect(ArabicToRomanConverter.convert(10000)).toBe("_V_V");
  });

  test('should throw error when converting -1', () => {
     expect(() => ArabicToRomanConverter.convert(-1)).toThrowError('Could not convert -1 to roman number');
  });
});
