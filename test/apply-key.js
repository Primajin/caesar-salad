import test from 'ava';
import {applyKey} from '../index.js';

test('abc on UPPERCASE', t => {
	t.is(applyKey('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', [0, 1, 2]), 'TIG QVKCL DRPYN GQX KWMQU OWGR UJE MCZZ FOH.');
});

test('abc on lowercase', t => {
	t.is(applyKey('the quick brown fox jumps over the lazy dog.', [0, 1, 2]), 'tig qvkcl drpyn gqx kwmqu owgr uje mczz foh.');
});

test('empty on lowercase', t => {
	t.is(applyKey('This just stays the same as before!', []), 'This just stays the same as before!');
});
