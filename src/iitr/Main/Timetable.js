import React, { Component } from 'react';
import { Text, TextInput, View, Button, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import Login from '../Login/Login';
export default class Timetable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      days: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY","SUNDAY"],
    };
    console.log(this.props.timetable);
  }


  _onDayTimetable(){
      return this.props.timetable.map((data,index) => {
      return(
        <TouchableOpacity key={index}>
              <View style={styles.button1}>
                  <View style={{width:150,height:50,backgroundColor:'#d6d6d6',alignItems:'center',justifyContent:'center'}}>
                      <Text style={styles.buttonText1}>{data.time1}</Text>
                  </View>
                  <View style={{width:150,height:50,backgroundColor:'#FFF',alignItems:'center',justifyContent:'center'}}>
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
            <View style={{width:'100%',height:50,backgroundColor:'#2196F3',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                  <Text style={{fontSize:30,color:'#fff',fontWeight:'bold',textAlign:'center'}}>Timetable</Text>
            </View>
            <ScrollView>
            {this._onDayTimetable()}
            </ScrollView>
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
    marginTop: 5,
    marginBottom:0,
    width: 400,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#FFF',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  buttonText1: {
    textAlign: 'center',
    padding: 5,
    fontSize:17
  }
});
