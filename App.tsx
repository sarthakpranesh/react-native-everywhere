import "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { View, Platform } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// import root navigator
import RootNavigator from "./src/navigation";
// importing screens
import SplashScreenWeb from "./src/screens/SplashScreen.web";
// importing services
import { store, persister } from "./src/services/redux/index";
import { CombinedDarkTheme } from "./src/services/themes";

export default function App() {
  const [isAppReady, setIsAppReady] = useState<boolean>(false);

  // make sure the splash screen doesn't auto hide
  // also remember `expo-splash-screen` is not supported by web
  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        // we can also load required assets here like initial API requests, fonts, etc.
      } catch (err) {
        console.log(err);
      } finally {
        setIsAppReady(true);
      }
    })();
  }, []);

  // use a onLayout callback to avoid flicker when transitioning from splash to rendered app
  const onLayout = useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    if (Platform.OS === "web") {
      return <SplashScreenWeb />;
    }
    return null;
  }

  return (
    <View onLayout={onLayout} style={{ flex: 1 }}>
      <ReduxProvider store={store}>
        <PersistGate loading={false} persistor={persister}>
          <PaperProvider theme={CombinedDarkTheme}>
            <StatusBar style="auto" />
            <RootNavigator />
          </PaperProvider>
        </PersistGate>
      </ReduxProvider>
    </View>
  );
}
