import React, { Component } from 'react';
import { Text, TextInput, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import Login from '../Login/Login';
import { Scene, Router, ActionConst, Actions} from 'react-native-router-flux';
export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      days: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY","SUNDAY"],
    };
    console.log(this.props.userDetail);
  }


  daysRender(){
      return this.state.days.map((data,index) => {
      return(
        <TouchableOpacity onPress={()=>{Actions.timetable({timetabel:data.value})}} key={index}>
            <View style={styles.button1}>
              <Text style={styles.buttonText1}>{data}</Text>
            </View>
          </TouchableOpacity>
      )
    })
  }


    render() {
    return (
      <View style={{height:'100%',width:'100%',backgroundColor:'#FFF'}}>
            <View style={{width:'100%',height:50,backgroundColor:'#2196F3',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                  <Text style={{fontSize:20,color:'#fff',marginLeft:30,fontWeight:'bold'}}>IITR</Text>
                  <Text style={{fontSize:20,color:'#fff',marginBottom:30,fontWeight:'bold',marginTop:10}}>Profile</Text>
            </View>
            {this.daysRender()}
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
    width: 400,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText1: {
    textAlign: 'center',
    padding: 5,
  }
});
