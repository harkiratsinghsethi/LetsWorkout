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

import WorkoutTable from './WorkoutTable'
import {Dropdown} from 'react-native-material-dropdown';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: '',
            loading: false,
            text: '',
            visible: false,
            muscle: [],
            jsonLoad: '',
            exercisesListSpecificToMuscle: ''
        };

    }

    componentDidMount() {
        fetch('https://workoutapi-heroku.herokuapp.com/api/getExercise')
            .then((response) => response.json())
            .then((responseJson) => {
                let jsonArray = [];
                this.state.jsonLoad = responseJson;
                for (let k in responseJson.exercises) {
                    let jsonData = {};
                    jsonData['value'] = k;
                    jsonArray.push(jsonData);
                }
                this.setState({muscle: jsonArray})
            });


    }


    // onClick() {
    //     console.log('clicked')
    // }

    createExercisesList(jsonLoad) {
        let gridViewItemList = [];
        for (let key in jsonLoad) {

            if (jsonLoad.hasOwnProperty(key)) {
                let gridViewItemJson = {};
                gridViewItemJson.key = key;
                gridViewItemList.push(gridViewItemJson)
            }
        }
        console.log(gridViewItemList);
        this.setState({
            exercisesListSpecificToMuscle: gridViewItemList
        })
    }

    onChangeText(text) {
        this.createExercisesList(this.state.jsonLoad.exercises[text]);
    }

    render() {
        console.log(this.state.muscle);
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
                        data={this.state.muscle}
                        baseColor='#ffffff'
                        onChangeText={this.onChangeText.bind(this)}
                        textColor='#000000'
                        selectedItemColor='#000000'
                    />
                    <WorkoutTable excercises={this.state.exercisesListSpecificToMuscle}/>
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
