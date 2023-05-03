import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Colors from '../coloe';
const Order = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const handleOrder = () => {
    // Handle submission of order
    if (name.trim() === '' || address.trim() === '' || email.trim() === '' || phone.trim() === '') {
      // Display error message if any fields are empty
      Alert.alert('S"il vous plait remplissez le fourmulaire !!.');
    } else {
      // Send order to server or display confirmation message
      Alert.alert('Merci d"avoir remplir ce formulaire ');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Votre </Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Button title="Valider" onPress={handleOrder} color={Colors.orange}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});
export default Order;