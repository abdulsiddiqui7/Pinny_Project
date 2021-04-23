
import React from 'react';
import { View } from 'react-native';
import OuterLogin from './src/components/UserLogin/OuterLogin'
import ExplorePage from './src/components/ExplorePage/ExplorePage'
import UserSignup from './src/components/UserSignup/UserSignup'
import UserInfo from './src/components/UserInfo/UserInfo'
import CreateGame from './src/components/CreateGame/CreateGame'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import firebase from 'firebase'
import HomeScreen from './src/components/HomeScreen/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

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
    if(!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
    //firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  createHomeStack = () =>{
  return <MaterialBottomTabs.Navigator barStyle={{ backgroundColor: '#031785' }}>
    <MaterialBottomTabs.Screen options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: "white"}]} size={25} name={'ios-home'}/>  
            </View>),  
        }}name="UserHome" component = {HomeScreen}/>
    <MaterialBottomTabs.Screen options={ {tabBarLabel: 'CreateGame',
          tabBarLabel: 'CreateGame',
          tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: "white"}]} size={25} name={'ios-add-circle-outline'}/>  
            </View>), }
           }name = "CreateGame" component = {CreateGame}/>
    <MaterialBottomTabs.Screen options={ { tabBarLabel: 'Explore',
          tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: "white"}]} size={25} name={'search'}/>  
            </View>), 
           } }name="Explore" component = {ExplorePage}/>
    <MaterialBottomTabs.Screen options={ { tabBarLabel: 'UserPreference',
          tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: "white"}]} size={25} name={'ios-person'}/>  
            </View>), 
           } }name = "UserInfo" component = {UserInfo}/>
  </MaterialBottomTabs.Navigator>
  }
  render(){
    return (
      
      <NavigationContainer>
           
        <Stack.Navigator>
          <Stack.Screen options={ { title: "Welcome to Pinny", headerStyle: {backgroundColor:'#031785'}, headerTintColor: "white", headerBackTitleVisible: false, headerLeft: false} } name="LoginScreen" component = {OuterLogin}/>
          <Stack.Screen options={{headerStyle: {backgroundColor:'#031785'}, headerTintColor: "white", headerBackTitleVisible: false, headerLeft: false}} name="Signup" component = {UserSignup}/>
          
          <Stack.Screen options={ { title: "Pinny", headerStyle: {backgroundColor:'#031785'}, headerTintColor: "white", headerBackTitleVisible: false, headerLeft: false}}name="HomeScreen" component = {this.createHomeStack}/>
        </Stack.Navigator>
      </NavigationContainer>
      //<AppNavigator/>
    );
  }
}



