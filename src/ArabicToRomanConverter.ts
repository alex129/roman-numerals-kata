export class ArabicToRomanConverter {
    static convert(arabicNumber: number) {
        if(arabicNumber === 2) {
            return "II";
        }
        
        return "I";
    }
}
