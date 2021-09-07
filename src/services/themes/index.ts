import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import merge from "deepmerge";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";

/**
 * React Native Paper and React navigation both have their on theming
 * so we need to combine their theming props to make the application look
 * consistent when it comes to theming.
 *
 * You can find more on it here - https://callstack.github.io/react-native-paper/theming-with-react-navigation.html
 */

export const CombinedDefaultTheme = merge(
  PaperDefaultTheme,
  NavigationDefaultTheme
);
export const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
