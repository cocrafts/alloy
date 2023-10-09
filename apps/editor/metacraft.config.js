module.exports = {
	useReact: true,
	compiler: 'esbuild',
	publicPath: () => process.env.PUBLIC_URL || '/',
	keepPreviousBuild: () => true,
	buildId: () => 'editor',
	webpackMiddlewares: [],
	moduleAlias: {
		global: {
			'react-native$': 'react-native-web',
		},
	},
};
