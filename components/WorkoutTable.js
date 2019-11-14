import React, {Component} from 'react';
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
    TouchableOpacity,
    Alert,
    Animated,
    Easing,
    SafeAreaView
} from 'react-native';


export default class WorkoutTable extends Component {
    constructor() {

        super();
        this.delayValue = 500;
        this.state = {
            GridViewItems: [
                {key: 'One'},
                {key: 'Two'},
                {key: 'Three'},
                {key: 'Four'},
                {key: 'Five'},
                {key: 'Six'},
                {key: 'Seven'},
                {key: 'Eight'},
                {key: 'Nine'},
                {key: 'Ten'},
                {key: 'Eleven'},
                {key: 'Twelve'},
                {key: 'Thirteen'},
                {key: 'Fourteen'},
                {key: 'Fifteen'},
                {key: 'Sixteen'},
                {key: 'Seventeen'},
                {key: 'Eighteen'},
                {key: 'Nineteen'},
                {key: 'Twenty'}
            ]
            ,
            animatedValue: new Animated.Value(0),
        };
    }


    GetGridViewItem(item) {

        Alert.alert(item);

    }

    startAnimation() {
        console.log('start animation', this.state.animatedValue, this.delayValue);

        Animated.spring(this.state.animatedValue, {
            toValue: 1,
            tension: 40,
            useNativeDriver: true
        }).start();
    }

    componentDidMount() {
        console.log('did mount', this.state.animatedValue);
        this.delayValue = 500;

        this.startAnimation();
    }

    componentDidUpdate(prevProps) {
        this.delayValue = 500;

        console.log('did update', this.state.animatedValue);
        this.startAnimation();

    }

    _renderItem = ({item}) => {
        this.delayValue = this.delayValue + 500;
        const translateX = this.state.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [this.delayValue, 1]
        });
        return (
            <Animated.View
                style={[styles.GridViewBlockStyle, {transform: [{translateX}]}]}
            >
                <View>
                    <Text style={styles.GridViewInsideTextItemStyle}
                          onPress={this.GetGridViewItem.bind(this, item.key)}> {item.key} </Text>

                </View>
            </Animated.View>
        )
    };

    render() {
        console.log(this.props.excercises);

        return (

            <SafeAreaView style={styles.MainContainer}>

                <FlatList
                    data={this.props.excercises}
                    x
                    renderItem={this._renderItem}


                    numColumns={2}

                />
            </SafeAreaView>

        );

    }
}


const styles = StyleSheet.create({

    MainContainer: {

        justifyContent: 'center',
        flex: 1,
        margin: 10,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0

    },

    GridViewBlockStyle: {

        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        height: 100,
        margin: 5,
        backgroundColor: '#00BCD4'

    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1
    },

    GridViewInsideTextItemStyle: {

        color: '#fff',
        padding: 10,
        fontSize: 18,
        justifyContent: 'center',

    },

});
