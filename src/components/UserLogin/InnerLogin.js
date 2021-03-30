import React, { useState, useRef }  from 'react';
import * as firebase from 'firebase';
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
  return (
    <View style={styles.container}>
      
      <Text style={styles.logo}>Pinny</Text>
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
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={(loginPressed)} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>Signup</Text>
        
      </TouchableOpacity>
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
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#031785",
    marginBottom:40
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
  forgot:{
    color:"white",
    fontSize:11
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
  loginText:{
    color:"white"
  }
});