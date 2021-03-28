import React, { useState, useRef } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, Alert, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
// import { addUser } from '../../api/FoodBucketDB';
// import { ErrorMessages, mapError } from '../../constants/Errors';
// import * as firebase from 'firebase';

export default function Signup(props) {
    const lastNameElement = useRef(null);
    const emailElement = useRef(null);
    const passwordElement = useRef(null);
    const passwordConfirmElement = useRef(null);
    const [credentials, setCredentials] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        passwordConfirm : "",
    })

    // function createPressed() {
    //     if(credentials.password !== credentials.passwordConfirm) {
    //         Alert.alert(ErrorMessages.TITLE, ErrorMessages.PASSWORD_MISMATCH);
    //         return;
    //     }
    //     firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
    //         .then(() => {
    //             addUser(credentials);   
    //             props.navigation.goBack(); 
    //         }, (error) => { 
    //             Alert.alert(ErrorMessages.TITLE, mapError(error)); 
    //         });
    // }

    // function backPressed() {
    //     props.navigation.goBack();
    // }

    return(
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <View style={styles.formContainer}>
                {/* <View style={styles.mascotContainer}>
                    <Image style={styles.mascot} source={require('../../media/creamy/creamy-signup.png')}></Image>
                </View> */}
                <Text style={styles.containerTitle}>Sign Up</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="first name"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    //onSubmitEditing={() => lastNameElement.current.focus()}
                    //value={credentials.firstName}
                    //onChangeText={(firstNameInput) => setCredentials({...credentials, firstName: firstNameInput})}
                    >
                </TextInput>
                <TextInput 
                    style={styles.input}
                    placeholder="last name"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    //onSubmitEditing={() => emailElement.current.focus()}
                    //value={credentials.lastName}
                    //onChangeText={(lastNameInput) => setCredentials({...credentials, lastName: lastNameInput})}
                    //ref={lastNameElement}
                    >   
                </TextInput>
                <TextInput 
                    style={styles.input}
                    placeholder="email"
                    keyboardType="email-address"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    //onSubmitEditing={() => passwordElement.current.focus()}
                    //value={credentials.username}
                    //onChangeText={(emailInput) => setCredentials({...credentials, email: emailInput})}
                    //ref={emailElement}
                    >
                </TextInput>
                <TextInput 
                    style={styles.input}
                    secureTextEntry
                    placeholder="password"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    //onSubmitEditing={() => passwordConfirmElement.current.focus()}
                    //value={credentials.password}
                    //onChangeText={(passInput) => setCredentials({...credentials, password: passInput})}
                    //ref={passwordElement}
                    >           
                </TextInput>
                <TextInput 
                    style={styles.input}
                    secureTextEntry
                    placeholder="confirm password"
                    returnKeyType="go"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    //onSubmitEditing={createPressed}
                    //value={credentials.passwordConfirm}
                    //onChangeText={(passConfirmInput) => setCredentials({...credentials, passwordConfirm: passConfirmInput})}
                    //ref={passwordConfirmElement}
                    >           
                </TextInput>
                <View>
                    <TouchableOpacity style={styles.button} //onPress={createPressed}
                    >
                        <Text style={styles.buttonText}>Create Account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signUpContainer}>
                        <Text style={{color:"#FFF"}}>Already have an account?</Text>
                        <TouchableOpacity onPress={backPressed}>
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
        backgroundColor: "blue",
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
    mascot: {
        width: 250,
        height: 250,
        resizeMode:'contain'
    },
    mascotContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 30,
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
        backgroundColor: '#FFF',
        paddingVertical: 15,
        margin: 10,
        borderRadius: 50,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
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
    animationContainer: {
        marginBottom: 30,
        height: 150,
    }, 
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});