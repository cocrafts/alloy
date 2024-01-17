import type { ReactNode } from 'react';
import type { EngineProps } from 'react-babylonjs';
import type { StyleProp, ViewStyle } from 'react-native';
import type { Camera } from '@babylonjs/core';

export type UniversalEngineProps = EngineProps & {
	style?: StyleProp<ViewStyle>;
	children?: ReactNode;
	camera?: Camera;
};
