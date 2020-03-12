import React , {Component} from 'react'
import axios from 'axios'
import { View, Text } from 'react-native'

class PostList extends Component{
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
                <Text>List of Posts</Text>
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title} </div>):
                    null
                }
            </View>
        )
    }
}
export default PostList