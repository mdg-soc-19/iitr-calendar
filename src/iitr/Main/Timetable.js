import React, { Component } from 'react';
import { Text, TextInput, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import Login from '../Login/Login';
export default class Timetable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      days: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY","SUNDAY"],
    };
    console.log(this.props.timetabel);
  }
      render() {
    return (
      <View style={{height:'100%',width:'100%',backgroundColor:'#FFF'}}>
            <View style={{width:'100%',height:50,backgroundColor:'#2196F3',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                  <Text style={{fontSize:20,color:'#fff',fontWeight:'bold',textAlign:'center'}}>Timetable</Text>
            </View>
      </View>

    );
  }
}
