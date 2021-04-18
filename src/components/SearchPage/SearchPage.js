import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, FlatList ,ImageBackground } from 'react-native';
import { SearchBar } from 'react-native-elements';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default function SearchPage(props) {
    const [gameData, setGameData] = useState()
    function getGames() {
        var data = [];
        firebase.firestore()
            .collection('PickupGames')
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    //console.log(doc.id, " => ", doc.data());
                    data.push(doc.data());
                });
                console.log(data);
                setGameData(data);
                //console.log("This is the data: ", gameData)
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
        

    }
    useEffect(() => { 
        //console.log("Getting Games")
        getGames() 
        
    },[]);

    
    // state = {
    //     search: '',
    // };

    // updateSearch = (search) => {
    //     this.setState({ search });
    // };
    // const { search } = this.state;
    return (
        <View style={styles.container}>
            {/* <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
            /> */}
           
            <View style={styles.scrollAreaContainer}>
                <FlatList
                    data={gameData}

                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View style={StyleSheet.gameContainer}>
                                <View style={styles.infoContainer}>
                                    <ImageBackground source={require('../../pictures/sports.png')} style={styles.image}>
                                        <Text style={styles.titleText}>{item.Sport}</Text>
                                        <Text style={styles.aText}>Skill Level Required: {item.SkillLevel}</Text>
                                        <Text style={styles.aText}>Number of Players: {item.NumPlayers}</Text>
                                        <Text style={styles.aText}>Location: {item.Location}</Text>
                                        <Text style={styles.aText}>Addrees: {item.Address}</Text>
                                        <TouchableOpacity style={styles.loginBtn} onPress={() => console.log(gameData)}>
                                            <Text>LOGIN</Text>
                                        </TouchableOpacity>
                                        <Text>________________________________________</Text>
                                    </ImageBackground>
                                </View>
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
    scrollAreaContainer: {
        flex: 1,
        backgroundColor: '#191919',
    },
    gameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        height: 170,
        width: '97%',
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#191919'
    },
    aText: {
        color: "white"
    },
    titleText:{
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 35,
        color: 'white',
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#031785",
        borderRadius: 25,
        height: 50,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
});