import React, { Component } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import ImagePicker from '../components/imagePicker';
import NextArrowButton from "../components/button/NextArrowButton";
import PostForm from "../components/PostForm"
import axios from 'axios';
import { Text, View, Form, TextInput, ScrollView, Button, StyleSheet} from 'react-native';


export default class Create extends Component {

  constructor(props) {
		super(props)

		this.state = {
			
            title: '',
            description: '',
            category: '',
            country: '',
            delivery: '',
            price: '',
            images: '',
            
            
            
		}

		this.submitHandler = this.submitHandler.bind(this);
    	this.changeHandler = this.changeHandler.bind(this);
   	    
	}

	changeHandler = e => {
    
		this.setState({ [e.target.name]: e.target.value })
    }
    


    
	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
    

    const formData = new FormData();
  
   

  
       
        

		axios.post('https://apioulu.herokuapp.com/api/posts', this.state,   {
            headers: {
            
                
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6eyJpZCI6MywidXNlcm5hbWUiOiJ0aW0iLCJlbWFpbCI6ImVtaWxidGxAeWFob28uY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkTkc2UWd6QUtSYXJpeTlOT3NaUXhmdURBZHZBQ3M5aGFyOHZXSEtOcmRlNlRqUXB5cnZYbHEifSwiaWF0IjoxNTg0MzY5Njk4fQ.IeFUWZvdB2Fxv8fE0iZIqDDy7p1__c6a5ZoLKL9kXN0",
                
                
			  }, body: formData,
		
             
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}

	render() {
		const { title, description, country, price, delivery, category, images } = this.state
		return (
			<SafeAreaView style={styles.root}>
        <View style={{height:50, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffffff'}}>
          <Text style={{fontSize:40, color:"black", justifyContent:"center", alignContent:"center", fontWeight:"400", backgroundColor:'#ffffff'}}>Create Post</Text>
        </View>
        <LinearGradient
              colors={['#61a1b8', '#2d3743', '#000000']}
              style={ styles.root}>
          <View style={{padding: 10}}>

            <TextInput
              style={{height: 40, fontSize: 20, borderWidth:2, borderRadius:7, borderColor:"black", backgroundColor:"white"}}  
              name="title"
              placeholder="Title"
              value={this.props.title}
              onChange={this.changeHandler}>
            </TextInput>

            <TextInput
              style={{height: 40, fontSize: 20, borderWidth:2, borderRadius:7, borderColor:"black", backgroundColor:"white"}}  
              name="description"
              placeholder="Description"
              value={this.props.description}
              onChange={this.changeHandler}>
            </TextInput>

            <TextInput
              style={{height: 40, fontSize: 20, borderWidth:2, borderRadius:7, borderColor:"black", backgroundColor:"white"}}  
              name="country"
              placeholder="Country"
              value={this.props.country}
              onChange={this.changeHandler}>
            </TextInput>

            

            <TextInput
              style={{height: 40, fontSize: 20, borderWidth:2, borderRadius:7, borderColor:"black", backgroundColor:"white"}}  
              name="price"
              placeholder="Price"
              value={this.props.price}
              onChange={this.changeHandler}>
            </TextInput>

            <TextInput
              style={{height: 40, fontSize: 20, borderWidth:2, borderRadius:7, borderColor:"black", backgroundColor:"white"}}  
              name="delivery"
              placeholder="Delivery type"
              value={this.props.delivery}
              onChange={this.changeHandler}>
            </TextInput>

            <TextInput
              style={{height: 40, fontSize: 20, borderWidth:2, borderRadius:7, borderColor:"black", backgroundColor:"white"}}  
              name="category"
              placeholder="Category"
              value={this.props.category}
              onChange={this.changeHandler}>
            </TextInput>

            <View style={{height:10}}></View>
            
            <Button title='Create' onPress={this.submitHandler}></Button>


          
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