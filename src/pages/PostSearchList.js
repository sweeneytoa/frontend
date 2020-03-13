import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export default class PostL extends Component {
  render() {
    return (
        <View >

            <Text > Post title: {this.props.title}</Text>
           
        </View>
    );
  }
}

