import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, TextInput, Button, Alert } from 'react-native';
import Colors from '../coloe';
import { Text } from 'react-native';
const ReclamationScreen = () => {
  const [feedback, setFeedback] = useState('');
  const handleSubmit = () => {
    // Handle submission of feedback
    if (feedback.trim() !== '') {
      // Send feedback to server or display confirmation message
      Alert.alert('Thank you for your feedback!');
    } else {
      // Display error message if feedback is empty
      Alert.alert('Please enter your feedback.');
    }
  };
  const handleChange=(event)=>{
  console.log(feedback);
  const inputName = event.nativeEvent.target; // récupère le nom ou l'identifiant de l'input
  const inputValue = event.nativeEvent.text; // récupère la nouvelle valeur de l'input
  console.log(inputName,inputValue);
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <TextInput
        accessibilityLabel='feedback'
        multiline
        placeholder="Enter your feedback here..."
        value={feedback}
        onChangeText={setFeedback}
        onChange={handleChange}
        style={styles.text}
      />
      <Text>
      </Text>
      <Button title="Envoyer" onPress={handleSubmit} color={Colors.orange}  />
      <Text style={styles.txt}>
        Vous pouvez nous contacter par Téléphone : 52669562
      </Text>
      </View>
    </View>
  );
};
export default ReclamationScreen;
const styles= StyleSheet.create({
container:{
  flex:1,
  paddingHorizontal:10,
  paddingVertical:180,
},
text:{
    fontSize:20,
    marginTop:50
},
txt:{
  marginTop:20,
  marginBottom:10,
  fontSize:14,
  fontWeight:'bold',
  color:Colors.gray
},
box:{
backgroundColor:"white",
paddingHorizontal:20,
paddingVertical:50,
borderRadius:10,
},
})