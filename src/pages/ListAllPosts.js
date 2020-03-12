import React from 'react'
import { View, Text } from 'react-native'
import PostList from '../components/PostList'

const listAllPostsView = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>List all Posts View</Text>
      <PostList />
    </View>
  )
}

export default listAllPostsView