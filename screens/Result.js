import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Result = ({navigation, route}) => {
  const {score} = route.params;
  return (
    <View>
      <View style={styles.resultContainer}>
        <Text style={styles.score}>{score}</Text>
      </View>
      <View style={styles.bannercontainer}>
        <Image
          source={require('../assets/images/School.png')}
          style={{width: 300, height: 300}}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.bntext}>Play Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  bannercontainer: {justifyContent: 'center', alignItems: 'center'},
  banner: {
    width: 200,
    height: 200,
    backgroundColor: 'yellow',
  },
  score: {
    color: '#973AA8',
    fontSize: 34,
  },
  resultContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    alignSelf: 'center',
    maxWidth: '30%',
    backgroundColor: '#973AA8',
    padding: 15,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bntext: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
