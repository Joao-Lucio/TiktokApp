import { StyleSheet, Text, View } from 'react-native';

export function NewFeed() {
  return (
    <View style={styles.container}>
      <Text>NewFeed</Text>
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
