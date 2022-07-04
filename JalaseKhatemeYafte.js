import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Animated,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon2 from './assets/svg/Group 174.svg';
import Logo from './assets/svg/Component 26 – 1.svg';
import Drawer from 'react-native-drawer';
import ControlPanel from './ControlPanel';
export default function JalaseKhateme() {
  const navigation = useNavigation();

  const closeControlPanel = () => {
    _drawer.close();
  };
  const openControlPanel = () => {
    _drawer.open();
  };

  useEffect(() => {}, []);

  return (
    <View style={{height: '100%'}}>
      <Drawer
        type="overlay"
        open={false}
        openDrawerOffset={1 / 2}
        tapToClose={true}
        // panCloseMask={0.2}
        closedDrawerOffset={-3}
        ref={ref => (_drawer = ref)}
        content={<ControlPanel />}
        // styles={drawerStyles}
        // tweenHandler={ratio => ({
        //   main: {opacity: (2 - ratio) / 2},
        // })}
      >
        <View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#F5F5F5',
            }}>
            <View
              style={{
                alignSelf: 'flex-start',
                padding: 18,
              }}>
              <Icon2
                onPress={openControlPanel}
                style={{
                  padding: 15,
                  alignItems: 'flex-start',
                  alignSelf: 'flex-start',
                }}
                color="black"
                name="menu"
                size={20}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                padding: 10,
                paddingLeft: 50,
              }}>
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

          <View
            style={{
              backgroundColor: '#FFF',
              borderWidth: 1,
              height: 30,

              // marginBottom: 50,
            }}>
            <Text
              style={{
                fontSize: 17,
                color: 'white',
                textAlign: 'center',
                color: '#0F5D7D',
              }}>
              ساخت جلسه
            </Text>
          </View>
          <ScrollView
          // contentContainerStyle={{
          //   alignItems: 'center',
          //   justifyContent: 'center',
          // }}
          >
            <Text style={{marginTop: 10, marginLeft: 20, color: '#878787'}}>
              کد جلسه:1024
            </Text>

            <View
              style={{
                backgroundColor: 'white',
                height: '100%',
                // width: '80%',
                // alignItems: 'center',
                // justifyContent: 'center',
                marginTop: 10,
                marginLeft: 20,
                marginRight: 20,
              }}>
              <TouchableOpacity
                mode="contained"
                style={{
                  fontSize: 69,
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  width: 270,
                  height: 45,
                  backgroundColor: '#0F5D7D',
                  // marginTop: 10,
                  marginBottom: 30,
                  marginLeft: 25,
                  marginRight: 25,
                }}>
                <Text> ساخت جلسه</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Drawer>
    </View>
  );
}
