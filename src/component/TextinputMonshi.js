import React from 'react';
import {View, Text, TextInput} from 'react-native';

const TextinputMonshi = () => {
  return (
    <View
      style={{
        width: 160,
        height: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 145,
          height: 35,
          borderWidth: 1,
          marginTop: 5,
          borderRadius: 5,
          borderColor: '#707070',
        }}>
        <TextInput
          style={{
            width: 145,
            height: 45,
            color: '#707070',
          }}></TextInput>

        <Text
          style={{
            top: -55,
            width: 61,
            backgroundColor: 'white',
            left: 5,
            fontSize: 9,
            fontFamily: 'IRANYekanMobileRegular',
          }}>
          نام و نام خانوادگی
        </Text>
      </View>
      <View
        style={{
          width: 145,
          height: 36,
          borderWidth: 1,
          marginTop: 15,
          borderColor: '#707070',
          borderRadius: 5,
        }}>
        <TextInput
          keyboardType="numeric"
          style={{
            width: 145,
            height: 45,
          }}></TextInput>

        <Text
          style={{
            top: -55,
            width: 45,
            backgroundColor: 'white',
            right: -5,
            fontSize: 10,
            fontFamily: 'IRANYekanMobileRegular',
          }}>
          شماره همراه
        </Text>
      </View>
    </View>
  );
};
export default TextinputMonshi;
