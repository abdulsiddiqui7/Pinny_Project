import React, { useState, useRef }  from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';


export default function HomeScreen (props) {
    const [gameData, setGameData]  = useState([])
    function getGames(){
        const list =[]
        firebase.firestore()
        .collection('PickupGames')
        .get()
        .then(querySnapshot => {
            console.log('Total users: ', querySnapshot.size);
            querySnapshot.forEach(documentSnapshot => {
            console.log('User ID: ', documentSnapshot.data());
            list.push(documentSnapshot.data());
            setGameData(list)
            });
        });
    }

    getGames()
    return (
        <View style={styles.container}>
            {/* <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
            /> */}
            
            <View style={styles.scrollAreaContainer}>
                
                <FlatList
                    data={[
                        gameData
                    ]}
                    
                    showsVerticalScrollIndicator ={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => {
                        return(
                            <View style = {StyleSheet.gameContainer}>
                                <Text style={styles.aText}>{item.Sport}</Text>
                            </View>
                        );
                }}
                ></FlatList>
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
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#031785",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    width:200,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#031785",
    borderRadius:25,
    height:50,
    width:200,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  aText: {
    color: "white"
}
});