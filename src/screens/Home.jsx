import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import IconMenu from '../component/IconMenu';

const Data = [
  {id: 1, label: 'Top Up'},
  {id: 2, label: 'Diskon'},
  {id: 3, label: 'Go Food'},
  {id: 4, label: 'Grab'},
  {id: 5, label: 'Gojek'},
];

const Home = ({navigation}) => {
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={({item}) => <IconMenu label={item.label} />}
        horizontal={true}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('About')}
        style={styles.btn}>
        <Text style={styles.txt}>Ke About</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'gold',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
