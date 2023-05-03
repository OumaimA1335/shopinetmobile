import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
const Profile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <MaterialCommunityIcons
                name="account-edit"
                size={25}
                style={{textAlign:'right',marginRight:12}}
                onPress={() => navigation.navigate('Edit')}
              />
      </View>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://www.shareicon.net/data/512x512/2017/02/15/878685_user_512x512.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>Maram Yahyaoui</Title>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>avenue jdeida mahrebia, Nabeul</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+216 53698147</Text>
        </View>
        <View style={styles.row}>
          <Icon name="envelope" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>yahyaouimaram@gmail.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          
          <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Commandes</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => navigation.navigate('Favoris')}>
          <View style={styles.menuItem}>
            <Icon name="heart" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Vos Favoris</Text>
          </View>
        </TouchableRipple>
      
       
        <TouchableRipple onPress={() => {navigation.navigate('HistoryOrder')}}>
          <View style={styles.menuItem}>
            <Icon name="list-ul" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Commandes historiques</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate('Reclamation')}>
          <View style={styles.menuItem}>
            <Icon name="exclamation-circle" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Réclamation</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate('Reclamation')}>
          <View style={styles.menuItem}>
            <Entypo name="log-out" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Déconnecter</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
    justifyContent:'center'
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});