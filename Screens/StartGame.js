import React from 'react';
import {StyleSheet,View,TextInput,Button,Text} from 'react-native';

const StartGame = ()=>
{
    return(

        <View style = {styles.screen}>
              <Text style={styles.tfth}>Game Start</Text>
            
            <View style = {styles.TInput}>
            <Text>Start Game</Text>
             <TextInput/>
             <View style = {styles.button}>
               <Button title="Reset" onPress={()=>{}} color="#c717fc"/>
               <Button title="Confirm" onPress={()=>{}} color="#f7287b"/>
               </View>
              </View>
            </View>
    );

}
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
 button:
 {
  flexDirection:'row',
  width:'100%',
  justifyContent:'space-between',
  paddingHorizontal:15
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
});
export default StartGame;