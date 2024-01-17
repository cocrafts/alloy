import type { Camera } from '@babylonjs/core';
import { atom } from 'recoil';

export const cameraRecoil = atom<Camera>({
	key: 'camera',
	default: undefined,
});
