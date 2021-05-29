import React from 'react';
import {StyleSheet,View, Text} from 'react-native';

const Header = props=>
{
    return(

    <View style={styles.headers}>
        <Text style = {styles.Input}>{props.Title}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    headers:
    {
        width:'100%',
        height:90,
        backgroundColor:'#f7287b',
        alignItems:'center',
        justifyContent:'center'
       
    },
    Input:
    {

        color:'rgb(145,123,56)',
        fontSize:25,
        paddingTop:34,
    },
});
export default Header;