import React from 'react';
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from './assets/svg/Group 174.svg';
import Logo from './assets/svg/Component 26 – 1.svg';
import Drawer from 'react-native-drawer';
import ControlPanel from './src/screen/contorolPanel/ControlPanel';
import {useNavigation} from '@react-navigation/native';
import Menu from './src/component/Menu';
export default function JadvalMahane() {
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
    {Day: ' ش', id: 1},
    {Day: 'ی', id: 2},
    {Day: ' د', id: 3},
    {Day: ' س', id: 4},
    {Day: 'چ', id: 5},
    {Day: ' پ', id: 6},
    {Day: 'ج', id: 7},
  ];
  const Array = [
    {morning: 'صبح 1'},
    {morning: 'صبح 2'},
    {morning: 'صبح 3'},
    {morning: 'صبح 4'},
    {morning: 'صبح 5'},
    {morning: 'صبح 6'},
    {morning: 'صبح 7'},
    {morning: 'صبح 8'},
    {morning: 'صبح 9'},
    {morning: 'صبح 10'},
    {morning: 'صبح 11'},
    {morning: 'ظهر 12'},
    {morning: 'طهر1'},
    {morning: 'ظهر 2'},
    {morning: 'ظهر 3'},
    {morning: 'ظهر 4'},
    {morning: 'ظهر 5'},
    {morning: 'ظهر 6'},
    {morning: 'ظهر 7'},
    {morning: 'ظهر 8'},
    {morning: 'ظهر 9'},
    {morning: 'ظهر 10'},
    {morning: 'ظهر 11'},
    {morning: 'ظهر 12'},
  ];

  const Array1 = [
    {jalase: 'جلسه مدیران', subject: 'مشاوره'},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: 'جلسه مدیران', subject: 'مشاوره'},
    {jalase: null},
    {jalase: null},
    {jalase: 'مصاحبه با نیروی جدید'},
    {jalase: null},
    {jalase: null},
    {jalase: 'مشاوره'},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: 'مصاحبه با نیروی جدید'},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: 'مجمع ماهانه'},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: 'مصاحبه با نیروی جدید'},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: 'مصاحبه با نیروی جدید'},
    {jalase: 'مصاحبه با نیروی جدید'},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: 'مشاوره'},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: 'مشاوره'},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: 'مشاوره'},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: 'مشاوره'},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: 'مجمع ماهانه'},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: 'مشاوره'},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: 'مشاوره'},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: 'مجمع ماهانه'},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
    {jalase: null},
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

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            // marginLeft: 10,
            backgroundColor: '#F1F7FE',
          }}>
          {array.map((item )=> {
            return (
              // <>
              // {item.id === DAYweek ? (
              
              <View
                style={{
                  width: 43,
                  height: 35,
                  borderColor: 'grey',
                  backgroundColor: '#F1F7FE',
                }}>
                <Text
                  style={{
                    fontSize: 10,
                    textAlign: 'center',
                    color: '#707070',
                  }}>
                  {item.Day}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    textAlign: 'center',
                    marginTop: 5,
                    color: '#707070',
                  }}>
                  {item.id}
                </Text>
              </View>
            //    ):(<></>)   }
            //  </>
               )
          })}
        </View>

        <ScrollView>
          <View
            style={{
              height: 2050,
              width: '100%',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 0.98,
              }}>
              {Array.map((item, i) => {
                return (
                  <View
                    key={i}
                    style={{
                      width: 60,
                      height: 85,
                      borderWidth: 1,
                      borderColor: '#E6E6E6',
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                        textAlign: 'center',
                        marginTop: 35,
                        color: '#707070',
                      }}>
                      {item.morning}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View
              style={{
                flex: 5,
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}>
              {Array1.map(item => {
                return (
                  <View
                    style={{
                      width: 43,
                      height: 85,
                      borderWidth: 1,
                      borderColor: '#E6E6E6',
                    }}>
                    <View>
                      {item.jalase === 'جلسه مدیران' ? (
                        <View
                          style={{
                            backgroundColor: '#FFEDD9',
                            width: 41,
                            height: 20,
                            marginTop: 10,
                            borderWidth: 1,
                            borderColor: '#FFA033',
                            borderRadius: 2,
                          }}>
                          <Text
                            style={{
                              fontSize: 8,
                              textAlign: 'center',
                              marginTop: 5,
                              color: '#707070',
                            }}>
                            {item.jalase}
                            {/* {item.subject} */}
                          </Text>
                          <View
                            style={{
                              backgroundColor: '#FFECF2',
                              width: 41,
                              height: 20,
                              marginTop: 10,
                              borderWidth: 1,
                              borderColor: '#CE4847',
                              borderRadius: 2,
                            }}>
                            <Text
                              style={{
                                fontSize: 8,
                                textAlign: 'center',
                                marginTop: 5,
                                color: '#707070',
                              }}>
                              {/* {item.jalase} */}
                              {item.subject}
                            </Text>
                          </View>
                        </View>
                      ) : item.jalase === 'مشاوره' ? (
                        <View
                          style={{
                            backgroundColor: '#FFECF2',
                            width: 41,
                            height: 20,
                            marginTop: 10,
                            borderWidth: 1,
                            borderColor: '#CE4847',
                            borderRadius: 2,
                          }}>
                          <Text
                            style={{
                              fontSize: 8,
                              textAlign: 'center',
                              marginTop: 5,
                              color: '#707070',
                            }}>
                            {item.jalase}
                          </Text>
                        </View>
                      ) : item.jalase === 'مجمع ماهانه' ? (
                        <View
                          style={{
                            backgroundColor: '#EFFFF7',
                            width: 41,
                            height: 20,
                            marginTop: 10,
                            borderRadius: 2,
                            borderWidth: 1,
                            borderColor: '#0A7F43',
                          }}>
                          <Text
                            style={{
                              fontSize: 8,
                              textAlign: 'center',
                              marginTop: 5,
                              color: '#707070',
                            }}>
                            {item.jalase}
                          </Text>
                        </View>
                      ) : item.jalase === 'مصاحبه با نیروی جدید' ? (
                        <View
                          style={{
                            backgroundColor: '#F8F58F',
                            width: 41,
                            height: 30,
                            // marginTop: ,
                            borderRadius: 2,
                            borderWidth: 1,
                            borderColor: 'yellow',
                          }}>
                          <Text
                            style={{
                              fontSize: 7,
                              textAlign: 'center',
                              marginTop: 5,
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
            </View>
          </View>
        </ScrollView>
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
