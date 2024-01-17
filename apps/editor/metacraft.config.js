const { resolve } = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const copyAssets = (config) => {
	config.module.rules[1].use[1] = {
		loader: 'css-loader',
		options: { url: false },
	};

	config.plugins.push(
		new CopyPlugin({
			patterns: [
				{
					from: resolve(process.cwd(), 'assets/'),
					to: './',
					filter: (uri) => {
						const isFont = uri.indexOf('/fonts/') >= 0;
						const isTemplate = uri.endsWith('.ejs') || uri.endsWith('.sass');

						return !isFont && !isTemplate;
					},
				},
			],
		}),
	);

	return config;
};

module.exports = {
	useReact: true,
	publicPath: () => process.env.PUBLIC_URL || '/',
	keepPreviousBuild: () => true,
	buildId: () => 'editor',
	webpackMiddlewares: [copyAssets],
	moduleAlias: {
		global: {
			'react-native$': 'react-native-web',
		},
	},
};
