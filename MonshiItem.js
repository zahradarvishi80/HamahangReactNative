import {View, Text} from 'react-native';
import React, {useState} from 'react';
export default function MonshiItem({item}) {
  return (
    <View
      style={{
        flex: 2,
        flexDirection: 'row',
      }}>
      <Text
        style={{
          fontSize: 14,
          fontFamily: 'IRANYekanMobileRegular',
          marginTop: 5,
        }}>
        {item.Mohtava}
      </Text>
      <Text
        style={{
          fontSize: 14,
          marginTop: 5,
        }}>
        -
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontFamily: 'IRANYekanMobileRegular',
          marginTop: 5,
        }}>
        {item.Modiriat}
      </Text>
      <Text
        style={{
          fontSize: 14,
          marginTop: 5,
        }}>
        -
      </Text>
      <Text
        style={{
          fontSize: 14,
          marginTop: 5,
          fontFamily: 'IRANYekanMobileRegular',
        }}>
        {item.Barnameh}
      </Text>
    </View>
  );
}
