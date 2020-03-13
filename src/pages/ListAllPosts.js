
import { View, Text } from 'react-native'
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
        <View>
            <Text style={{ fontSize: 50, fontWeight: '700' }}>List all Posts View</Text>
           
            <Text>
            {
                posts.length ?
                posts.map(post => <Text key={post.id}>{post.title} </Text>):
                null
            }</Text>
        </View>
    )
}
}


  



