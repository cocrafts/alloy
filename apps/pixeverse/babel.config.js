module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					assets: './assets',
					utils: './src/utils',
					state: './src/state',
					components: './src/components',
					scenes: './src/scenes',
				},
			},
		],
	],
};
