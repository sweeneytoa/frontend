import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";
//import LoggedOut from "./src/screens/LoggedOut";
import Login from "./src/pages/Login";
import Navigation from './src/components/navigation';


export default class App extends Component {
  render() {
    return <Login />;
    //return <Navigation/>;
  }
}