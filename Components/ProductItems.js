import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ProductItems() {
  const [showHeart, setShowHeart] = useState(null);

  const data = [
    {
      id: '1',
      title: 'pink hoodies',
      price: '50$',
     
      rating: 4.5,
      image: require('../assets/hoodies.png'),
    },
    {
      id: '2',
      title: 'green hoodies',
      price: '60$', 
      rating: 4.5,
      image: require('../assets/hoodie1.png'),
    },
  ];

  const handlePressIn = (id) => {
    setShowHeart(id);
  };

  const handlePressOut = () => {
    setShowHeart(null);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View style={{  marginVertical: 20 , marginLeft:10 , backgroundColor:'white'}}>
          <ProdImage item={item} handlePressIn={handlePressIn} handlePressOut={handlePressOut} showHeart={showHeart} />
          <ProdInfo item={item} />
        </View>
      </TouchableOpacity>
    );
  };

  return <FlatList data={data} horizontal={true} renderItem={renderItem} keyExtractor={(item) => item.id} />;
}

const ProdImage = ({ item, handlePressIn, handlePressOut, showHeart }) => (
  <View style={{ flexDirection: 'column', marginHorizontal: 20 }}>
    <Image
      source={item.image}
      style={{ width: '90%', height: 140 }}
      onPressIn={() => handlePressIn(item.id)}
      onPressOut={handlePressOut}
    />
    {showHeart === item.id && (
      <TouchableOpacity style={{ position: 'absolute' }}>
        <MaterialCommunityIcons name='heart-outline' size={25} color='black' />
      </TouchableOpacity>
    )}
  </View>
);

const ProdInfo = ({ item }) => (
  <View style={{ flexDirection: 'column', marginHorizontal: 20 }}>
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.title}</Text>
      <Text style={{ color: 'gray' }}>{item.price}       
        <MaterialCommunityIcons name='heart-outline' size={20} color='dark' />
</Text>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
      <MaterialCommunityIcons name='star' size={20} color='orange' />
      <Text style={{ marginLeft: 5 }}>{item.rating}</Text>
     
    </View>
  </View>
);