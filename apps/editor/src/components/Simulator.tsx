import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import type { EngineOptions, SceneOptions } from '@babylonjs/core';
import { Engine, Scene } from '@babylonjs/core';

interface Props {
	style?: StyleProp<ViewStyle>;
	antialias?: boolean;
	engineOptions?: EngineOptions;
	adaptToDeviceRatio?: boolean;
	sceneOptions?: SceneOptions;
	onRender?: (scene: Scene) => void;
	onSceneReady?: (scene: Scene) => void;
}

export const GameEditor: FC<Props> = ({
	style,
	antialias,
	engineOptions,
	adaptToDeviceRatio,
	sceneOptions,
	onRender,
	onSceneReady,
}) => {
	const canvasRef = useRef(null);
	const sceneRef = useRef<Scene | null>(null);

	useEffect(() => {
		if (!canvasRef.current) return;
		const engine = new Engine(
			canvasRef.current,
			antialias,
			engineOptions,
			adaptToDeviceRatio,
		);
		sceneRef.current = new Scene(engine, sceneOptions);
		const scene = sceneRef.current;

		if (scene.isReady()) {
			onSceneReady?.(scene);
		} else {
			scene.onReadyObservable.addOnce((scene) => onSceneReady?.(scene));
		}

		engine.runRenderLoop(() => {
			if (typeof onRender === 'function') onRender(scene);
			scene.render();
		});

		return () => scene.getEngine().dispose();
	}, []);

	const onContainerLayout = () => {
		if (!sceneRef.current) return;
		sceneRef.current.getEngine().resize();
	};

	return (
		<View style={style} onLayout={onContainerLayout}>
			<canvas ref={canvasRef} className="editor" />
		</View>
	);
};

export default GameEditor;
