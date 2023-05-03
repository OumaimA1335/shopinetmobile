import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { Image } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ListeCommande from '../Components/ListeCommande';
import Colors from '../coloe';
const HistoryOrder = () => {
    const handleEtatNonValide=()=>{
        return(
            <></>
        )
    }
    const handleEtatValide=()=>{
        return(
            <>
            </>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                backgroundColor: "white",
                paddingVertical: 20,
            }}>
                <AntDesign name="left" size={30} />
                <Text style={styles.title}>  Liste commande</Text>
            </View>
            <View style={styles.view} >
                
                <TouchableOpacity  onPress={handleEtatNonValide}>
             
                        <Text style={{marginLeft:5, fontWeight:'bold',fontSize:20,color:Colors.orange1}}>
                            Commandes en cours
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleEtatValide}>
                        <Text style={{marginRight:8,fontWeight:'bold',fontSize:20,color:Colors.orange1}}>
                            Commande Livrer
                        </Text>
                    
                </TouchableOpacity>
           
            </View>
            <ListeCommande/>
        </SafeAreaView>
    );
}
export default HistoryOrder ;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
    },
    title: {
        textTransform: 'capitalize',
        fontSize: 25,
        fontWeight: 'bold',
        
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: "white",
        paddingVertical: 20,
        justifyContent: 'space-between'
    },
    box: {
        
        borderRadius: 20,
   
        shadowOpacity: 10,
        marginTop: 1
    },
    img: {
        width: 100,
        height: 100,
        marginLeft: 10,
    },
    txt: {
        fontSize: 15,
        fontWeight: '800'
    },
    txt1: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 10,
    },
})
