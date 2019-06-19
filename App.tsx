import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class App extends React.Component {

    state = {
        text: "Press a button to start"
    };

    changeText = (newText: string) => this.setState({
        text: newText
    });


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.state.text}
                </Text>

                <TouchableOpacity
                    onPress={() => this.changeText("First button pressed!")}
                    style={styles.button}
                    testID="FirstButton"
                >
                    <Text>First button</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.changeText("Second button pressed!")}
                    style={styles.button}
                    testID="SecondButton"
                >
                    <Text>Second button</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {},
    button: {}
});
