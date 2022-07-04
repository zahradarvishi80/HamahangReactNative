import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from './assets/svg/Group 174.svg';
import Logo from './assets/svg/Component 26 – 1.svg';
import Drawer from 'react-native-drawer';
import ControlPanel from './src/screen/contorolPanel/ControlPanel';
import {useNavigation} from '@react-navigation/native';
import Menu from './src/component/Menu';
export default function JadvalHaftegi() {
  var day = new Date();
  const options = {year: 'numeric', month: 'long'};
  const today = day.toLocaleDateString('fa-IR', options);
  const options1 = {
    year: 'numeric',
    month: 'long',
    // day: 'numeric',
  };
  const today1 = day.toLocaleDateString('en-IN', options1);
  const optionsDay = {day: 'numeric'};
  const DAYweek = day.toLocaleDateString('fa-IR', optionsDay);
  const navigation = useNavigation();
  const array = [
    {Day: ' ش'},
    {Day: 'ی'},
    {Day: ' د'},
    {Day: ' س'},
    {Day: 'چ'},
    {Day: ' پ'},
    {Day: 'ج'},
  ];

  const array1 = [
    {id: 1, jalase: null},
    {id: 2, jalase: null},
    {id: 3, jalase: 'مجمع ماهانه'},
    {id: 4, jalase: null},
    {id: 5, jalase: null},
    {id: 6, jalase: 'مشاوره', jalase1: 'مجمع ماهانه', jalase2: 'مجمع ماهانه'},
    {id: 7, jalase: null},
    {id: 8, jalase: null},
    {id: 9, jalase: null},
    {id: 10, jalase: null},
    {id: 11, jalase: null},
    {id: 12, jalase: null},
    {id: 13, jalase: null},
    {id: 14, jalase: null},
    {id: 15, jalase: 'مصاحبه با نیروی جدید'},
    {id: 16, jalase: null},
    {id: 17, jalase: null},
    {id: 18, jalase: null},
    {id: 19, jalase: 'مشاوره', jalase1: 'جلسه مدیران'},
    {id: 20, jalase: null},
    {id: 21, jalase: null},
    {id: 22, jalase: 'جلسه مدیران'},
    {id: 23, jalase: null},
    {id: 24, jalase: null},
    {id: 25, jalase: null},
    {id: 26, jalase: null},
    {id: 27, jalase: null},
    {id: 28, jalase: null},
    {id: 29, jalase: null},
    {id: 30, jalase: null},
    {id: null, jalase: null},
    {id: null, jalase: null},
  ];

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
            <Icon
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
            flexDirection: 'row',
            backgroundColor: 'white',
            justifyContent: 'space-between',
            marginLeft: 10,
          }}>
          <Menu />
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              flexDirection: 'column',
            }}>
            <Text
              style={{
                // marginLeft: 300,
                fontSize: 15,

                fontFamily: 'IRANYekanMobileRegular',
              }}>
              {today}
            </Text>

            <Text
              style={{
                fontSize: 14,
                fontFamily: 'IRANYekanMobileRegular',
              }}>
              {today1}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          {array.map(item => {
            return (
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: 51,
                    height: 27,
                    // marginTop: 10,
                    borderColor: 'grey',
                    backgroundColor: '#F1F7FE',
                    // backgroundColor: 'red'
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      textAlign: 'center',
                      marginTop: 5,
                      color: '#707070',
                    }}>
                    {item.Day}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}>
          {array1.map(item => {
            return (
              <View
                style={{
                  width: 51.3,
                  height: 114,
                  borderWidth: 1,
                  borderColor: '#E6E6E6',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#707070',
                    fontFamily: 'IRANYekanMobileRegular',
                  }}>
                  {item.id}
                </Text>
                <View>
                  {item.jalase === 'جلسه مدیران' ? (
                    <View
                      style={{
                        backgroundColor: '#FFEDD9',
                        width: 49,
                        height: 80,
                        marginTop: 10,
                        // borderWidth: 1,
                        // borderColor: '#FFA033',
                        borderRadius: 2,
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          textAlign: 'center',
                          marginTop: 25,
                          color: '#707070',
                        }}>
                        {item.jalase}
                        {/* {item.jalase} */}
                      </Text>
                    </View>
                  ) : item.jalase === 'مشاوره' ? (
                    <View
                      style={{
                        backgroundColor: '#FFECF2',
                        width: 49,
                        height: 20,
                        marginTop: 10,
                        // borderWidth: 1,
                        // borderColor: '#CE4847',
                        borderRadius: 2,
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          textAlign: 'center',
                          marginTop: 5,
                          color: '#707070',
                        }}>
                        {item.jalase}
                      </Text>
                      <View
                        style={{
                          backgroundColor: '#EFFFF7',
                          width: 49,
                          height: 20,
                          marginTop: 10,
                          // borderWidth: 1,
                          // borderColor: '#CE4847',
                          borderRadius: 2,
                        }}>
                        <Text
                          style={{
                            fontSize: 8,
                            textAlign: 'center',
                            marginTop: 2,
                            color: '#707070',
                          }}>
                          {item.jalase1}
                        </Text>
                      </View>
                    </View>
                  ) : item.jalase === 'مجمع ماهانه' ? (
                    <View
                      style={{
                        backgroundColor: '#EFFFF7',
                        width: 49,
                        height: 80,
                        marginTop: 10,
                        borderRadius: 2,
                        // borderWidth: 1,
                        // borderColor: '#0A7F43',
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          textAlign: 'center',
                          marginTop: 25,
                          color: '#707070',
                        }}>
                        {item.jalase}
                      </Text>
                    </View>
                  ) : item.jalase === 'مصاحبه با نیروی جدید' ? (
                    <View
                      style={{
                        backgroundColor: '#FFEF9F',
                        width: 49,
                        height: 80,
                        marginTop: 10,
                        borderRadius: 2,
                        // borderWidth: 1,
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          textAlign: 'center',
                          marginTop: 25,
                          color: '#707070',
                        }}>
                        {item.jalase}
                      </Text>
                    </View>
                  ) : (
                    <></>
                  )}
                </View>
              </View>
            );
          })}
          {/* </View> */}
        </View>
      </View>
      <View style={{position: 'absolute', bottom: 40, left: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Jalase')}
          style={{
            width: 120,
            height: 50,
            backgroundColor: '#0F5D7F',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <Text style={{color: '#FFF'}}>ساخت جلسه</Text>
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
