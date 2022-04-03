[![codecov](https://codecov.io/gh/Primajin/caesar-salad/branch/main/graph/badge.svg?token=ouxuHl9wrD)](https://codecov.io/gh/Primajin/caesar-salad)

# Caesar Salad

To Rome and back again

## Example:
<style>
iframe { border:0; height:235px; margin-left:-15px; width:calc(100% + 40px); }
@media only screen and (min-width: 500px) {
  iframe { margin:0; width:400px; }
}
</style>
<iframe src="examples/index.html"></iframe>

## Rules:

1. Never write your own cryptography
2. But when you do, have fun with it
3. Nfxes wsf kt jp psqdvetjqn (abc)

This is to illustrate basic Caesar or rather Vigenère ciphers but with a twist - without ever sharing the key. All
keys remain private keys.

Think of it like a precious chest. You add a lock and send the locked chest to a friend. They add their own lock and
send the chest back to you. You remove your lock and send the still locked chest back. They remove their lock and can
open the chest.

```js
// Person one encrypts the text with key one "abc"
encrypt('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', 'abc'); // TIG QVKCL DRPYN GQX KWMQU OWGR UJE MCZZ FOH.
// Sends this text to person two

// Person two encrypts the text again with key two "zyx"
encrypt('TIG QVKCL DRPYN GQX KWMQU OWGR UJE MCZZ FOH.', 'zyx'); // SGD PTHBJ AQNVM ENW ITLOR NUDQ SGD KZYX CNF.
// Sends this text back to person one

// Person one decrypts the text with their secret key
decrypt('SGD PTHBJ AQNVM ENW ITLOR NUDQ SGD KZYX CNF.', 'abc'); // SFB PSFBI YQMTM DLW HRLNP NTBQ RED JXYW ANE.
// Sends it back to person two

// Person two decrypts the text with their secret key
decrypt('SFB PSFBI YQMTM DLW HRLNP NTBQ RED JXYW ANE.', 'zyx'); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
// Person two can now read the message
```

## Documentation:

Docs can be found here: <https://Primajin.github.io/caesar-salad/>
