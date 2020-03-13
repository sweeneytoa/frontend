import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Search extends Component {

constructor(props) {
  super(props);

  this.state = {
  category: '',
  location: '',
  date: ''};

  this.onTextboxChangeCategory = this.onTextboxChangeCategory.bind(this);
  this.onTextboxChangeLocation = this.onTextboxChangeLocation.bind(this);
  this.onTextboxChangeDate = this.onTextboxChangeDate.bind(this);
}

onTextboxChangeCategory(event){
  this.setState({
    category: event.target.value,
  });

}

onTextboxChangeLocation(event){
  this.setState({
    location: event.target.value,
  });
}

onTextboxChangeDate(event){
  this.setState({
    date: event.target.value,
  });
}


onSearch(){
  // Grab state
  const {
    category,
    location,
    date
  } = this.state;

  const searchUri='';

  if(this.category.length >0){
    searchUri = 'https://apioulu.herokuapp.com/api/posts/category/' +category
  } else if(this.location.length >0){
    searchUri = 'https://apioulu.herokuapp.com/api/posts/location/' +loaction
  } else if(this.date.length > 0){
    searchUri = 'https://apioulu.herokuapp.com/api/posts/date/' +date
  }else{
    return false;
  }


  // Get request to backend
  /*fetch(searchUri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {}
  }).then(res => res.json()).then(json => {

    if (json.success) {
      setInStorage('the_main_app', { token: json.token });
      this.setState({
      });

    } else {
      this.setState({
      });
    }
  });*/


}


render() {

  const {
    category,
    location,
    date
  } = this.state;

  return (

    <SafeAreaView >
      <View style={{height:50, backgroundColor:"lightgray"}}>
        <Text style={{fontSize:40, color:"black", justifyContent:"center", alignContent:"center", fontWeight:"10"}}>Search</Text>
      </View>
      <View style={{padding: 10}}>  
          <TextInput  
              style={{height: 40, fontSize: 20, borderWidth:2, borderRadius:7, borderColor:"gray"}}  
              name="category"
              value={this.props.category}
              placeholder="Category"
              onChangeText={this.onTextboxChangeCategory}
          />  
          <TextInput  
              style={{height: 40, fontSize: 20, borderWidth:2, borderRadius:7, borderColor:"gray"}} 
              name="location"
              value={this.props.location}
              placeholder="Location"
              onChange={this.onTextboxChangeLocation}
          />
          <TextInput  
              style={{height: 40, fontSize: 20, borderWidth:2, borderRadius:7, borderColor:"gray"}} 
              name="date"
              value={this.props.date}
              placeholder="Date"
              onChange={this.onTextboxChangeDate}
          />
          <Button 
              title='search'
              onPress={this.onSearch}
          ></Button>
      </View>  


    </SafeAreaView>
  );
}

}