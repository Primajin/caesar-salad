/**
 Checks if given code point is within Latin uppercase range
 The code point for 'A' is 65, until the code point for 'Z' is 90.
 @param {number} codePoint - The character code point to check.
 @returns {boolean} Whether the character is an uppercase Latin letter.
 */
export const isInLatinUppercaseRange = codePoint => codePoint >= 65 && codePoint <= 90;

/**
 Checks if given code point is within Latin lowercase range
 The code point for 'a' is 97, until the code point for 'z' is 122.
 @param {number} codePoint - The character code point to check.
 @returns {boolean} Whether the character is a lowercase Latin letter.
 */
export const isInLatinLowercaseRange = codePoint => codePoint >= 97 && codePoint <= 122;

/**
 Checks if given code point is within Latin range
 The code point for 'A' is 65, until the code point for 'z' is 122.
 @param {number} codePoint - The character code point to check.
 @returns {boolean} Whether the character is within the Latin letter range.
 */
export const isWithinLatinRange = codePoint => codePoint >= 65 && codePoint <= 122;

/**
 Applies the given key onto the text
 @param {string} text - The input text to transform.
 @param {Array<number>} key - The key shift values to apply.
 @returns {string} The transformed text.
 */
export const applyKey = (text, key) => {
	if (!key || key.length === 0) {
		return text;
	}

	let cipherText = '';

	let offset = 0;
	for (const letter of text) {
		const letterCodePoint = letter.codePointAt(0);
		if (isInLatinUppercaseRange(letterCodePoint)) {
			cipherText += String.fromCodePoint(((letterCodePoint - 65 + key[offset % key.length]) % 26) + 65);
			offset++;
		} else if (isInLatinLowercaseRange(letterCodePoint)) {
			cipherText += String.fromCodePoint(((letterCodePoint - 97 + key[offset % key.length]) % 26) + 97);
			offset++;
		} else {
			cipherText += letter;
		}
	}

	return cipherText;
};

/**
 Returns an array of the code points for the given key between 0 and 26
 @example
 // returns [0, 1, 2]
 makeKeyArray('abc');
 @example
 // returns [1, 4, 11, 11, 0, 18, 14]
 makeKeyArray('Bellaso!!Äö@');
 @param {string} key - The key to convert into shift values.
 @returns {Array<number>} The key represented as shift values.
 */
export const makeKeyArray = key => {
	const keyArray = [];
	for (const letter of key) {
		const letterCodePoint = letter.codePointAt(0);
		if (isWithinLatinRange(letterCodePoint)) {
			keyArray.push((letterCodePoint - 65) % 32);
		}
	}

	return keyArray;
};
