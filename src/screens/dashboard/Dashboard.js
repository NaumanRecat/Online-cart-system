import React from 'react';
import {View,Text} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([""]);

export const Dashboard = () => {
    return (
        <View
        style={{
            flex:1,
            height:h('100%'),
            width:'100%',
            backgroundColor:'#0006'
        }}
        >
            <View
            style={{
                height:h('10%'),
                width:'15%',
                backgroundColor:'#0009',
                marginTop:h('1%'),
                alignItems:'center',
                justifyContent:'center',
                borderRadius:h('.5%'),
                marginLeft:h('.5%'),
                borderTopWidth:h('1%'),
                borderTopColor:'green'
            }}
            >
                 <Icon name={'navicon'} size={40} color={'#fff'}/>
            </View>

            <View
            style={{
                height:h('24%'),
                width:'15%',
                backgroundColor:'#0009',
                marginTop:h('1%'),
                alignItems:'center',
                justifyContent:'center',
                borderBottomWidth:h('.1%'),
                marginLeft:h('.5%'),
                borderTopRightRadius:h('1%'),
                borderTopLeftRadius:h('1%')
            }}
            >
                 <Icon2 name={'text-document'} size={30} color={'#fff'}/>
            </View>
            <View
            style={{
                height:h('24%'),
                width:'15%',
                backgroundColor:'#0009',
                alignItems:'center',
                justifyContent:'center',
                borderBottomWidth:h('.1%'),
                marginLeft:h('.5%')
            }}
            >
                 <Icon2 name={'print'} size={30} color={'#fff'}/>
            </View>
            <View
            style={{
                height:h('24%'),
                width:'15%',
                backgroundColor:'#0009',
                alignItems:'center',
                justifyContent:'center',
                marginLeft:h('.5%'),
                borderBottomRightRadius:h('1%'),
                borderBottomLeftRadius:h('1%')
            }}
            >
                 <Icon1 name={'handbag'} size={30} color={'#fff'}/>
            </View>
            <View
            style={{
                height:h('10%'),
                width:'15%',
                backgroundColor:'#0009',
                marginTop:h('1%'),
                alignItems:'center',
                justifyContent:'center',
                borderRadius:h('.5%'),
                marginLeft:h('.5%')
            }}
            >
                 <Icon name={'clock'} size={40} color={'#fff'}/>
            </View>
        </View>
    )
}
