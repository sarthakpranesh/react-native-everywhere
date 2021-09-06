import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importing theme to apply to Navigation container
import { CombinedDarkTheme } from '../services/themes';

// import screens
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer theme={CombinedDarkTheme}>
      <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
