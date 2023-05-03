import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
//import { FlatList } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import { PermissionsAndroid, Platform } from 'react-native';
const EditProfile = () => {
  const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
  const takePhotoFromCamera = async () => {
    try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title:'Camera Permission',
            message:'This app needs access to your camera.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission granted');
          // Your code to access the camera here
          
          await ImagePicker.openCamera({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 400,
            cropping: true,
            compressImageQuality: 0.7
          }).then(image => {
            console.log(image);
            setImage(image.path);
            bs.current.snapTo(1);
          });
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
  }
  const choosePhotoFromLibrary = async () => {
   await ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  }
  const { colors } = useTheme();
  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera} >
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary} >
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
  const bs = React.createRef();
  const fall = new Animated.Value(1);
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}
      >
        <View style={{ margin: 20 }}>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
              <View style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <ImageBackground
                      source={image}
                  style={{ height: 100, width: 100 }}
                  imageStyle={{ borderRadius: 15 }}
                >
                  <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Icon name='camera' size={35} color='#fff' style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }} />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
              John Doe
            </Text>
          </View>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <TextInput
              placeholder="Votre Nom complet"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
            />
          </View>
          <View style={styles.action}>
            <Feather name="phone" color={colors.text} size={20} />
            <TextInput
              placeholder="Téléphone"
              placeholderTextColor="#666666"
              keyboardType="phone-pad"
              autoCorrect={false}
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="envelope-o" color={colors.text} size={20} />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#666666"
              keyboardType="email-address"
              autoCorrect={false}
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
            />
          </View>
          <TouchableOpacity style={styles.commandButton} onPress={() => { }}>
            <Text style={styles.panelButtonTitle}>Mettre à jour</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};
export default EditProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#fff',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375A',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    paddingBottom: 5,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
});