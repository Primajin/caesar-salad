import test from 'ava';
import {applyKey} from '../index.js';

test('abc on UPPERCASE', t => {
	t.is(applyKey('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', [0, 1, 2]), 'TIG QVKCL DRPYN GQX KWMQU OWGR UJE MCZZ FOH.');
});

test('abc on lowercase', t => {
	t.is(applyKey('the quick brown fox jumps over the lazy dog.', [0, 1, 2]), 'tig qvkcl drpyn gqx kwmqu owgr uje mczz foh.');
});

test('permutations', t => {
	t.is(applyKey('AaA', [1]), 'BbB'); // just one
	t.is(applyKey('AaA', [1, 1]), 'BbB'); // key shorter than message
	t.is(applyKey('AaA', [1, 1, 1]), 'BbB'); // key equal length to message
	t.is(applyKey('AaA', [1, 1, 1, 1]), 'BbB'); // key longer than message
	t.is(applyKey('BbB', [1, 1, 1]), 'CcC'); // key same as message
	t.is(applyKey('AaA', [0, 0, 0]), 'AaA'); // key only zeroes
	t.is(applyKey('AaA', []), 'AaA'); // key empty
});
