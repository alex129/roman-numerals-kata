import { ArabicRomanDictionary } from "./constants";

export class ArabicToRomanConverter {
  static convert(arabicNumber: number): string {
    if (arabicNumber === 0) {
      return "";
    }
    const romanNumber = ArabicRomanDictionary[arabicNumber];

    if (!romanNumber) {
      const nearestLowerPowerOfTen = this.getNearestLowerPowerOfTen(arabicNumber);
      const integerPart = Math.floor(arabicNumber / nearestLowerPowerOfTen) * nearestLowerPowerOfTen;
      const remainder = arabicNumber % nearestLowerPowerOfTen;

      let romanIntegerPart = ArabicRomanDictionary[integerPart];
      if (!romanIntegerPart) {
        romanIntegerPart = "";
        for(let i = 0; i < integerPart / nearestLowerPowerOfTen; i++) { 
          romanIntegerPart += ArabicRomanDictionary[nearestLowerPowerOfTen];
        }
      }
      
      const romanRemainder = this.convert(remainder);


      return `${romanIntegerPart}${romanRemainder}`;
    }
    return romanNumber;
  }


  static getNearestLowerPowerOfTen(number: number): number {
    let power = 1;
    while (power * 10 <= number) {
      power *= 10;
    }
    return power;
  }
}
