import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = ({titletext, fontsize}) => {
  return (
    <View style={styles.cotainer}>
      <Text style={[styles.Title, {fontSize: fontsize}]}>{titletext}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  Title: {
    fontWeight: '600',
    color: '#ffff',
    textAlign: 'center',
  },
  container: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
