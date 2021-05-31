import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const InputNumber=props =>
{
    return(
     <View style = {styles.Container}>
       <Text>{props.children}</Text>
         </View>
    );
}

const styles = StyleSheet.create({
    Container:
    {
        borderWidth: 2,
        borderColor: '#c717fc',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignContent: 'center',
        justifyContent: 'center',
        

    },
    number:
    {
        color: '#c717fc',
        fontSize: 22,
       
      
    },
});

export default InputNumber;