import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGame from './screen/StartGame';

function App() {
  return (
    <View style={styles.container}>
      <Header Title='Guess A number' />
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },

});

export default App;

