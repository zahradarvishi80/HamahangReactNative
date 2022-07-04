import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from './assets/svg/Group 174.svg';
import Logo from './assets/svg/Component 26 – 1.svg';
import Menu from './src/component/Menu';
import Drawer from 'react-native-drawer';
import ControlPanel from './src/screen/contorolPanel/ControlPanel';
import TimeLine from './src/component/TimeLine';
import moment from 'jalali-moment';
import data from './json/date';
import {Datacontext} from './ContextData';
import IconAccordeon from './assets/svg/vuesax-outline-arrow-circle-down.svg';
import {Paragraph} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function Daraje1() {
  const navigation = useNavigation();
  const [selectData, setSelectData] = useContext(Datacontext);
  const [currentIndex, setCurentIndex] = useState(null);

  var date = new Date();
  console.log('sssss', date);
  let today = moment(date).locale('fa').format('YYYY/M/D');
  console.log('mmm', today);

  const CurrentDate = () => {
    data.map((item, index) => {
      <>{item.DateDay == today ? setSelectData(index) : null}</>;
    });
  };

  useEffect(() => {
    CurrentDate();
  }, []);
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
    <View style={styles.container}>
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
        <View style={styles.header}>
          <View
            style={{
              alignSelf: 'flex-start',
              padding: 18,
              //   backgroundColor: '#00000012',
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
            <Text style={styles.textLogo}> هماهنگـــ ...</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.HoritanzalScrool}>
            <View
              style={{
                // backgroundColor: '#fff',
                // width: 10,
                // height: 20,
                zIndex: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Menu />
            </View>
            <ScrollView horizontal={true} style={styles.scrollView}>
              {data.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={{marginHorizontal: 20}}
                    onPress={() => {
                      setSelectData(index);
                    }}>
                    <Text
                      style={[
                        styles.textday,
                        item.DateDay == today
                          ? {color: 'blue'}
                          : {color: 'gray'},
                      ]}>
                      {item.Day}
                    </Text>
                    <Text
                      style={[
                        styles.textday,
                        item.DateDay == today
                          ? {color: 'blue'}
                          : {color: 'gray'},
                      ]}>
                      {item.DateDay}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <View
            style={{
              width: '100%',
              height: 25,
              flexDirection: 'row',
              marginTop: 20,
              // backgroundColor: 'pink',
            }}>
            <Text
              style={{
                fontSize: 12,
                marginTop: 7,
                marginLeft: 9,
                fontFamily: 'IRANYekanMobileRegular',
              }}>
              جلسات درجه یک
            </Text>
            <View
              style={{
                width: '70%',
                borderBottomWidth: 1,
                borderBottomColor: 'red',
                marginBottom: 5,
                marginLeft: 10,
              }}></View>
          </View>

          <View style={styles.dade}>
            <View style={styles.ViewTimeLine}>
              <TimeLine />
            </View>
            <ScrollView style={styles.ViewKart}>
              {data[selectData].Meeting.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      if (item.status == 'خاتمه یافته') {
                        navigation.navigate('JalaseKhateme');
                      } else navigation.navigate('KhatemeNayafte');
                    }}>
                    <View style={{}}>
                      <View
                        style={[
                          styles.cart,
                          item.status == 'خاتمه یافته'
                            ? {backgroundColor: '#E8E8E8'}
                            : {backgroundColor: '#FFF'},
                        ]}>
                        <View
                          style={[
                            styles.ViewDegree,
                            // item.Degree == 1
                            //   ? {backgroundColor: '#3BE64C'}
                            //   : item.Degree == 2
                            //   ? {backgroundColor: '#FFA033'}
                            //   : {backgroundColor: '#E01E5A'},
                          ]}></View>

                        <View style={styles.kart}>
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: 10,
                            }}>
                            <Text>{item.Degree}</Text>
                          </View>

                          <View
                            style={{
                              flexDirection: 'column',

                              // alignItems: 'flex-start',
                              // justifyContent: 'flex-start',
                            }}>
                            <Text>{item.subject}</Text>
                            <Text>{item.caption}</Text>
                          </View>

                          <TouchableOpacity
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                            onPress={() => {
                              setCurentIndex(
                                index === currentIndex ? null : index,
                              );
                            }}>
                            <IconAccordeon></IconAccordeon>
                          </TouchableOpacity>
                        </View>
                      </View>

                      {index === currentIndex && (
                        <View
                          style={{
                            backgroundColor: '#E8E8E8',
                            borderRadius: 10,
                          }}>
                          <Text>{item.description}</Text>
                        </View>
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
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
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    // backgroundColor: '#00000012',
    height: '10%',
    backgroundColor: '#F5F5F5',
  },

  icon: {
    padding: 15,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },

  viewLogo: {
    backgroundColor: '#F5F5F5',
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
    fontSize: 30,
  },
  body: {
    flex: 8,
    backgroundColor: '#FCFCFC',
  },

  HoritanzalScrool: {
    // flex: 1,
    flexDirection: 'row',
    // marginHorizontal: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderBottomColor: '#EBEBEB',
    borderBottomWidth: 1,
  },

  dade: {
    flex: 9,
    flexDirection: 'row',
    backgroundColor: '#FCFCFC',
    padding: 10,
  },

  ViewTimeLine: {
    width: '22%',
    marginTop: 35,
  },
  ViewKart: {
    // flexGrow: 8,
    backgroundColor: '#FCFCFC',
    padding: 10,
    width: '80%',
  },
  kart: {
    flex: 9,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ViewDegree: {
    flex: 0.2,
    backgroundColor: 'red',
    // borderRadius: 2,
  },
  cart: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    borderRadius: 8,
    width: '100%',
    height: 50,
  },
});
