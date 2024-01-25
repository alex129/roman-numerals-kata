import { ArabicRomanDictionary } from "./constants";

export class ArabicToRomanConverter {
  static convert(arabicNumber: number) {
    const romanNumber = ArabicRomanDictionary[arabicNumber];

    if(!romanNumber) {
      const integerPart = Math.floor(arabicNumber / 10);
      const remainder = arabicNumber % 10;

      return ArabicRomanDictionary[integerPart * 10] + ArabicRomanDictionary[remainder];
    }
    return romanNumber;
  }
}
