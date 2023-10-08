import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { invoke } from '@tauri-apps/api';

export const App: FC = () => {
	const onInvoke = async (): Promise<void> => {
		const result = await invoke('greet', { name: 'world' });
		console.log(result, '<-- message from Tauri');
	};

	return (
		<View style={styles.container}>
			<Text onPress={onInvoke}>App</Text>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
