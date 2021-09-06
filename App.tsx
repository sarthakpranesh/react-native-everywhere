import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

// import root navigator
import RootNavigator from './src/navigation';

// import combined theme for paper provider
import { CombinedDarkTheme } from './src/services/themes';

export default function App() {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <StatusBar style="auto" />
      <RootNavigator />
    </PaperProvider>
  );
}
