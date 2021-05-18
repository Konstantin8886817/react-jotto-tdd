import { getLetterMatchCount } from './';

describe('getLetterMatchCount', () => {
    const secretWord = 'party';
    test('returns correct count when there are no matching letters', () => {
        const letterMatchcount = getLetterMatchCount('bones', secretWord);
        expect(letterMatchcount).toBe(0);
    });
    test ('returns correct count when there are three matching letters', () => {
        const letterMatchcount = getLetterMatchCount('train', secretWord);
        expect(letterMatchcount).toBe(3);
    });
    test('returns correct count when there are duplicate letters in the guess', () => {
        const letterMatchcount = getLetterMatchCount('parka', secretWord);
        expect(letterMatchcount).toBe(3);
    });
});