import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Account = () => {
  return (
    <View>
      <Text style={styles.text}>Account</Text>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
