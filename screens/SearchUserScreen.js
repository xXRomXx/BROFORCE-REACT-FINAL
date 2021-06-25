import React, { useState,useEffect} from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";

import {TextInput} from 'react-native-paper'
import { Icon } from 'react-native-elements'

import { usarEstado } from "../hook";

const AddUserScreen  = (props) =>{

  const seteo = usarEstado (state => state.seteo)

  return (
    <ScrollView>
      <View style={styles.view}>
    <Image style={styles.logo} source={require('../assets/mental-health.png')}/>
        <TextInput
          placeholder="Nombre o CURP del paciente" 
          style={styles.input}
          onChangeText={(value) => seteo(value)}
        />
        <TouchableOpacity style={styles.Button1}
          bottomDivider
          onPress={() => props.navigation.navigate("UsersListxNombre")}
          >
            <View style={styles.viewTouchables}>
              <Icon name="search" size={50} color="black"/>
              <Text style={styles.TextStyle2}>
                Nombre
              </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button1}
          bottomDivider
          onPress={() => props.navigation.navigate("UsersListxCurp")}
          >
          <View style={styles.viewTouchables}>
            <Icon name="search" size={50} color="black"/>
              <Text style={styles.TextStyle2}>
                CURP
              </Text></View>
        </TouchableOpacity>
       
        <TouchableOpacity  style={styles.Button3} onPress={() => props.navigation.navigate("UsersList")}>
            <Text style={styles.TextStyle}>
              Lista de Pacientes
            </Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    padding:10
  },*/
  viewTouchables:{
    flexDirection:'row',
    paddingHorizontal:35
    
  },
  logo:{
    width: "63%",
    height: 225,
    marginTop:30,
    marginBottom:20
},
view:{
    flex:1,
    alignItems: 'center',
    marginTop: 50
},
  input: {
      borderWidth: 1,
      width: "75%",
      height: 50,
      marginTop: 20,
      borderBottomColor: "blue"
  },
  Button1: {
    width: 264,
    height:50,
    marginTop:18,
    flexDirection:'row',
    borderRadius: 30,
    paddingHorizontal:30,
    backgroundColor: "#42B147",
    textAlign: "center"
  },
  Button3: {
    width: 264,
    height: 50,
    marginTop:40,
    borderRadius: 30,
    paddingHorizontal:50,
    backgroundColor: "#1DB6F7",
    flexDirection:'row',
    justifyContent: "center"
  },

  ButtonView:{
    flex: 1,
    padding: 25,
    alignItems: "center",
    justifyContent:'space-between',
  },
  TextStyle:{
    color:'#FFFFFF',
    textAlign:'center',
    fontSize: 20,
    textAlignVertical: "center",
    textAlign: "center",
    justifyContent: "center"
  },
  TextStyle2:{
    color:'#FFFFFF',
    textAlign:'center',
    fontSize: 20,
    textAlignVertical: "center",
    textAlign: "center",
    justifyContent: "center"
  }
});

export default AddUserScreen;
