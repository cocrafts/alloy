import type { Camera } from '@babylonjs/core';

import { gameState } from './shared';

export const gameActions = {
	setCamera: (camera: Camera) => (gameState.camera = camera),
};

export * from './shared';
