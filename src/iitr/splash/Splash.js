import React, { Component } from 'react';
import { Text, TextInput, View, Image} from 'react-native';
import Login from '../Login/Login';



export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }


  render() {
      let pic = {
      uri: 'https://www.iitr.ac.in/departments/CSE/uploads/Misc/IITR_logo/IITR_new_logo_color.jpg'
    }
    return (
      <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'#FFF'}}>
        <Image source = {pic} style={{width:200, height:200}} />
      </View>
    );
  }
}
