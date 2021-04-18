
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
import OuterLogin from './src/components/UserLogin/OuterLogin'
import SearchPage from './src/components/SearchPage/SearchPage'
import UserSignup from './src/components/UserSignup/UserSignup'
import UserInfo from './src/components/UserInfo/UserInfo'
import CreateGame from './src/components/CreateGame/CreateGame'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
//import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import firebase from 'firebase'
import HomeScreen from './src/components/HomeScreen/HomeScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
//const MaterialTopTabNavigator = createMaterialTopTabNavigator();

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

  createHomeStack = () =>{
  return <MaterialBottomTabs.Navigator>
    <MaterialBottomTabs.Screen options={ { title: "Home", headerStyle: {backgroundColor:'#031785'}, headerTintColor: "white"} }name="UserHome" component = {SearchPage}/>
    <MaterialBottomTabs.Screen options={ { headerShown: false } }name = "CreateGame" component = {CreateGame}/>
    <MaterialBottomTabs.Screen options={ { headerShown: false } }name="SearchPage" component = {SearchPage}/>
    <MaterialBottomTabs.Screen options={ { headerShown: false } }name = "UserInfo" component = {UserInfo}/>
  </MaterialBottomTabs.Navigator>
  }
  render(){
    return (
      
      <NavigationContainer>
           
        <Stack.Navigator>
          <Stack.Screen options={ { title: "Welcome to Pinny", headerStyle: {backgroundColor:'#031785'}, headerTintColor: "white"} } name="LoginScreen" component = {OuterLogin}/>
          <Stack.Screen options={{headerStyle: {backgroundColor:'#031785'}, headerTintColor: "white", headerBackTitleVisible: false, headerLeft: false}} name="Signup" component = {UserSignup}/>
          
          <Stack.Screen options={ { title: "Pinny", headerStyle: {backgroundColor:'#031785'}, headerTintColor: "white"}}name="HomeScreen" component = {this.createHomeStack}/>
        </Stack.Navigator>
        {/* <Drawer.Navigator>
          <Drawer.Screen name = "Home" children={this.createHomeStack}/>
          <Drawer.Screen name = "CreateGame" component = {CreateGame}/>
          <Drawer.Screen name = "SearchPage" component = {SearchPage}/>
          <Drawer.Screen name = "UserInfo" component = {UserInfo}/>
        </Drawer.Navigator>  */}
      </NavigationContainer>
      //<AppNavigator/>
    );
  }
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#191919',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

// });


