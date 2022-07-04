// import React, {useEffect, useState} from 'react';
// import {View, Text} from 'react-native';
// import SplashScreen from './SplashScreen';
// import { Button, Checkbox} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Icon from '../../../assets/svg/Component 26 – 1.svg';
import {Button, Checkbox} from 'react-native-paper';
import Icon1 from '../../../assets/svg/edit-2.svg';
const ErsalMojadad = ({navigation, route}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FCFCFC',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: '20%',
          width: '100%',
          backgroundColor: '#FCFCFC',
        }}>
        <Icon width={35} height={35} style={{marginHorizontal: 2}} />
        <Text
          style={{
            fontFamily: 'IRANYekanMobileExtraBold',
            fontSize: 30,
            color: '#0F5D7F',
          }}>
          هماهنگـــ ...
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#FFF',
          width: '90%',
          height: '70%',
          alignItems: 'center',
          shadowColor: 'blue',
          shadowOpacity: 0.75,
          shadowRadius: 30,
          elevation: 5,
        }}>
        <Text
          style={{
            fontFamily: 'IRANYekanMobileRegular',
            fontSize: 30,
            textAlign: 'center',
            color: '#444444',
            marginTop: 10,
          }}>
          کد تایید
        </Text>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '80%',
          }}>
          <View
            style={{
              width: '80%',
              height: 60,
              borderWidth: 1,
              borderRadius: 5,
              alignItems: 'center',
              marginTop: 40,
              marginLeft: 10,
              marginRight: 10,
              borderColor: '#707070',
            }}>
            <TextInput
              placeholder="              __    __    __    __"
              style={{
                width: '95%',
                height: 50,
                fontFamily: 'IRANYekanMobileRegular',
                fontSize: 17,
                marginTop: 5,
                // backgroundColor: 'red',
              }}></TextInput>
            <Text
              style={{
                top: -68,
                backgroundColor: 'white',
                right: 90,
              }}>
              کد چهار رقمی
            </Text>
          </View>
          {/* <View>
            <Text>09124924704</Text>
          </View> */}

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon1 />
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'IRANYekanMobileRegular',
                  marginBottom: 20,
                }}>
                +989124924704
              </Text>
            </View>

            <Button
              mode="contained"
              style={{
                width: 260,
                height: 45,
                backgroundColor: '#0F5D7F',
              }}
              onPress={() => navigation.navigate('RamzEbor')}>
              <Text
                style={{fontSize: 20, fontFamily: 'IRANYekanMobileRegular'}}>
                ارسال مجدد کد
              </Text>
            </Button>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: '10%',
          backgroundColor: '#FCFCFC',
        }}></View>
    </View>
  );
};
export default ErsalMojadad;
