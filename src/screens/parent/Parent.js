/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StatusBar,
    SafeAreaView
} from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCart from 'react-native-vector-icons/Octicons';
import { useIsFocused} from '@react-navigation/native'; 

import { black, silver, white } from '../../Dimens';

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([""]);

export const Parent = ({navigation}) => {
    const [items,setitems] = useState([
        {
            name:'Book',
            price:16.00,
            quantity:1,
            sum:16.00,
        },
    ]);
    
    const [listItemsRefresh, setListItemsRefresh] = useState(true);
    const [Total, setTotal] = useState(16);
 
    

    const renderItemDesign = (item,index) => (
        <View
        style={{
            height:h('10%'),
            width:'90%',
            // backgroundColor:'#ada',
            flexDirection:'row',
            borderColor:silver,
            borderRadius:h('2%'),
        }}
        ><SafeAreaView/>
            <TouchableOpacity
            onPress={()=>{
                removeByIndex(item);
            }}
            delayPressIn={0}
            style={{
                height:h('10%'),
                width:'15%',
                // backgroundColor:'#ada',
                alignItems:'center',
                justifyContent:'center'
            }}
            >
                <IconCart name={'diff-removed'} size={20} color={black}/>
            </TouchableOpacity>
            <View
            style={{
                height:h('10%'),
                width:'5%',
                // backgroundColor:'#ada',
                justifyContent:'center',
            }}
            >
                                <Text>{item.quantity}</Text>
            </View>
            <TouchableOpacity
            onPress={()=> {
                add(item);
            }}
            delayPressIn={0}
            style={{
                height:h('10%'),
                width:'10%',
                alignItems:'center',
                // backgroundColor:'#ada',
                justifyContent:'center'
            }}
            >
                <IconCart name={'diff-added'} size={20} color={black}/>
            </TouchableOpacity>
            <View
            style={{
                height:h('10%'),
                width:'50%',
                alignItems:'center',
                // backgroundColor:'#fda',
                justifyContent:'center',
            }}
            >
                <Text>{item.name}</Text>
            </View>
            <View
            style={{
                height:h('10%'),
                width:'20%',
                // backgroundColor:'#ada',
                justifyContent:'center',
            }}
            >
                <Text style={{marginLeft:h('2%')}}>$: {item.sum}.00</Text>
            </View>
        </View>
    );


  //  add item into array
    const add = (item) => {
    const items = items;           
    item.quantity += 1;
    item.sum = item.price + item.sum;
        setListItemsRefresh(!listItemsRefresh);
        setTotal(item.sum)
  };

  // Decrement 
    const removeByIndex = (item) => {
    const items = items;           
    item.quantity -= 1;
    item.sum = item.sum - item.price;
    setListItemsRefresh(!listItemsRefresh);
    setTotal(item.sum)
    if(item.quantity===0){
               
    item.quantity = 1;
    item.sum = 16 ;
    setTotal(16)

    }
     
  };


        return (
           <View
           style={{
               flex:1,
               backgroundColor:'#fff'
           }}
           >            
                <TouchableOpacity
          onPress={()=> navigation.navigate('options')}
          style={{
            height:h('8%'),
            width:'15%',
            justifyContent:'center',
            backgroundColor:'#fff'
          }}
          >
            <Text style={{fontSize:20,marginLeft:h('1%')}}>Back</Text>
          </TouchableOpacity>
               <View
            style={{
                flex:1,
                backgroundColor:white,
                alignItems:'center',
                justifyContent:'center'
            }}
            >
           
                <SafeAreaView/>
         {/* Total */}
         <View
         style={{
             height:h('10%'),
             width:'90%',
            //  backgroundColor:'#ada',
             flexDirection:'row',
             justifyContent:'space-between',
             borderWidth:h('.1%'),
             marginBottom:h('1%'),
             borderRadius:h('2%')

         }}
         >
             <View
             style={{
                 height:h('10%'),
                 alignItems:'center',
                 marginLeft:h('3%'),
                 flexDirection:'row'
             }}
             >
                 <Text>Total: </Text>
             </View>
             <View
             style={{
                 height:h('10%'),
                 justifyContent:'center',
                 marginRight:h('6%')
             }}
             >
                 <Text>$: {Total}.00</Text>
             </View>
         </View>
              
         <View
         style={{
             height:h('10%'),
             backgroundColor:white,
             borderWidth:h('.1%'),
             borderRadius:h('2%')
         }}
         >
                   <FlatList
                    data={items}
                    renderItem={({item,index}) => renderItemDesign(item,index)}
                    keyExtractor={(item) => item.name}
                    showsVerticalScrollIndicator={false}
                    />
         </View>

            </View>
            </View>

        );
};