import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators, } from '@react-navigation/stack';

// importing theme to apply to Navigation container
import { CombinedDarkTheme } from '../services/themes';

// import screens
import Home from '../screens/Home';
import Counter from '../screens/Counter';

// importing components
import MainHeader from '../components/MainHeader';

const Stack =   createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer theme={CombinedDarkTheme}>
      <Stack.Navigator
        screenOptions={{
            header: MainHeader,
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            transitionSpec: {
              open: TransitionSpecs.TransitionIOSSpec,
              close: TransitionSpecs.TransitionIOSSpec,
            },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Counter" component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
