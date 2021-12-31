/**
 * Applies the given key onto the text
 * @param text {string}
 * @param key {Array}
 * @returns {string}
 */
export const applyKey = (text, key) => {
	let cipherText = '';
	for (let i = 0, j = 0; i < text.length; i++) {
		const codePoint = text.codePointAt(i);
		const currentChar = text.charAt(i);
		if (/[A-Z]/.test(currentChar)) {
			cipherText += String.fromCodePoint(((codePoint - 65 + key[j % key.length]) % 26) + 65);
			j++;
		} else if (/[a-z]/.test(currentChar)) {
			cipherText += String.fromCodePoint(((codePoint - 97 + key[j % key.length]) % 26) + 97);
			j++;
		} else {
			cipherText += currentChar;
		}
	}

	return cipherText;
};

/**
 * Returns an array of the code points for the given key between 0 and 26
 * @example
 * // returns [0, 1, 2]
 * makeKeyArray('abc');
 * @example
 * // returns [1, 4, 11, 11, 0, 18, 14]
 * makeKeyArray('Bellaso!!Äö@');
 * @param key
 * @returns {Array}
 */
export const makeKeyArray = key => key.match(/[a-z]+/gi).join('').split('').map(letter => (letter.codePointAt(0) - 65) % 32);

export const encrypt = (text, key) => applyKey(text, makeKeyArray(key));

export const decrypt = (text, key) => applyKey(text, makeKeyArray(key).map(item => ((26 - item) % 26)));

export default encrypt;
