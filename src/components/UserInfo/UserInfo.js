import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

export default function UserInfo(props) {
    const lastNameElement = useRef(null);
    const emailElement = useRef(null);
    const passwordElement = useRef(null);
    const passwordConfirmElement = useRef(null);
    const [userCreds, setUserCreds] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPass: ''
      })

    function signUpPressed(){
        addUser(userCreds)
        
    }

    function addUser(userCreds){
        firebase.firestore()
        .collection("Users")
        .doc(userCreds.email)
        .set({
            Name: userCreds.name,
            Username: userCreds.username,
            Email: userCreds.email,
        }).then((data) => alert("Success"))
        .catch((error) => console.log("Error: " + error.message));
          
    }

    return(
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <View style={styles.formContainer}>
                {/* <View style={styles.mascotContainer}>
                    <Image style={styles.mascot} source={require('../../media/creamy/creamy-signup.png')}></Image>
                </View> */}
                <Text style={styles.containerTitle}>Sign Up</Text>
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
                        <TouchableOpacity >
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
        width:"80%",
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
        color: '#031785',
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