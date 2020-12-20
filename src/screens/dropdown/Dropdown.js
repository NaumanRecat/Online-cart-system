import React,{useState} from 'react';
import {View,Text,TouchableOpacity,SafeAreaView} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown-v2'
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([""]);

export const DropDown = ({navigation}) => {
    const [size, setsize] = useState('Select a Size');
    const [color, setcolor] = useState('Select a Colour');
 
    // if comment the Sdata value Dropdown not showing
    const [Sdata, setSdata] = useState([
        {
          value: 'L',
        }, {
          value: 'M',
        }, {
          value: 'S'
        }
      ]);
          // if comment the Cdata value Dropdown not showing
    const [Cdata, setCdata] = useState([
        {
          value: 'green',
        }, {
          value: 'white',
        }, {
          value: 'orange'
        }
      ]);
    return (
        <View
        style={{
            flex:1
        }}
        >
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

        <View
        style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row'
        }}
        >
            {Sdata.length > 0 && Cdata.length > 0  ?  
                <View
                style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection:'row'
                }}
                >
                <View
                style={{
                    height:h('40%'),
                    width:'40%',
                    // backgroundColor:'#ada'
                }}
                >
                    <View
                    style={{
                        height:h('15%'),
                        width:'100%',
                        alignItems:'center'
                    }}
                    >
                        <Text style={{fontSize:20}}>Size</Text>
                    </View>
           <View
            style={{
              height: h('6%'),
              width: '100%',
              borderRadius: h('1%'),
              marginBottom: h('2%'),
            }}>
                    <Dropdown
                        value={size}
                        data={Sdata}
                        onChangeText={(value) => setsize(value)}
                        containerStyle={{
                            // backgroundColor: '#faf',
                            width: '100%',
                            marginTop: -h('3%'),
                            borderBottomWidth: 0,
                            alignItems:'center',
                          }}
                          selectedItemColor={'#000'}
                         />
            </View>
            </View>
            <View
                style={{
                    height:h('40%'),
                    width:'40%',
                    // backgroundColor:'#ada'
                }}
                >
                     <View
                    style={{
                        height:h('15%'),
                        width:'100%',
                        alignItems:'center'
                    }}
                    >
                        <Text style={{fontSize:20}}>Colour</Text>
                    </View>
           <View
            style={{
              height: h('6%'),
              width: '100%',
              borderRadius: h('1%'),
              marginBottom: h('2%'),
            }}>
                    <Dropdown
                        value={color}
                        data={Cdata}
                        onChangeText={(value) => setcolor(value)}
                        containerStyle={{
                            // backgroundColor: '#faf',
                            width: '100%',
                            marginTop: -h('3%'),
                            borderBottomWidth: 0,
                            alignItems:'center'
                          }}
                          selectedItemColor={'#000'}
                         />
            </View>
            </View>
            </View>
             : ( null )}
        </View>
        </View>
    )
}
