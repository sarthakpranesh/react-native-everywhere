import * as React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const MainHeader = (props: any) => {
  const name = props.route.name;

  if (name === "Counter") {
    return (
      <Appbar.Header style={styles.appMainHeader}>
        <Appbar.BackAction onPress={() => props.navigation.goBack()} />
        <Appbar.Content title={name} />
      </Appbar.Header>
    );
  }

  return (
    <Appbar.Header style={styles.appMainHeader}>
      <Appbar.Content title={name} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appMainHeader: {
    backgroundColor: "black",
    height: 40,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    elevation: 0,
  },
  appTitle: {
    marginBottom: 40,
  },
});

export default MainHeader;
