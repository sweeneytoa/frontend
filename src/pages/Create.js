import React, { Component } from "react";


import ImagePicker from '../components/imagePicker';
import NextArrowButton from "../components/button/NextArrowButton";
import PostForm from "../components/PostForm"

import axios from 'axios';
import { Text, View, Form, TextInput, ScrollView, Button} from 'react-native';


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
			<View>
			

					<Text>New post title</Text>
					<TextInput
            name="title"
						placeholder="Story"
						value={this.props.title}
						onChange={this.changeHandler}>
					</TextInput>

					<Text>New post description</Text>
					<TextInput
            name="description"
						placeholder="Story"
						value={this.props.description}
						onChange={this.changeHandler}>
					</TextInput>

					<Text>New post locationCountry</Text>
					<TextInput
            name="locationCountry"
						placeholder="Story"
						value={this.props.locationCountry}
						onChange={this.changeHandler}>
					</TextInput>

          <Text>New post locationCity</Text>
          <TextInput
            name="locationCity"
						placeholder="Story"
						value={this.props.locationCity}
						onChange={this.changeHandler}>
					</TextInput>


					<Text>New post askingPrice</Text>
					<TextInput
            name="askingPrice"
						placeholder="Story"
						value={this.props.askingPrice}
						onChange={this.changeHandler}>
					</TextInput>

					<Text>New post deliveryType</Text>
					<TextInput
            name="deliveryType"
						placeholder="Story"
						value={this.props.deliveryType}
						onChange={this.changeHandler}>
					</TextInput>

					<Text>New post category</Text>
					<TextInput
            name="category"
						placeholder="Story"
						value={this.props.category}
						onChange={this.changeHandler}>
					</TextInput>
          
          <Text>New Images Post</Text>
          <TextInput
            name="images"
						placeholder="Story"
						value={this.props.images}
						onChange={this.changeHandler}>
					</TextInput>

          
					
          <Button title='title' onPress={this.submitHandler}> Sign in</Button>


				
			</View>
			
			
			
			
			
		
            
		)
	}
}
