import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';

import Icon2 from './assets/svg/Group 174.svg';
import Logo from './assets/svg/Component 26 – 1.svg';
import Drawer from 'react-native-drawer';
import ControlPanel from './src/screen/contorolPanel/ControlPanel';

export default function News() {
  const closeControlPanel = () => {
    _drawer.close();
  };
  const openControlPanel = () => {
    _drawer.open();
  };
  const drawerStyles = {
    drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
  };

  return (
    <Drawer
      type="overlay"
      open={false}
      openDrawerOffset={1 / 2}
      tapToClose={true}
      // panCloseMask={0.2}
      closedDrawerOffset={-3}
      ref={ref => (_drawer = ref)}
      content={<ControlPanel />}
      styles={drawerStyles}
      // tweenHandler={ratio => ({
      //   main: {opacity: (2 - ratio) / 2},
      // })}
    >
      <View>
        <View style={styles.header}>
          <View
            style={{
              alignSelf: 'flex-start',
              padding: 18,
            }}>
            <Icon2
              onPress={openControlPanel}
              style={styles.icon}
              color="black"
              name="menu"
              size={20}
            />
          </View>

          <View style={styles.viewLogo}>
            <Logo height={30} width={30} fill={'#0F5D7F'} />
            <Text
              style={{
                fontFamily: 'IRANYekanMobileExtraBold',
                fontSize: 28,
                color: '#0F5D7F',
              }}>
              هماهنگـــ ...
            </Text>
          </View>
        </View>

        <View style={{flex: 1}}>
          <Text
            style={{
              color: '#707070',
              fontFamily: 'IRANYekanMobileRegular',
              marginTop: 40,
              marginLeft: 20,
              fontSize: 12,
            }}>
            ساخت پوشه جدید
          </Text>
          <View
            style={{
              flex: 3,
              // backgroundColor: 'pink',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 290,
                height: 50,
                borderWidth: 1,
                marginTop: 35,
                borderRadius: 5,
                borderColor: '#707070',
              }}>
              <TextInput
                style={{
                  width: 290,
                  height: 50,
                  color: '#707070',
                  backgroundColor: 'FCFCFC',
                }}></TextInput>

              <Text
                style={{
                  top: -63,
                  width: 42,
                  backgroundColor: 'white',
                  left: 10,
                  fontSize: 12,
                  fontFamily: 'IRANYekanMobileRegular',
                }}>
                نام پوشه
              </Text>
            </View>
            <TouchableOpacity
              // onPress={() => navigation.navigate('NavPoshe')}
              style={{
                width: 290,
                height: 50,
                backgroundColor: '#0F5D7F',
                borderRadius: 5,
                marginBottom: 90,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  margin: 10,
                  color: 'white',
                  fontFamily: 'IRANYekanMobileRegular',
                }}>
                ایجاد
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Drawer>
  );
}
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  header: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
  },

  icon: {
    padding: 15,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },

  viewLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    paddingLeft: 50,
  },
  textLogo: {
    fontFamily: 'IRANYekanMobileExtraBold',
    color: '#0F5D7F',
    fontSize: 25,
  },
});
