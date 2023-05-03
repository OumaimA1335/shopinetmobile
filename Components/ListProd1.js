import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
import {ScrollView} from 'react-native';
import ColorList from './ColorList';
import Colors from '../coloe';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ButtomTab from './ButtomTab';
import {Divider} from 'react-native-elements';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';

export default function ListProd1({root}) {
  const navigation = useNavigation();
  console.log(root);
  let count = 0;
  const {width} = Dimensions.get('window');
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={true} >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap', // ajouter flexWrap pour permettre aux éléments de se déplacer à la ligne
            width: width - 50, // ajuster la largeur de la vue
            marginLeft: 5,
          }}>
          {root.map((item, index) => {
            console.log(index)
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Details',{myVariable:item.id})}>
                <View
                  key={index}
                  style={styles.box}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{
                        width: 50,
                        height: 40,
                        marginTop: 3,
                        marginLeft: 5,
                      }}
                      source={require('../assets/try2.png')}
                    />

                    <View style={{start: 80, marginTop: 2}}>
                      <FontAwesome5 name="cart-plus" size={15} />
                      <FontAwesome5
                        name="heart"
                        size={16}
                        style={{marginTop: 5}}
                      />
                    </View>
                  </View>
                
                   
                  <Swiper showsPagination={false}>
                  {item.imageList.map((i, index) => {
                    const image = JSON.parse(i);
                    console.log(image.url);
                     return ( <Image
                          key={index} // add a unique key prop for each image component
                          source={{uri:image.url}}
                          style={{
                          width: 130,
                          height: 140,
                          paddingVertical :5,
                          resizeMode: 'center',
                          marginTop:5,
                          marginLeft: 15, // add some margin between the images
                        }}
                      />)
                       } )}
        
                 </Swiper>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 0,
                      paddingVertical :10,
                      paddingHorizontal: 15,
                    }}>
                    <Text style={{fontSize: 13, fontWeight: '900'}}>
                      {item.nom}
                    </Text>
                  </View>
                  <Text
                    style={{
                      marginTop: 10,
                      backgroundColor: Colors.gray1,
                      width: 158,
                      height: 35,
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: Colors.orange,
                      justifyContent: 'center',
                      textAlign: 'center',
                      borderRadius: 10,
                    }}>
                    {item.prix} DT
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    position: 'relative',
    width: 160,
    height: 270,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    marginRight: 5,
    flexWrap: 'wrap-reverse',
  },
});
