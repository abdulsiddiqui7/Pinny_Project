import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default function SearchPage (props) {
    // state = {
    //     search: '',
    // };

    // updateSearch = (search) => {
    //     this.setState({ search });
    // };
    // const { search } = this.state;
    return (
        <View style={styles.container}>
            {/* <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
            /> */}
            
            <View style={styles.scrollAreaContainer}>
                <FlatList
                    //data={}
                    
                    showsVerticalScrollIndicator ={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => {
                        return(
                            <View style = {StyleSheet.gameContainer}>
                                <Text style={styles.aText}>hello</Text>
                            </View>
                        );
                }}
                ></FlatList>
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
    scrollAreaContainer: {
        flex: 1,
        backgroundColor: '#FFF',
    },  
    gameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        height: 170,
        width: '97%',
    },
    aText: {
         color: "white"
    }
  });