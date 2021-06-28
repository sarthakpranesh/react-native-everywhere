import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Welcome to react-native-everywhere</Text>
      <Text>This is a bare minimum boilerplate for running React-Native on all platforms</Text>
      <Text>Open App.tsx and get started :></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4c2c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  p: {
    marginTop: 10,
    fontSize: 18,
  }
});
