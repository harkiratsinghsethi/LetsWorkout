import React, {Component} from 'react';
// import require from 'require'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    FlatList,
    TouchableHighlight,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    ImageBackground,
    Animated,
    TouchableOpacity
} from 'react-native';
import {Keyboard, TouchableWithoutFeedback} from 'react-native'

export default class BMICalculator extends Component {
    constructor() {
        super();
        this.state = {
            height: '',
            weight: '',
            bmi: ''
        }
    }

    static navigationOptions = {
        title: 'BMI Calculator',
        headerStyle: {
            height: 30,
            backgroundColor: '#00BCD4',
        },
        //  headerTintColor: '#0ff',
        headerTitleStyle: {
            fontWeight: '',
        }
    };

    handleHeight = (text) => {
        this.state.height = text;
    };

    handleWeight = (text) => {
        this.state.weight = text;

    };
    submitButton = (height, weight) => {
        weight = 703 * weight;
        let bmi = weight / (height * height);
        this.setState({bmi: bmi})
    };

    render() {
        console.log('in render bmi');

        return (
            <ScrollView contentContainerStyle={{flexGrow: 1}}
                        keyboardShouldPersistTaps='handled'
            >
                <ImageBackground
                    source={require('../images/fullbody.jpg')}
                    style={styles.bgImage}
                >
                    <View style={styles.container}>
                        <TextInput style={styles.input}
                                   underlineColorAndroid="transparent"
                                   placeholder="Height in inch"
                                   placeholderTextColor="#00BCD4"
                                   autoCapitalize="none"
                                   onChangeText={this.handleHeight}
                                   keyboardType='numeric'
                        />

                        <TextInput style={styles.input}
                                   underlineColorAndroid="transparent"
                                   placeholder="Weight in lbs"
                                   placeholderTextColor="#00BCD4"
                                   autoCapitalize="none"
                                   onChangeText={this.handleWeight}
                                   keyboardType='numeric'/>

                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={
                                () => this.submitButton(this.state.height, this.state.weight)
                            }>
                            <Text style={styles.submitButtonText}> Submit </Text>
                        </TouchableOpacity>
                        {this.state.bmi != '' ? <Text>You BMI is : {parseFloat(this.state.bmi).toFixed(2)}</Text> : <Text> </Text>}

                    </View>

                </ImageBackground>
            </ScrollView>)
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.9)'

    },
    bgImage: {
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        color: '#fff',
    },
    submitButton: {
        backgroundColor: '#00BCD4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
});
