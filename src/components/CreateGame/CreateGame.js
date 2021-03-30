import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, StatusBar, FlatList } from 'react-native';
//import DropDownPicker from 'react-native-dropdown-picker';
import { Header } from 'react-native-elements';
import { Dropdown } from 'sharingan-rn-modal-dropdown';

export const data = [
  {
    value: '1',
    label: 'Soccer',
  },
  {
    value: '2',
    label: 'Basketball',
  },
  {
    label: 'Hockey',
    value: '3',
  },
  {
    label: 'Baseball',
    value: '4',
  },
  {
    label: 'Volleyball',
    value: '5',
  },
  {
    label: 'Cricket',
    value: '6',
  },
  {
    label: 'Football',
    value: '7'
  },
];

export default function CreateGame (props) {

    return (
      
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'previous', color: '#fff' }}
          centerComponent={{ text: 'Create Game', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          backgroundColor="#090346"
        />
      <ScrollView>
        <View style={styles.scrollView}>
          <Dropdown
            label="Sport"
            data={data}
            enableSearch
            floating
            required
            rippleColor = "#ffffff"
            underlineColor = "#191919"
            //value={valueSS}
            //onChange={onChangeSS}
          />
        </View>
        <View style={styles.scrollView}>
          <Dropdown 
            label="Skill Level"
            textInputPlaceholderColor = "#ffffff"
            data={data}
            enableSearch
            //value={valueSS}
            //onChange={onChangeSS}
          />
        </View>
        <View style={styles.scrollView}>
          <Dropdown
            label="Number of Players"
            data={data}
            enableSearch
            activityIndicatorColor = "red"
            rippleColor = "#ffffff"
            //value={valueSS}
            //onChange={onChangeSS}
          />
        </View>
        <View style={styles.scrollView}>
          <Dropdown
            label="Simple dropdown"
            textInputPlaceholderColor = "#ffffff"
            data={data}
            enableSearch
            //value={valueSS}
            //onChange={onChangeSS}
          />
        </View>
      </ScrollView>
    </View>
        // <View style={styles.container}>
        //   <ScrollView contentContainerStyle = {styles.scrollView}>
        //     <View style={styles.container}>
        //       <Dropdown style={styles.dropdown}
        //         label="Simple dropdown"
        //         data={data}
        //         // enableSearch
        //         // value={valueSS}
        //         // onChange={onChangeSS}
        //       />
        //     </View>
        //   </ScrollView>
        //   {/* <DropDownPicker
        //       items={[
        //           {label: 'Soccer', value: 'soccer', hidden: true},
        //           {label: 'Basketball', value: 'basketball'},
        //           {label: 'Hockey', value: 'hockey'},
        //       ]}
        //       defaultValue={this.state.country}
        //       containerStyle={{height: 40}}
        //       style={{backgroundColor: '#fafafa'}}
        //       itemStyle={{
        //           justifyContent: 'flex-start'
        //       }}
        //       dropDownStyle={{backgroundColor: '#fafafa'}}
        //   /> */}
        // </View>
    );
    
}

  
const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      height: '100%',
      backgroundColor: "#191919"
    },
    scrollView:{
      flex: 1,
      backgroundColor: '#090346',
      paddingTop: 30,
      marginLeft: 20,
      marginRight: 20,
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
    logo:{
      fontWeight:"bold",
      fontSize:30,
      color:"#031785",
      paddingTop:50,
      marginBottom:40,
      marginLeft: 80
    },
  });