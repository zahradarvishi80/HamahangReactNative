import {View} from 'react-native';
import React from 'react';
import CheckBoxMonshi from './CheckBoxMonshi';
import TextinputMonshi from './TextinputMonshi';
import TouchabelMonshi from './TouchabelMonshi';
export default function AcardionMonshi() {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          width: 320,
          height: 100,
          backgroundColor: 'white',
        }}>
        <TextinputMonshi />

        <CheckBoxMonshi />
      </View>
      <TouchabelMonshi />
    </View>
  );
}
