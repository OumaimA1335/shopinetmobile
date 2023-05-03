import React from "react";
import { View ,Button, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {useNavigation} from '@react-navigation/native';
export default function BottomTabs() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
     <TouchableOpacity onPress={() => navigation.navigate('Home')}> 
     <FontAwesome5
        name="home"
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",   
        }}
      />
      <Text>Accueil</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() =>{ navigation.navigate('Panier');
    console.log("yghjj")}}>
        <FontAwesome5
        name="cart-plus"
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",   
        }}
      />
      <Text>Panier</Text>
      </TouchableOpacity>
   
      <TouchableOpacity onPress={() =>{ navigation.navigate('Favoris');
   }}>
        <FontAwesome5
        name="heart"
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",   
        }}
      />
      <Text>Favoris</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>{ navigation.navigate('Profile');
    console.log("yghjj")}}>
        <FontAwesome5
        name="user"
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",   
        }}
      />
      <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
          
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);