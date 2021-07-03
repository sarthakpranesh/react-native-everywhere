import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Headline, Paragraph, Caption, Button} from 'react-native-paper';

// importing actions from reducers
import {incrementCounter, decrementCounter} from '../../reducers/DefaultReducer';

const CounterScreen = () => {
    const counter = useSelector((state: any) => state.default.counter);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Headline>{counter}</Headline>
            <Headline>Counter Example</Headline>
            <Paragraph>Increment and Decrement example with mobx</Paragraph>
            <Button mode="text" onPress={() => dispatch(incrementCounter())}>Increment</Button>
            <Button mode="text" onPress={() => dispatch(decrementCounter())}>Decrement</Button>
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
    bottomLabel: {
        position: 'absolute',
        bottom: 10,
    }
});

export default CounterScreen;
