import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import ColorList from './ColorList';


export default function PruductDetails() {
  return (
    <View>
      
        <View style={{ width: 420, height: 80, backgroundColor: "beige", flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require("../assets/try1.png")} />
          <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 20 }}> Essayer sur vous  </Text>
          <AntDesign name="right" size={30} style={{ marginLeft: 100 }} />
        </View>
       
        <View style={{ width: 420, height: 80, backgroundColor: "beige", flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 20 }}>
              Couleur :
            
            </Text>
            <ColorList/>
        </View>
      
    </View>
  )
}