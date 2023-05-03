import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '../coloe'
import { ScrollView } from 'react-native'
import { Card } from 'react-native-paper'
import { Image } from 'react-native'
import {useNavigation} from '@react-navigation/native';
const ListeCommande = () => {
    const navigation = useNavigation();
    const items = [
        {
            image: require("../assets/accessoire.png"),
            text: "Bracelet ",
            description: "fashing game",
            etat:"Commande livreé",
            date:"12-03-2023",
        },
        {
            image: require("../assets/accessoire.png"),
            text: "Bracelet ",
            description: "fashing game",
            etat:"Commande livreé",
            date:"12-03-2023",
        },
     
    ]
  return (
    <View>
       <ScrollView style={{marginBottom:50}} >
                   {items.map((item,index) => {
                    return (
             <TouchableOpacity onPress={() =>{ navigation.navigate('DetailOrder')}}>
                    <Card key={index} style={styles.box}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image
                                source={item.image}
                                style={styles.img} />
                            <View style={{justifyContent:'space-around', marginLeft:20}}>
                                <Text style={styles.txt}>{item.text} </Text>
                                <Text style={{fontWeight:'bold' , color:Colors.gray, marginTop:5,}}>{item.description} </Text>
                                
                                    <Text style={styles.etat}>{item.etat} </Text>
                                    <Text style={styles.txt1}>Le {item.date} </Text>
                               
                                
                            </View>
                        </View>
                    </Card>
                    </TouchableOpacity>
                    )
                }
                )}
            </ScrollView>
    </View>
  )
}
export default ListeCommande
const styles = StyleSheet.create({
    etat:{
        backgroundColor:Colors.dark1,
        fontSize:15,
        fontWeight:'800',
        borderRadius:5,
        color:'white',
        marginTop:5,
    },
    box: {
        borderRadius: 20,
      
        shadowOpacity: 10,
        marginTop: 20,
        backgroundColor:'white' ,
        marginBottom:4,
    },
    img: {
        width: 100,
        height: 100,
        marginLeft: 10,
    },
    txt: {
        fontSize: 20,
        fontWeight: '800',
        marginTop:5,
    },
    txt1: {
        fontSize: 15,
        fontWeight: '700',
        marginTop:5,
        marginBottom:5,
        
    },
})