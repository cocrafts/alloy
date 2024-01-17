import type { Scene } from '@babylonjs/core';
import { MeshBuilder, StandardMaterial } from '@babylonjs/core';

export const onSceneReady = (scene: Scene) => {
	scene.createDefaultCameraOrLight(true, false, true);
	// const box = new MeshBuilder.CreateBox();
	const sphere = MeshBuilder.CreateSphere('mySphere', { segments: 5 }, scene);
	const ground = MeshBuilder.CreateGroundFromHeightMap('ground', '/map.jpg', {
		height: 10,
		width: 10,
		subdivisions: 100,
	});

	ground.material = new StandardMaterial('ground-material');
	ground.material.wireframe = true;

	console.log(scene, sphere, ground, '<--');
};
