import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Icon from '../../assets/svg/Iconly-Light-Search.svg';
export default function TextinputRSS() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          flexDirection: 'row',
          width: 340,
          height: 45,
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        <Icon width={18} height={18} />
        <TextInput
          placeholder="جستجو"
          placeholderTextColor={'#707070'}
          style={{
            fontSize: 14,
            width: 280,
            height: 45,
            backgroundColor: 'white',
            // justifyContent: 'center',
            // alignItems: 'center',
            borderRadius: 10,
          }}></TextInput>
      </View>
    </View>
  );
}
