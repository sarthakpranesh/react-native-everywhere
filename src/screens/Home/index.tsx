import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Headline, Subheading, Button } from "react-native-paper";

const Home = (props: any) => {
    return (
        <View style={styles.container}>
            <Headline>React Native Everywhere</Headline>
            <Subheading>Open SRC to start editing the project, or check out our below example</Subheading>
            <Button onPress={() => props.navigation.navigate("Counter")}>Counter Example</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default Home;
