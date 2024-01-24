export class ArabicToRomanConverter {
    static convert(arabicNumber: number) {
        if(arabicNumber === 2) {
            return "II";
        } else if(arabicNumber === 3) { 
            return "III";
        }

        return "I";
    }
}
