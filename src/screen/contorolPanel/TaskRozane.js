import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  alert,
  Alert,
} from 'react-native';
import Icon from '../../../assets/svg/Group 174.svg';
import Logo from '../../../assets/svg/Component 26 – 1.svg';
import Drawer from 'react-native-drawer';
import Modal from 'react-native-modal';
import ControlPanel from './ControlPanel';
import moment from 'jalali-moment';
import data from '../../../json/date';
import {Datacontext} from '../../../ContextData';

import TimeLineTask from '../../component/TimelineTask';
import IconTrash from '../../../assets/svg/vuesax-outline-trash.svg';

import IconCalender from '../../../assets/svg/vuesax-outline-calendar.svg';
import IconTime from '../../../assets/svg/vuesax-outline-clock.svg';
import {CheckBox} from 'react-native-elements';

export default function TaskRozane() {
  const [selectData, setSelectData] = React.useContext(Datacontext);
  const [list, setList] = React.useState(data);
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [check1, setCheck1] = React.useState(false);

  var date = new Date();
  console.log('sssss', date);
  let today = moment(date).locale('fa').format('YYYY/M/D');
  console.log('mmm', today);

  const CurrentDate = () => {
    list.map((item, index) => {
      <>{item.DateDay == today ? setSelectData(index) : null}</>;
    });
  };

  React.useEffect(() => {
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

  const Modalpress = () => {
    setModalVisible(!isModalVisible);
  };

  deletItem = Code => {
    // Alert.alert(Code);
    // let result = list.filter((val, i) => val.Code != Code);
    // setList(result);
    var array = [...list]; // make a separate copy of the array
    var index = array.indexOf(Code.target.value);
    if (index !== -1) {
      array.splice(index, 1);
      setList(array);
    }
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
          <Text style={styles.textLogo}>  هماهنگـــ ...</Text>
        </View>
      </View>
      <View style={styles.HoritanzalScrool}>
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
      <ScrollView style={styles.body}>
        <View style={styles.dade}>
          <View style={styles.ViewTimeLine}>
            <TimeLineTask />
          </View>
          <View style={styles.ViewKart}>
            {list[selectData].Meeting.map((item, index) => {
              return (
                <View style={{}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#FFFFFF',
                      marginVertical: 10,
                      borderRadius: 8,
                      width: '100%',
                      height: 50,
                      shadowColor: 'blue',
                      shadowOpacity: 0.75,
                      shadowRadius: 30,
                      elevation: 3,

                      shadowOffset: {
                        width: 0.7,
                        height: 2,
                      },
                    }}>
                    <View style={styles.kart}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 10,
                        }}>
                        <TouchableOpacity onPress={() => deletItem(item.Code)}>
                          <IconTrash />
                        </TouchableOpacity>
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

                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <CheckBox
                          checked={check1}
                          onPress={() => setCheck1(!check1)}
                          uncheckedColor="#0F5D7F"
                          size={15}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
            {/* <MyComponent /> */}
          </View>
        </View>
      </ScrollView>
      <View style={{position: 'absolute', bottom: 40, left: 20}}>
        <TouchableOpacity
          onPress={() => Modalpress()}
          style={{
            width: 120,
            height: 50,
            backgroundColor: '#0F5D7F',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <Text style={{color: '#FFF'}}>ایجاد برنامه</Text>
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
              width: 310,
              height: 400,
              marginLeft: 35,
              marginRight: 40,
              marginBottom: 100,
              backgroundColor: 'white',
              borderRadius: 6,
              padding: 35,
              alignItems: 'center',
              justifyContent: 'center',
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
                width: 270,
                height: 50,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: 'center',
                marginTop: 60,
                marginLeft: 10,
                marginRight: 10,
              }}>
              <TextInput
                style={{
                  width: '80%',
                  height: 45,
                }}></TextInput>
              <Text
                style={{
                  top: -58,
                  backgroundColor: 'white',
                  right: 75,
                }}>
                نام ونام خانوادگی
              </Text>
            </View>

            <View
              style={{
                width: 270,
                height: 100,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: 'center',
                marginTop: 20,
                marginLeft: 10,
                marginRight: 10,
              }}>
              <TextInput
                style={{
                  width: '80%',
                  height: 45,
                }}></TextInput>
              <Text
                style={{
                  top: -58,
                  backgroundColor: 'white',
                  right: 90,
                }}>
                توضیحات
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  height: 50,
                  borderWidth: 2,
                  borderRadius: 8,
                  alignItems: 'center',
                  marginLeft: 20,
                  marginRight: 5,
                  borderColor: '#0F5D7F',
                  width: 120,
                  marginTop: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconTime width={30} height={25} fill={'#0F5D7F'} />
              </View>

              <View
                style={{
                  height: 50,
                  borderWidth: 2,
                  borderRadius: 8,
                  alignItems: 'center',
                  borderColor: '#0F5D7F',
                  marginRight: 20,
                  marginLeft: 5,
                  width: 130,
                  marginTop: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconCalender width={30} height={25} fill={'#0F5D7F'} />
              </View>
            </View>

            <TouchableOpacity
              mode="contained"
              onPress={Modalpress}
              style={{
                fontSize: 69,
                // borderTopRightRadius: 10,
                // borderTopLeftRadius: 10,
                width: 270,
                height: 45,
                borderRadius: 5,
                backgroundColor: '#0F5D7D',
                marginTop: 30,
                marginBottom: 30,
                justifyContent: 'center',
                alignItems: 'center',
                // marginLeft: 5,
                // marginRight: 25,
              }}>
              <Text style={{color: '#FFF', fontSize: 20}}>ثبت</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
    height: '10%',
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
  body: {
    height: '80%',
    backgroundColor: '#FCFCFC',
  },
  HoritanzalScrool: {
    height: '10%',
    backgroundColor: '#FCFCFC',
    borderWidth: 1,
    borderColor: '#EBEBEB',

    padding: 10,
    // marginHorizontal: 20,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
  },
  scrollView: {},
  dade: {
    flex: 9,
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
});
