import * as cypher from './cypher.js';
import * as animations from './animations.js';

Object.defineProperty(globalThis, 'caesar', {
	value: {
		cypher,
		animations,
	},
	configurable: true,
	writable: true,
});
