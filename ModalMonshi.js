import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import TextinputMonshi from './src/component/TextinputMonshi';
import CheckBoxMonshi from './src/component/CheckBoxMonshi';
export default function ModalMonshi() {
  const [isModalVisible, setModalVisible] = useState(false);
  const Modalpress = () => {
    setModalVisible(!isModalVisible);
  };
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
        style={{
          fontSize: 49,
          width: 102,
          height: 50,
          backgroundColor: '#0F5D7F',
          justifyContent: 'center',

          borderRadius: 5,
          alignItems: 'center',
        }}
        onPress={() => Modalpress()}>
        <Text
          style={{
            fontSize: 14,
            color: 'white',
            textAlign: 'center',
            fontFamily: 'IRANYekanMobileRegular',
          }}>
          ساخت منشی
        </Text>
      </TouchableOpacity>
      <Modal
        style={{alignItems: 'center', borderRadius: 3}}
        isVisible={isModalVisible}
        animationIn={'slideInUp'}
        animationInTiming={500}
        animationOutTiming={500}
        avoidKeyboard={true}
        animationOut={'slideOutUp'}>
        <View
          style={{
            width: 320,
            height: 200,
            backgroundColor: 'white',
            borderRadius: 6,
            justifyContent: 'flex-start',
            shadowColor: 'blue',
            shadowOpacity: 0.75,
            shadowRadius: 30,
            elevation: 10,
            shadowOffset: {
              width: 0.7,
              height: 2,
            },
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: 320,
              height: 100,
              backgroundColor: 'white',
              marginTop: 20,
            }}>
            <TextinputMonshi />

            <CheckBoxMonshi />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={() => Modalpress()}
              style={{
                width: 290,
                height: 50,
                backgroundColor: '#0F5D7F',
                borderRadius: 5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  margin: 10,
                  color: 'white',
                  fontFamily: 'IRANYekanMobileRegular',
                }}>
                ثبت
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
