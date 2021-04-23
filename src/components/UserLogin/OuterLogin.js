import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Alert } from 'react-native';
import * as firebase from 'firebase';
import InnerLogin from './InnerLogin.js';


export default function OuterLogin(props) {
    function LoginHandle(credentials) {
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => { 
                global.email = credentials.email;
                firebase.firestore()
                    .collection("Users")
                    .doc(credentials.email)
                    .get()
                    .then(userInfo => {
                        global.currUser = userInfo.data();
                        props.navigation.navigate('HomeScreen'); 
                    })
                    .catch()
                
            }, (error) => { 
                Alert.alert("Error", "Unable to signin!"); 
            });
    }

    function signupHandle() {
        props.navigation.navigate('Signup');
    }

    function forgotHandle() {
        props.navigation.navigate('ResetPassword')
    }

    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
                    <InnerLogin loginEvent={LoginHandle} signupEvent={signupHandle} forgotPasswordEvent={forgotHandle}></InnerLogin>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#191919',
      justifyContent: 'center'
    },
  });