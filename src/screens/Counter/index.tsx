import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Headline } from "react-native-paper";

// import services
import { useAppSelector, useAppDispatch } from "../../services/redux";
import {
  increment,
  decrement,
} from "../../services/redux/reducers/DefaultReducer";

const Counter = () => {
  const counter = useAppSelector((state) => state.root.default.counter);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Headline>Count: {counter}</Headline>
      <View style={styles.buttonContainer}>
        <Button onPress={() => dispatch(increment())}>Increment +</Button>
        <Button onPress={() => dispatch(decrement())}>Decrement -</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

export default Counter;
