import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Você é gay!🏳‍🌈</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff6699',
    textShadowColor: 'black',
    color: 'wihte',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
