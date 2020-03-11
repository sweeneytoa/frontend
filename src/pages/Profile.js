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
import { TextInput } from 'react-native-gesture-handler'
import ImagePicker from '../components/imagePicker'
import NextArrowButton from "../components/button/NextArrowButton";


export default class Profile extends Component {




render(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Profile View</Text>
      <Button onClick={this.onSignIn} title='Sign in'> Sign in</Button>
    </View>
  )
}
}