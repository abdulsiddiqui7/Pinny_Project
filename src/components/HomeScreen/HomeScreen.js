import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList ,ImageBackground } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';

const soccer = require('../../pictures/soccer.png')
const basketball = require('../../pictures/basketball.png')
const hockey = require('../../pictures/hockey.png')
const baseball = require('../../pictures/baseball.png')
const volleyball = require('../../pictures/volleyball.png')
const football = require('../../pictures/football.png')

export default function HomeScreen (props) {
    const [gameData, setGameData] = useState()
    const [myGameData, setMyGameData] = useState()
    function getGames() {
        var data = [];
        firebase.firestore()
            .collection('PickupGames')
            .where("Location", "==", global.currUser.Location)
            .where("Sport", "in", [global.currUser.FirstSportPreference, global.currUser.SecondSportPreference, global.currUser.ThirdSportPreference])
            
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    if (doc.data().Sport == global.currUser.FirstSportPreference){ 
                        if(doc.data().SkillLevel == global.currUser.FirstSportSkillLevel){
                            data.push(doc.data())
                        }
                    }
                    else if (doc.data().Sport == global.currUser.SecondSportPreference){
                        if(doc.data().SkillLevel == global.currUser.SecondSportSkillLevel){
                            data.push(doc.data());
                        }
                    }
                    else if (doc.data().Sport == global.currUser.ThirdSportPreference){
                        if(doc.data().SkillLevle == global.currUser.ThirdSportSkillLevel){
                            data.push(doc.data());
                        }
                    }
                });
                setGameData(data);
            })
            .catch(function (error) {
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

    
    return (
        <View style={styles.container}>
            <View style={styles.scrollAreaContainer}>
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
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
});