import { ArabicRomanDictionary } from "./constants";

export class ArabicToRomanConverter {
    static convert(arabicNumber: number) {
        return ArabicRomanDictionary[arabicNumber];
    }
}
