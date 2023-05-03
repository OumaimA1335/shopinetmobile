import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from '../coloe';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
const DetailOrder = () => {
    const items = [
        {
            image: require("../assets/accessoire.png"),
            text: "Bracelet ",
            numCommande: 302656,
            nbProduit: 1,
            date: "12-03-2023",
            netaPayer: 235,
            etat: "commande livrée",
            prix: 66,
            quantite: 3,
            modePayment: "CASH à la livraison",
        },
    ]
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                    backgroundColor: "white",
                    paddingVertical: 20,
                }}>
                    <AntDesign name="left" size={30} />
                    <Text style={styles.title}>  Détails de la commande</Text>
                </View>
                <View style={{ paddingHorizontal: 12, marginTop: 2, backgroundColor: "white", }}>
                    {items.map((item, index) => {
                        return (<View key={index} style={styles.box}>
                            <Text style={styles.txt}>Commande n° {item.numCommande} </Text>
                            <Text style={styles.txt1} >{item.nbProduit} articles</Text>
                            <Text style={styles.txt1}>Effectuer Le: {item.date} </Text>
                            <Text style={styles.txt1}>Total: {item.netaPayer}TND </Text>
                        </View>)
                    }
                    )}
                </View>
                <View>
                    <Text style={styles.h2}>
                        Articles existe Dans votre commandes
                    </Text>
                </View>
                <View style={styles.box1}>
                    {items.map((item, index) => {
                        return (
                            <View key={index} >
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, }}>
                                    <Text style={styles.etat}>{item.etat}</Text>
                                    <Text style={styles.txt1}>{item.date}</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
                <View style={styles.box1}>
                    {items.map((item, index) => {
                        return (
                            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                <Image
                                    source={item.image}
                                    style={styles.img} />
                                <View>
                                    <Text style={styles.txt}>{item.text} </Text>
                                    <Text >{item.description} </Text>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={styles.txt1}>Quantité:</Text>
                                        <Text style={{ marginLeft: 3 }}>{item.quantite}</Text>
                                    </View>
                                    <Text style={styles.txt1}>Taille: {item.description} </Text>
                                    <Text style={styles.txt1}>Couleur:  </Text>
                                    <Text style={{ fontSize: 15, fontWeight: '600', marginVertical: 10 }}>{item.prix} TND</Text>
                                </View>
                            </View>
                        )
                    }
                    )}
                    <View>
                        <TouchableOpacity style={styles.commandButton} >
                            <Text style={{ fontSize: 20, textTransform: 'uppercase', fontWeight: '700', color: "white" }}>Commander à Nouveau</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View >
                    <Text style={styles.h2}>
                        Paiement
                    </Text>
                </View>
                <View style={styles.box1}>
                    <Text style={styles.txt2}>
                        Mode de paiement
                    </Text>
                    {items.map((item, index) => {
                        return (
                            <View key={index}>
                                <Text style={styles.txt1}>
                                    {item.modePayment}
                                </Text>
                            </View>
                        )
                    })}
                </View>
                <View style={styles.box1}>
                    <Text style={styles.txt2}>
                        Détails du paiement
                    </Text>
                    {items.map((item, index) => {
                        return (
                            <View key={index}>
                                <Text style={styles.txt1}>
                                    Sous-total: {item.modePayment} TND
                                </Text>
                                <Text style={styles.txt1}>
                                    Frais de Livraison:  {item.modePayment} TND
                                </Text>
                                <Text style={styles.txt1}>
                                    Toatal: {item.netaPayer} TND
                                </Text>
                            </View>
                        )
                    })}
                </View>
                <View >
                    <Text style={styles.h2}>
                        Paiement
                    </Text>
                </View>
                <View style={styles.box1}>
                    <Text style={styles.txt2}>
                       Méthode de livraison
                    </Text>
                    {items.map((item, index) => {
                        return (
                            <View key={index} >
                                <Text style={styles.txt1}>
                                    {item.modePayment}
                                </Text>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default DetailOrder 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
    },
    title: {
        textTransform: 'capitalize',
        fontSize: 25,
        fontWeight: 'bold',
        color:Colors.orange
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
        marginTop: 1,
    },
    box1: {
        backgroundColor: 'white',
        paddingHorizontal: 12,
        marginHorizontal: 8,
        borderRadius: 3,
        marginTop: 2,
    },
    etat: {
        backgroundColor: Colors.green,
        fontSize: 15,
        fontWeight: '800',
        borderRadius: 5,
        color: 'white',
        marginTop: 5,
        marginRight: 6,
        textTransform: 'capitalize',
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    txt1: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom:5,
        color: Colors.gray
    },
    h2: {
        textTransform: 'uppercase',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray',
        paddingVertical: 15,
        paddingHorizontal: 12,
    },
    img: {
        width: 100,
        height: 100,
        marginLeft: 10,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: Colors.orange,
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10
    },
    txt2: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 5,
    },
})