import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Iconfilter from '../../assets/svg/Group 285.svg';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import {CheckBox, Icon} from 'react-native-elements';
const Menu = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [check1, setCheck1] = React.useState(false);
  const [check2, setCheck2] = React.useState(false);
  const [check3, setCheck3] = React.useState(false);
  const [check4, setCheck4] = React.useState(false);
  const [check5, setCheck5] = React.useState(false);
  const [check6, setCheck6] = React.useState(false);
  const [check7, setCheck7] = React.useState(false);
  const [check8, setCheck8] = React.useState(false);
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
            height: 560,

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

          <View
            // onPress={() => navigation.navigate('Jalasat')}
            style={{
              width: 100,
              height: 50,
              // backgroundColor: '#0F5D7F',
              alignItems: 'center',
              // borderRadius: 8,
              // borderWidth: 1,
              // borderColor: '#0F5D7F',
              flexDirection: 'row',
              justifyContent: 'center',
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
            <CheckBox
              checked={check1}
              onPress={() => setCheck1(!check1)}
              uncheckedColor="#0F5D7F"
              size={15}
            />
          </View>
          <View
            // onPress={() => navigation.navigate('JadvalHaftegi')}
            style={{
              width: 100,
              height: 50,
              // backgroundColor: '#0F5D7F',
              alignItems: 'center',
              // borderRadius: 8,
              // borderWidth: 1,
              // borderColor: '#0F5D7F',
              flexDirection: 'row',
              justifyContent: 'center',
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
              ماه
            </Text>
            <CheckBox
              checked={check2}
              onPress={() => setCheck2(!check2)}
              uncheckedColor="#0F5D7F"
              size={15}
            />
          </View>
          <View
            // onPress={() => navigation.navigate('JadvalMahane')}
            style={{
              width: 100,
              height: 50,
              // backgroundColor: '#0F5D7F',
              alignItems: 'center',
              // borderRadius: 8,
              // borderWidth: 1,
              // borderColor: '#0F5D7F',
              flexDirection: 'row',
              justifyContent: 'center',
              // marginLeft: 0.1,
              marginRight: 5,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontSize: 20,
                fontFamily: 'IRANYekanMobileBold',
                textAlign: 'center',
                color: '#0F5D7F',
              }}>
              سال
            </Text>
            <CheckBox
              checked={check3}
              onPress={() => setCheck3(!check3)}
              uncheckedColor="#0F5D7F"
              size={15}
            />
          </View>
          {/* <View
            // onPress={() => navigation.navigate('JadvalMahane')}
            style={{
              width: 100,
              height: 50,
              // backgroundColor: '#0F5D7F',
              alignItems: 'center',
              // borderRadius: 8,
              // borderWidth: 1,
              // borderColor: '#0F5D7F',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontSize: 20,
                fontFamily: 'IRANYekanMobileBold',
                textAlign: 'center',
                color: '#0F5D7F',
              }}>
              محرمانه
            </Text>
            <CheckBox
              checked={check1}
              onPress={() => setCheck1(!check1)}
              uncheckedColor="#0F5D7F"
              size={15}
            />
          </View> */}

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
          <View
            // onPress={() => navigation.navigate('Daraje1')}
            style={{
              width: 100,
              height: 50,
              // backgroundColor: '#0F5D7F',
              alignItems: 'center',
              // borderRadius: 8,
              // borderWidth: 1,
              // borderColor: '#0F5D7F',
              flexDirection: 'row',
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
            <CheckBox
              checked={check4}
              onPress={() => setCheck4(!check4)}
              uncheckedColor="#0F5D7F"
              size={15}
            />
          </View>
          <View
            style={{
              width: 100,
              height: 50,
              // backgroundColor: '#0F5D7F',
              alignItems: 'center',
              // borderRadius: 8,
              // borderWidth: 1,  flexDirection: 'row',
              // borderColor: '#0F5D7F',
              flexDirection: 'row',
              marginRight: 7,
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
            <CheckBox
              checked={check5}
              onPress={() => setCheck5(!check5)}
              uncheckedColor="#0F5D7F"
              size={15}
            />
          </View>
          <View
            style={{
              width: 100,
              height: 50,
              // backgroundColor: '#0F5D7F',
              alignItems: 'center',
              // borderRadius: 8,
              // borderWidth: 1,
              // borderColor: '#0F5D7F',
              flexDirection: 'row',
              marginRight: 10,
            }}>
            <Text
              // onPress={() => navigation.navigate('Daraje3')}
              style={{
                fontSize: 20,
                fontSize: 20,
                fontFamily: 'IRANYekanMobileBold',
                textAlign: 'center',
                color: '#0F5D7F',
              }}>
              درجه 3
            </Text>
            <CheckBox
              checked={check6}
              onPress={() => setCheck6(!check6)}
              uncheckedColor="#0F5D7F"
              size={15}
            />
          </View>
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
              فرمت
            </Text>
          </TouchableOpacity>
          <View
            onPress={() => navigation.navigate('Daraje1')}
            style={{
              width: 100,
              height: 50,
              // backgroundColor: '#0F5D7F',
              alignItems: 'center',
              // borderRadius: 8,
              // borderWidth: 1,
              // borderColor: '#0F5D7F',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontSize: 20,
                fontFamily: 'IRANYekanMobileBold',
                textAlign: 'center',
                color: '#0F5D7F',
              }}>
              اکسل
            </Text>
            <CheckBox
              checked={check7}
              onPress={() => setCheck7(!check7)}
              uncheckedColor="#0F5D7F"
              size={15}
            />
          </View>
          <View
            style={{
              width: 100,
              height: 50,
              // backgroundColor: '#0F5D7F',
              alignItems: 'center',
              // borderRadius: 8,
              // borderWidth: 1,
              // borderColor: '#0F5D7F',
              flexDirection: 'row',
              marginLeft: 17,
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
              PDF
            </Text>
            <CheckBox
              checked={check8}
              onPress={() => setCheck8(!check8)}
              uncheckedColor="#0F5D7F"
              size={15}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Menu;
