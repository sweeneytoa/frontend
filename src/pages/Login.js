import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Fetch,
  Button,
  TextInput
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  getFromStorage,
  setInStorage,
} from "../components/storage";
import colors from "../styles/colors";
import InputField from "../components/InputField";
import NextArrowButton from "../components/button/NextArrowButton";
export default class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInErrror: '',
      username:'',
      password: ''
    };

    this.onTextboxChangeusername = this.onTextboxChangeusername.bind(this);
    this.onTextboxChangepassword = this.onTextboxChangepassword.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }



  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
    const { token } = obj;
    // Verify token
    fetch('https://apioulu.herokuapp.com/api/login/verify?token=' + token)
    .then(res => res.json())
    .then(json => {
    if (json.success) {
    this.setState({
                  token,
    isLoading: false
    });
    } else {
    this.setState({
    isLoading: false,
    });
    }
    });
    } else {
    this.setState({
    isLoading: false,
    });
    }
    }

  onTextboxChangeusername(event) {
    this.setState({
      username: event.target.value,
    });
  }

  onTextboxChangepassword(event) {
    this.setState({
      password: event.target.value,
    });
    
  }

  onSignIn() {
    // Grab state
    const {
          username,
          password,
    } = this.state;
    this.setState({
    isLoading: true,
    });
    // Post request to backend
    fetch('https://apioulu.herokuapp.com/api/login', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    username: username,
    password: password,
    }),
    }).then(res => res.json())
    .then(json => {
    console.log('json', json);
    setInStorage('the_main_app', json.token)
    if (json.success) {
    setInStorage('the_main_app', { token: json.token });
    this.setState({
    signInError: json.message,
    isLoading: false,
    password: '',
    username: '',
    token: json.token,
    });
    } else {
    this.setState({
    signInError: json.message,
    isLoading: false,
    });
    }
    });
    }
  
  


  render() {

    const {
      isLoading,
      token,
      signInErrror,
      username,
      password,
    } = this.state;

    if (isLoading) {
      return <Text> Loading... </Text>
    }


    return (


      <SafeAreaView style={styles.root}>
        <View style={{height:50, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffffff'}}>
            <Text style={{fontSize:40, color:"black", justifyContent:"center", alignContent:"center", fontWeight:"400", backgroundColor:'#ffffff'}}>Login</Text>
        </View>
        <LinearGradient
            colors={['#61a1b8', '#2d3743', '#000000']}
            style={ styles.root}>
          <View style={{padding: 10}}>
           
            <TextInput
            style={{height: 40, fontSize: 20, borderWidth:2, borderRadius:7, borderColor:"black", backgroundColor:"white"}}  
            type="username"
            placeholder="username"
            value={username}
            onChange={this.onTextboxChangeusername}></TextInput>

            <TextInput
            style={{height: 40, fontSize: 20, borderWidth:2, borderRadius:7, borderColor:"black", backgroundColor:"white"}}  
            type="password"
            placeholder="password"
            value={password}
            onChange={this.onTextboxChangepassword}></TextInput>

            <View style={{height:10}}></View>

            <Button title='Log in' onPress={this.onSignIn}></Button>
            
            
          </View>

           


            
                
          </LinearGradient>

      </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    flex: 1,
  }
});