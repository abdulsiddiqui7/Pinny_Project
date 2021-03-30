
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
import OuterLogin from './src/components/UserLogin/OuterLogin'
import SearchPage from './src/components/SearchPage/SearchPage'
import UserSignup from './src/components/UserSignup/UserSignup'
import CreateGame from './src/components/CreateGame/CreateGame'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import firebase from 'firebase'

const ApiKeys = 
{FirebaseConfig: {
  apiKey: "AIzaSyD4aQrHErSY7bsC-7APr6Qt-JskLcFA6Uw",
  authDomain: "pinnyproject.firebaseapp.com",
  projectId: "pinnyproject",
  storageBucket: "pinnyproject.appspot.com",
  messagingSenderId: "648884869604",
  appId: "1:648884869604:web:26991032ee27624e9f8ff1",
  measurementId: "G-DG0Y23R2PG"
}}

export default class App extends React.Component {
  constructor(props) {
   super(props)
    // Initializes firebase
    if(!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
    //firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }
  render(){
    return (
      <AppNavigator/>
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  //OuterLogin:OuterLogin,
  //SearchPage:SearchPage,
  //UserSignup:UserSignup,
  CreateGame:CreateGame,
})

const AppNavigator = createAppContainer
(AppSwitchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
