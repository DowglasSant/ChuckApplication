import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-paper';

const Joke = ({ navigation, route }) => {
  const [jokes, setJokes] = useState();

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((results) => {
        console.log(results.value);
        setJokes(results.value);
      })
      .catch((err) => {
        Alert.alert(err);
      });
  }, []);

  return (
    <View>
      <Text style={styles.text}>{jokes}</Text>
      <Button style={styles.button} onPress={() => navigation.navigate('Home')}>Retornar</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    textAlign: 'center'
  }
});

export default Joke;
