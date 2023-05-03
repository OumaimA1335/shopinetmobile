import React, { useState } from 'react';
import { Image } from 'react-native';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from '../coloe';
import Order from '../Components/Order';
import { useEffect } from 'react';
import { useRef } from 'react';
const Panier = () => {
    const [items, setItems] = useState([
        { id: '1', image: require("../assets/accessoire.png"), name: 'accessoire', price: 10, quantity: 1 },
        { id: '2', image: require("../assets/hoodies.png"), name: 'capuche', price: 20, quantity: 1 },
        { id: '3', image: require("../assets/accessoire.png"), name: 'accessoire', price: 30, quantity: 1 },
    ]);
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image
                source={item.image}
                style={styles.img} />
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.itemPrice}>{item.price * item.quantity} TND</Text>
        </View>
    );
    const updateQuantity = (id, quantity) => {
        if (quantity >= 0) {
            const newItems = [...items];
            const index = newItems.findIndex((item) => item.id === id);
            newItems[index].quantity = quantity;
            setItems(newItems);
        }
    };
    //remplissage details clients
    const renderInner = () => (
        <>
            <Order />
        </>
    );
    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    );
    const [modalVisible, setModalVisible] = useState(false);
    ///*************
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalContainer}>
                    {renderHeader()}
                    {renderInner()}
                </View>
            </Modal>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name="left" size={30} />
                <Text style={styles.title}>  Panier</Text>
            </View>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.flat}
            />
            <View style={styles.total}>
                <Text style={styles.totalLabel}>Total:</Text>
                <Text style={styles.totalPrice}>{totalPrice} TND</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.commandButton}  onPress={() => setModalVisible(true)}>
                    <Text style={{ fontSize: 20, textTransform: 'capitalize', fontWeight: '700',color:"white" }}>passer commande</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 8,
        paddingTop: 50,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: Colors.orange,
        alignItems: 'center',
        marginTop: 30,
        marginBottom:10
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'space-between',
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginRight: 10,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 2,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    quantityContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        marginRight:10
    },
    quantityButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'orange',
    },
    quantity: {
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.orange,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopWidth: 0,
        borderTopColor: Colors.grey,
        borderRadius:5
    },
    totalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.red,
    },
    flat: {
        paddingHorizontal: 7,
        paddingVertical: 12,
        marginTop: 15,
    },
    checkoutButton: {
        backgroundColor: Colors.red,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    header: {
        backgroundColor: Colors.grey,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 10,
        alignItems: 'center',
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: Colors.grey,
        marginBottom: 10,
    },
});
export default Panier;