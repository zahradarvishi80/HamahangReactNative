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
import Modal from 'react-native-modal';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';
import {Button, Checkbox, List} from 'react-native-paper';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DatePicker, {getFormatedDate} from 'react-native-modern-datepicker';
import Icon from './assets/svg/vuesax-outline-add-circle.svg';
import IconCalender from './assets/svg/vuesax-outline-calendar.svg';
import IconTik from './assets/svg/Group 347.svg';
import IconTime from './assets/svg/vuesax-outline-clock.svg';
import IconLocation from './assets/svg/vuesax-outline-location.svg';
// import Icon1 from './assest/svg/vuesax-outline-location';
import {useNavigation} from '@react-navigation/native';
import Icon2 from './assets/svg/Group 174.svg';
import Logo from './assets/svg/Component 26 – 1.svg';
import Drawer from 'react-native-drawer';
import ControlPanel from './src/screen/contorolPanel/ControlPanel';
import {NavigationContainer} from '@react-navigation/native';
export default function Jalase() {
  const navigation = useNavigation();
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [istimePickerVisible, setTimePickerVisibility] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [date, setDate] = React.useState();
  const [data, setData] = React.useState();
  const [time, setTime] = useState();
  const [result, setResult] = React.useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [expanded, setExpanded] = React.useState(true);
  const [selectedDate, setSelectedDate] = React.useState();
  const [hour, setHour] = useState('00');
  const [min, setMin] = useState('00');

  selectedDate;
  const closeControlPanel = () => {
    _drawer.close();
  };
  const openControlPanel = () => {
    _drawer.open();
  };

  useEffect(() => {
    console.log(JSON.stringify(result, null, 2));
  }, [result]);

  const ShowModal = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const ShowModal1 = () => {
    setTimePickerVisibility(!istimePickerVisible);
  };
  const handelconfirm = value => {
    setSelectedDate(value);
    console.log('Tariiiikh', selectedDate);
    // setDatePickerVisibility(!isDatePickerVisible);
  };
  const handelconfirm1 = value1 => {
    setTime(value1);
    console.log('saat', moment(time).format('hh:mm'));
  };
  const Modalpress = () => {
    setModalVisible(!isModalVisible);
  };
  const handleError = err => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };
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
              {/* <Text
                style={{
                  fontFamily: 'IRANYekanMobileExtraBold',
                  color: '#0F5D7F',
                  fontSize: 25,
                }}>
                هماهنگ...
              </Text> */}
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
              height: 35,
              borderTopColor: '#0F5D7F',
              borderBottomColor: '#0F5D7F',
              // marginBottom: 50,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                textAlign: 'center',
                color: '#0F5D7D',
                marginTop: 3,
                fontFamily: 'IRANYekanMobileRegular',
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
            <Text
              style={{
                marginTop: 10,
                marginLeft: 20,
                color: '#878787',
                fontFamily: 'IRANYekanMobileRegular',
              }}>
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
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 5,
                    alignItems: 'center',
                    marginLeft: 20,
                    // marginRight: 10,
                    width: 135,
                    marginTop: 20,
                    borderColor: '#0F5D7F',
                  }}>
                  <TextInput
                    style={{
                      width: 135,
                      height: 45,
                    }}></TextInput>
                  <Text
                    style={{
                      direction: 'ltr',
                      top: -60,
                      backgroundColor: 'white',
                      right: 40,
                      fontFamily: 'IRANYekanMobileRegular',
                    }}>
                    عنوان
                  </Text>
                </View>

                <View
                  style={{
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 5,
                    alignItems: 'center',
                    // marginLeft: 10,
                    marginRight: 20,
                    width: 135,
                    marginTop: 20,
                    borderColor: '#0F5D7F',
                  }}>
                  <TextInput
                    style={{
                      width: 135,
                      height: 45,
                    }}></TextInput>
                  <Text
                    style={{
                      top: -58,
                      backgroundColor: 'white',
                      right: 20,
                      fontFamily: 'IRANYekanMobileRegular',
                    }}>
                    کد جلسه پیرو
                  </Text>
                </View>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View
                  style={{
                    width: 280,
                    height: 100,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: 'center',
                    // marginLeft: 25,
                    // marginRight: 25,
                    marginTop: 20,
                    direction: 'rtl',
                    borderColor: '#0F5D7F',
                  }}>
                  <TextInput
                    style={{
                      width: 270,
                      height: 100,
                    }}></TextInput>
                  <Text
                    style={{
                      direction: 'rtl',
                      top: -113,
                      backgroundColor: 'white',
                      fontFamily: 'IRANYekanMobileRegular',
                      right: 90,
                    }}>
                    توضیحات
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginBottom: 10,
                }}>
                <Button
                  style={{
                    width: 110,
                    height: 40,
                    marginTop: 20,
                    backgroundColor: '#0F5D7D',
                  }}
                  onPress={ShowModal1}
                  mode="contained">
                  <Text>{moment(time).format('hh:mm')}</Text>
                </Button>
                <DateTimePickerModal
                  isVisible={istimePickerVisible}
                  onCancel={ShowModal1}
                  onConfirm={handelconfirm1}
                  // time={time}
                  mode="time"
                />

                {/* <TouchableOpacity
                  style={{
                    width: 110,
                    height: 40,
                    borderRadius: 10,
                    marginTop: 20,
                    backgroundColor: '#0F5D7D',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={ShowModal1}
                  mode="contained">
                  <IconTime width={30} height={25} fill={'white'} />
                  {/* <Text>{moment(time).format('hh:mm')}</Text> */}
                {/* </TouchableOpacity> */}
                {/* <DateTimePickerModal
                  isVisible={istimePickerVisible}
                  onCancel={ShowModal1}
                  onConfirm={handelconfirm1}
                  // time={time}
                  mode="time"
                />  */}

                {/* <Modal
                  style={{justifyContent: 'flex-start', alignItems: 'center'}}
                  isVisible={istimePickerVisible}>
                  <View
                    style={{
                      width: '90%',
                      height: 300,
                      borderRadius: 20,
                      top: 120,
                      backgroundColor: '#FFF',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <DatePicker
                      mode="time"
                      minuteInterval={3}
                      onTimeChange={selectedTime => setTime(selectedTime)}
                    /> */}
                {/* <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: 20,
                      }}>
                      <View>
                        <TouchableOpacity
                          onPress={() => console.log('صبح')}
                          style={{
                            width: 80,
                            height: 40,
                            backgroundColor: '#F3F3F3',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: '#E01E5A',
                            marginVertical: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{color: '#E01E5A'}}>صبح</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => console.log('ظهر')}
                          style={{
                            width: 80,
                            height: 40,
                            backgroundColor: '#F3F3F3',
                            borderRadius: 10,
                            borderColor: '#000',
                            borderWidth: 1,
                            borderColor: '#E01E5A',
                            marginVertical: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{color: '#E01E5A'}}>ظهر</Text>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text
                          style={{
                            fontSize: 45,
                            marginVertical: 40,

                            color: '#707070',
                          }}>
                          00
                        </Text>
                        <Text
                          style={{
                            fontSize: 45,
                            marginVertical: 40,

                            color: '#707070',
                          }}>
                          :
                        </Text>
                        <TextInput
                          keyboardType="numeric"
                          value={hour}
                          onChangeText={value => setHour(value)}
                          style={{
                            fontSize: 45,
                            marginVertical: 40,

                            color: '#707070',
                          }}></TextInput>
                      </View>
                    </View> */}

                {/* <IconTik onPress={ShowModal1} /> */}
                {/* </View>
                </Modal> */}

                <TouchableOpacity
                  style={{
                    width: 110,
                    height: 40,
                    borderRadius: 5,
                    marginTop: 20,
                    backgroundColor: '#0F5D7F',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={ShowModal}
                  mode="contained">
                  {/* <IconCalender width={30} height={25} fill={'white'} /> */}
                  {/* {handelconfirm ? (
                    <Text style={{color: '#FFF'}}>{selectedDate}</Text>
                  ) : (
                    <IconCalender width={30} height={30} fill={'white'} />
                  )} */}
                </TouchableOpacity>

                <Modal
                  style={{justifyContent: 'flex-start', alignItems: 'center'}}
                  isVisible={isDatePickerVisible}>
                  <View style={{width: '90%'}}>
                    <DatePicker
                      onSelectedChange={handelconfirm}
                      isGregorian={false}
                      options={{
                        defaultFont: 'Shabnam-Light',
                        headerFont: 'Shabnam-Medium',
                      }}
                      mode="Calendar"
                      selected={getFormatedDate(new Date(), 'jYYYY/jMM/jDD')}
                      style={{borderRadius: 30, top: 120}}>
                      <Text>{moment(time).format('jYYYY/jMM/jDD')}</Text>
                    </DatePicker>
                    <View style={{marginTop: 5}}>
                      <TouchableOpacity
                        onPress={ShowModal}
                        style={{
                          width: 80,
                          height: 30,
                          borderRadius: 10,

                          backgroundColor: '#51CFFF',
                          // top: 300,
                          position: 'absolute',
                          top: 80,
                          left: 100,
                          right: 100,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text style={{color: '#FFF'}}>انتخاب</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Map');
                }}>
                {/* <Icon1 width={30} height={30} fill={'black'} /> */}

                <View
                  style={{
                    width: '84%',
                    height: 50,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 15,
                    marginLeft: 25,
                    marginRight: 25,
                  }}>
                  <Text
                    style={{
                      top: -5,
                      backgroundColor: 'white',
                      right: 90,
                    }}>
                    موقعیت مکانی
                  </Text>
                  <IconLocation style={{left: 100, marginBottom: 20}} />
                </View>
              </TouchableOpacity>

              <Text
                style={{
                  color: '#878787',
                  marginTop: 10,
                  marginLeft: 20,
                  marginBottom: 10,
                }}>
                درجه بندی
              </Text>
              <View
                style={{
                  width: 270,
                  height: 50,
                  borderColor: 'gray',
                  borderWidth: 1,
                  borderRadius: 4,
                  // marginTop: 10,
                  marginLeft: 25,
                  marginRight: 25,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <Checkbox
                  status={checked3 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked3(!checked);
                  }}
                />

                <Text style={{marginTop: 10, fontSize: 10}}>یک</Text>

                <Checkbox
                  status={checked2 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked2(!checked);
                  }}
                />
                <Text style={{marginTop: 10, fontSize: 10}}>دو</Text>

                <Checkbox
                  status={checked1 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked1(!checked);
                  }}
                />
                <Text style={{marginTop: 10, fontSize: 10}}>سه</Text>

                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text style={{marginTop: 10, fontSize: 10}}>
                  جلسه محرمانه است
                </Text>
              </View>

              <List.Section title="فایل جلسات">
                {/* <List.Accordion
            // onPress={() => navigation.navigate('Upload')}
             style={{
            marginLeft: 25,
            marginRight: 25,
            fontSize: 69,
            width: 270,
            height: 45,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            backgroundColor: '#0F5D7D',
            marginTop: 10,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
              }}
              >
            
              <List.Item title="First item" />
              <List.Item title="First item" />
            </List.Accordion> */}

                <TouchableOpacity
                  style={{
                    marginLeft: 25,
                    marginRight: 25,
                    fontSize: 69,
                    width: 270,
                    height: 45,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    backgroundColor: '#0F5D7D',
                    marginTop: 10,
                    marginBottom: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  title="open picker for multi file selection"
                  onPress={() => {
                    DocumentPicker.pickMultiple()
                      .then(setResult)
                      .catch(handleError);
                  }}>
                  <Icon width={30} height={30} fill={'white'} />
                </TouchableOpacity>
                <Text selectable>{JSON.stringify(result, null, 2)}</Text>
              </List.Section>

              <Text
                style={{
                  color: '#878787',
                  marginTop: 10,
                  marginBottom: 10,
                  marginLeft: 20,
                }}>
                اعضای جلسه
              </Text>
              <TouchableOpacity
                onPress={Modalpress}
                style={{
                  marginLeft: 25,
                  marginRight: 25,
                  fontSize: 69,
                  width: 270,
                  height: 45,

                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  backgroundColor: '#0F5D7D',
                  marginTop: 10,
                  marginBottom: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon width={30} height={30} fill={'white'} />
              </TouchableOpacity>
              {/* <Text>khsdrofiaherwiofgahrio</Text>
              <Text>khsdrofiaherwiofgahrio</Text>
              <Text>khsdrofiaherwiofgahrio</Text>
              <Text>khsdrofiaherwiofgahrio</Text>
              <Text>khsdrofiaherwiofgahrio</Text> */}

              <TouchableOpacity
                // onPress={Modalpress}
                style={{
                  marginLeft: 25,
                  marginRight: 25,
                  fontSize: 69,
                  width: 270,
                  height: 45,
                  top: 20,
                  // bottom: 100,
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  backgroundColor: '#0F5D7D',
                  marginTop: 10,
                  marginBottom: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#FFF'}}> ساخت جلسه</Text>
              </TouchableOpacity>

              <Text></Text>
              <Text></Text>

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
                    height: 320,
                    marginLeft: 35,
                    marginRight: 40,
                    marginTop: 260,
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
                      marginTop: 10,
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
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        height: 50,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: 'center',
                        marginLeft: 20,
                        marginRight: 5,
                        // marginRight: 10,
                        width: 130,
                        marginTop: 20,
                      }}>
                      <TextInput
                        style={{
                          width: 130,
                          height: 45,
                        }}></TextInput>
                      <Text
                        style={{
                          direction: 'ltr',
                          top: -58,
                          backgroundColor: 'white',
                          right: 40,
                        }}>
                        سمت
                      </Text>
                    </View>

                    <View
                      style={{
                        height: 50,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: 'center',
                        // marginLeft: 10,
                        marginRight: 20,
                        marginLeft: 5,
                        width: 130,
                        marginTop: 20,
                      }}>
                      <TextInput
                        style={{
                          width: 130,
                          height: 45,
                        }}></TextInput>
                      <Text
                        style={{
                          top: -58,
                          backgroundColor: 'white',
                          right: 35,
                        }}>
                        سازمان
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      width: 270,
                      height: 50,
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
                  <Button
                    mode="contained"
                    onPress={Modalpress}
                    style={{
                      fontSize: 69,
                      // borderTopRightRadius: 10,
                      // borderTopLeftRadius: 10,
                      width: 270,
                      height: 45,
                      backgroundColor: '#0F5D7D',
                      marginTop: 30,
                      marginBottom: 30,
                      // marginLeft: 5,
                      // marginRight: 25,
                    }}>
                    ثبت
                  </Button>
                </View>
              </Modal>
              <TouchableOpacity
                style={{
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  width: 270,
                  height: 45,
                  backgroundColor: '#0F5D7D',
                  marginBottom: 30,
                  marginLeft: 25,
                  marginRight: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#FFF'}}> ساخت جلسه</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Drawer>
    </View>
  );
}
