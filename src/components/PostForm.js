import React, { Component } from 'react';
import axios from 'axios';
import { Text, View, Form, TextInput, ScrollView} from 'react-native'
import ImagePicker from './imagePicker'


class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			
            title: '',
            description: '',
            category: '',
            location: '',
            delivery: '',
            price: '',
            images: ''
            
            
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
    }
    


    
	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		
		var photo = {
			uri: './image.jpg',
			type: 'image/jpeg',
			name: 'photo.jpg',
		};

        
		const formData = new FormData(event.target);
		
        formData.set('title', formData.get('title').toUpperCase());
        formData.set('description', formData.get('description').toUpperCase());
        formData.set('category', formData.get('category').toUpperCase());
        formData.set('location', formData.get('location').toUpperCase());
        formData.set('price', formData.get('price').toUpperCase());
        formData.set('delivery', formData.get('delivery').toUpperCase());
        formData.set('images', formData.get('photo'))
        ;
       
        

		axios
            .post('https://apioulu.herokuapp.com/api/posts', this.state, {
            headers: {
                 
                'Content-Type': 'multipart/form-data',
                'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6eyJpZCI6MywidXNlcm5hbWUiOiJFbWlsIiwiZW1haWwiOiJlbWlsYnRsQHlhaG9vLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJFZYU3AuL0VXbFFJM3d6VkxRLmFVaU9sZlh0aWN4T2VBRDRXZW44cnhZaDV3YjVBbEt5WnVxIn0sImlhdCI6MTU4NDAzMzIxM30.IcPdzu9b-wwf3ml1AV-9wbeVkl0clYhgFQNOZfMRx54'
                
                
			  },
			  
			  data : formData
             
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}

	render() {
		const { title, description, location, price, delivery, category, images } = this.state
		return (
			<View>
				<Form onSubmit={this.submitHandler}>

					<Text>New post title</Text>
					<TextInput
						placeholder="Story"
						value={title}
						onChange={this.changeHandler}>
					</TextInput>

					<Text>New post description</Text>
					<TextInput
						placeholder="Story"
						value={description}
						onChange={this.changeHandler}>
					</TextInput>

					<Text>New post location</Text>
					<TextInput
						placeholder="Story"
						value={location}
						onChange={this.changeHandler}>
					</TextInput>

					<Text>New post price</Text>
					<TextInput
						placeholder="Story"
						value={price}
						onChange={this.changeHandler}>
					</TextInput>

					<Text>New post delivery</Text>
					<TextInput
						placeholder="Story"
						value={delivery}
						onChange={this.changeHandler}>
					</TextInput>

					<Text>New post category</Text>
					<TextInput
						placeholder="Story"
						value={category}
						onChange={this.changeHandler}>
					</TextInput>

					



				</Form>
			</View>
			
			
			
			
			
		
            
		)
	}
}



export default PostForm