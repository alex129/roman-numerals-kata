import { Dictionary } from './constants';
import { ArabicRomanDictionary } from './types';

export class ArabicToRomanConverter {
  static convert(arabicNumber: number): string {
    if (arabicNumber === 0) {
      return '';
    }
    const romanNumber = this.getRomanFromDictionary(arabicNumber);

    if (!romanNumber) {
      const closestDictionary = this.getClosestDictionaryNumber(arabicNumber);
      if (!closestDictionary) {
        throw new Error(`Could not convert ${arabicNumber} to roman number`);
      }

      const integerPart = Math.floor(arabicNumber / closestDictionary.arabic) * closestDictionary.arabic;
      const remainder = arabicNumber % closestDictionary.arabic;

      let romanIntegerPart = this.getRomanFromDictionary(integerPart);
      if (!romanIntegerPart) {
        romanIntegerPart = '';

        for (let i = 0; i < integerPart / closestDictionary.arabic; i++) {
          romanIntegerPart += closestDictionary.roman;
        }
      }

      const romanRemainder = this.convert(remainder);

      return `${romanIntegerPart}${romanRemainder}`;
    }
    return romanNumber;
  }

  static getRomanFromDictionary(arabicNumber: number): string | undefined {
    return Dictionary.find((dictionaryEntry) => dictionaryEntry.arabic === arabicNumber)?.roman;
  }

  static getClosestDictionaryNumber(arabicNumber: number): ArabicRomanDictionary | undefined {
    const sortByArabicDesc = (a: ArabicRomanDictionary, b: ArabicRomanDictionary) => b.arabic - a.arabic;
    return Dictionary.sort(sortByArabicDesc).find((dictionaryEntry) => dictionaryEntry.arabic <= arabicNumber);
  }
}
