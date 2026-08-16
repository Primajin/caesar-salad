# Copilot Instructions

## Project Overview

Caesar Salad is an ESM JavaScript library implementing Vigenère cipher encryption/decryption.
The clever twist: two parties can exchange encrypted messages **without ever sharing keys** — each party applies and then removes their own private key in sequence.

## Architecture

- **`index.js`** — Public API: `encrypt(text, key)` and `decrypt(text, key)`
- **`src/cypher.js`** — Core cipher logic: `applyKey`, `makeKeyArray`, range helpers
- **`src/animations.js`** — Browser animation helpers: `animateTextCypher`, `generateKeyArray`
- **`test/`** — AVA unit tests, one file per module
- **`docs/`** — GitHub Pages site with live examples

## Development

```sh
npm install        # Install dependencies
npm test           # Run unit tests (AVA)
npm run lint       # Lint with XO
npm run lint:fix   # Auto-fix lint issues
npm run coverage   # Run tests with c8 coverage
npm run build      # Build with esbuild (minified)
npm start          # Build in watch mode with source maps
```

## Code Style

- Code style is enforced by [XO](https://github.com/xojs/xo) (ESLint wrapper)
- Project uses **ESM** (`"type": "module"` in `package.json`) — always use `import`/`export`, never `require`
- Use **tabs** for indentation
- Use **single quotes** for strings
- Use the **`v` flag** on all regular expressions (e.g. `/\s/gv`) as required by the `require-unicode-regexp` rule
- Trailing commas required in multiline statements

## Testing

Tests use [AVA](https://github.com/avajs/ava). Each source file has a corresponding test file in `test/`.
Run a single test file: `npx ava test/cypher.js`

## Key Concepts

- **Caesar/Vigenère cipher**: shifts each Latin letter by a key value; non-Latin characters pass through unchanged
- **Key array**: converts a string key into an array of shift values (0–25) via code points
- **No-key-sharing protocol**: encrypt with key A → encrypt with key B → decrypt with key A → decrypt with key B
