import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Fetch,
  Button, 
  Input,
  SafeAreaView,
  StatusBar
} from "react-native";
import { withRouter } from 'react-router';
import { TextInput } from 'react-native-gesture-handler'
import ImagePicker from '../components/imagePicker'
import NextArrowButton from "../components/button/NextArrowButton";
import Login from "./Login";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigavtor} from '@react-navigation/stack'

//const Stack = createStackNavigavtor();



export default class Profile extends Component {


render(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>

      <Text style={{ fontSize: 50, fontWeight: '700' }}>Profile View</Text>
      <Button onPress={event =>  window.location.href='./Login'} title='Sign in'> Sign in</Button>
      <Login />
    </View>
    
  )
}
}

