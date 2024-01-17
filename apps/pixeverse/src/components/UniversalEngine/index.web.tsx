import type { FC } from 'react';
import { Engine, Scene } from 'react-babylonjs';
import { View } from 'react-native';

import type { UniversalEngineProps } from './shared';

export const UniversalEngine: FC<UniversalEngineProps> = ({
	style,
	children,
	antialias,
}) => {
	return (
		<View style={style}>
			<Engine antialias={antialias}>
				<Scene>{children}</Scene>
			</Engine>
		</View>
	);
};

export default UniversalEngine;
