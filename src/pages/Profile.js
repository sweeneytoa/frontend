import React, { Component } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Fetch,
  Button, 
  Input,
  StatusBar
} from "react-native";
import { withRouter } from 'react-router';
import { TextInput } from 'react-native-gesture-handler'
import ImagePicker from '../components/imagePicker'
import NextArrowButton from "../components/button/NextArrowButton";
import Login from "./Login";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigavtor} from '@react-navigation/stack'
import { LinearGradient } from 'expo-linear-gradient';
import {Redirect} from 'react-router-dom'


//const Stack = createStackNavigavtor();



export default class Profile extends Component {

onLogin(){

   return  <Redirect  to="/posts/" />

}


  render(){
    return (
      <SafeAreaView style={styles.root}>
        <View style={{height:50, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffffff'}}>
            <Text style={{fontSize:40, color:"black", justifyContent:"center", alignContent:"center", fontWeight:"400", backgroundColor:'#ffffff'}}>Profile</Text>
        </View>
        <LinearGradient
              colors={['#61a1b8', '#2d3743', '#000000']}
              style={ styles.root}>
          <View style={{padding: 10}}>


                  
          </View>

        </LinearGradient>

      </SafeAreaView>
      
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    flex: 1,
  }
});