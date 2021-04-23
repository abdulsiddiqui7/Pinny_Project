import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, TouchableOpacity, Picker } from 'react-native';
import * as firebase from 'firebase';

export default function UserInfo(props) {
    const lastNameElement = useRef(null);
    const emailElement = useRef(null);
    const passwordElement = useRef(null);
    const passwordConfirmElement = useRef(null);
    const [userPref, setUserPref] = useState({
        location: global.currUser.Location,
        firstSportPref: global.currUser.FirstSportPreference,
        secondSportPref: global.currUser.SecondSportPreference,
        thirdSportPref: global.currUser.ThirdSportPreference,
        firstSportSkill: global.currUser.FirstSportSkillLevel,
        secondSportSkill: global.currUser.SecondSportSkillLevel,
        thirdSportSkill: global.currUser.ThirdSportSkillLevelß,
      })

    function updatePressed(){
        userPrefs(userPref)
        props.navigation.navigate('HomeScreen'); 
    }

    function userPrefs(userPref){
        firebase.firestore()
        .collection("Users")
        .doc(global.currUser.Email)
        .update({
            Location: userPref.location,
            FirstSportPreference: userPref.firstSportPref,
            SecondSportPreference: userPref.secondSportPref,
            ThirdSportPreference: userPref.thirdSportPref,
            FirstSportSkillLevel: userPref.firstSportSkill,
            SecondSportSkillLevel: userPref.secondSportSkill,
            ThirdSportSkillLevel: userPref.thirdSportSkill
        }).then((data) => alert("Success"))
        .catch((error) => console.log("Error: " + error.message));
          
    }

    return(
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <View style={styles.Container}>
                <View style={styles.sportSelect}>
                    <Picker
                        selectedValue={userPref.location}
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                        onValueChange={(itemValue, itemIndex) => setUserPref({...userPref, location: itemValue})}
                        >
                        <Picker.Item label="-Select Location-" value="" color="white"/>
                        <Picker.Item label="Kanata" value="Kanata" color="white"/>
                        <Picker.Item label="Barhaven" value="Barhaven" color="white"/>
                        <Picker.Item label="Nepean" value="Nepean" color="white"/>
                        <Picker.Item label="Orleans" value="Orleans" color="white"/>
                    </Picker>
                </View>
                <Text></Text>
                <View style={styles.sportSelect}>
                    <Picker
                        selectedValue={userPref.firstSportPref}
                        style={styles.sportPicker}
                        itemStyle={styles.sportPickerItem}
                        onValueChange={(itemValue, itemIndex) => setUserPref({...userPref, firstSportPref: itemValue})}
                    >
                        <Picker.Item label="-First Preferred Sport-" value="" color="white"/>
                        <Picker.Item label="Soccer" value="Soccer" color="white"/>
                        <Picker.Item label="Basketball" value="Basketball" color="white"/>
                        <Picker.Item label="Hockey" value="Hockey" color="white"/>
                        <Picker.Item label="Volleyball" value="Volleyball" color="white"/>
                        <Picker.Item label="Baseball" value="Baseball" color="white"/>
                        <Picker.Item label="Football" value="Football" color="white"/>
                    </Picker>
                    <Picker
                        selectedValue={userPref.firstSportSkill}
                        style={styles.skillPicker}
                        itemStyle={styles.skillPickerItem}
                        onValueChange={(itemValue, itemIndex) => setUserPref({...userPref, firstSportSkill: itemValue})}
                        >
                        <Picker.Item label="-Skill Level-" value="" color="white"/>
                        <Picker.Item label="Amateur" value="Amateur" color="white"/>
                        <Picker.Item label="Intermediate" value="Intermediate" color="white"/>
                        <Picker.Item label="Advanced" value="Advanced" color="white"/>
                    </Picker>
                </View>
                <View style={styles.sportSelect}>
                    <Picker
                        selectedValue={userPref.secondSportPref}
                        style={styles.sportPicker}
                        itemStyle={styles.sportPickerItem}
                        onValueChange={(itemValue, itemIndex) => setUserPref({...userPref, secondSportPref: itemValue})}
                    >
                        <Picker.Item label="-Second Preferred Sport-" value="" color="white"/>
                        <Picker.Item label="Soccer" value="Soccer" color="white"/>
                        <Picker.Item label="Basketball" value="Basketball" color="white"/>
                        <Picker.Item label="Hockey" value="Hockey" color="white"/>
                        <Picker.Item label="Volleyball" value="Volleyball" color="white"/>
                        <Picker.Item label="Baseball" value="Baseball" color="white"/>
                        <Picker.Item label="Football" value="Football" color="white"/>
                    </Picker>
                    <Picker
                        selectedValue={userPref.secondSportSkill}
                        style={styles.skillPicker}
                        itemStyle={styles.skillPickerItem}
                        onValueChange={(itemValue, itemIndex) => setUserPref({...userPref, secondSportSkill: itemValue})}
                        >
                        <Picker.Item label="-Skill Level-" value="" color="white"/>
                        <Picker.Item label="Amateur" value="Amateur" color="white"/>
                        <Picker.Item label="Intermediate" value="Intermediate" color="white"/>
                        <Picker.Item label="Advanced" value="Advanced" color="white"/>
                    </Picker>
                </View>
                <View style={styles.sportSelect}>
                    <Picker
                        selectedValue={userPref.thirdSportPref}
                        style={styles.sportPicker}
                        itemStyle={styles.sportPickerItem}
                        onValueChange={(itemValue, itemIndex) => setUserPref({...userPref, thirdSportPref: itemValue})}
                    >
                        <Picker.Item label="-Third Preferred Sport-" value="" color="white"/>
                        <Picker.Item label="Soccer" value="Soccer" color="white"/>
                        <Picker.Item label="Basketball" value="Basketball" color="white"/>
                        <Picker.Item label="Hockey" value="Hockey" color="white"/>
                        <Picker.Item label="Volleyball" value="Volleyball" color="white"/>
                        <Picker.Item label="Baseball" value="Baseball" color="white"/>
                        <Picker.Item label="Football" value="Football" color="white"/>
                    </Picker>
                    <Picker
                        selectedValue={userPref.thirdSportSkill}
                        style={styles.skillPicker}
                        itemStyle={styles.skillPickerItem}
                        onValueChange={(itemValue, itemIndex) => setUserPref({...userPref, thirdSportSkill: itemValue})}
                        >
                        <Picker.Item label="-Skill Level-" value="" color="white"/>
                        <Picker.Item label="Amateur" value="Amateur" color="white"/>
                        <Picker.Item label="Intermediate" value="Intermediate" color="white"/>
                        <Picker.Item label="Advanced" value="Advanced" color="white"/>
                    </Picker>
                </View>

                
                
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={()=>updatePressed()}
                    >
                        <Text style={styles.buttonText}>Update</Text>
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
        //justifyContent: 'center',
    },
    sportSelect: {
        //flex: 1,
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
    button: {
        backgroundColor: '#031785',
        height: 50,
        width: '50%',
        paddingVertical: 15,
        marginLeft: 100,
        marginTop:75,
        borderRadius: 50,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
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
    picker:{
        flex: 0,
        width: '100%',
        height:80,
    },
    pickerItem:{
        flex:0,
        height:120,
        width: '100%',
    },
});