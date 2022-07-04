import React from 'react';

import DashedLine from 'react-native-dashed-line';
import Icone from './assets/svg/vuesax-outline-trash.svg';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon2 from './assets/svg/Group 174.svg';
import Logo from './assets/svg/Component 26 – 1.svg';
import Drawer from 'react-native-drawer';
import ControlPanel from './src/screen/contorolPanel/ControlPanel';
import {useNavigation} from '@react-navigation/native';

export default function VaredRss() {
  const navigation = useNavigation();
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

        <View
          style={{
            // flex: 3,
            // backgroundColor: 'yellow',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              width: 320,
              height: 50,
              borderWidth: 1,
              marginTop: 20,
              borderRadius: 5,
              borderColor: '#707070',
            }}>
            <TextInput
              style={{
                width: 320,
                height: 50,
                color: '#707070',
                backgroundColor: 'FCFCFC',
              }}></TextInput>

            <Text
              style={{
                top: -63,
                width: 16,
                backgroundColor: 'white',
                left: 10,
                fontSize: 13,
                fontFamily: 'IRANYekanMobileRegular',
              }}>
              نام
            </Text>
          </View>
          <View
            style={{
              width: 320,
              height: 50,
              borderWidth: 1,
              // marginTop: 10,
              borderRadius: 5,
              borderColor: '#707070',
            }}>
            <TextInput
              style={{
                width: 320,
                height: 50,
                color: '#707070',
                backgroundColor: 'FCFCFC',
              }}></TextInput>

            <Text
              style={{
                top: -63,
                width: 35,
                backgroundColor: 'white',
                left: 10,
                fontSize: 12,
                fontFamily: 'IRANYekanMobileRegular',
              }}>
              کد RSS
            </Text>
          </View>
        </View>
        {/* <View
        style={{
          flex:1.5,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        
        </View> */}
        <View
          style={
            {
              // flex: 1,
              // backgroundColor: 'orange',
              //   justifyContent: 'flex-start',
              //   alignItems: 'center',
              // marginTop: 10,
            }
          }>
          <TouchableOpacity
            onPress={() => navigation.navigate('Poshe')}
            style={{
              width: 180,
              height: 40,
              backgroundColor: '#0F5D7F',
              borderRadius: 5,
              marginTop: 16,
              marginLeft: 22,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 13,
                marginTop: 8,
                color: 'white',
                fontFamily: 'IRANYekanMobileRegular',
              }}>
              ساخت پوشه جدید
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1.3,
            // backgroundColor: 'lightblue',
            flexDirection: 'row',
            // justifyContent: 'flex-start',
            //   alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 70,
              height: 40,
              backgroundColor: '#0F5D7F',
              borderRadius: 5,
              marginTop: 30,
              marginLeft: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 7,
                color: '#FFFFFF',
                fontFamily: 'IRANYekanMobileRegular',
              }}>
              ورزشی
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 70,
              height: 40,
              backgroundColor: '#0F5D7F',
              borderRadius: 5,
              marginTop: 30,
              marginLeft: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 7,
                color: '#FFFFFF',
                fontFamily: 'IRANYekanMobileRegular',
              }}>
              سیاسی
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 70,
              height: 40,
              backgroundColor: '#0F5D7F',
              borderRadius: 5,
              marginTop: 30,
              marginLeft: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 7,
                color: '#FFFFFF',
                fontFamily: 'IRANYekanMobileRegular',
              }}>
              حوادث
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          //   flex: 2,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          // backgroundColor: 'pink',
        }}>
        <DashedLine
          axis="vertical"
          dashLength={5}
          dashColor="#FF000052"
          dashGap={5}
          style={{
            // justifyContent: 'center',
            // marginRight: -18,
            marginLeft: 55,
            height: 120,
            // marginTop:76
          }}></DashedLine>
        <DashedLine
          axis="vertical"
          dashLength={5}
          dashColor="#FF000052"
          dashGap={5}
          style={{
            // justifyContent: 'center',
            // marginRight: -18,
            marginLeft: 90,
            height: 120,
            // marginTop:76
          }}></DashedLine>

        <DashedLine
          axis="vertical"
          dashLength={5}
          dashColor="#FF000052"
          dashGap={5}
          style={{
            // justifyContent: 'center',
            // marginRight: -18,
            marginLeft: 90,
            height: 120,
            // marginTop:76
          }}></DashedLine>
      </View>
      <View
        style={{
          //   flex: 3,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          // backgroundColor: 'blue',
        }}>
        <Icone width={20} height={20} style={{marginLeft: 45, marginTop: 10}} />
        <Icone width={20} height={20} style={{marginLeft: 75, marginTop: 10}} />
        <Icone width={20} height={20} style={{marginLeft: 70, marginTop: 10}} />
      </View>

      <View
        style={{
          //   flex: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'red',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavPoshe')}
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
            ثبت
          </Text>
        </TouchableOpacity>
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
