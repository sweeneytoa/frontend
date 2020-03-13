import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

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
                onChangeText={this.onTextboxChangeCategory}
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

            <View style={{height:10}}></View>
            
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