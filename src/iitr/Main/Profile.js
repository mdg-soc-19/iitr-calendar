import React, { Component } from 'react';
import { Text, TextInput, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import Login from '../Login/Login';
import { Scene, Router, ActionConst, Actions} from 'react-native-router-flux';
export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userCred:[],
    };
    console.log(this.props.userDetail);
  }

  componentDidMount(){
    console.log(this.props.userDetail);
    let userCred = [];
    let userkey = Object.keys(this.props.userDetail);
    let userval = Object.values(this.props.userDetail);
    console.log(userval);
    console.log(userkey);
    for(let i = 5; i >=0; i --){
        let obj1 = {
          "name":userkey[i],
          "value":userval[i]
        }
        userCred.push(obj1)
      }
    console.log(userCred);
    this.setState({userCred:userCred})
  }


  userDetail(){
    if(this.state.userCred == [] || this.state.userCred.length == 0){
      return;
    }
    return this.state.userCred.map((data,index) => {
    return(
      <TouchableOpacity key={index}>
            <View style={styles.button1}>
                <View style={{width:150,height:50,backgroundColor:'#d6d6d6',alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.buttonText1}>{data.name}</Text>
                </View>
                <View style={{height:50,backgroundColor:'#FFF',alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.buttonText1}>{data.value}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
  })
  }

  render() {
    return (
      <View style={{height:'100%',width:'100%',backgroundColor:'#FFF'}}>
            <View style={{height:60,backgroundColor:'#2196F3',flexDirection:'row',alignItems:'center', textAlign:'center', marginBottom:10}}>
                  <Text style={{fontSize:30,color:'#fff',fontWeight:'bold', alignItems:'center', textAlign:'center', marginLeft:'40%'}}>Profile</Text>
            </View>
            {this.userDetail()}
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
    marginTop: 20,
    marginBottom: 20,
    width: 450,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#FFF',
    flexDirection:'row'
   },
    buttonText1: {
    textAlign: 'center',
    padding: 5,
    fontSize:17
  }
});
