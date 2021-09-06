import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Headline, Subheading } from "react-native-paper";

const Home = () => {
    return (
        <View style={styles.container}>
            <Headline>React Native Everywhere</Headline>
            <Subheading>Open SRC to start editing the project</Subheading>
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
