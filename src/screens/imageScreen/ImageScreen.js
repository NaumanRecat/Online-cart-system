import React,{useState,useEffect} from 'react';
import {View,Text,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([""]);

export const ImageScreen = ({navigation}) => {

    const [img, setimg] = useState('');

    const url = "https://5iver.s3.amazonaws.com/dp.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAXOTEO7522RAA7VSU%2F20201219%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20201219T192339Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCICNR699ZOWQ6PtgTK4lu16n1CBRj047atAtGdCrgtwZsAiAchsFd57LJYMqwp%2FzH8q13oAKtgsxMCUEctgS9GBegZCrNAQhlEAAaDDUxMjM4NTU0ODE0OSIMm7h3yinWxJZt9xWpKqoBPoeLj35jkaIKJsTbeGYfxLIHJG7w%2FvETR%2BHkcCS%2FOA6b5hx%2B%2F7dRSkrVP0JwCGH5VYJh7nTwl898Q8v5%2BVmNBGGcff5A5oqapq0yglA6W7tsACJd49oBb5%2BPzTO2MxfRbpbW%2BiryJyf4SZ4wge%2FXpt1%2BfXAGETB8qvg26WBaIl3Chv88BhgAaCgZgsHMvc%2FpgpmzLuXzW4S8ihJQh850LGYMm%2BOUNz%2F0ayUwuKb5%2FgU64QFpuh5ks9yDPKRS2yZ%2B9BGb1WMNOb8oi3p4JEPBoOmpfF9gUMXUTQrB0rnBit3JQvgir0YPr2WXKx0rJo4I1ENzP%2FLGLvoScLc8pIRSuj5JK2l7T9oqXuTA%2BxoddaYbiUCABE7NJHgTDsYf1Rz4eqNUqeS6FDKgHRtA5ewcJ%2F1opFaPUav5fKdDLLJA2XxsKWgODYiBhCVUFeMZim18LU5M5rKqs3HOWdEYQQ8cEAQzjVUYFAg31sbYBlij9zw%2BpnppqbV6LAI4cj9QGUWE5LKFGunBCIpFyPaWvUOmwCecGNU%3D&X-Amz-Signature=6c5fa5f9f65c5a8733ce0137a1e14245e9d43b480966275db22cf9aee4e8c2cf" ;



            AsyncStorage.setItem('userData', JSON.stringify(url), () => {
              });

              AsyncStorage.getItem('userData', (error, data) => {
               if (!error) {
                    setimg(JSON.parse(data))
                }
              });

    return (
        <View>
          <SafeAreaView/>
          <TouchableOpacity
          onPress={()=> navigation.navigate('options')}
          style={{
            height:h('8%'),
            width:'15%',
            justifyContent:'center',
          }}
          >
            <Text style={{fontSize:20,marginLeft:h('1%')}}>Back</Text>
          </TouchableOpacity>
              <Image
              style={{
                height: h('40%'),
                width: '100%',
                borderRadius: h('2%'),
                resizeMode:'contain'
              }}
              source={{uri:img}}
            />
        </View>
    )
}
