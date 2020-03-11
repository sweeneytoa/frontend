import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import axios from 'axios'

export default class ImagePickAndSend extends Component {

  constructor(props)
  {
    super(props);

  }

  openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if(pickerResult.cancelled == true)
    {
      alert('Image picker cancelled or failed');
      return;
    }

    const fileNameSplit = pickerResult.uri.split('/');
    const fileName = fileNameSplit[fileNameSplit.length - 1];

    let postForm = new FormData();
    postForm.append('myFiles', {
      uri: pickerResult.uri,
      name: fileName,
      type: 'image/jpeg'
    });
    postForm.append('foo', 'bar');

    axios({
      method: 'post',
      url: this.props.targetURI,
      data: postForm,
      headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then(function (response) {
          //handle success
          console.log(response);
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.openImagePickerAsync} style={{ height:40,width:250,borderWidth: 1, borderColor: 'gray'}}>
          <Text>Pick a photo</Text>
        </TouchableOpacity>
      </View>
    )
  }
}