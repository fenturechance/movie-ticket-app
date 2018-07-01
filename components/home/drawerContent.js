import React , { Component } from 'react';
import { View , Button } from 'react-native';

export default class DrawerContent extends Component {

    buttonPress = () => {

    }

    render() {
        return (
            <View style={{ paddingTop : 30 }}>
                <Button title="1" onPress={this.buttonPress} />
            </View>
        )
    }
}