import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from 'react-native-vector-icons';
import CreateView from '../pages/Create'
import listAllPostsView from '../pages/ListAllPosts';
import searchView from '../pages/Search';
import profileView from '../pages/Profile';

const Tab = createBottomTabNavigator();

export default class TabNavigation extends Component {
  render() {
    return (

      <NavigationContainer> 
        <Tab.Navigator>
            <Tab.Screen 
            name="ListAllPosts" 
            component={listAllPostsView} 
            options={{ 
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-list" color={color} size={size} />)
            }}
          />
          
          <Tab.Screen 
            name="Create" 
            component={CreateView} 
            options={{ 
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-add" color={color} size={size} />)
            }}
          />

          <Tab.Screen 
            name="Search" 
            component={searchView} 
            options={{ 
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-search" color={color} size={size} />)
            }}
          />

          <Tab.Screen 
          name="Profile" 
          component={profileView} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-person" color={color} size={size} />)
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}