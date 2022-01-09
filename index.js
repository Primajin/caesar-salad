import {applyKey, makeKeyArray} from './src/cypher.js';

/**
 * Encrypts given text with given key / password
 * @param {string} text
 * @param {string} key
 * @returns {string}
 */
export const encrypt = (text, key) => applyKey(text, makeKeyArray(key));

/**
 * Decrypts given text with given key / password
 * @param {string} text
 * @param {string} key
 * @returns {string}
 */
export const decrypt = (text, key) => applyKey(text, makeKeyArray(key).map(item => ((26 - item) % 26)));

export default encrypt;
