import React, { Component } from 'react';
import { Text, TextInput, View, Button} from 'react-native';
var firebase = require("firebase");
var nthis;
import { Scene, Router, ActionConst, Actions} from 'react-native-router-flux';
export default class Register extends Component {
  constructor(props) {
    super(props);
    nthis = this
    this.state = {
      enrollNo:'',
      password:'',
      name:'',
      email:'',
      type:'',
      courses:'',
      groupmember:'',
      groupfollowed:'',
    };
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
    }
      firebase.database().ref('UsersList/').push({
            name,
            email,
            courses,
            enrollNo,
            password,
            type,
            groupmember,
            groupfollowed
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
      <Text>Register</Text>
          <TextInput
          style={{height: 40, width:200}}
          placeholder="Enrolment Number"
          onChangeText={(enrollNo) => this.setState({enrollNo})}
          value={this.state.enrollNo}
        />
        <TextInput
          style={{height: 40, width:200}}
          placeholder="Name"
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <TextInput
          style={{height: 40, width:200}}
          placeholder="Email ID"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          style={{height: 40, width:200}}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <TextInput
          style={{height: 40, width:200}}
          placeholder="Courses"
          onChangeText={(courses) => this.setState({courses})}
          value={this.state.courses}
        />
        <TextInput
          style={{height: 40, width:200}}
          placeholder="Group Member"
          onChangeText={(groupmember) => this.setState({groupmember})}
          value={this.state.groupmember}
        />
        <TextInput
          style={{height: 40, width:200}}
          placeholder="Group Followed"
          onChangeText={(groupfollowed) => this.setState({groupfollowed})}
          value={this.state.groupfollowed}
        />
        <Button
          title="Register"
          onPress={() => this._onPress(this.state.name,
            this.state.email,this.state.courses, this.state.enrollNo,
            this.state.password, this.state.type, this.state.groupmember, this.state.groupfollowed)}

        />
      </View>
    );
  }
}
