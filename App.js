import { StatusBar } from "expo-status-bar";
import React , { useEffect, useState } from "react";
import { StyleSheet, LogBox } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from './database/firebase';


// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Components
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import UsersList from "./screens/UsersList";
import UsersListxNombre from "./screens/UsersListxNombre";
import UsersListxCurp from './screens/UsersListxCurp'
import SearchUserScreen from './screens/SearchUserScreen';
import UserInfoScreen from './screens/UserInfoScreen';
import LoginUser from './screens/LoginUser'
import UserRegister from "./screens/UserRegister";
import Auth from './screens/Auth'


LogBox.ignoreAllLogs();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MyStack(){
  return (<Stack.Navigator  >
    <Stack.Screen name="Auth" options={{
    title: 'Consulta de Historial Médico'
  }} component={Auth} />
    <Stack.Screen name="Inicio" component={Inicio}   options={{
    headerShown: false
  }}/>
    <Stack.Screen name="UserDetailScreen" options={{
    title: 'Detalles del paciente'
  }} component={UserDetailScreen} />
    <Stack.Screen 
    name="UsersListxNombre" options={{
    title: 'Resultados por nombre'
  }} component={UsersListxNombre} />
   <Stack.Screen 
    name="UsersListxCurp" options={{
    title: 'Resultados por CURP'
  }} component={UsersListxCurp} />
  
    </Stack.Navigator>);
}

function Inicio() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#26A69A',
        inactiveTintColor: 'gray'
      }}
    >
       <Tab.Screen
        name="SearchUserScreen"
        component={SearchUserScreen}
        options={{ tabBarLabel: "Buscar", tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="magnify" color={color} size={26}/>
          ), }}
      />
      <Tab.Screen
        name="UsersList"
        component={UsersList}
        options={{ tabBarLabel: "Lista", tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="view-list" color={color}  size={26}/>
          ), }}
      />
      <Tab.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ tabBarLabel:"Registrar", tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-plus" color={color} size={26}/>
          ), }}
      />
     <Tab.Screen
        name="UserInfoScreen"
        component={UserInfoScreen}
        options={{ tabBarLabel:"Perfil", tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="clipboard-account" color={color} size={26}/>
          ), }}
      />



      
       
    </Tab.Navigator>
  );
}

export default function App() {
  const [user,setUser] = useState(undefined);

  useEffect(()=>{
    firebase.auth.onAuthStateChanged((response)=>{
      setUser(response);
    })
  },[]);
//console.log(user)
  if(user === undefined) return null;

  

  return (
    <NavigationContainer>
      <MyStack />
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
