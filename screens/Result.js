import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Title from '../components/title';

const Result = ({navigation, route}) => {
  const {score} = route.params;
  const resultbanner =
    score > 40
      ? require('../assets/images/Success.png')
      : require('../assets/images/fail.png');
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0, 0.5, 0.6]}
      colors={['#F72585', '#B5179E']}
      style={styles.container}>
      <View>
        <Text style={{textAlign: 'center', fontSize: 22, color: '#fff'}}>
          Your score is here{' '}
        </Text>
        <Title titletext={score} fontsize={45} />
      </View>

      <View style={styles.bannercontainer}>
        <Image source={resultbanner} style={{width: 300, height: 300}} />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={styles.btn}>
        <Text style={styles.bntext}>Play again</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Result;

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
