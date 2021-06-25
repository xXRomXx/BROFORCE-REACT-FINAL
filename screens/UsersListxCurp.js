import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { ListItem, Avatar, Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { usarEstado } from "../hook";
import firebase from "../database/firebase";

const UserListxCurp = (props) => {
  const seteo = usarEstado (state => state.seteo)
  const nombre = usarEstado (state => state.nombre)
  
  const [pacients, setpacients] = useState([]);
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
    setLoading(true);
      firebase.db.collection("pacients").where("curp", "==", nombre)
      .get()
      .then((querySnapshot) => {
        
        console.log("entro query where curp")
        const pacients = [];
        querySnapshot.docs.forEach((doc) => {
          const { nombre, curp, edad, sexo, tSang, tFarm, iQuiru, iUrgen, iParto, iAnatom, oMedic } = doc.data();
          
          pacients.push({
            id: doc.id,
            nombre,
            curp,
            edad,
            sexo,
            tSang,
            tFarm,
            iQuiru,
            iUrgen,
            iParto,
            iAnatom,
            oMedic
          });
        });
        setpacients(pacients);
        
      });
    setLoading(false);
    }, [nombre]);

    if (loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }

  return (
    <ScrollView>
    <View>
      {pacients.map((user) => {
     
    
        return (
          <View>
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
                props.navigation.navigate("UserDetailScreen", {
                  pacientId: user.id,
                });
            }}
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:
                  "https://www.latercera.com/resizer/tqWFmYb_Bj1DZNZedT2Ae9xHQeQ=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/PYEGWJNRBJCP7AV5IESSJCQV4Q.jpg",
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{user.nombre}</ListItem.Title>
              <ListItem.Subtitle>{user.edad} Años de edad</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          </View>
        );
            
    }
    )}
   
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    paddingLeft: 20,
    fontWeight: "bold"
  },
  fixToText: {
   position:'absolute',
   bottom: 0, 
   alignSelf: "flex-end",
    borderRadius: 100,
    backgroundColor: "#1DB6F7",
    marginHorizontal: "1%",

    textAlign: "center",
    flexDirection: 'row',
  },
  color: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: "red"
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UserListxCurp;
