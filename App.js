import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGame from './screen/StartGame';
import GameScreen from './screen/GameScreen';
import GameOverScreen from './screen/GameOverScreen';

function App() {
  
  const [userNumber,setUserNumber] = useState();
  const[guessRounds , setGuessRounds] = useState(0);
  const configureNewGameHandler =() =>{
    setGuessRounds(0);
    setUserNumber(null);
  };
  const startGameHandler= selectedNumber =>{
    setUserNumber(selectedNumber);
    
  };
  const gameOverHandler = numOfRounds =>{
    setGuessRounds(numOfRounds);
  }
 
  let screen = <StartGame  onStartGame = {startGameHandler}/>;
   if(userNumber && guessRounds <= 0){
      screen = <GameScreen userChoice = {userNumber} onGameOver={gameOverHandler}/>;
   }else if(guessRounds >0){
     screen = <GameOverScreen roundsNumber={guessRounds} 
     userNumber={userNumber} onRestart = {configureNewGameHandler}/>;
   }
  return (
    <View style={styles.container}>
      <Header Title='Guess A number' />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },

});

export default App;

