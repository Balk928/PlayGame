import React,{useState,useRef,useEffect} from 'react';
import {View,Text,StyleSheet, Button, Alert} from 'react-native';
import InputNumber from './InputNumber';


const GameScreen = props=>
{
    const generateRandomBetween = (min,max,exclude) =>
    {
      min = Math.ceil(min);
      max = Math.floor(max);
      const rndNum = Math.floor(Math.random() * (max - min)) + min;
      if(rndNum === exclude)
      {
          return generateRandomBetween(min,max,exclude);
      }
      else
      {
          return rndNum;
      }
    };  
  const [currentGuess,setCurrentGuess] = useState(generateRandomBetween(1,100,props.userChoice));
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [rounds,setRounds] = useState(0);
  const {userChoice,onGameOver} = props;
  useEffect(()=>{
      if(currentGuess === props.userChoice)
      {
          props.onGameOver(rounds);
      }
  },[currentGuess,userChoice,onGameOver]);

  
  const nextGuessHandler = direction =>{
     if((direction === 'Lower' && currentGuess<props.userChoice) 
     || (direction === 'Greater' && currentGuess > props.userChoice))
     {
         Alert.alert('Don\'t' , 'You know that this is wrong', [{text:'Sorry',style:'cancel'}]);
         return;
     }
     if(direction === 'Lower')
     {
         currentHigh.current = currentGuess;
     }
     else{
         currentLow.current = currentGuess;
     }
     const nextNumber = generateRandomBetween(currentLow.current,currentHigh.current , currentGuess);
     setCurrentGuess(nextNumber);
     setRounds(curRounds =>curRounds+1)
  };
  
  return(
      <View style = {styles.screen}>
        <Text style={styles.text}>Opponents Guess</Text>
        <InputNumber>{currentGuess}</InputNumber>
        <View style = {styles.buttonContainer}>
            <Button title="LOWER" onPress={nextGuessHandler.bind(this,'Lower')} color='#f7287b'/>
            <Button title="GREATER" onPress={nextGuessHandler.bind(this,'Greater')} color='#c717fc'/>
        </View>
      </View>
  );
};

const styles =StyleSheet.create({
    screen:
    {
        flex:1,
        padding:10,
        alignItems:'center',

    },
    text:
    {
       fontSize:20,
       textAlign:'center',
    },  
    buttonContainer:
    {
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        width:300,
        maxWidth:'80%',
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    }

});

export default GameScreen;