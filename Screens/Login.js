import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState,useRef} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {AiFillGoogleCircle} from 'react-icons/ai';
import Colors from '../coloe';
import {Input} from 'react-native-elements';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import loginWithEmailPassword from '../Context/AuthContext';
import axios from 'axios';
import {KeyboardAvoidingView} from 'react-native';
import { useAuth } from '../Context/AuthContext';
export default function Login() {
  const navigation = useNavigation();
  const {loginWithEmailPassword,errorMessage,signInGoogle,signInWithFacebook} =useAuth()
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [error,setError]=useState('');
  const [show,setShow]=useState(false);
  const handleLogin= async()=>{
    console.log(inputs.password);
    if(inputs.email=='' || inputs.password=='' || inputs.confirmPassword=='')
    {
        setError("Veuillez remplir les champs");
        setShow(true);
        console.log('Veuillez remplir les champs');
    }else{
      try {
        await loginWithEmailPassword(inputs.email,inputs.password,navigation);
        console.log(errorMessage);
        if (errorMessage != null) {
         setError(errorMessage);
         setShow(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
 const hangleloginGoogle =()=>{
  signInGoogle(navigation)
 }
 const handleLoginFB =()=>
 {
  signInWithFacebook(navigation);
 }
  return (
    
      <ScrollView style={{paddingHorizontal: 25, paddingVertical: 50}}
      keyboardShouldPersistTaps='always'
      keyboardDismissMode="none"
      >
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
            marginLeft: 16,
            marginTop: 32,
          }}>
          <Input
            InputLeftElement={
              <Entypo name="email" size={24} color={Colors.green} />
            }
            onChangeText={value => setInputs({...inputs, email: value})}
            value={inputs.email}
            type="text"
            placeholder="email"
          />
          <Input
           secureTextEntry={true}
           onChangeText={value => setInputs({...inputs, password: value})}
           value ={inputs.password} 
           placeholder="mot de passe" />
{show && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
          <Button
            title="Se connecter"
            style={styles.button}
            color={Colors.dark}
            onPress={handleLogin}></Button>
          <View>
      
    </View>
          <Text style={styles.txt1}> ou se connecter avec </Text>
          <View style={styles.icon}>
          <TouchableOpacity onPress={hangleloginGoogle}>
            <Icon name="google" size={30} color={Colors.pink} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLoginFB}>
            <MaterialIcons name="facebook" size={34} color={Colors.pink} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 20,
                textDecorationLine: 'underline',
              }}>
              vous n’avez pas de compte?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
   
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.dark,
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
  },
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
    marginTop: 30,
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
