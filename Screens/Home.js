import { View, Text, SafeAreaView, SafeAreaViewBase, ScrollView ,TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderCom from '../Components/HeaderCom'
import Search from '../Components/Search'
import Categories from '../Components/Categories'
import Announce from '../Components/Announce'
//import ProductItems from '../components/ProductItems'
import { Divider } from 'react-native-elements'
import ButtomTab from '../Components/ButtomTab'
import { StyleSheet } from 'react-native'
import Colors from '../coloe'
//import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1, marginTop: 0 }}>
        <ScrollView  style={{paddingHorizontal:12}}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderCom />
        <Search />
        <View style={styles.box1}>
      
        <TouchableOpacity onPress={() => navigation.navigate('Liste')}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>
          Les plus consultés
        </Text>
        </TouchableOpacity>
        </View>
       

      </View>
      <Categories />
      <View>
        <Announce  />
      </View>
        
      </ScrollView>
      <Divider width={1} />
      <ButtomTab />
    </SafeAreaView>



  )
}
const styles = StyleSheet.create({
  box1: {
    marginTop: 10, 
    backgroundColor: Colors.pink,
     width: 350, 
     height: 60, 
     fontSize: 15, fontWeight: 'bold', 
     
     justifyContent: 'center',
     alignItems: 'center', 
     borderRadius: 30
  }
})