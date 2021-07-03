import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Headline, Paragraph, Caption, Button} from 'react-native-paper';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Headline>React Native Everywhere</Headline>
            <Paragraph>Start editing the App.tsx file to get started</Paragraph>
            <Caption style={styles.bottomLabel}>Android + iOS + Web + Windows + Mac + Linux</Caption>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4c2c2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    bottomLabel: {
        position: 'absolute',
        bottom: 10,
    }
});

export default HomeScreen;
