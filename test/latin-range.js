import test from 'ava';
import {isInLatinLowercaseRange, isInLatinUppercaseRange, isWithinLatinRange} from '../src/cypher.js';

test('isInLatinUppercaseRange TRUE', t => {
	t.is(isInLatinUppercaseRange(65), true);
});

test('isInLatinUppercaseRange FALSE', t => {
	t.is(isInLatinUppercaseRange(91), false);
});

test('isInLatinLowercaseRange TRUE', t => {
	t.is(isInLatinLowercaseRange(97), true);
});

test('isInLatinLowercaseRange FALSE', t => {
	t.is(isInLatinLowercaseRange(123), false);
});

test('isWithinLatinRange TRUE', t => {
	t.is(isWithinLatinRange(65), true);
});

test('isWithinLatinRange FALSE', t => {
	t.is(isWithinLatinRange(123), false);
});
