import AsyncStorage from "@react-native-async-storage/async-storage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";

// import root reducer
import rootReducer from "./reducers/index";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["defaultReducer"],
  blacklist: [],
}; // Middleware: Redux Persist Persisted Reducer

// Redux: Store
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Middleware: Redux Persist and Logger
const store = createStore(persistedReducer, applyMiddleware(createLogger()));

const persister = persistStore(store);
export { store, persister };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// Use throughout your app instead of plain `useDispatch` and `useSelector` to make sure type safe
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
