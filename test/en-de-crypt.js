import test from 'ava';
import {encrypt, decrypt} from '../index.js';

test('encrypt', t => {
	t.is(encrypt('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', 'abc'), 'TIG QVKCL DRPYN GQX KWMQU OWGR UJE MCZZ FOH.');
});

test('decrypt', t => {
	t.is(decrypt('TIG QVKCL DRPYN GQX KWMQU OWGR UJE MCZZ FOH.', 'abc'), 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
});
