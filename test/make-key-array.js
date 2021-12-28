import test from 'ava';
import {makeKeyArray} from '../index.js';

test('ABC', t => {
	t.deepEqual(makeKeyArray('ABC'), [0, 1, 2]);
});

test('abc', t => {
	t.deepEqual(makeKeyArray('abc'), [0, 1, 2]);
});

test('Giovan Battista Bellaso', t => {
	t.deepEqual(makeKeyArray('Giovan Battista Bellaso'), [6, 8, 14, 21, 0, 13, 1, 0, 19, 19, 8, 18, 19, 0, 1, 4, 11, 11, 0, 18, 14]);
});

test('Gi1o0va4n Battis5ta Bellaso!!Äö@', t => {
	t.deepEqual(makeKeyArray('Gi1o0va4n Battis5ta Bellaso!!Äö@'), [6, 8, 14, 21, 0, 13, 1, 0, 19, 19, 8, 18, 19, 0, 1, 4, 11, 11, 0, 18, 14]);
});
