import {calculatePasswordStrength} from "../src/Password";

describe('calculatePasswordStrenght',()=>{
    it('should return "Very Weak" for password less than 8 characters', () => {
        expect(calculatePasswordStrength('abc')).toBe('Very Weak');
        expect(calculatePasswordStrength('12345')).toBe('Very Weak');
    });
    it('should return "Very Weak" for empty password', () => {
        expect(calculatePasswordStrength('')).toBe('Very Weak');
    });
    it('should return "Weak" for passwords with basic requirements',() => {
        expect(calculatePasswordStrength('urowhcvц')).toBe('Weak');
        expect(calculatePasswordStrength('12345678@')).toBe('Weak');
    });
    it('should return "Moderate" for passwords meeting 4 criteria', () => {
        expect(calculatePasswordStrength('taT12345')).toBe('Moderate');
        expect(calculatePasswordStrength('DEm12345')).toBe('Moderate');
    });
    it('should return "Strong" for passwords meeting 5+ criteria',() => {
        expect(calculatePasswordStrength('Tat12345!')).toBe('Strong');
        expect(calculatePasswordStrength('W0rd@i54')).toBe('Strong');
    });
    it('should handle passwords with 12+ characters correctly', () => {
        expect(calculatePasswordStrength('Tatdem123458!')).toBe('Strong');
        expect(calculatePasswordStrength('D3eM1o3YT6p4')).toBe('Strong');
    });
    it('should handle passwords with lenght exactly 8 and 12 characters',() => {
        expect(calculatePasswordStrength('Tatdem35')).toBe('Moderate');
        expect(calculatePasswordStrength('Tatdem35!@ir')).toBe('Strong');
    });
});