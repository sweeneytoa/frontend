import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default class Search extends Component {

constructor(props) {
  super(props);

  this.state = {
    onSearch: {
  category: '',
  location: '',
  date: '',}
    }

    this.onSearch = this.onSearch.bind(this);
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
  /*const {
    category,
    location,
    date
  } = this.state;
*/
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


  axios.get('https://apioulu.herokuapp.com/api/posts/category.category')
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

  const {
    category,
    location,
    date
  } = this.state;

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