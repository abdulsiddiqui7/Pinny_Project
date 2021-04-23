import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';


export default function Signup(props) {
    const passwordElement = useRef(null);
    const [userCreds, setUserCreds] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        games: [],
        location: '',
        firstSportPref: '',
        secondSportPref: '',
        thirdSportPref: '',
        firstSportSkill: '',
        secondSportSkill: '',
        thirdSportSkill: ''
      })


    function addUser(userCredentials){
        firebase.firestore()
        .collection("Users")
        .doc(userCredentials.email)
        .set({
            Name: userCredentials.name,
            Username: userCredentials.username,
            Email: userCredentials.email,
            Games: userCredentials.games,
            Location: userCredentials.location,
            FirstSportPreference: userCredentials.firstSportPref,
            SecondSportPreference: userCredentials.secondSportPref,
            ThirdSportPreference: userCredentials.thirdSportPref,
            FirstSportSkillLevel: userCredentials.firstSportSkill,
            SecondSportSkillLevel: userCredentials.secondSportSkill,
            ThirdSportSkillLevel: userCredentials.thirdSportSkill

        }).then((data) => alert("Account Createed Succesfully"))
        .catch((error) => console.log("Error: ", "Could not create account"));
          
    }
    
    function signUpPressed() {
        if(userCreds.password !== userCreds.confirmPassword) {
            Alert.alert("error wroing pass", "error wrong pass");
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(userCreds.email, userCreds.password)
            .then(() => {
                addUser(userCreds);   
            }, (error) => { 
                Alert.alert("Error", "Couldnt Sign In"); 
            });
            props.navigation.navigate('LoginScreen'); 
    }

    function loginPressed() {
        props.navigation.navigate('LoginScreen');
    }

    return(
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Name..." 
                        placeholderTextColor="#003f5c"
                        onSubmitEditing={() => passwordElement.current.focus()}
                        value={userCreds.name}
                        onChangeText={(nameInput) => setUserCreds({...userCreds, name: nameInput})}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Username..." 
                        placeholderTextColor="#003f5c"
                        onSubmitEditing={() => passwordElement.current.focus()}
                        value={userCreds.username}
                        onChangeText={(usernameInput) => setUserCreds({...userCreds, username: usernameInput})}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Email..." 
                        placeholderTextColor="#003f5c"
                        onSubmitEditing={() => passwordElement.current.focus()}
                        value={userCreds.email}
                        onChangeText={(emailInput) => setUserCreds({...userCreds, email: emailInput})}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText}
                        secureTextEntry
                        placeholder="Password..." 
                        placeholderTextColor="#003f5c"ß
                        value={userCreds.password}
                        onChangeText={(passwordInput) => setUserCreds({...userCreds, password: passwordInput})}
                        ref={passwordElement}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText}
                        secureTextEntry
                        placeholder="Confirm Password..." 
                        placeholderTextColor="#003f5c"
                        value={userCreds.confirmPassword}
                        onChangeText={(confirmPasswordInput) => setUserCreds({...userCreds, confirmPassword: confirmPasswordInput})}
                        ref={passwordElement}/>
                </View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <View>
                    <TouchableOpacity style={styles.button} onPress={signUpPressed}
                    >
                        <Text style={styles.buttonText}>Signup</Text>
                    </TouchableOpacity>
                </View> 
                 <View style={styles.signUpContainer}>
                        <Text style={{color:"#FFF"}}>Already have an account?</Text>
                        <TouchableOpacity onpress={loginPressed}>
                            <Text style={[styles.buttonText, styles.signUpText]}>Log in.  </Text>
                        </TouchableOpacity>
                </View>  
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#191919",
        justifyContent: 'center',
    },
    inputView:{
        width:"100%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
    button: {
        backgroundColor: '#031785',
        paddingVertical: 15,
        margin: 10,
        borderRadius: 50,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    signUpContainer: {
        justifyContent: 'center',
        padding: 10,
        flexDirection: 'row'
    },
    signUpText: {
        paddingLeft: 5
    },
});