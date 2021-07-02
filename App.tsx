import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Headline, Caption, Paragraph } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Headline>React Native Everywhere</Headline>
        <Paragraph>Start editing the App.tsx file to get started</Paragraph>
        <Caption style={styles.bottomLabel}>Android + iOS + Web + Windows + Mac + Linux</Caption>
      </View>
    </PaperProvider>
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
  bottomLabel: {
    position: 'absolute',
    bottom: 10,
  }
});
