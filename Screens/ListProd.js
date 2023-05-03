import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native';
import Colors from '../coloe';
import {Image} from 'react-native';
import ListProd1 from '../Components/ListProd1';
import ButtomTab from '../Components/ButtomTab';
import {Divider} from 'react-native-elements';
import axios from 'axios';
import {useState} from 'react';
export default function ListProd({route}) {
  const {myVariable} = route.params;
  const {searchText} = route.params;
  console.log(myVariable);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchHandler = async () => {
      return await axios
        .get(
          `https://bc29-41-229-126-120.ngrok-free.app/Product/getProductByCategory/${myVariable}`,
        )
        .then(res => res.data);
    };
    fetchHandler().then(data => {
      setProducts(data.products);
      console.log(data);
    });
  }, [myVariable]);
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{paddingHorizontal: 30}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name="left" size={30} />
          <Text style={styles.txt}> Nos {myVariable} </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: Colors.green,
            borderRadius: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginLeft: 25,
            }}>
            <Image source={require('../assets/filter.png')} />

            <Text style={{fontSize: 18}}>Filtrer</Text>
          </View>
          <Text style={{color: Colors.green, height: 30}}>|</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 25,
            }}>
            <Image source={require('../assets/tri.png')} />

            <Text style={{fontSize: 18, marginLeft: 5}}>Trier</Text>
          </View>
        </View>
        <View style={{paddingVertical: 15, marginRight: -5}}>
          <ListProd1 root={products}/>
        </View>
      </ScrollView>
      <Divider width={1} />
      <ButtomTab />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 1,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  box: {
    borderRadius: 60,
    marginTop: 20,
    backgroundColor: Colors.white,
  },
  img: {
    width: 100,
    height: 100,
    marginLeft: 10,
  },
  txt: {
    fontSize: 15,
    fontWeight: '800',
  },
  txt1: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
  },
});
