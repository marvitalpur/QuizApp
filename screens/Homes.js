import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Title from '../components/title';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';

const Homes = ({navigation}) => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0, 0.5, 0.6]}
      colors={['#F72585', '#B5179E']}
      style={styles.container}>
      <Header />
      <Title titletext={'Quiziti'} fontsize={34} />
      <View style={styles.bannercontainer}>
        <Image
          source={require('../assets/images/School.png')}
          style={{width: 300, height: 300}}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Quiz');
        }}
        style={styles.btn}>
        <Text style={styles.bntext}>Start</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Homes;

const styles = StyleSheet.create({
  bannercontainer: {justifyContent: 'center', flex: 1, alignItems: 'center'},
  banner: {
    width: 200,
    height: 200,
    backgroundColor: 'yellow',
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  btn: {
    width: '100%',
    backgroundColor: '#560BAD',
    padding: 10,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  bntext: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
});
