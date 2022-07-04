import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default function TouchRSS() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 30,
        left: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignContent: 'flex-end',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('VaredRss')}
        style={{
          fontSize: 49,
          width: 112,
          height: 50,
          backgroundColor: '#0F5D7F',
          justifyContent: 'center',

          borderRadius: 5,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 14,
            color: 'white',
            textAlign: 'center',
            fontFamily: 'IRANYekanMobileRegular',
          }}>
          وارد کردن RSS
        </Text>
      </TouchableOpacity>
    </View>
  );
}
