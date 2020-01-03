import React, { Component } from 'react';
import { Text, TextInput, View, Image} from 'react-native';
import Login from '../Login/Login';
import {Actions} from 'react-native-router-flux';




export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

componentDidMount(){
  setTimeout(function(){ Actions.register(); }, 3000);
}
  render() {
    //   let pic = {
    //   uri: 'https://www.iitr.ac.in/departments/CSE/uploads/Misc/IITR_logo/IITR_new_logo_color.jpg'
    // }
    return (
      <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'#FFF'}}>
        <Image source = {require('C:/Users/gauta/iitrtimetable/src/iitr/images/logo.jpg')} style={{width:200, height:200}} />

      </View>
    );
  }
}
