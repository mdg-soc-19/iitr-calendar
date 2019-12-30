import React, { Component } from 'react';
import { Text, TextInput, View, Button, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import Login from '../Login/Login';
import { Scene, Router, ActionConst, Actions} from 'react-native-router-flux';
export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      days: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY","SUNDAY"],
      timeTable:[],
    };
    console.log(this.props.userDetail);
  }

  componentDidMount(){
    console.log(this.props.userDetail);
    if(this.props.userDetail !== undefined && this.props.userDetail.timetable !== undefined){
      let timeTable = [];
      let day = Object.keys(this.props.userDetail.timetable);
      let val = Object.values(this.props.userDetail.timetable);
      for(let i = 0; i < day.length ; i ++){
        let timeTablekey = Object.keys(val[i]);
        let timeTableValue = Object.values(val[i]);
        let tableVal = []
        for(let j = 0 ; j <timeTablekey.length; j++){
          let obj1 = {
            "time1":timeTablekey[j],
            "value":timeTableValue[j]
          }
          tableVal.push(obj1)
        }
        let obj = {
          "day":day[i],
          "val":tableVal
        }
        timeTable.push(obj);
      }
      console.log(timeTable);
      this.setState({timeTable:timeTable})
    }

  }

daysRender(){
    if(this.state.timeTable == [] || this.state.timeTable.length == 0){
      return(
        <View>
              <Text>Timetable not updated in Database.</Text>
        </View>
      );
    }
      return this.state.timeTable.map((data,index) => {
      return(
        <TouchableOpacity onPress={()=>{Actions.timetable({timetable:data.val})}} key={index}>
              <View style={styles.button1}>
                  <Text style={styles.buttonText1}>{data.day}</Text>
              </View>
          </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <View style={{height:'100%',width:'100%',backgroundColor:'#FFF'}}>
            <View style={{width:'100%',height:60,backgroundColor:'#2196F3',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                  <Text style={{fontSize:30,color:'#fff',marginLeft:10,fontWeight:'bold'}}>IITR</Text>
                  <TouchableOpacity onPress={() => {Actions.profile({userDetail:this.props.userDetail})}}>
                  <Text style={{fontSize:30,color:'#fff',fontWeight:'bold'}}>Profile</Text>
                  </TouchableOpacity>

            </View>
            <ScrollView>
            {this.daysRender()}
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
    marginTop: 10,
    marginBottom: 10,
    width: 400,
    height: 60,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    flexDirection:'row'
  },
  buttonText1: {
    textAlign: 'center',
    padding: 5,
    color:'#FFF',
    fontSize: 40
  }
});
