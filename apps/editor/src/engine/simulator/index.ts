import type { Scene } from '@babylonjs/core';
import { MeshBuilder } from '@babylonjs/core';

export const onSceneReady = (scene: Scene) => {
	scene.createDefaultCameraOrLight(true, false, true);
	const box = new MeshBuilder.CreateBox();
	console.log(scene, '<--');
};
