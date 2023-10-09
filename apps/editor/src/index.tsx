import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { invoke } from '@tauri-apps/api';
import Editor from 'components/Editor';

export const App: FC = () => {
	const onInvoke = async (): Promise<void> => {
		const result = await invoke('greet', { name: 'world' });
		console.log(result, '<-- message from Tauri');
	};

	return (
		<View style={styles.container}>
			<Editor style={styles.editorContainer} />
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	editorContainer: {},
});
