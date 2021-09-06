import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider as PaperProvider } from 'react-native-paper';

// import root navigator
import RootNavigator from './src/navigation';
// import combined theme for paper provider
import { CombinedDarkTheme } from './src/services/themes';
// import store and persistor
import {store, persister} from "./src/services/redux/index";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={false} persistor={persister}>
        <PaperProvider theme={CombinedDarkTheme}>
          <StatusBar style="auto" />
          <RootNavigator />
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
