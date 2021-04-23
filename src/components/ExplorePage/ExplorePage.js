import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList ,ImageBackground, ScrollView } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';

const soccer = require('../../pictures/soccer.png')
const basketball = require('../../pictures/basketball.png')
const hockey = require('../../pictures/hockey.png')
const baseball = require('../../pictures/baseball.png')
const volleyball = require('../../pictures/volleyball.png')
const football = require('../../pictures/football.png')

export default function ExplorePage(props) {
    const [gameData, setGameData] = useState()
    function getGames() {
        var data = [];
        firebase.firestore()
            .collection('PickupGames')
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    data.push(doc.data());
                });
                setGameData(data);
            })
            .catch(function (error) {
                Alert.alert("Error", "Could not retrieve data")
            });
        

    }
    useEffect(() => { 
        getGames() 
        
    },[]);

    function sportPicture(sport){
        if (sport == "Soccer")
            return soccer
        else if (sport == "Basketball")
            return basketball
        else if (sport == "Hockey")
            return hockey
        else if (sport == "Baseball")
            return baseball
        else if (sport == "Volleyball")
            return volleyball
        else 
            return football

    }
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
           
            <ScrollView style={styles.scrollAreaContainer}>
                <FlatList
                    data={gameData}

                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View style={StyleSheet.gameContainer}>
                                <View style={styles.infoContainer}>
                                    <ImageBackground source={sportPicture(item.Sport)} style={styles.image}>
                                    <Text style={styles.titleText}>{item.Sport}</Text>
                                        <Text></Text>
                                        <Text style={styles.aText}>Organizer Information:</Text>
                                        <Text style={styles.aText}>{item.OrgName}</Text>
                                        <Text style={styles.aText}>{item.OrgEmail}</Text>
                                        <Text style={styles.aText}>Skill Level Required: {item.SkillLevel}</Text>
                                        <Text style={styles.aText}>Number of Players: {item.NumPlayers}</Text>
                                        <Text style={styles.aText}>Location: {item.Location}</Text>
                                        <Text style={styles.aText}>Addrees: {item.Address}</Text>
                                        <Text style={styles.aText}>Date: {item.Date}</Text>
                                        <Text>_________________________________________________</Text>
                                    </ImageBackground>
                                </View>
                            </View>
                            
                        );
                    }}
                ></FlatList>
            </ScrollView>

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
        //flex: 1,
        //backgroundColor: '#191919',
        height: "50%"
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
        backgroundColor: '#191919'
    },
    aText: {
        color: "white",
        justifyContent: 'center',
        textAlign: 'center'
        
    },
    titleText:{
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 35,
        color: 'white',
    },
    signupBtn: {
        width: "80%",
        backgroundColor: "#031785",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginLeft: 35,
        marginBottom: 10
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
});