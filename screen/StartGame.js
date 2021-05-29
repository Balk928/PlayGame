import React,{useState} from 'react';
import {StyleSheet,View,Button,Text,TextInput,TouchableWithoutFeedback,Keyboard} from 'react-native';




const StartGame = ()=>
{
  const[enteredValue, setEnteredValue] = useState('');
  const[confirmed,setConfirmed] = useState(false);
  const[selectedNumber,setSelectedNumber] = useState();

  const numberInputHandler = inputText =>
  {
    setEnteredValue(inputText.replace(/[^0-9]/g,''));
  };
  const resetInputHandler=()=>
  {
    setEnteredValue('');
    setConfirmed(false);
  };
  const confirmInputHandler=()=>
  {
    const chosenNumber = parseInt(enteredValue);
    if(chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99)
    {
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
     setEnteredValue('');
  };
  let confirmedOutput;

  if(confirmed)
  {
    confirmedOutput  = <Text>Choose Number:{selectedNumber}</Text>

  }

    return(

    <TouchableWithoutFeedback onPress = {()=>{Keyboard.dismiss()}}>
    <View style = {styles.screen}>
      <Text style={styles.tfth}>Game Start</Text>
            
        <View style = {styles.TInput}>
            <Text style={{fontSize:20}}>Start Game</Text>

            <TextInput style={styles.Input} blurOnSubmit autoCapitalize="none"
             autoCorrect={false} keyboardType="numeric" maxLength={2} onChangeText={numberInputHandler} 
             value={enteredValue}/>
             <View style = {styles.buttonContainer}>

               <View style = {styles.button}>
               <Button title="Reset" onPress={resetInputHandler} color='#f7287b'/>
               </View>
               <View style = {styles.button}>
               <Button title="Confirm" onPress={confirmInputHandler} color='#c717fc'/>
                </View>
             </View>
        </View>
        {confirmedOutput}
      </View>
      </TouchableWithoutFeedback>
            
    );

};
const styles = StyleSheet.create
({
 screen:
 {
   flex:1,
   padding:10,
   alignItems:'center',
 },
 tfth:{
   fontSize:20,
   marginVertical:10,
 },
 buttonContainer:
 {
  flexDirection:'row',
  width:'100%',
  justifyContent:'space-between',
  paddingHorizontal:15,
  paddingTop:25
  
 },
 button:
 {
   width:100,
 },
 TInput:
 {
   width:400,
   maxWidth:'86%',
   height:150,
   alignItems:'center',
   shadowOffset:{width:0,height:2},
   shadowColor:'black',
   shadowRadius:6,
   shadowOpacity:0.26,
   elevation:5,
   backgroundColor:'white',
   padding:20,
   borderRadius:10,
 },
 Button:
 {
  width:100,
 },
 input:
 {
   width:50,
   textAlign:'center',
 },
 Input:
 {
     height:30,
     borderBottomColor:'gray',
     borderBottomWidth:1,
     
     
 }
});
export default StartGame;