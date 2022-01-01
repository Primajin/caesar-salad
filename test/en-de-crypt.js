import test from 'ava';
import {encrypt, decrypt} from '../index.js';

test('encrypt', t => {
	t.is(encrypt('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', 'abc'), 'TIG QVKCL DRPYN GQX KWMQU OWGR UJE MCZZ FOH.');
});

test('decrypt', t => {
	t.is(decrypt('TIG QVKCL DRPYN GQX KWMQU OWGR UJE MCZZ FOH.', 'abc'), 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
});

test('caesar salad', t => {
	// Person one encrypts the text with key one "abc"
	t.is(encrypt('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', 'abc'), 'TIG QVKCL DRPYN GQX KWMQU OWGR UJE MCZZ FOH.');
	// Person two encrypts the text again with key two "zyx"
	t.is(encrypt('TIG QVKCL DRPYN GQX KWMQU OWGR UJE MCZZ FOH.', 'zyx'), 'SGD PTHBJ AQNVM ENW ITLOR NUDQ SGD KZYX CNF.');
	// Person one decrypts the text with key one "abc"
	t.is(decrypt('SGD PTHBJ AQNVM ENW ITLOR NUDQ SGD KZYX CNF.', 'abc'), 'SFB PSFBI YQMTM DLW HRLNP NTBQ RED JXYW ANE.');
	// Person two decrypts the text with key two "zyx"
	t.is(decrypt('SFB PSFBI YQMTM DLW HRLNP NTBQ RED JXYW ANE.', 'zyx'), 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
});
