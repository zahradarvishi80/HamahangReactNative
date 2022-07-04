import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Iconfilter from '../../assets/svg/Group 285.svg';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <Iconfilter width={38} height={38} />
      </TouchableOpacity>

      <Modal
        style={{justifyContent: 'center', alignItems: 'center'}}
        isVisible={isModalVisible}>
        <View
          style={{
            width: 250,
            height: 400,

            backgroundColor: 'white',
            borderRadius: 6,
            padding: 35,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            shadowColor: 'blue',
            shadowOpacity: 0.75,
            shadowRadius: 30,
            elevation: 10,
            shadowOffset: {
              width: 0.7,
              height: 2,
            },
          }}>
          <TouchableOpacity
            onPress={toggleModal}
            style={{
              width: 100,
              height: 40,
              backgroundColor: '#0F5D7F',
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'IRANYekanMobileBold',
                textAlign: 'center',
                color: 'white',
              }}>
              روز
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Jalasat')}
            style={{
              width: 100,
              height: 40,
              // backgroundColor: '#0F5D7F',
              alignItems: 'center',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#0F5D7F',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'IRANYekanMobileBold',
                textAlign: 'center',
                color: '#0F5D7F',
              }}>
              روز
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('JadvalHaftegi')}
            style={{
              width: 100,
              height: 40,
              // backgroundColor: '#0F5D7F',
              alignItems: 'center',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#0F5D7F',
            }}>
            <Text
              // onPress={() => navigation.navigate('JadvalHaftegi')}
              style={{
                fontSize: 20,
                fontSize: 20,
                fontFamily: 'IRANYekanMobileBold',
                textAlign: 'center',
                color: '#0F5D7F',
              }}>
              هفته
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('JadvalMahane')}
            style={{
              width: 100,
              height: 40,
              // backgroundColor: '#0F5D7F',
              alignItems: 'center',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#0F5D7F',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontSize: 20,
                fontFamily: 'IRANYekanMobileBold',
                textAlign: 'center',
                color: '#0F5D7F',
              }}>
              ماه
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={toggleModal}
            style={{
              width: 100,
              height: 40,
              backgroundColor: '#0F5D7F',
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'IRANYekanMobileBold',
                textAlign: 'center',
                color: 'white',
              }}>
              رده بندی
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Daraje1')}
            style={{
              width: 100,
              height: 40,
              // backgroundColor: '#0F5D7F',
              alignItems: 'center',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#0F5D7F',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontSize: 20,
                fontFamily: 'IRANYekanMobileBold',
                textAlign: 'center',
                color: '#0F5D7F',
              }}>
              درجه ۱
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              // backgroundColor: '#0F5D7F',
              alignItems: 'center',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#0F5D7F',
            }}>
            <Text
              onPress={() => navigation.navigate('Daraje2')}
              style={{
                fontSize: 20,
                fontSize: 20,
                fontFamily: 'IRANYekanMobileBold',
                textAlign: 'center',
                color: '#0F5D7F',
              }}>
              درجه 2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              // backgroundColor: '#0F5D7F',
              alignItems: 'center',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#0F5D7F',
            }}>
            <Text
              onPress={() => navigation.navigate('Daraje3')}
              style={{
                fontSize: 20,
                fontSize: 20,
                fontFamily: 'IRANYekanMobileBold',
                textAlign: 'center',
                color: '#0F5D7F',
              }}>
              درجه 3
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Menu;
