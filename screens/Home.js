import React from 'react';
import {
  View, StyleSheet, Image
} from 'react-native';
import { Text, Button } from 'react-native-paper';

const Home = ({ navigation, route }) => {

  return (
    <View>
      <Text style={styles.text}>Lançar Piada do Chucky Norris:</Text>
      <Button
        onPress={() => navigation.navigate('Joke')}
      >Piade-me</Button>
      <Image style={styles.img} source={require('../assets/chuck.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    textAlign: 'center'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  img: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 90,
    maxWidth: 300,
    maxHeight: 250,
  }
});

export default Home;
