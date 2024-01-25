import { ArabicRomanDictionary } from './constants';

export class ArabicToRomanConverter {
  static convert(arabicNumber: number): string {
    if (arabicNumber === 0) {
      return '';
    }
    const romanNumber = ArabicRomanDictionary[arabicNumber];

    if (!romanNumber) {
      const closestDictionary = this.getClosestDictionaryNumber(arabicNumber);
      if (!closestDictionary) {
        throw new Error(`Could not convert ${arabicNumber} to roman number`);
      }

      const integerPart = Math.floor(arabicNumber / closestDictionary.dicitonaryNumber) * closestDictionary.dicitonaryNumber;
      const remainder = arabicNumber % closestDictionary.dicitonaryNumber;

      let romanIntegerPart = ArabicRomanDictionary[integerPart];
      if (!romanIntegerPart) {
        romanIntegerPart = '';
        if (closestDictionary) {
          for (let i = 0; i < integerPart / closestDictionary.dicitonaryNumber; i++) {
            romanIntegerPart += closestDictionary.romanNumber;
          }
        }
      }

      const romanRemainder = this.convert(remainder);

      return `${romanIntegerPart}${romanRemainder}`;
    }
    return romanNumber;
  }

  static getClosestDictionaryNumber(arabicNumber: number): { dicitonaryNumber: number; romanNumber: string } | null {
    const dictionaryEntries = Object.entries(ArabicRomanDictionary).sort((a, b) => Number(b[0]) - Number(a[0]));
    for (const [dictionaryNumber, romanNumber] of dictionaryEntries) {
      if (Number(dictionaryNumber) <= arabicNumber) {
        return { dicitonaryNumber: Number(dictionaryNumber), romanNumber };
      }
    }

    return null;
  }
}
