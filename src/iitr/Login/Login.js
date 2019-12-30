import React, { Component } from 'react';
import { Text, TextInput, View, Button, TouchableOpacity, StyleSheet, Image} from 'react-native';
var firebase = require("firebase");
import { Scene, Router, ActionConst, Actions} from 'react-native-router-flux';
import Timetable from '../Main/Timetable';
var isLoggedIn = false;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enrollNo: '',
      password:''
    };
  }

  loginFun(enrollNo,password){
    firebase.database().ref('UsersList/').once('value', function (snapshot) {
        console.log(snapshot.val())
        let allData = Object.values(snapshot.val());
        console.log(allData);
        for(let i = 0; i < allData.length ; i++ ){
          if(allData[i].enrollNo == enrollNo && allData[i].password == password){
             isLoggedIn = true;
              console.log(allData);
              Actions.main({userDetail:allData[i]})
              return ;
            }
        }
        if(!isLoggedIn){
             alert("Please provide correct credentials")
        }
    });
}

  render() {
    return (
      <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'#FFF'}}>
      <Text>Welcome to IITR TimeTable</Text>
      <Image source = {require('C:/Users/gauta/iitrtimetable/src/iitr/images/login.jpg')} style={{width:200, height:200}} />
          <TextInput
          style={{height: 40, width:200}}
          placeholder="Enrolment Number"
          onChangeText={(enrollNo) => this.setState({enrollNo})}
          value={this.state.enrollNo}
        />
        <TextInput
          style={{height: 40, width:200}}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />

        <TouchableOpacity onPress={() => {this.loginFun(this.state.enrollNo, this.state.password)}}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {Actions.register()}}>
              <View style={styles.button1}>
                <Text style={styles.buttonText1}>Not yet Registered? Register here.</Text>
              </View>
            </TouchableOpacity>

      </View>

    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginBottom: 15,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white'
  },
  button1: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  buttonText1: {
    textAlign: 'center',
    padding: 5,
  }
});
