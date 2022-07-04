import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import Icon from './assets/svg/Group 174.svg';
import Logo from './assets/svg/Component 26 – 1.svg';
import Menu from './src/component/Menu';
import moment from 'jalali-moment';
import data from './json/date';
import {Datacontext} from './ContextData';
import IconAccordeon from './assets/svg/vuesax-outline-arrow-circle-down.svg';
import TimeLine from './src/component/TimeLine';
import {Paragraph} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon2 from './assets/svg/Group 201.svg';
const MainView = props => {
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          onPress={props.OpenContorol}
          style={styles.icon}
          color="black"
          name="menu"
          size={15}
        />

        <View style={styles.viewLogo}>
          <Logo height={30} width={30} fill={'#0F5D7F'} />
          <Text
            style={{
              fontFamily: 'IRANYekanMobileExtraBold',
              fontSize: 25,
              color: '#0F5D7F',
            }}>
            هماهنگـــ ...
          </Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.HoritanzalScrool}>
          <View
            style={{
              // backgroundColor: 'red',
              // width: 10,
              // height: 20,
              // zIndex: 100,
              justifyContent: 'center',
              alignItems: 'center',
              // marginLeft: 20,
              padding: 20,
            }}>
            <Menu />
          </View>

          <ScrollView horizontal={true} style={styles.scrollView}>
            {/* <View style={{width: 100, borderBottomColor: 'grey',}}></View> */}
            {data.map((item, index) => {
              return (
                <TouchableOpacity
                  style={{marginHorizontal: 30}}
                  onPress={() => {
                    setSelectData(index);
                  }}>
                  <Text
                    style={[
                      styles.textday,
                      item.DateDay == today ? {color: 'blue'} : {color: 'gray'},
                    ]}>
                    {item.Day}
                  </Text>
                  <Text
                    style={[
                      styles.textday,
                      item.DateDay == today ? {color: 'blue'} : {color: 'gray'},
                    ]}>
                    {item.DateDay}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.dade}>
          <View style={styles.ViewTimeLine}>
            <TimeLine />
          </View>
          <ScrollView style={styles.ViewKart}>
            {data[selectData].Meeting.map((item, index) => {
              return (
                <>
                  {item == null ? (
                    <Icon2 width={80} height={90} />
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        if (item.status == 'خاتمه یافته') {
                          navigation.navigate('JalaseKhateme');
                        } else navigation.navigate('KhatemeNayafte');
                      }}>
                      <View>
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
                              item.Degree == 1
                                ? {backgroundColor: '#3BE64C'}
                                : item.Degree == 2
                                ? {backgroundColor: '#FFA033'}
                                : {backgroundColor: '#E01E5A'},
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
                              width: 300,
                              height: 100,
                              borderRadius: 5,
                            }}>
                            <Text style={{fontSize: 12}}>
                              {item.description}
                            </Text>
                          </View>
                        )}
                      </View>
                    </TouchableOpacity>
                  )}
                </>
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
    </View>
  );
};
export default MainView;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
  },
  header: {
    height: '10%',
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  body: {
    height: '100%',
    backgroundColor: '#FCFCFC',
  },
  icon: {
    padding: 18,
    marginLeft: 20,
    alignSelf: 'center',
  },

  viewLogo: {
    flexDirection: 'row',
    marginLeft: 80,
    alignItems: 'center',
    alignSelf: 'center',
  },
  textLogo: {
    fontFamily: 'IRANYekanMobileExtraBold',
    color: '#0F5D7F',
    fontSize: 25,
  },
  HoritanzalScrool: {
    // height: '10%',
    flexDirection: 'row',
    // marginHorizontal: 20,

    justifyContent: 'space-around',
    // alignItems: 'space-around',
    // backgroundColor: 'pink',
    width: '100%',
    height: 50,
  },
  scrollView: {
    // padding: 20,
    // marginLeft: 50,
  },
  dade: {
    // flex: 9,
    flexDirection: 'row',
    backgroundColor: '#FCFCFC',
    padding: 10,
  },
  textday: {
    // marginHorizontal: 30,
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
    backgroundColor: 'yellow',
    // borderRadius: 2,
  },
  cart: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    borderRadius: 8,
    width: '100%',
    height: 60,
    shadowColor: 'blue',
    shadowOpacity: 0.75,
    shadowRadius: 30,
    elevation: 5,
  },
});
