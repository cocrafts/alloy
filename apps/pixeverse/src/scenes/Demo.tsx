import type { FC } from 'react';
import { Scene } from 'react-babylonjs';
import type { Camera } from '@babylonjs/core';
import { Vector3 } from '@babylonjs/core';
import SpinningBox from 'components/SpinningBox';

interface Props {
	onCameraCreated: (instance: Camera) => void;
}

export const DemoScene: FC<Props> = ({ onCameraCreated }) => {
	return (
		<Scene onSceneMount={() => console.log('mounted!')}>
			<freeCamera
				name="camera1"
				onCreated={onCameraCreated}
				position={new Vector3(0, 5, -10)}
				setTarget={[Vector3.Zero()]}
			/>
			<hemisphericLight
				name="light1"
				intensity={0.7}
				direction={new Vector3(0, 1, 0)}
			/>
			<SpinningBox name="box1" />
		</Scene>
	);
};

export default DemoScene;
