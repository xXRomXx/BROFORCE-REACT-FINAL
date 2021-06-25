import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button
  } from 'react-native';
  import { Icon } from 'react-native-elements'
  import { usarEstado } from "../hook";
  import firebase from "../database/firebase";

const userInfoScreen = (props) =>
{
  const email = usarEstado (state => state.email)
  console.log("email: " + email);
  const [users, setusers] = useState([]);
  useEffect(() => {
    firebase.db.collection("usuarios").where("email", "==", email)
    .get()
    .then((querySnapshot) => {
      console.log("entro query where user")
      const users = [];
      querySnapshot.docs.forEach((doc) => {

       
        const { nombre, email, telefono,direccion, intM } = doc.data();
         /*users.push({
          id: doc.id,
          nombre,
          email,
          telefono,
          direccion,
          intM,
          
        });*/
      users[0] = doc.id;
      users[1] = nombre;
      users[2] = email;
      users[3] = telefono;
      users[4] = direccion;
      users[5] = intM;
      
      });
      setusers(users);
      //console.log(users)
    });
  }, [email]);
  
    const logout = ()=>{
      firebase.auth.signOut();
      props.navigation.navigate("Auth");
    
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                  <Image style={styles.avatar}
                    source={{uri: 'https://caracoltv.brightspotcdn.com/dims4/default/7c03024/2147483647/strip/true/crop/1000x716+0+0/resize/1200x859!/quality/90/?url=https%3A%2F%2Fcaracol-brightspot.s3-us-west-2.amazonaws.com%2Fassets%2Flakalle%2Fquico_con_los_cachetes_desinflados_-_foto_instagram.jpg'}}/>
  
                  <Text style={styles.name}>{users[1]}</Text>
              </View>
            </View>
  
            <View style={styles.body}>
              <View style={styles.item}>
                <View style={styles.iconContent}>
                  <Icon style={styles.icon}  name='face' color='#26A69A'  />
                </View>
                <View style={styles.infoContent}>
                  <Text style={styles.info}>{users[1]}</Text>
                </View>
              </View>
  
              <View style={styles.item}>
                <View style={styles.iconContent}>
                  <Icon style={styles.icon} name='contact-mail' color='#26A69A'/>
                </View>
                <View style={styles.infoContent}>
                  <Text style={styles.info}>{users[2]}</Text>
                </View>
              </View>
  
              <View style={styles.item}>
                <View style={styles.iconContent}>
                  <Icon style={styles.icon} name='phone' color='#26A69A'/>
                </View>
                <View style={styles.infoContent}>
                  <Text style={styles.info}>{users[3]}</Text>
                </View>
              </View>
  
              <View style={styles.item}>
                <View style={styles.iconContent}>
                  <Icon style={styles.icon} name='home' color='#26A69A'/>
                </View>
                <View style={styles.infoContent}>
                  <Text style={styles.info}>{users[4]}</Text>
                </View>
              </View>
              
              <View style={styles.item}>
                <View style={styles.iconContent}>
                  <Icon style={styles.icon} name='business' color='#26A69A'/>
                </View>
                <View style={styles.infoContent}>
                  <Text style={styles.info}>{users[5]}</Text>
                </View>
              </View>
              <View style={styles.item}>
              </View>
            </View>
              <View>
              <Button color="#9B181C" title = "cerrar sesión" onPress={logout}></Button>
              </View>
        </View>
      );
      
}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#B100CF",
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
    },
    name:{
      fontSize:22,
      color:"#000000",
      fontWeight:'600',
    },
    userInfo:{
      fontSize:16,
      color:"#778899",
      fontWeight:'600',
    },
    body:{
      backgroundColor: "#DEDEDE",
      height:350,
      alignItems:'center',
    },
    item:{
      flexDirection : 'row',
    },
    infoContent:{
      flex: 4,
      alignItems:'flex-start',
      paddingRight:20,
      justifyContent: 'flex-start'
    },
    iconContent:{
      flex:1,
      alignItems:'flex-start',
      paddingLeft:10
    },
    icon:{
      width:60,
      height:60,
      marginTop:10,
    },
    info:{
      fontSize:20,
      marginTop:10,
      color: "black",
    }
  });
export default userInfoScreen;