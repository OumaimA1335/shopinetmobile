import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ColorList from '../Components/ColorList';
import ButtomShop from '../Components/ButtomShop';
import {Divider} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
//import SizeList from '../components/SizeList';
import axios from 'axios';
import ProdDetailCard from '../Components/ProdDetailCard';
export default function Details({route}) {
  const {myVariable} = route.params;
  console.log(myVariable);
  const navigation = useNavigation();
  const [product, setProduct] = useState({
    nom: '',
    marque_id: 0,
    souscategorie_id: 0,
    description: '',
    quantite: 0,
    prix: 0,
    codeBar: '',
    imageList: [],
    Tailles: [''],
    sexe: '',
    couleurs:[''],
  });
  const [marque, setMarque] = useState('');
  const [avis, setAvis] = useState('');
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchHandler = async () => {
      return await axios
        .get(
          `https://bc29-41-229-126-120.ngrok-free.app/Product/GetProductId/${myVariable}`,
        )
        .then(res => res.data);
    };
    const fetchHandlerColorsProduct = async () => {
      return await axios
        .get(
          `https://bc29-41-229-126-120.ngrok-free.app/Product/getColorsProductMobile/${myVariable}`,
        )
        .then(res => res.data);
    };
    const fetchHandlerAvis = async () => {
      return await axios
        .get(
          `https://bc29-41-229-126-120.ngrok-free.app/Avis/getAvisByIdProd/${myVariable}`,
        )
        .then(res => res.data);
    };
    fetchHandlerAvis().then(data => {
      setAvis(data.avis);
      console.log(data);
    });
    fetchHandler().then(data => {
      setProduct(data.product);
      console.log(data);
    });
    fetchHandlerColorsProduct().then(data => {
      setProduct(prev => ({
        ...prev,
        couleurs: data.couleurs,
      }));
      console.log(product.couleurs);
      console.log(data);
    });
  }, [myVariable]);
  useEffect(() => {
    const fetchHandler = async () => {
      if (product.marque_id != 0) {
        return await axios
          .get(
            `https://bc29-41-229-126-120.ngrok-free.app/Marque/getByIdMarque/${product.marque_id}`,
          )
          .then(res => res.data);
      }
    };
    const fetchHandlerProductByCategory = async () => {
        if (product.marque_id != 0) {
          return await axios
            .get(
              `https://bc29-41-229-126-120.ngrok-free.app/Product/getProductBySousCategory/${product.souscategorie_id}`,
            )
            .then(res => res.data);
        }
      };
      fetchHandlerProductByCategory().then(data => {
        setProducts(data.products);
        console.log(data);
      });
    fetchHandler().then(data => {
      setMarque(data.marque);
      console.log(data);
    });
  }, [product]);
  const renderItem = ({item}) => (
    <View style={{flexDirection: 'row', marginHorizontal: 12}}>
      <ProdDetailCard product={item} />
    </View>
  );
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 12}}>
      <ScrollView>
        <Swiper showsPagination={false} style={{height: 430}}>
          {product.imageList.map((i, index) => {
            const image = JSON.parse(i);
            return (
              <Image
                key={index} // add a unique key prop for each image component
                source={{uri: image.url}}
                style={{
                  width: 340,
                  height: 400,
                  marginTop: 20,
                  resizeMode: 'cover',
                }}
              />
            );
          })}
        </Swiper>

        <View
          style={{
            width: 420,
            height: 80,
            backgroundColor: 'beige',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={require('../assets/try1.png')} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('VirtualTry');
            }}>
            <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 20}}>
              {' '}
              Essayer sur vous{' '}
            </Text>
          </TouchableOpacity>
          <AntDesign name="right" size={30} style={{marginLeft: 100}} />
        </View>
        <View style={{marginLeft: 15, marginRight: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            {/*Marque*/} {marque.nom}
          </Text>
          <Text
            style={{
              fontWeight: '300',
              fontSize: 20,
              color: 'gray',
              textTransform: 'capitalize',
            }}>
            {/*nom article*/} {product.nom}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {avis && avis.nbEtoile ? (
              <Text
                style={{
                  fontWeight: '300',
                  fontSize: 20,
                  marginTop: 20,
                  alignItems: 'center',
                }}>
                {avis.nbEtoile} <Entypo name="star" size={20} />
              </Text>
            ) : null}
            <Text
              style={{
                fontWeight: '300',
                fontSize: 20,
                marginTop: 20,
                alignItems: 'center',
              }}>
              {/* nombre de favoris  favoris*/}{' '}
              <Entypo name="heart" size={20} /> 235 favoris
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 420,
            height: 80,
            backgroundColor: 'beige',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 20}}>
            Couleur :
          </Text>
          <View>
            <ColorList couleurs={product.couleurs} />
          </View>
        </View>

        <View
          style={{
            width: 420,
            height: 80,
            backgroundColor: 'beige',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 20}}>
            Tailles :
          </Text>
          {product.Tailles.map((item, index) => (
            <Text
              key={index}
              style={{marginLeft: 5, fontWeight: 'bold', fontSize: 20}}>
              {item}
            </Text>
          ))}
        </View>
        <View
          style={{
            width: 380,
            height: 190,
            backgroundColor: 'beige',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              padding: 15,
              fontWeight: 'normal',
              fontSize: 12, // Change the font size to 16 (or any other desired value)
              lineHeight: 22,
            }}>
            <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 20}}>
              {' '}
              Description : {'\n'}
            </Text>
            {product.description}
          </Text>
        </View>
        {avis && avis.nbEtoile ? (
        <View
          style={{
            width: 380,
            height: 190,
            backgroundColor: 'beige',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
            
          <Text
            style={{
              padding: 15,
              fontWeight: 'normal',
              fontSize: 12, // Change the font size to 16 (or any other desired value)
              lineHeight: 22,
            }}>
            <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 20}}>
              {' '}
              Avis : {'\n'}
            </Text>
            {avis.description}
          </Text>
        </View>
        ) : null}
        <Text style={{marginTop: 25, fontWeight: 'bold', fontSize: 20}}>
          Article qui semble à ca :
        </Text>
        <View style={{flexDirection: 'row', marginHorizontal: 12}}>
        <Swiper showsPagination={true} style={{height: 320,justifyContent:'flex-start'}}>
            {products && products.map((item,index)=>{
                return (
                    
                <ProdDetailCard product={item} />
              
                )
            }) }
         
          </Swiper>
        </View>
      </ScrollView>

      <Divider width={1} />
      <ButtomShop prix={product.prix}/>
    </SafeAreaView>
  );
}
