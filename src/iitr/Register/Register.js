import React, { Component } from 'react';
import { Text, TextInput, View, Button, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { Scene, Router, ActionConst, Actions} from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
var firebase = require("firebase");
var nthis;

export default class Register extends Component {
  constructor(props) {
    super(props);
    nthis = this
    this.state = {
      enrollNo:'',
      password:'',
      name:'',
      email:'',
      typeArray:['NSS', 'NCC', 'NSO'],
      courses:'',
      groupmember:'',
      groupfollowed:'',
      type:'',
    };
  }

  onSelect(index, value){
            console.log(index, value);
            nthis.setState({type : value});
          }
  _onPress(name,email,courses,enrollNo,password,type,groupmember, groupfollowed){
    // firebase.database().ref('timeTable/').once('value', function (snapshot) {
        // console.log(snapshot.val())
    // });
    if(name == ""){
      alert("Name cannot be empty");
      return ;
    }else if(password == "" || password.length < 6){
      alert("Password must have more than 6 characters");
      return;
    }else if (enrollNo == "") {
      alert("Enrolment number cannot be empty")
      return;
    }else if (email == ""){
      alert("Email cannot be empty")
      return;
    }
      firebase.database().ref('UsersList/').push({
            name,
            email,
            courses,
            enrollNo,
            password,
            type,
            groupmember,
            groupfollowed,
            type
        }).then((data)=>{
            //success callback
            console.log('data ' , data);
            Actions.login();
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
            alert(error);
        })
  }


  render() {
    return (
      <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'#FFF'}}>
      <Text style = {styles.register}>Register</Text>
      <Image source = {require('C:/Users/gauta/iitrtimetable/src/iitr/images/mylogo.png')} style={{width:150, height:150}} />
          <TextInput
          placeholderTextColor="grey"
          style={{height: 40, width:200}}
          placeholder="Enrolment Number"
          onChangeText={(enrollNo) => this.setState({enrollNo})}
          value={this.state.enrollNo}
        />
        <TextInput
          placeholderTextColor="grey"
          style={{height: 40, width:200}}
          placeholder="Name"
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <TextInput
         placeholderTextColor="grey"
          style={{height: 40, width:200}}
          placeholder="Email ID"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
         placeholderTextColor="grey"
          style={{height: 40, width:200}}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <TextInput
        placeholderTextColor="grey"
          style={{height: 40, width:200}}
          placeholder="Courses"
          onChangeText={(courses) => this.setState({courses})}
          value={this.state.courses}
        />
        <TextInput
        placeholderTextColor="grey"
          style={{height: 40, width:200}}
          placeholder="Group Member"
          onChangeText={(groupmember) => this.setState({groupmember})}
          value={this.state.groupmember}
        />
        <TextInput
        placeholderTextColor="grey"
          style={{height: 40, width:200}}
          placeholder="Group Followed"
          onChangeText={(groupfollowed) => this.setState({groupfollowed})}
          value={this.state.groupfollowed}
        />
        <ModalDropdown
         options={this.state.typeArray}
         defaultValue="NSS/NCC/NSO"
         style={{height: 40, width:200, marginLeft:8, marginTop:5}}
         textStyle={{color: 'grey', fontSize:14}}
         dropdownStyle={{height: 120, width:200}}
         dropdownTextStyle={{color:'black'}}
         onSelect={this.onSelect}
         />

        <TouchableOpacity
            onPress={() => this._onPress(this.state.name,
              this.state.email,this.state.courses, this.state.enrollNo,
              this.state.password, this.state.type, this.state.groupmember, this.state.groupfollowed,
              this.state.type)}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Register</Text>
                </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {Actions.login()}}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
        </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginBottom: 15,
    width: 300,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize:15
  },
  register:{
    fontSize:30,
  }
});
