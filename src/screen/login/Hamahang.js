import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';
import Icon from '../../../assets/svg/Component 26 – 1.svg';
import {Button, Checkbox} from 'react-native-paper';
import CheckboxComponent from '../../component/Checkbox';
import {TouchableOpacity} from 'react-native';
// const {Height} = Dimensions.get('screen');

const Hamahang = ({navigation, route}) => {
  const [loading, SetLoading] = useState(true);
  const [text, setText] = React.useState('');
  const [checked, setChecked] = React.useState(false);

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
          // position: 'fix',
          backgroundColor: '#FFF',
          width: '90%',
          height: '70%',
          alignItems: 'center',
          justifyContent: 'space-evenly',
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
            marginTop: 7,
          }}>
          ورود
        </Text>
        <>
          <View
            style={{
              width: '85%',
              height: 60,
              borderWidth: 1,
              borderRadius: 3,
              alignItems: 'center',
              marginTop: 40,
              marginLeft: 10,
              marginRight: 10,
              borderColor: '#707070',
            }}>
            <TextInput
              placeholder="+98"
              style={{
                width: '90%',
                height: 58,
                fontFamily: 'IRANYekanMobileRegular',
                fontSize: 18,
              }}></TextInput>
            <Text
              style={{
                top: -75,
                backgroundColor: 'white',
                right: 100,
                fontFamily: 'IRANYekanMobileRegular',
              }}>
              شماره همراه
            </Text>
          </View>

          <View
            style={{
              width: '85%',
              height: 60,
              borderWidth: 1,
              borderRadius: 3,
              alignItems: 'center',
              marginTop: 20,
              marginLeft: 10,
              marginRight: 10,
              borderColor: '#707070',
            }}>
            <TextInput
              placeholder="********"
              style={{
                width: '90%',
                height: 60,
                fontFamily: 'IRANYekanMobileRegular',
                fontSize: 18,
              }}></TextInput>
            <Text
              style={{
                top: -75,
                backgroundColor: 'white',
                right: 100,
                fontFamily: 'IRANYekanMobileRegular',
              }}>
              رمز عبور
            </Text>
          </View>
        </>
        <View
          style={{
            width: '100%',
            height: '40%',
            // backgroundColor: 'red',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'flex-start',
              marginTop: -20,
              marginLeft: 15,
              // backgroundColor: 'red',
            }}>
            <CheckboxComponent style={{width: 40, height: 40}} />
            <Text
              style={{
                color: '#444444',
                marginBottom: 5,
                fontFamily: 'IRANYekanMobileRegular',
                marginLeft: -15,
                fontSize: 17,

                // marginRight: -10,
              }}>
              مرا بخاطر بسپار
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Button
              mode="contained"
              style={{
                width: 130,
                height: 45,
                backgroundColor: '#0F5D7F',
              }}
              onPress={() => navigation.navigate('DrawerComponent')}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'IRANYekanMobileRegular',
                  textAlign: 'center',
                }}>
                ورود
              </Text>
            </Button>
            <Button
              mode="text"
              color="#0F5D7F"
              style={{
                width: 130,
                height: 45,
                // marginTop: 30,
              }}
              onPress={() => navigation.navigate('Codeseryal')}>
              <Text
                style={{fontSize: 18, fontFamily: 'IRANYekanMobileRegular'}}>
                ساخت حساب
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
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#444444',
            fontFamily: 'IRANYekanMobileRegular',
          }}>
          رمز عبور خود را فراموش کرده اید؟
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Ersalcode')}>
          <Text
            style={{color: '#0F5D7F', fontFamily: 'IRANYekanMobileRegular'}}>
            اینجا کلیک کنید
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Hamahang;
