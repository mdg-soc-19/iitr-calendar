import React, { Component } from 'react';
import {
    View,
    Platform,
    StatusBar,
    BackHandler,
    Dimensions
} from 'react-native';
var { height, width } = Dimensions.get("window");
import { Scene, Router, ActionConst, Actions} from 'react-native-router-flux';
import Splash from './splash/Splash';
import Login from './Login/Login';
import Register from './Register/Register';
import Main from './Main/Main';
import Timetable from './Main/Timetable';
import Profile from './Main/Profile';

export default class Navigator extends Component {
  constructor(props) {

      super(props);
      nthis = this;
      this.state = {
        admin:false
      }
  }




    render() {

        return(
            <View style = {{flex:1}}>
                <Router key="sceneARouter">
                    <Scene key="main">
                        <Scene key="splash" component={Splash}  hideNavBar={true}  />
                        <Scene key="login" component={Login}  hideNavBar={true}  />
                        <Scene key="register" component={Register}  hideNavBar={true}  />
                        <Scene key="main" component={Main}  hideNavBar={true}   />
                        <Scene key="timetable" component={Timetable}  hideNavBar={true} />
                        <Scene key="profile" component={Profile}  hideNavBar={true}   />

                    </Scene>
               </Router>
            </View>
        );
    }
}
