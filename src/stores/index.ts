import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from '../reducers/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'default'
  ],
  blacklist: [],
}; // Middleware: Redux Persist Persisted Reducer

const persistedReducer = persistReducer(persistConfig, rootReducer); // Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(createLogger(), thunk),
); // Middleware: Redux Persist Persister

let persister = persistStore(store);
export {store, persister};
