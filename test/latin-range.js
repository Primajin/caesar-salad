import test from 'ava';
import {isInLatinLowercaseRange, isInLatinUppercaseRange, isWithinLatinRange} from '../src/cypher.js';

test('isInLatinUppercaseRange TRUE', t => {
	t.true(isInLatinUppercaseRange(65));
});

test('isInLatinUppercaseRange FALSE', t => {
	t.false(isInLatinUppercaseRange(91));
});

test('isInLatinLowercaseRange TRUE', t => {
	t.true(isInLatinLowercaseRange(97));
});

test('isInLatinLowercaseRange FALSE', t => {
	t.false(isInLatinLowercaseRange(123));
});

test('isWithinLatinRange TRUE', t => {
	t.true(isWithinLatinRange(65));
});

test('isWithinLatinRange FALSE', t => {
	t.false(isWithinLatinRange(123));
});
