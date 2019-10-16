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
    TouchableOpacity
} from 'react-native';
import Dialog, {DialogContent} from 'react-native-popup-dialog';

import {Dropdown} from 'react-native-material-dropdown';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: '',
            loading: false,
            text: '',
            visible: false,
            exercises: []
        };

    }

    componentDidMount() {
        let exercises = [];
        fetch('https://workoutapi-heroku.herokuapp.com/api/getExercise')
            .then((response) => response.json())
            .then((responseJson) => {
                let jsonArray = [];

                for (let k in responseJson.exercises) {
                    var jsonData = {};
                    jsonData['value'] = k;
                    jsonArray.push(jsonData);
                }
                this.setState({exercises: jsonArray})
            });
    }


    onClick() {
        console.log('clicked')
    }

    onChangeText(text) {
        console.log(text)
    }

    render() {
        console.log(this.state.exercises);
        let data = [{
            value: 'Arms',
        }, {
            value: 'Chest',
        }, {
            value: 'Back',
        },
            {value: 'Abs'},
            {value: 'Shoulder'},
            {value: 'Legs'}
        ];

        return (
            <ImageBackground
                source={require('../images/fullbody.jpg')}
                style={styles.bgImage}>
                <View style={styles.container}>
                    <Dropdown
                        label='What would you like to do today?'
                        data={this.state.exercises}
                        baseColor='#ffffff'
                        onChangeText={this.onChangeText}
                        textColor='#000000'
                        selectedItemColor='#000000'
                    />
                    {/*<TouchableOpacity onPress={() => {*/}
                    {/*this.setState({visible: true});*/}
                    {/*}}>*/}

                    {/*<View style={styles.forearm}>*/}
                    {/*</View>*/}
                    {/*</TouchableOpacity>*/}


                    {/*<View style={styles.forearm}>*/}
                    {/*</View>*/}
                    {/*<View style={styles.bicep}>*/}
                    {/*</View>*/}
                    {/*<View style={styles.tricep}>*/}
                    {/*</View>*/}
                    {/*<View style={styles.shoulder}>*/}
                    {/*</View>*/}
                    {/*<TouchableOpacity onPress={() => {*/}
                    {/*this.setState({visible: true});*/}
                    {/*}}>*/}
                    {/*<View style={styles.pecs}*/}
                    {/*onPress={() => {*/}
                    {/*this.setState({visible: true});*/}
                    {/*}}>*/}
                    {/*</View>*/}
                    {/*</TouchableOpacity>*/}

                    {/*<View style={styles.abs}>*/}
                    {/*</View>*/}
                    {/*<View style={styles.thigh}>*/}
                    {/*</View>*/}
                    {/*<View style={styles.vastusthigh}>*/}
                    {/*</View>*/}
                    {/*<View style={styles.calves}>*/}
                    {/*</View>*/}
                    {/*<View style={styles.innerthigh}>*/}
                    {/*</View>*/}
                    {/*<View style={styles.sides} onStartShouldSetResponder={() => this.setState({visible: true})}*/}
                    {/*>*/}
                    {/*</View>*/}

                    {/*<Dialog*/}
                    {/*visible={this.state.visible}*/}
                    {/*onTouchOutside={() => {*/}
                    {/*this.setState({visible: false});*/}
                    {/*}}*/}
                    {/*>*/}
                    {/*<DialogContent>*/}
                    {/*<Text>Pecs</Text>*/}
                    {/*</DialogContent>*/}
                    {/*</Dialog>*/}
                    {/*<Button*/}
                    {/*title="Show Dialog"*/}
                    {/*onPress={() => {*/}
                    {/*this.setState({visible: true});*/}
                    {/*}}*/}
                    {/*/>*/}
                </View>

            </ImageBackground>
        )

    }
}
//
// let styles = StyleSheet.create({
//     backgroundImage: {
//         flex: 1,
//         resizeMode: 'cover', // or 'stretch'
//     }
// });

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
    dropdown: {
        width: 10,
        height: 10,
        borderRadius: 100 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forearm: {
        padding: 5,
        height: 4,
        width: 4,  //The Width must be the same as the height
        borderRadius: 8, //Then Make the Border Radius twice the size of width or Height
        backgroundColor: 'rgb(195, 125, 198)',
        position: 'absolute',
        left: 30,
        top: 45

    },
    bicep: {
        padding: 5,
        height: 4,
        width: 4,  //The Width must be the same as the height
        borderRadius: 8, //Then Make the Border Radius twice the size of width or Height
        backgroundColor: 'rgb(195, 125, 198)',
        position: 'absolute',
        left: 60,
        top: 85

    },

    shoulder: {
        padding: 5,
        height: 4,
        width: 4,  //The Width must be the same as the height
        borderRadius: 8, //Then Make the Border Radius twice the size of width or Height
        backgroundColor: 'rgb(195, 125, 198)',
        position: 'absolute',
        left: 115,
        top: 80

    },
    tricep: {
        padding: 5,
        height: 4,
        width: 4,  //The Width must be the same as the height
        borderRadius: 8, //Then Make the Border Radius twice the size of width or Height
        backgroundColor: 'rgb(195, 125, 198)',
        position: 'absolute',
        left: 60,
        top: 115

    },
    pecs: {
        padding: 5,
        height: 15,
        width: 15,  //The Width must be the same as the height
        borderRadius: 8, //Then Make the Border Radius twice the size of width or Height
        backgroundColor: 'rgb(195, 125, 198)',
        position: 'absolute',
        left: 150,
        top: 115

    },
    abs: {
        padding: 5,
        height: 15,
        width: 15,  //The Width must be the same as the height
        borderRadius: 8, //Then Make the Border Radius twice the size of width or Height
        backgroundColor: 'rgb(195, 125, 198)',
        position: 'absolute',
        left: 170,
        top: 190

    }
    ,
    thigh: {
        padding: 5,
        height: 15,
        width: 15,  //The Width must be the same as the height
        borderRadius: 8, //Then Make the Border Radius twice the size of width or Height
        backgroundColor: 'rgb(195, 125, 198)',
        position: 'absolute',
        left: 120,
        top: 300

    },
    vastusthigh: {
        padding: 5,
        height: 10,
        width: 10,  //The Width must be the same as the height
        borderRadius: 8, //Then Make the Border Radius twice the size of width or Height
        backgroundColor: 'rgb(195, 125, 198)',
        position: 'absolute',
        left: 110,
        top: 380

    },
    calves: {
        padding: 5,
        height: 15,
        width: 15,  //The Width must be the same as the height
        borderRadius: 8, //Then Make the Border Radius twice the size of width or Height
        backgroundColor: 'rgb(195, 125, 198)',
        position: 'absolute',
        left: 200,
        top: 450

    },
    innerthigh: {
        padding: 5,
        height: 15,
        width: 15,  //The Width must be the same as the height
        borderRadius: 8, //Then Make the Border Radius twice the size of width or Height
        backgroundColor: 'rgb(195, 125, 198)',
        position: 'absolute',
        left: 220,
        top: 330

    },
    sides: {
        padding: 5,
        height: 10,
        width: 10,  //The Width must be the same as the height
        borderRadius: 8, //Then Make the Border Radius twice the size of width or Height
        backgroundColor: 'rgb(195, 125, 198)',
        position: 'absolute',
        left: 145,
        top: 210
    }

});
