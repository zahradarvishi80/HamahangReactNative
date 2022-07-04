import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function TouchabelMonshi() {
  return (
    <View
      style={{
        width: 320,
        height: 30,
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: 160,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity
          style={{
            width: 65,
            height: 25,
            backgroundColor: 'white',
            borderColor: '#FF0000',
            borderWidth: 1,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontFamily: 'IRANYekanMobileRegular',
              textAlign: 'center',
              fontSize: 13,
              color: '#FF0000',
            }}>
            حذف
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 160,
          backgroundColor: 'white',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: 65,
            height: 25,
            backgroundColor: 'white',
            borderColor: '#707070',
            borderWidth: 1,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontFamily: 'IRANYekanMobileRegular',
              textAlign: 'center',
              fontSize: 13,
              color: '#707070',
            }}>
            غیر فعال
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
