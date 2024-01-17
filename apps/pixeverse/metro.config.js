const { resolve } = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const projectRoot = __dirname;
const workspaceRoot = resolve(projectRoot, '../..');
// const projectModules = resolve(projectRoot, 'node_modules');
const workspaceModules = resolve(workspaceRoot, 'node_modules');
const defaultConfig = getDefaultConfig(projectRoot);
const { resolver } = defaultConfig;

const monoPackages = {};

module.exports = mergeConfig(defaultConfig, {
	watchFolders: [workspaceModules, ...Object.values(monoPackages)],
	resolver: {
		assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
		sourceExts: [...resolver.sourceExts, 'svg'],
	},
	// resolver: {
	// 	nodeModulesPaths: [projectModules, workspaceModules],
	// 	extraNodeModules: monoPackages,
	// 	disableHierarchicalLookup: true,
	// },
	// transformer: {
	// 	getTransformOptions: async () => ({
	// 		transform: {
	// 			experimentalImportSupport: false,
	// 			inlineRequires: true,
	// 		},
	// 	}),
	// },
});
