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
            locationCountry: '',
            deliveryType: '',
            askingPrice: '',
            images: '',
            locationCity: '',
            
            
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
  
   

  
       
        

		axios.post('http://wihaprojectapi.herokuapp.com/listings/create', this.state,   {
            headers: {
            
                
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1MiIsInVzZXJuYW1lIjoidGltYmV1dSIsImlhdCI6MTU4NDExNTk4Mn0.Yycpqr9tYuYAypoeBSEn2nXA8K6RFB9RU8mLrhxdGOc'
                
                
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
		const { title, description, locationCountry, askingPrice, deliveryType, category, images } = this.state
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
              name="locationCountry"
              placeholder="Counrty"
              value={this.props.locationCountry}
              onChange={this.changeHandler}>
            </TextInput>

            <TextInput
              style={{height: 40, fontSize: 20, borderWidth:2, borderRadius:7, borderColor:"black", backgroundColor:"white"}}  
              name="locationCity"
              placeholder="City"
              value={this.props.locationCity}
              onChange={this.changeHandler}>
            </TextInput>

            <TextInput
              style={{height: 40, fontSize: 20, borderWidth:2, borderRadius:7, borderColor:"black", backgroundColor:"white"}}  
              name="askingPrice"
              placeholder="Price"
              value={this.props.askingPrice}
              onChange={this.changeHandler}>
            </TextInput>

            <TextInput
              style={{height: 40, fontSize: 20, borderWidth:2, borderRadius:7, borderColor:"black", backgroundColor:"white"}}  
              name="deliveryType"
              placeholder="Delivery type"
              value={this.props.deliveryType}
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