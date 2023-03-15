import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = () => {
  return (
    <View style={styles.cotainer}>
      <Text style={styles.Title}>Qizzler</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  Title: {
    fontSize: 36,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  container: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
