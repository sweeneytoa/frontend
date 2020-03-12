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
import { TextInput } from 'react-native-gesture-handler';
import ImagePicker from '../components/imagePicker';
import NextArrowButton from "../components/button/NextArrowButton";
import PostForm from "../components/PostForm"


export default class Create extends Component {



  
render(){

  
  return (
    
    <View>
    <PostForm/>
      
    </View>
  )

 
}


}