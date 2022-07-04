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

export default function EditJalase() {
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                height: 50,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: 'center',
                marginLeft: 20,
                // marginRight: 10,
                width: 135,
                marginTop: 20,
              }}>
              <TextInput
                style={{
                  width: 135,
                  height: 45,
                }}></TextInput>
              <Text
                style={{
                  direction: 'ltr',
                  top: -58,
                  backgroundColor: 'white',
                  right: 20,
                }}>
                رمز عبور
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
                width: 135,
                marginTop: 20,
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
                  right: 10,
                }}>
                کد جلسه پیرو
              </Text>
            </View>
          </View>

          <View
            style={{
              width: 280,
              height: 100,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              marginLeft: 25,
              marginRight: 25,
              marginTop: 20,
              direction: 'rtl',
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
                right: 90,
              }}>
              توضیحات
            </Text>
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
              <IconCalender width={30} height={25} fill={'white'} />
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
                  style={{borderRadius: 30, top: 120}}
                />

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

          <TouchableOpacity>
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
            <Text style={{marginTop: 10, fontSize: 10}}>جلسه محرمانه است</Text>
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
            <Text> dsfsdf</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
