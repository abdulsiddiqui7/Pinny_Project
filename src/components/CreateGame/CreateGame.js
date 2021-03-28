import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, StatusBar, FlatList } from 'react-native';
//import DropDownPicker from 'react-native-dropdown-picker';
import { Dropdown } from 'sharingan-rn-modal-dropdown';

export const data = [
  {
    value: '1',
    label: 'Tiger Nixon',
    employee_salary: '320800',
    employee_age: '61',
  },
];

export default function CreateGame (props) {

    return (
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.container}>
              <Dropdown style={styles.dropdown}
                label="Simple dropdown"
                data={data}
                // enableSearch
                // value={valueSS}
                // onChange={onChangeSS}
              />
            </View>
          </ScrollView>
          {/* <DropDownPicker
              items={[
                  {label: 'Soccer', value: 'soccer', hidden: true},
                  {label: 'Basketball', value: 'basketball'},
                  {label: 'Hockey', value: 'hockey'},
              ]}
              defaultValue={this.state.country}
              containerStyle={{height: 40}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                  justifyContent: 'flex-start'
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
          /> */}
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
    dropdown:{
      alignItems: 'center',
      justifyContent: 'center',
    }
  });