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
import Profile from "./Profile";

const Stack = createStackNavigavtor();



export default class ProfileNav extends Component {


    render(){
      return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Profile" component={Profile}/>
            </Stack.Navigator>
        </NavigationContainer>
        
      )
    }
    }
    
    