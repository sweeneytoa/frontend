import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import PostL from './PostSearchList';


export default class Search extends Component {

constructor(props) {
  super(props);

  this.state = {
    onSearch: []
  
    }

    this.onSearch = this.onSearch.bind(this);

  this.onTextboxChangeCategory = this.onTextboxChangeCategory.bind(this);

  this.onTextboxChangeLocation = this.onTextboxChangeLocation.bind(this);
   		   
  this.onTextboxChangeDate = this.onTextboxChangeDate.bind(this);
  
}

onTextboxChangeCategory(event){
  this.setState({
    [event.target.name]: event.target.value
  });
  

}

onTextboxChangeLocation(event){
  this.setState({
    [event.target.name]: event.target.value
  });
  

}

onTextboxChangeDate(event){
  this.setState({
    [event.target.name]: event.target.value
  });
  

}



onSearch(){
  // Grab state
  const {
    category,
    location,
    date, 
    
  } = this.state;

  let searchUri='';

  alert("c:" +category +" l:" +location +" d: " +date)
  if(this.state.category != null){
    alert("category")
    searchUri = 'https://apioulu.herokuapp.com/api/posts/category/' + category
    this.state.category = null;
  } else if(this.state.location != null){
    alert("location")
    searchUri = 'https://apioulu.herokuapp.com/api/posts/location/' + location
    this.state.location = null;
  } else if(this.state.date != null){
    alert("date")
    searchUri = 'https://apioulu.herokuapp.com/api/posts/date/' + date
    this.state.date = null;
  }else{
    return false;
  } 



  axios.get(searchUri)
  .then( (response) => {
    console.log("response", response);
    this.setState({
      onSearch: response.data
    });
    console.log("onSearch", this.state.onSearch);
  })
  .catch( (error) => {
    console.log(error);
  });  
}




render() {

  
  const { onSearch} = this.state
  return (

    <SafeAreaView style={styles.root}>
      <View style={{height:50, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffffff'}}>
        <Text style={{fontSize:40, color:"black", justifyContent:"center", alignContent:"center", fontWeight:"400", backgroundColor:'#ffffff'}}>Search</Text>
      </View>
      <LinearGradient
            colors={['#61a1b8', '#2d3743', '#000000']}
            style={ styles.root}>
      
      <View style={{padding: 10}}>  
          <TextInput  
              style={{height: 40, fontSize: 20, borderWidth:2, borderRadius:7, borderColor:"black", backgroundColor:"white"}}  
              name="category"
              value={this.props.category}
              placeholder="Category"
              onChange={this.onTextboxChangeCategory}
          />  


          <TextInput  
              style={{height: 40, fontSize: 20, borderWidth:2, borderRadius:7, borderColor:"black", backgroundColor:"white"}} 
              name="location"
              value={this.props.location}
              placeholder="Location"
              onChange={this.onTextboxChangeLocation}
          />
          <TextInput  
              style={{height: 40, fontSize: 20, borderWidth:2, borderRadius:7, borderColor:"black", backgroundColor:"white"}} 
              name="date"
              value={this.props.date}
              placeholder="Date"
              onChange={this.onTextboxChangeDate}
          />
        
          <Button 
              title='search'
              borderRadius='20'
              onPress={this.onSearch}
          ></Button>

          <Text>
            {
                onSearch.length ?
                onSearch.map(post => <Text key={post.id}>{post.title} </Text>):
                null
            }
          </Text>
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