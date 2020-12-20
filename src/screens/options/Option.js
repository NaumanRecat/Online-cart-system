import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([""]);

export const options = ({ navigation }) => {
    return (
        <View
        style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}
        >
            <TouchableOpacity
            onPress={()=> 
            navigation.navigate('ImageScreen')}
            style={{
                height:h('8%'),
                width:'90%',
                alignItems:'center',
                justifyContent:'center',
                // backgroundColor:'#ada',
                borderRadius:h('1%'),
                borderWidth:h('.1%'),
                marginBottom:h('1%')
            }}
            >
                <Text>Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{navigation.navigate('Dropdown')}}
            style={{
                height:h('8%'),
                width:'90%',
                alignItems:'center',
                justifyContent:'center',
                // backgroundColor:'#ada',
                borderRadius:h('1%'),
                borderWidth:h('.1%'),
                marginBottom:h('1%')
            }}
            >
                <Text>Options</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> navigation.navigate('Parent')}
            style={{
                height:h('8%'),
                width:'90%',
                alignItems:'center',
                justifyContent:'center',
                // backgroundColor:'#ada',
                borderRadius:h('1%'),
                borderWidth:h('.1%'),
                marginBottom:h('1%')
            }}
            >
                <Text>ParentChild</Text>
            </TouchableOpacity>
            <TouchableOpacity
         onPress={()=> 
            navigation.navigate('Dashboard')}
            style={{
                height:h('8%'),
                width:'90%',
                alignItems:'center',
                justifyContent:'center',
                // backgroundColor:'#ada',
                borderRadius:h('1%'),
                borderWidth:h('.1%'),
                marginBottom:h('1%')
            }}
            >
                <Text>Dashboard</Text>
            </TouchableOpacity>
        </View>
    )
}
