import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import dataRSS from './dataRSS';
import IconRSS from './IconRSS';
import {useNavigation} from '@react-navigation/native';
export default function MapRSS() {
  const navigation = useNavigation();
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
      {dataRSS.map(item => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('KHabarMatn', {item: item})}>
            <View
              style={{
                width: 330,
                height: 100,
                borderWidth: 1,
                borderColor: '#97C9F8',
                borderRadius: 5,
                marginTop: 15,
                backgroundColor: 'white',
              }}>
              <Text
                style={{
                  fontFamily: 'IRANYekanMobileRegular',
                  marginTop: 7,
                  marginLeft: 7,
                  fontSize: 15,
                }}>
                {item.item}{' '}
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 13,
                  fontFamily: 'IRANYekanMobileRegular',
                  marginLeft: 7,
                }}>
                {item.text}
              </Text>
              <IconRSS item={item} />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
