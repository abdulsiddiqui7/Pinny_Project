//import React from 'react';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Picker} from 'react-native';
//import DropDownPicker from 'react-native-dropdown-picker';
import NumericInput from 'react-native-numeric-input'
import { Header } from 'react-native-elements';
import * as firebase from 'firebase';
import 'firebase/firestore';


export function addGame(gameInfo){
  firebase.firestore()
  .collection("PickupGames")
  .add({
    //BookingCost: gameInfo.BookingCost,
    Location: gameInfo.Location,
    NumPlayers: gameInfo.NumPlayers,
    SkillLevel: gameInfo.SkillLevel,
    Sport: gameInfo.Sport,
    Address: gameInfo.Address
  }).then((data) => console.log("Success!"))
  .catch((error) => console.log("Error: " + error.message));
}

export default function CreateGame (props) {

  const [gameInfo, setGameInfo] = useState({
    //BookingCost: "",
    Location: "",
    NumPlayers: "",
    SkillLevel: "",
    Sport: "",
    Address: "",
  })
  const [selectedSport, setSelectedSport] = useState("");

  function createGameHandle(){
    addGame(gameInfo)
  }
  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <Picker
        selectedValue={gameInfo.Sport}
        style={styles.picker}
        itemStyle={styles.pickerItem}
        onValueChange={(itemValue, itemIndex) => setGameInfo({...gameInfo, Sport: itemValue})}
      >
        <Picker.Item label="-Choose A Sport-" value="" color="white"/>
        <Picker.Item label="Soccer" value="Soccer" color="white"/>
        <Picker.Item label="Basketball" value="Basketball" color="white"/>
        <Picker.Item label="Hockey" value="Hockey" color="white"/>
        <Picker.Item label="Volleyball" value="Volleyball" color="white"/>
        <Picker.Item label="Baseball" value="Baseball" color="white"/>
        <Picker.Item label="Football" value="Football" color="white"/>
      </Picker>
      <Picker
        selectedValue={gameInfo.SkillLevel}
        style={styles.picker}
        itemStyle={styles.pickerItem}
        onValueChange={(itemValue, itemIndex) => setGameInfo({...gameInfo, SkillLevel: itemValue})}
        >
        <Picker.Item label="-Skill Level Required-" value="" color="white"/>
        <Picker.Item label="Amateur" value="Amateur" color="white"/>
        <Picker.Item label="Intermediate" value="Intermediate" color="white"/>
        <Picker.Item label="Advanced" value="Advanced" color="white"/>
      </Picker>

      <Picker
        selectedValue={gameInfo.Location}
        style={styles.picker}
        itemStyle={styles.pickerItem}
        onValueChange={(itemValue, itemIndex) => setGameInfo({...gameInfo, Location: itemValue})}
        >
        <Picker.Item label="-Select Location-" value="" color="white"/>
        <Picker.Item label="Kanata" value="Kanata" color="white"/>
        <Picker.Item label="Barhaven" value="Barhaven" color="white"/>
        <Picker.Item label="Nepean" value="Nepean" color="white"/>
        <Picker.Item label="Orleans" value="Orleans" color="white"/>
      </Picker>
    
      <Text> </Text>
      <Text> </Text>
    <View style={styles.inputView}>
        <TextInput  
          style={styles.inputText}
          placeholder="               Please Enter Address..." 
          placeholderTextColor="#e3e3e3"
          //value={userCreds.username}
          onChangeText={(addressInput) => setGameInfo({...gameInfo, Address: addressInput})}
          />
      </View> 
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.text}>Number of Players</Text>
      <NumericInput 
        style={styles.counter}
       // type='up-down' 
        //value="Number of players"
        textColor='white'
        totalWidth={365}
        totalHeight={50}
        rightButtonBackgroundColor='#031785' 
        leftButtonBackgroundColor='#031785'
        onChange={value => setGameInfo({...gameInfo, NumPlayers: value})} />
      
      
    </ScrollView>

    
    <View>
        <TouchableOpacity style={styles.button} onPress={createGameHandle}>
            <Text style={styles.buttonText}>Create Game</Text>
        </TouchableOpacity>
    </View>
  </View>
  );
    
}

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#191919',
      alignItems: 'center',
      justifyContent: 'center',
    },
    picker:{
      flex: 0,
      width: '100%'
    },
    pickerItem:{
      flex:0,
      height:120
    },
    counter:{
      width:"100%",
      justifyContent: "center",
      alignItems: "center"
    },
    scrollView:{
      flex: 1,
      // //backgroundColor: '#031785',
      // paddingTop: 0,
      // marginLeft: 20,
      // marginRight: 20,
    },
    text:{
      textAlign: 'center',
      fontSize:20,
      color:"#e3e3e3"
    },
    inputView:{
      backgroundColor:"#262626",
      width:"100%",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      fontSize:20,
      width: "90%",
      color:"white"
    },
    button:{
      width:200,
      backgroundColor:"#031785",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:0,
      marginBottom:70
      
    },
  });