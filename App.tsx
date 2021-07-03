import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';

// importing screens 
import HomeScreen from './src/screens/HomeScreen';
import CounterScreen from './src/screens/CounterScreen';

// importing stores
import {store, persister} from './src/stores/index'

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <PaperProvider>
          <CounterScreen />
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
