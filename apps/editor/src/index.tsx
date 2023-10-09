import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { invoke } from '@tauri-apps/api';
import Simulator from 'components/Simulator';
import { onSceneReady } from 'engine/simulator';

export const App: FC = () => {
	const onInvoke = async (): Promise<void> => {
		const result = await invoke('greet', { name: 'world' });
		console.log(result, '<-- message from Tauri');
	};

	return (
		<View style={styles.container}>
			<Simulator style={styles.editorContainer} onSceneReady={onSceneReady} />
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'green',
	},
	editorContainer: {
		flex: 1,
		backgroundColor: 'red',
	},
});
