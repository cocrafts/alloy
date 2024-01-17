import type { Camera } from '@babylonjs/core';

export interface SceneProps {
	onCameraCreated: (instance: Camera) => void;
}
