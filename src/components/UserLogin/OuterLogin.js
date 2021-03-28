import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, Alert, ImageBackground } from 'react-native';
import LoginForm from './InnerLogin.js';
import * as firebase from 'firebase';
import InnerLogin from './InnerLogin.js';


export default function OuterLogin(props) {
    function LoginHandle(credentials) {
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => { 
                global.email = credentials.email;
                Alert.alert("Success")
                //props.navigation.navigate('Home', { userEmail : credentials.email }); 
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
                <View>
                    <InnerLogin loginEvent={LoginHandle} signupEvent={signupHandle} forgotPasswordEvent={forgotHandle}></InnerLogin>
                </View>
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