import {applyKey, makeKeyArray} from './src/cypher.js';

/**
 Encrypts given text with given key / password
 @param {string} text - The text to encrypt.
 @param {string} key - The key to encrypt the text with.
 @returns {string} The encrypted text.
 */
export const encrypt = (text, key) => applyKey(text, makeKeyArray(key));

/**
 Decrypts given text with given key / password
 @param {string} text - The text to decrypt.
 @param {string} key - The key to decrypt the text with.
 @returns {string} The decrypted text.
 */
export const decrypt = (text, key) => applyKey(text, makeKeyArray(key).map(item => ((26 - item) % 26)));

export default encrypt;
