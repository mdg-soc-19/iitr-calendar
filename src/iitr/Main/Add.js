import React, { Component } from 'react';
import { Text, TextInput, View, Button, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { Scene, Router, ActionConst, Actions} from 'react-native-router-flux';
var firebase = require("firebase");
var nthis;

export default class Add extends Component {
  constructor(props) {
    super(props);
    nthis = this
    this.state = {
      name:'',
    };
  }
  // _onPress(name){
  //
  //     firebase.database().ref('UsersList/timetable').push({
  //           name
  //       }).then((data)=>{
  //           //success callback
  //           console.log('data ' , data);
  //       }).catch((error)=>{
  //           //error callback
  //           console.log('error ' , error)
  //           alert(error);
  //       })
  // }
  updateSingleData(name){
    firebase.database().ref('UsersList/').update({
        name,
    });
}

  render() {
    return (
      <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'#FFF'}}>
      <Text>NOTE: This feature is not yet working, will be updated soon.</Text>
      <Text style = {styles.register}>Add a deadline</Text>

        <TextInput
          placeholderTextColor="grey"
          style={{height: 40, width:200}}
          placeholder="Add"
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <TouchableOpacity
            onPress={() => this.updateSingleData(this.state.name)}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Add</Text>
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
