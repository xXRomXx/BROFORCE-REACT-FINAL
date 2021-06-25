import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Picker,
  Text
} from "react-native";

import firebase from "../database/firebase";

const AddUserScreen = (props) => {
  const initalState = {
    nombre: '',
    curp: '',
    edad: '',
    sexo: '',
    tSang: '',
    tFarm: '',
    iQuiru: '',
    iUrgen: '',
    iParto: '',
    iAnatom: '',
    oMedic: '',
  };

  const [state, setState] = useState(initalState);

  const setValues = (value, nombre) => {
    setState({ ...state, [nombre]: value });
  };

  const createNewPacient = async () => {
    if (state.nombre === "") {
      alert("¡Nombre no proporcionado!");
    } else {
      try {
        await firebase.db.collection("pacients").add({
          nombre: state.nombre,
          curp: state.curp,
          edad: state.edad,
          sexo: state.sexo,
          tSang: state.tSang,
          tFarm: state.tFarm,
          iQuiru: state.iQuiru,
          iUrgen: state.iUrgen,
          iParto: state.iParto,
          iAnatom: state.iAnatom,
          oMedic: state.oMedic,
        });

        props.navigation.navigate("UsersList");
      } catch (error) {
        console.log(error)
      }
    } 
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Nombre del Paciente" placeholderTextColor="black"
          onChangeText={(value) => setValues(value, "nombre")}
          value={state.nombre}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Curp del Paciente" placeholderTextColor="black"
          onChangeText={(value) => setValues(value, "curp")}
          value={state.curp}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.textStyle}>Edad</Text>
        <Picker
        selectedValue = {state.edad}
        style={styles.Picker}
        itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17}}
        onValueChange={(itemValue, itemIndex) => setValues(itemValue, "edad")}>

          <Picker.Item label="1 año" value="1"/>
          <Picker.Item label="2 años" value="2"/>
          <Picker.Item label="3 años" value="3"/>
          <Picker.Item label="4 años" value="4"/>
          <Picker.Item label="5 años" value="5"/>
          <Picker.Item label="6 años" value="6"/>
          <Picker.Item label="7 años" value="7"/>
          <Picker.Item label="8 años" value="8"/>
          <Picker.Item label="9 años" value="9"/>
          <Picker.Item label="10 años" value="10"/>
          <Picker.Item label="11 años" value="11"/>
          <Picker.Item label="12 años" value="12"/>
          <Picker.Item label="13 años" value="13"/>
          <Picker.Item label="14 años" value="14"/>
          <Picker.Item label="15 años" value="15"/>
          <Picker.Item label="16 años" value="16"/>
          <Picker.Item label="17 años" value="17"/>
          <Picker.Item label="18 años" value="18"/>
          <Picker.Item label="19 años" value="19"/>
          <Picker.Item label="20 años" value="20"/>
          <Picker.Item label="21 años" value="21"/>
          <Picker.Item label="22 años" value="22"/>
          <Picker.Item label="23 años" value="23"/>
          <Picker.Item label="24 años" value="24"/>
          <Picker.Item label="25 años" value="25"/>
          <Picker.Item label="26 años" value="26"/>
          <Picker.Item label="27 años" value="27"/>
          <Picker.Item label="28 años" value="28"/>
          <Picker.Item label="29 años" value="29"/>
          <Picker.Item label="30 años" value="30"/>
          <Picker.Item label="31 años" value="31"/>
          <Picker.Item label="32 años" value="32"/>
          <Picker.Item label="33 años" value="33"/>
          <Picker.Item label="34 años" value="34"/>
          <Picker.Item label="35 años" value="35"/>
          <Picker.Item label="36 años" value="36"/>
          <Picker.Item label="37 años" value="37"/>
          <Picker.Item label="38 años" value="38"/>
          <Picker.Item label="39 años" value="39"/>
          <Picker.Item label="40 años" value="40"/>
          <Picker.Item label="41 años" value="41"/>
          <Picker.Item label="42 años" value="42"/>
          <Picker.Item label="43 años" value="43"/>
          <Picker.Item label="44 años" value="44"/>
          <Picker.Item label="45 años" value="45"/>
          <Picker.Item label="46 años" value="46"/>
          <Picker.Item label="47 años" value="47"/>
          <Picker.Item label="48 años" value="48"/>
          <Picker.Item label="49 años" value="49"/>
          <Picker.Item label="50 años" value="50"/>
          <Picker.Item label="51 años" value="51"/>
          <Picker.Item label="52 años" value="52"/>
          <Picker.Item label="53 años" value="53"/>
          <Picker.Item label="54 años" value="54"/>
          <Picker.Item label="55 años" value="55"/>
          <Picker.Item label="56 años" value="56"/>
          <Picker.Item label="57 años" value="57"/>
          <Picker.Item label="58 años" value="58"/>
          <Picker.Item label="59 años" value="59"/>
          <Picker.Item label="60 años" value="60"/>
          <Picker.Item label="61 años" value="61"/>
          <Picker.Item label="62 años" value="62"/>
          <Picker.Item label="63 años" value="63"/>
          <Picker.Item label="64 años" value="64"/>
          <Picker.Item label="65 años" value="65"/>
          <Picker.Item label="66 años" value="66"/>
          <Picker.Item label="67 años" value="67"/>
          <Picker.Item label="68 años" value="68"/>
          <Picker.Item label="69 años" value="69"/>
          <Picker.Item label="70 años" value="70"/>
          <Picker.Item label="71 años" value="71"/>
          <Picker.Item label="72 años" value="72"/>
          <Picker.Item label="73 años" value="73"/>
          <Picker.Item label="74 años" value="74"/>
          <Picker.Item label="75 años" value="75"/>
          <Picker.Item label="76 años" value="76"/>
          <Picker.Item label="77 años" value="77"/>
          <Picker.Item label="78 años" value="78"/>
          <Picker.Item label="79 años" value="79"/>
          <Picker.Item label="80 años" value="80"/>
          <Picker.Item label="81 años" value="81"/>
          <Picker.Item label="82 años" value="82"/>
          <Picker.Item label="83 años" value="83"/>
          <Picker.Item label="84 años" value="84"/>
          <Picker.Item label="85 años" value="85"/>
          <Picker.Item label="86 años" value="86"/>
          <Picker.Item label="87 años" value="87"/>
          <Picker.Item label="88 años" value="88"/>
          <Picker.Item label="89 años" value="89"/>
          <Picker.Item label="90 años" value="90"/>
          <Picker.Item label="91 años" value="91"/>
          <Picker.Item label="92 años" value="92"/>
          <Picker.Item label="93 años" value="93"/>
          <Picker.Item label="94 años" value="94"/>
          <Picker.Item label="95 años" value="95"/>
          <Picker.Item label="96 años" value="96"/>
          <Picker.Item label="97 años" value="97"/>
          <Picker.Item label="98 años" value="98"/>
          <Picker.Item label="99 años" value="99"/>
          <Picker.Item label="100 años" value="100"/>
          <Picker.Item label="101 años" value="101"/>
          <Picker.Item label="102 años" value="102"/>
          <Picker.Item label="103 años" value="103"/>
          <Picker.Item label="104 años" value="104"/>
          <Picker.Item label="105 años" value="105"/>
          <Picker.Item label="106 años" value="106"/>
          <Picker.Item label="107 años" value="107"/>
          <Picker.Item label="108 años" value="108"/>
          <Picker.Item label="109 años" value="109"/>
          <Picker.Item label="110 años" value="110"/>
        </Picker>
      </View>
       <View style={styles.inputGroup}>
        <Text>Sexo</Text>
         <Picker
          selectedValue = {state.sexo}
          style={styles.Picker}
          onValueChange={(itemValue, itemIndex) => setValues(itemValue, "sexo")}
         >

           <Picker.Item label="Masculino" value="Masculino"></Picker.Item>
           <Picker.Item label="Femenino" value="Femenino"></Picker.Item>
         </Picker>
       </View>
      <View style={styles.inputGroup}>
        <Text>Tipo Sanguíneo</Text>
        <Picker
        selectedValue = {state.tSang}
        style={styles.Picker}
        onValueChange={(itemValue, itemIndex) => setValues(itemValue, "tSang")}
        >
          <Picker.Item label="O negativo" value="O negativo" />
          <Picker.Item label="O positivo" value="O positivo" />
          <Picker.Item label="A negativo" value="A negativo" />
          <Picker.Item label="A positivo" value="A positivo" />
          <Picker.Item label="B negativo" value="B negativo" />
          <Picker.Item label="B positivo" value="B positivo" />
          <Picker.Item label="AB negativo" value="AB negativo" />
          <Picker.Item label="AB positivo" value="AB positivo" />
        </Picker>
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Tratamiento Farmacologico" placeholderTextColor="black"
           onChangeText={(value) => setValues(value, "tFarm")}
           value={state.tFarm}
         />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Información Quirúrgica" placeholderTextColor="black"
          onChangeText={(value) => setValues(value, "iQuiru")}
          value={state.iQuiru}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Información de Urgencia" placeholderTextColor="black"
           onChangeText={(value) => setValues(value, "iUrgen")}
           value={state.iUrgen}
         />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Información de Parto" placeholderTextColor="black"
          onChangeText={(value) => setValues(value, "iParto")}
          value={state.iParto}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Información de Anatomía Patológica" placeholderTextColor="black"
           onChangeText={(value) => setValues(value, "iAnatom")}
           value={state.iAnatom}
         />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Órdenes Médicas" placeholderTextColor="black"
          onChangeText={(value) => setValues(value, "oMedic")}
          value={state.oMedic}
        />
      </View>
      <View style={styles.inputGroup}>
        <Button title="Agregar Usuario" onPress={() => createNewPacient()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
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
  picker: {
    height: 30,
    width: 30
  },
  textStyle: {
    opacity: 20
  }
});

export default AddUserScreen;
