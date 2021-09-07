import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.splashWrapper}>
      <Image style={styles.icon} source={require("../../assets/icon.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  splashWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  icon: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
