/**
@type {import('xo').FlatXoConfig}
*/
const xoConfig = [
	{
		ignores: [
			'docs',
			'package-lock.json',
		],
	},
	{
		// The katex override only patches xo's markdown linting (dev tooling); it is intentionally not meant for consumers.
		files: ['package.json'],
		rules: {
			'package-json/no-overrides-in-published-package': 'off',
		},
	},
];

export default xoConfig;
