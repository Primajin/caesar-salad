/* eslint-disable no-await-in-loop,no-promise-executor-return */
import {applyKey} from './cypher.js';
/**
 * Sleeps for the given amount of time.
 * @param {number} milliseconds
 * @returns {Promise<unknown>}
 */
const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

/**
 * Generates a key array for every letter of the given text with given number.
 * @param {string} text - The text to generate the key array for.
 * @param {number} number - The number to use for each item in the array.
 */
export const generateKeyArray = (text, number) => {
	const cleanedText = text.replaceAll(/\s/g, '');
	const keyArray = [];
	// eslint-disable-next-line no-unused-vars
	for (const letter of cleanedText) {
		keyArray.push(number);
	}

	return keyArray;
};

/**
 * Animates the given text to be revealed from either left to right or right to left.
 * @param {string} text - The text to be animated.
 * @param {number} [steps=5] - The number of steps to count down each letter.
 * @param {number} [delay=0] - The delay between each count.
 * @param {boolean} [reverse=false] - Whether to count down from the end to the beginning.
 * @returns {Promise<void>}
 */
export const animateTextCypher = async (text, steps = 5, delay = 0, reverse = false) => {
	const keyArray = generateKeyArray(text, steps);
	const countDown = async (value, index) => {
		for (let i = value - 1; i >= 0; i--) {
			await sleep(delay);
			keyArray[index] = i;
			console.log('applyKey', applyKey(text, keyArray));
		}
	};

	if (reverse) {
		for (let index = keyArray.length - 1, value = keyArray[index]; index >= 0; index--) {
			await countDown(value, index);
		}
	} else {
		for (const [index, value] of keyArray.entries()) {
			await countDown(value, index);
		}
	}
};
