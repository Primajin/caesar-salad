/* eslint-disable no-await-in-loop,no-promise-executor-return */
import {applyKey} from './cypher.js';
/**
 * Sleeps for the given amount of time.
 * @param {number} milliseconds
 * @returns {Promise<unknown>}
 */
const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

/**
 * Counts down and mutates each item in the array to 0, from beginning to the end.
 * @param {Array} keyArray - The array to count down.
 * @param {number} delay - The delay between each item.
 * @param {boolean} [reverse=false] - Whether to count down from the end to the beginning.
 * @returns {Promise<void>}
 */
export const countdownKeyArray = async (keyArray, delay, reverse = false) => {
	const countDown = async (value, index) => {
		for (let i = value - 1; i >= 0; i--) {
			await sleep(delay);
			keyArray[index] = i;
			console.log('applyKey', applyKey('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', keyArray));
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

const myArray = [5, 5, 5];
await countdownKeyArray(myArray, 100, true);
await sleep(1000);
console.log('');
const myArray2 = [5, 5, 5];
await countdownKeyArray(myArray2, 100);
