
import { Text, View, Form, TextInput, ScrollView, Button, StyleSheet, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import React, { Component } from 'react'
import axios from 'axios';

export default class listAllPostsView extends Component {

  constructor(props) {
    super(props)

    this.state= {
        posts: []
    }
}

componentDidMount() { 
    axios.get('https://apioulu.herokuapp.com/api/posts')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
        })
}


render() {
    const { posts} = this.state
    return (
        <SafeAreaView style={styles.root}>
            <StatusBar backgroundColor='#fff' barStyle="dark-content"/>
            <View style={{height:50, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffffff'}}>
                <Text style={{fontSize:40, color:"black", justifyContent:"center", alignContent:"center", fontWeight:"400", backgroundColor:'#ffffff'}}>All posts</Text>
            </View>
            <LinearGradient
              colors={['#61a1b8', '#2d3743', '#000000']}
              style={ styles.root}>
                <ScrollView style={{padding: 10}}>
                    {
                        posts.length ?
                        posts.map(post => <View key={post.id}
                        style={{borderWidth:2, borderRadius:7, borderColor:"black", backgroundColor:"white", padding: 3}}> 
                        

                        <Text style={{fontSize:30, fontWeight:'700'}}>{post.title}</Text>
                        <Text style={{alignItems: 'center', justifyContent:'center', fontSize:20, alignContent:'center'}}>{post.description}</Text>
                        <Text style={{alignItems: 'center', justifyContent:'center', fontSize:20, alignContent:'center'}}>Price: {post.price} €</Text>
                        <View style={{height:10}}></View>
                        <Text style={{alignItems: 'center', justifyContent:'center', fontSize:20, alignContent:'center'}}>Category: {post.category}</Text>
                        <Text style={{alignItems: 'center', justifyContent:'center', fontSize:20, alignContent:'center'}}>Delivery type: {post.delivery}</Text>
                        <Text style={{alignItems: 'center', justifyContent:'center', fontSize:20, alignContent:'center'}}>Location: {post.location}</Text>
                        <Text style={{alignItems: 'center', justifyContent:'center', fontSize:20, alignContent:'center'}}>Date: {post.date}</Text>

                         </View>
                         ):
                        null
                    }
                </ScrollView>

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

  



