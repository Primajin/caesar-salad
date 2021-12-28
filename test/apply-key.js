import test from 'ava';
import {applyKey} from '../index.js';

test('abc', t => {
	t.is(applyKey('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', [0, 1, 2]), 'TIG QVKCL DRPYN GQX KWMQU OWGR UJE MCZZ FOH.');
});
