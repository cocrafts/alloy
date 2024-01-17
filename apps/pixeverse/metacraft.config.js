module.exports = {
	publicPath: () => process.env.PUBLIC_URL || '/',
	keepPreviousBuild: () => true,
	buildId: () => 'app',
	moduleAlias: {
		global: {
			'react-native$': 'react-native-web',
		},
	},
};
