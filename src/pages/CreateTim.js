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
import { TextInput } from 'react-native-gesture-handler'
import ImagePicker from '../components/imagePicker'
import NextArrowButton from "../components/button/NextArrowButton";


export default class Create extends Component {

constructor(props){
  super(props);

  this.state = {
    title:'',
    description:'',
    category:'',
    location:'',
    delivery:'',
    price:'',
    images:''
  };

  this.onTextboxChangeTitle = this.onTextboxChangeTitle.bind(this);
  this.onTextboxChangeDescription = this.onTextboxChangeDescription.bind(this);
  this.onTextboxChangeCategory = this.onTextboxChangeCategory.bind(this);
  this.onTextboxChangeLocation = this.onTextboxChangeLocation.bind(this);
  this.onTextboxChangeDelivery = this.onTextboxChangeDelivery.bind(this);
  this.onTextboxChangePrice = this.onTextboxChangePrice.bind(this);
  this.onTextboxChangeImages = this.onTextboxChangeImages.bind(this);
}


onTextboxChangeTitle(event) {
  this.setState({
    title: event.target.value,
  });
}

onTextboxChangeDescription(event) {
  this.setState({
    description: event.target.value,
  });
}

onTextboxChangeCategory(event) {
  this.setState({
    category: event.target.value,
  });
}

onTextboxChangeLocation(event) {
  this.setState({
    location: event.target.value,
  });
}

onTextboxChangePrice(event) {
  this.setState({
    price: event.target.value,
  });
}

onTextboxChangeDelivery(event) {
  this.setState({
    delivery: event.target.value,
  });
}

onTextboxChangeImages(event) {
  this.setState({
    images: event.target.value,
  });
}

onCreate() {
  // Grab state

  

  const {
    title,
    description,
    category,
    location,
    delivery,
    price,
    images

  } = this.state;

  this.setState({
    isLoading: true,
    title:'',
    description:'',
    category:'',
    location:'',
    delivery:'',
    price:'',
    images:''
  });
  
  
  // Post request to backend
  fetch('https://apioulu.herokuapp.com/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6eyJpZCI6MywidXNlcm5hbWUiOiJFbWlsIiwiZW1haWwiOiJlbWlsYnRsQHlhaG9vLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGZWLnI1VkNlOHlYZTIzZlhwdy9YUS5LL3FzM1M2MmlSazF6VFRHRklRM3JkTjNlRzJSQ1FpIn0sImlhdCI6MTU4Mzk3MTk1MX0.PEID6qMnKx_6eX8us4Gx87svybU0rc_8AP4BydnC_kk'
    },
    body: JSON.stringify({
      title: title,
      description: description,
      category: category,
      location: location,
      delivery: delivery,
      price: price,
      images: images
    }),
  }).then(res => res.json()).then(json => {
    console.log('json', json);
    if (json.success) {
      this.setState({
        signInError: json.message,
        isLoading: false
      });
    } else {
      this.setState({
        signInError: json.message,
        isLoading: false,
      });
    }
  });
}

  
render(){

  const {
    title,
    description,
    category,
    location,
    delivery,
    price,
    images

  } = this.state;

  return (
    
    <View>
    <StatusBar backgroundColor='#fff' barStyle="dark-content"/>
    <SafeAreaView >
      <Text style={{fontSize: 50, fontWeight: '700' ,justifyContent: 'center', textAlignVertical:"top"}}>Create a post</Text>
      <View style={{flexDirection:"row"}}>
        <Text style={{fontSize:25, fontWeight:'100',textAlignVertical:"center"}}>Title:</Text>

        <TextInput style={{height:40,width:300,borderColor: "gray", borderWidth:1}}
        onChange={this.onTextboxChangeTitle.bind(this)}
        placeholder="Title"
        value={this.state.title}
        />
      </View>

      <View style={{flexDirection:"row"}}>
        <Text style={{fontSize:25, fontWeight:'100',textAlignVertical:"center"}}>Description:</Text>

        <TextInput style={{height:70,width:200,borderColor: "gray", borderWidth:1}}
        onChange={this.onTextboxChangeDescription}
        placeholder="Description"
        value={this.state.description}
        />
      </View>

      <View style={{flexDirection:"row"}}>
        <Text style={{fontSize:25, fontWeight:'100',textAlignVertical:"center"}}>Category:</Text>

        <TextInput style={{height:40,width:250,borderColor: "gray", borderWidth:1}}
        onChange={this.onTextboxChangeCategory}
        placeholder="Category"
        value={this.state.category}
        />
      </View>

      <View style={{flexDirection:"row"}}>
        <Text style={{fontSize:25, fontWeight:'100',textAlignVertical:"center"}}>Location:</Text>

        <TextInput style={{height:40,width:250,borderColor: "gray", borderWidth:1}}
        onChange={this.onTextboxChangeLocation}
        placeholder="Location"
        value={this.state.location}
        />
      </View>

      <View style={{flexDirection:"row"}}>
        <Text style={{fontSize:25, fontWeight:'100',textAlignVertical:"center"}}>Delivery:</Text>

        <TextInput style={{height:40,width:250,borderColor: "gray", borderWidth:1}}
        onChange={this.onTextboxChangeDelivery}
        placeholder="Delivery"
        value={this.state.delivery}
        />
      </View>

      <View style={{flexDirection:"row"}}>
        <Text style={{fontSize:25, fontWeight:'100',textAlignVertical:"center"}}>Price:</Text>

        <TextInput style={{height:40,width:250,borderColor: "gray", borderWidth:1}}
        onChange={this.onTextboxChangePrice}
        placeholder="Price"
        value={this.state.price}
        />
      </View>

      <View style={{flexDirection:"row"}}>
        <Text style={{fontSize:25, fontWeight:'100',textAlignVertical:"center"}}>Images:</Text>

        <ImagePicker></ImagePicker>
      </View>

      <View style={{flexDirection:"row", justifyContent: "center"}}>
        <Button style={{textAlignHoricontal: "center"}}onPress={this.onCreate} title="Create">Create</Button>

      </View>
      
      
      



      
    </SafeAreaView>
    </View>
  )

 
}


}