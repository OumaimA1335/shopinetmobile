import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import Colors from '../coloe';
import Swiper from 'react-native-swiper';
export default function ProdDetailCard({product}) {
  return (
    <View style={styles.box}>
      <Swiper showsPagination={false}>
          {product.imageList.map((i, index) => {
            const image = JSON.parse(i);
            return (
              <Image
                key={index} // add a unique key prop for each image component
                source={{uri: image.url}}
                style={{
                  width: 100,
                  height: 150,
                  margin: 20,
                  resizeMode: 'cover',
                }}
              />
            );
          })}
        </Swiper>
      <Text style={{fontSize:15, fontWeight:'bold',color:Colors.gray}}> 
        {product.nom}
      </Text>
      <Text style={{marginTop:10, backgroundColor:Colors.green, width:148, height:33,fontSize:15, fontWeight:'bold',color:Colors.orange,justifyContent:'center', textAlign:'center', borderRadius:5}}>
      {product.prix}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    position: 'relative',
    width:150,
    height:250,
    marginTop:10,
    marginStart:10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor:'gray',
    alignItems:'center',
    flexWrap: 'wrap-reverse',
  },
});