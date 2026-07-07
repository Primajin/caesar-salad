import * as esbuild from 'esbuild';

const parameters = process.argv.slice(2); // eslint-disable-line n/prefer-global/process

let isWatchmode = false;

/**
 Iterate through the parameters and set the build parameters
 @param {Array<string>} cliParameters - Command line parameters.
 @returns {object} The parsed build options for esbuild.
 */
const getBuildParameters = cliParameters => {
	const buildParameters = {
		bundle: true,
		entryPoints: ['src/index.js'],
		external: [],
		outfile: 'docs/examples/index.js',
		platform: 'browser',
		watch: false,
	};

	// Iterate through the parameters and overwrite the default options
	for (const parameter of cliParameters) {
		const [key, value] = parameter.split('=');
		buildParameters[key.replace('--', '')] = value ?? true;
	}

	if (buildParameters.watch) {
		isWatchmode = true;
	}

	delete buildParameters.watch;

	return buildParameters;
};

const context = await esbuild.context({...getBuildParameters(parameters)});

if (isWatchmode) {
	try {
		console.log('Watching for changes...');
		await context.watch();
	} catch (error) {
		console.error(error);
	}
} else {
	await context.rebuild();
	context.dispose();
}
