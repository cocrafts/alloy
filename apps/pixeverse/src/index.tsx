import type { FC } from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import type { Camera } from '@babylonjs/core';
import Engine from 'components/UniversalEngine';
import DemoScene from 'scenes/Demo';

export const App: FC = () => {
	const [camera, setCamera] = useState<Camera>();

	return (
		<Engine camera={camera} style={styles.container}>
			<DemoScene onCameraCreated={setCamera} />
		</Engine>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
