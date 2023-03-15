import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Result = ({navigation, route}) => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannercontainer}>
        <Image
          source={require('../assets/images/School.png')}
          style={{width: 300, height: 300}}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>HomeBtn</Text>
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
});
