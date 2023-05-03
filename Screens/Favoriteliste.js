import { Button, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
import { Card } from 'react-native-paper';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Divider } from 'react-native-elements';
import ButtomTab from '../Components/ButtomTab'
import Colors from '../coloe';

const Favoritelist = () => {
    const items = [
        {
            image: require("../assets/accessoire.png"),
            text: "Bracelet ",
            description: "fashing game",
            rating: 3.25,
            prix: 55,
        },
        {
            image: require("../assets/white.png"),
            text: "Green leen",
            description: "let's ....",
            prix: 70,
            rating: 3.25,
        },
        {
            image: require("../assets/image7.png"),
            text: "hoodies",
            description: "fashing game",
            prix: 80,
            rating: 3.25,
        },
        {
            image: require("../assets/brac2.png"),
            text: "Iconic bracelet ",
            description: "Make your day",
            prix: 65,
            rating: 3.25,
        },

    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name="left" size={30} />
                <Text style={styles.title}>  favoris</Text>

            </View>
            <ScrollView style={{ paddingHorizontal: 12, paddingVertical: 30, }}>
                {items.map((item, index) => {
                    return (<Card style={styles.box}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image
                                source={item.image}
                                style={styles.img} />
                            <View>
                                <Text style={styles.txt}>{item.text} </Text>
                                <Text >{item.description} </Text>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={styles.txt1}>{item.prix} TND</Text>
                                    <FontAwesome5 name="cart-plus" size={30} style={{ marginStart: 100 , color : Colors.orange}} />
                                </View>
                                
                            </View>

                        </View>

                    </Card>)
                }
                )}



            </ScrollView>
            <Divider style={{marginTop:10}} />
            <ButtomTab/>
        </SafeAreaView>
    )
}

export default Favoritelist

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        paddingTop: 40,
        paddingBottom:10,
        backgroundColor :Colors.white
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    box: {
        borderRadius: 60,
        marginTop: 20,
        backgroundColor : Colors.white
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