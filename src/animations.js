/* eslint-disable no-await-in-loop,no-promise-executor-return */
/**
 * Sleeps for the given amount of time.
 * @param {number} milliseconds
 * @returns {Promise<unknown>}
 */
const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

/**
 * Does nothing.
 */
const noop = () => {};

/**
 * Counts down and mutates each item in the array to 0, from beginning to the end.
 * @param {Array} keyArray - The array to count down.
 * @param {number} delay - The delay between each item.
 * @param {Function} [functionToCallWithKeyArray] - The function to call each time with the key array.
 * @param {boolean} [reverse=false] - Whether to count down from the end to the beginning.
 * @returns {Promise<void>}
 */
export const countdownKeyArray = async (keyArray, delay, functionToCallWithKeyArray = noop(), reverse = false) => {
	const countDown = async (value, index) => {
		for (let i = value - 1; i >= 0; i--) {
			await sleep(delay);
			keyArray[index] = i;
			functionToCallWithKeyArray(keyArray);
		}
	};

	if (reverse) {
		for (let index = keyArray.length - 1; index >= 0; index--) {
			await countDown(keyArray[index], index);
		}
	} else {
		for (const [index, value] of keyArray.entries()) {
			await countDown(value, index);
		}
	}
};

const myArray = [5, 5, 5, 5];
await countdownKeyArray(myArray, 100, console.log, true);
await sleep(1000);
console.log('');
const myArray2 = [5, 5, 5, 5];
await countdownKeyArray(myArray2, 100, console.log);
