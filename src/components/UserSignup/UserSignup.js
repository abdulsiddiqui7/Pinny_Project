import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert, Picker } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';


export default function Signup(props) {
    const lastNameElement = useRef(null);
    const emailElement = useRef(null);
    const passwordElement = useRef(null);
    const passwordConfirmElement = useRef(null);
    const [userCreds, setUserCreds] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
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
            Location: userCredentials.location,
            FirstSportPreference: userCredentials.firstSportPref,
            SecondSportPreference: userCredentials.secondSportPref,
            ThirdSportPreference: userCredentials.thirdSportPref,
            FirstSportSkillLevel: userCredentials.firstSportSkill,
            SecondSportSkillLevel: userCredentials.secondSportSkill,
            ThirdSportSkillLevel: userCredentials.thirdSportSkill

        }).then((data) => alert("Success"))
        .catch((error) => console.log("Error: " + error.message));
          
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
    }

    function loginPressed() {
        props.navigation.navigate('LoginScreen');
    }

    // function backPressed() {
    //     props.navigation.goBack();
    // }

    return(
        <KeyboardAvoidingView behavior="height" style={styles.container}>
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
                        placeholderTextColor="#003f5c"
                        //onSubmitEditing={loginPressed}
                        value={userCreds.password}
                        onChangeText={(passwordInput) => setUserCreds({...userCreds, password: passwordInput})}
                        ref={passwordElement}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText}
                        secureTextEntry
                        placeholder="Confirm Password..." 
                        placeholderTextColor="#003f5c"
                        //onSubmitEditing={loginPressed}
                        value={userCreds.confirmPassword}
                        onChangeText={(confirmPasswordInput) => setUserCreds({...userCreds, confirmPassword: confirmPasswordInput})}
                        ref={passwordElement}/>
                </View>
                
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
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#191919",
        justifyContent: 'center',
    },
    sportSelect: {
        flex: 1,
        flexDirection: 'row'

    },
    formContainer: {
        padding: 20,
    },
    containerTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#FFF',
        marginBottom: 20,
        textAlign: 'center'
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
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 20,
        borderRadius: 50,
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
    sportPicker:{
        flex: 1,
        width: '20%'
    },
    skillPicker:{
        flex: 1,
        width: '20%'
    },
    sportPickerItem:{
        flex:0,
        height:120,
        width: '125%'
    },
    skillPickerItem:{
        flex:0,
        height:120,
        width: '80%',
        marginLeft:30
    },
});