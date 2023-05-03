import {View, Text, Button, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../coloe';
import {Input} from 'react-native-elements';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../Context/AuthContext';
export default function Register() {
  const navigation = useNavigation();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error,setError]=useState(null);
  const [show,setShow]=useState(false);
  const {SignUpWithEmailPassword, errorMessage} = useAuth();
  const handleRegister = async () => {
    setError(null);
    if(inputs.email=='' || inputs.password=='' || inputs.confirmPassword=='')
    {
        setError("Veuillez remplir les champs");
        setShow(true);
        console.log("Veuillez remplir les champs");
    }else{
    if (inputs.password === inputs.confirmPassword) {
        await SignUpWithEmailPassword(inputs.email, inputs.password ,navigation);
        console.log(errorMessage);
        if (errorMessage != null) {
         setError(errorMessage);
         setShow(true);
        }
        else{
          setShow(false);
        }
    } else {
      setError("votre mot de passe n'est pas le meme");
      setShow(true);
      console.log('Not same');
    }
  }};
  
  return (
    <ScrollView style={{paddingHorizontal: 25, paddingVertical: 50}}>
      <View
        style={{
          width: 100,
          position: 'relative',
          top: 50,
          px: 10,
          flex: 1,
          paddingLeft: 16,
          paddingBottom: 40,
          justifyContent: 'center',
          left: 50,
        }}>
        <Image
          flex={1}
          alt="logo"
          w={'300'}
          source={require('../assets/logoshopinet1.png')}
        />
      </View>
      <View
        style={{
          w: '2/3',
          position: 'relative',
          flex: 1,
          justifyContent: 'center',
          marginTop: 32,
        }}>
        <Input
          InputLeftElement={
            <Entypo name="mail" size={24} color={Colors.green} />
          }
          type="text"
          placeholder="email"
          value={inputs.email}
          onChangeText={value => setInputs({...inputs, email: value})}
        
        />

        <Input
          InputLeftElement={
            <Entypo name="key" size={24} color={Colors.green} />
          }
          name="confirmPassword"
          type="password"
          placeholder="mot de passe"
          value={inputs.password}
          secureTextEntry={true}
          onChangeText={value => setInputs({...inputs, password: value})}
         
        />
        <Input
          name="password"
          InputLeftElement={
            <Entypo name="key2" size={24} color={Colors.green} />
          }
          secureTextEntry={true}
          placeholder="Confirmez votre mot de passe"
          value={inputs.confirmPassword}
          onChangeText={value => setInputs({...inputs, confirmPassword: value})}
        />
    
    <View>
      {show && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </View>
      
        <Button
          title="Se connecter"
          style={{borderRadius: 20, fontWeight: 'bold'}}
          color={Colors.dark}
          onPress={handleRegister}></Button>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputText: {
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 15,
  },
  txt1: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 15,
    fontWeight: 'bold',
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  errorContainer: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  errorText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
