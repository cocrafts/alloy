import type { FC } from 'react';
import { EngineCanvasContext } from 'react-babylonjs';
import { View } from 'react-native';
import { EngineView, useEngine } from '@babylonjs/react-native';

import type { UniversalEngineProps } from './shared';

const UniversalEngine: FC<UniversalEngineProps> = ({
	style,
	children,
	camera,
}) => {
	const engine = useEngine();

	const engineContext = {
		engine: engine as never,
		canvas: null,
	};

	return (
		<View style={style}>
			<EngineCanvasContext.Provider value={engineContext}>
				{engine && children}
			</EngineCanvasContext.Provider>
			<EngineView displayFrameRate camera={camera as never} />
		</View>
	);
};

export default UniversalEngine;
