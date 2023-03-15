import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Title from '../components/title';

const Homes = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title />
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
    </View>
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
    backgroundColor: '#973AA8',
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
