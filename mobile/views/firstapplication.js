import React, {Component} from 'react'
import {AsyncStorage, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native'
import {Root, Spinner, Toast} from "native-base";
import axios from 'axios'
import {NavigationActions, StackActions} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <View>
                <FormLabel>Name</FormLabel>
                <FormInput/>
                <FormValidationMessage>Error message</FormValidationMessage>
            </View>
        )
    }
}
