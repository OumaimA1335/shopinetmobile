import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroARTrackingReasonConstants,
  ViroARSceneNavigator,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
  Viro3DObject,
  ViroAmbientLight,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = (props) => {
  let data = props.sceneNavigator.viroAppProps;
  console.log(data)
  const [text, setText] = useState('Initializing AR...');

  /*function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroARTrackingReasonConstants.TRACKING_REASON_EXCESSIVE_MOTION) {
      setText('Hello World!');
    } else if (state === ViroARTrackingReasonConstants.TRACKING_REASON_EXCESSIVE_MOTION) {
      // Handle loss of tracking
    }
  }
*/
  ViroMaterials.createMaterials({
    wood: {
      diffuseTexture: require('../assets/wood.jpg'),
    },
  });
  ViroAnimations.registerAnimations({
    rotate: {
      duration: 2500,
      properties: {
        rotateY: '+=90',
      },
    },
  });
  return (
    <ViroARScene>
      <ViroAmbientLight color={'#ffffff'} />
      {data.object === 'skull' ? (
        <Viro3DObject
          source={require('../assets/Tshirt/TShirt.obj')}
          position={[0,-6,-6]}
          scale={[0.05, 0.05, 0.05]}
          //rotation={[-45, 50, 40]}
          animation={{
            name: 'rotate',
            run: true,
            loop: true
          }}
          type="OBJ"
        />
      ) : (
        <Viro3DObject
          source={require('../assets/shoe/shoe.obj')}
          position={[0, 0, -5]}
          scale={[0.05, 0.05, 0.05]}
          rotation={[-45, 50, 40]}
          type="OBJ"
        />
      )}
      {/* <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -5]}
        style={styles.helloWorldTextStyle}
  />
      <ViroBox
      height={2}
      length={2}
      width={2}
      scale={[0.2,0.2,0.2]}
      position={[0,-1,-1]}
      materials={["wood"]}
      animation={{name:'rotate',loop:true,run:true}}
  />*/}
    </ViroARScene>
  );
};

const  VirtualTry = () => {
  const [object, setObject] = useState('tv');
  return (
    <View style={styles.mainView}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: HelloWorldSceneAR,
        }}
        viroAppProps={{object:object}}
        style={styles.f1}
      />

      <View style={styles.controlsView}>
        <TouchableOpacity onPress={() => setObject('skull')}>
          <Text style={styles.text}>Display skull</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setObject('tv')}>
          <Text style={styles.text}>Display TV</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default VirtualTry
var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  mainView: {
    flex: 1,
  },
  controlsView: {
    width: '100%',
    height: 100,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    margin: 20,
    backgroundColor: '#9d9d9d',
    padding: 10,
    fontWeight: 'bold',
  },
});
