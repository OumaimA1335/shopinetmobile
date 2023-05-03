import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default function Announce() {
  const navigation = useNavigation();
  return (
    <View style={{marginTop: 20}}>
      <ScrollView>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Liste', {myVariable: 'Promotion'})
          }>
          <Image
            source={require('../assets/1.png')}
            style={{width: '100%', height: 180, borderRadius: 20}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Liste', {myVariable: 'Promotion'})
          }>
          <Image
            source={require('../assets/flay.png')}
            style={{width: '100%', height: 180, borderRadius: 20}}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
