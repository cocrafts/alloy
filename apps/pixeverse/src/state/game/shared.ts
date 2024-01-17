import type { Camera } from '@babylonjs/core';
import { proxy } from 'valtio';

export interface GameState {
	camera?: Camera;
}

export const gameState = proxy<GameState>({
	camera: undefined,
});
