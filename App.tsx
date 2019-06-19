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
                <Text
                    style={styles.text}
                    testID="MainText"
                >
                    {this.state.text}
                </Text>

                <TouchableOpacity
                    onPress={() => this.changeText("First button pressed!")}
                    style={styles.button}
                    testID="FirstButton"
                >
                    <Text style={styles.buttonText}>First button</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.changeText("Second button pressed!")}
                    style={styles.button}
                    testID="SecondButton"
                >
                    <Text style={styles.buttonText}>Second button</Text>
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
    text: {
        margin: 20,
        fontSize: 30,
    },
    button: {
        justifyContent: "center",
        backgroundColor: '#f2c113',
        width: 200,
        height: 50,
        borderRadius: 5,
        margin: 10,
    },
    buttonText: {
        fontSize: 25,
        textAlign: "center",
    }
});
