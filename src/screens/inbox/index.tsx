import { StyleSheet, Text, View } from 'react-native';

export function Inbox() {
  return (
    <View style={styles.container}>
      <Text>Inbox</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
