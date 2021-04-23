import React, { useState, useRef }  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function InnerLogin (props) {
  const [userCreds, setUserCreds] = useState({
    email: '',
    password: ''
  })
  const passwordElement = useRef(null);

  function loginPressed(){
    props.loginEvent(userCreds);
  }

  function signupPressed(){
    props.signupEvent();
  }
  return (
    <View style={styles.container}>
      
      <Image style={styles.tinyLogo}
        source={require('../../pictures/pinny.png')}/>
      <View style={styles.inputView}>
        <TextInput  
          style={styles.inputText}
          placeholder="Email..." 
          placeholderTextColor="#003f5c"
          onSubmitEditing={() => passwordElement.current.focus()}
          value={userCreds.username}
          onChangeText={(usernameInput) => setUserCreds({...userCreds, email: usernameInput})}/>
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..." 
          placeholderTextColor="#003f5c"
          onSubmitEditing={loginPressed}
          value={userCreds.password}
          onChangeText={(passwordInput) => setUserCreds({...userCreds, password: passwordInput})}
          ref={passwordElement}/>
      </View>
      <TouchableOpacity onPress={(loginPressed)} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={(signupPressed)} style={styles.loginBtn}>
        <Text style={styles.loginText}>Signp</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={{color:"#FFF"}}>Don't have an account?</Text>
        <TouchableOpacity onpress={signupPressed}>
            <Text style={[styles.buttonText, styles.signUpText]}>Signup </Text>
        </TouchableOpacity>
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
  signUpContainer: {
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row'
  },
  loginText:{
    color:"white"
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  signUpText: {
      paddingLeft: 5
  },
  tinyLogo: {
    width: 200,
    height: 200,
    marginTop:-100,
    marginBottom: 30
  
  },
});