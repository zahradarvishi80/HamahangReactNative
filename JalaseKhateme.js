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
import IconFlesh from 'react-native-vector-icons/AntDesign';
import Icondownload from './assets/svg/vuesax-outline-receive-square.svg';
import Drawer from 'react-native-drawer';
import ControlPanel from './src/screen/contorolPanel/ControlPanel';
import IconLocation from './assets/svg/vuesax-outline-location.svg';
import IconDrap from './assets/svg/vuesax-outline-arrow-circle-down.svg';
import IconAdd from './assets/svg/vuesax-outline-add-circle.svg';
import IconImport from './assets/svg/vuesax-outline-import.svg';
import Modal from 'react-native-modal';
import {Accordion, NativeBaseProvider, Center, Box} from 'native-base';

export default function JalaseKhateme(index) {
  const [currentIndex, setCurentIndex] = useState(null);
  const [currentToch, setCurrentToch] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const closeControlPanel = () => {
    _drawer.close();
  };
  const openControlPanel = () => {
    _drawer.open();
  };

  const Modalpress = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {}, []);

  return (
    <View style={{flex: 1}}>
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
        <View style={{flex: 1}}>
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
              height: 40,
              flexDirection: 'row',
              alignItems: 'center',
              borderColor: '#0F5D7F',
              // marginBottom: 50,
            }}>
            <IconImport style={{marginLeft: 10}} />
            <Text
              style={{
                fontSize: 17,
                marginLeft: 100,
                marginRight: 100,
                color: '#0F5D7D',
              }}>
              کدجلسه:۱۰۲۴
            </Text>
          </View>
          <ScrollView
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                // flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'space-between',
                // backgroundColor: 'red',
                width: '100%',
              }}>
              <Text
                style={{
                  fontSize: 17,
                  alignSelf: 'flex-start',
                  marginTop: 10,
                  marginLeft: 20,
                  color: '#878787',
                }}>
                بررسی ناحیه
              </Text>
              <Text
                style={{
                  alignSelf: 'flex-end',
                  marginTop: 10,
                  marginRight: 10,
                  color: '#878787',
                }}>
                درجه۲-محرمانه
              </Text>
            </View>
            <TouchableOpacity
              style={{alignSelf: 'flex-start'}}
              onPress={() => {
                setCurentIndex(index === currentIndex ? null : index);
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  marginLeft: 20,
                  marginTop: 5,
                }}>
                <Text style={{color: '#0F5D7F'}}>جلسه پیرو</Text>
                <IconFlesh name="left" color="#0F5D7F" />
              </View>
            </TouchableOpacity>

            <View
              style={{
                marginTop: 8,
                borderWidth: 1,
                width: '90%',
                borderColor: '#0F5D7F',
              }}></View>
            {index === currentIndex && (
              <View
                style={{
                  width: '90%',
                  height: 250,
                  backgroundColor: '#FFFFFF',
                  marginTop: 13,
                  shadowColor: 'blue',
                  shadowOpacity: 0.75,
                  shadowRadius: 30,
                  elevation: 5,
                  // shadowOffset: {
                  //   width: 0.7,
                  //   height: 2,
                  // },
                  //   alignItems: 'center',
                }}>
                <View style={{alignItems: 'center'}}>
                  <Text style={{padding: 10}}>
                    دراین قسمت توضیحاتی در جلسه گذشته نوشته می شوداین قسمت
                    توضیحاتی در جلسه گذشته نوشته میشود
                  </Text>

                  <View
                    style={{
                      borderWidth: 1,
                      width: '90%',
                      borderColor: '#E8E8E8',
                    }}></View>
                </View>
                {/* ////////////////////////////////// */}
                <View style={{alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',

                      padding: 20,
                      justifyContent: 'space-between',
                      alignSelf: 'flex-start',
                    }}>
                    <Text>name.pdf-۱</Text>
                    <Icondownload style={{marginLeft: 200}} />
                  </View>

                  <View
                    style={{
                      borderWidth: 1,
                      width: '90%',
                      borderColor: '#E8E8E8',
                    }}></View>
                </View>
                {/* //////////////////////////////////// */}
                <View style={{alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',

                      padding: 20,
                      justifyContent: 'space-between',
                      alignSelf: 'flex-start',
                    }}>
                    <Text>name.pdf-۱</Text>
                    <Icondownload style={{marginLeft: 200}} />
                  </View>
                  <View
                    style={{
                      borderWidth: 1,
                      width: '90%',
                      borderColor: '#E8E8E8',
                    }}></View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',

                    padding: 20,
                    justifyContent: 'space-between',
                    alignSelf: 'flex-start',
                  }}>
                  <Text>name.pdf-۱</Text>
                  <Icondownload style={{marginLeft: 200}} />
                </View>
              </View>
            )}

            <View
              style={{
                width: '90%',
                height: 1200,
                marginTop: 10,

                backgroundColor: '#FFFFFF',
                alignItems: 'center',
              }}>
              <Text style={{padding: 15, alignSelf: 'flex-start'}}>
                توضیحات
              </Text>
              <View
                style={{
                  width: '90%',
                  height: 150,
                  backgroundColor: '#FFF',
                  borderRadius: 5,

                  shadowColor: 'blue',
                  shadowOpacity: 0.75,
                  shadowRadius: 30,
                  elevation: 3,

                  shadowOffset: {
                    width: 0.7,
                    height: 2,
                  },
                }}>
                <Text>
                  مرکز رسانه‌ای «مکان» وابسته به رژیم صهیونیستی اعلام کرد : یک
                  هیات متشکل از ۲۰ تن از روسای اقلیت‌های یهودی آمریکا وارد
                  عربستان شده و با برخی مقامات عالی رتبه این کشور از جمله وزرا و
                  نمایندگان خاندان حاکم در ریاض دیدار کرد. ویل روزین، تاجر یهودی
                  آمریکایی اظهار داشت: رهبران عربستان در حال آماده‌سازی شرایط
                  جهت عادی‌سازی روابط با اسرائیل هستند.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  height: 80,
                  backgroundColor: '#FFF',
                  borderRadius: 5,
                  margin: 16,
                  shadowColor: 'blue',
                  shadowOpacity: 0.75,
                  shadowRadius: 30,
                  elevation: 3,
                  // shadowOffset: {
                  //   width: 0.7,
                  //   height: 2,
                  // },
                }}>
                <View
                  style={{
                    width: '50%',
                    height: 80,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 30}} style>
                    ساعت
                  </Text>
                  <Text style={{fontSize: 20}}>۰۸:۰۰</Text>
                </View>
                <View
                  style={{
                    width: '50%',
                    height: 80,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 30}} style>
                    تاریخ
                  </Text>
                  <Text style={{fontSize: 20}}>۱۴۰۰/۱۰/۴</Text>
                </View>
              </View>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  marginLeft: 15,
                }}>
                موقعیت مکانی
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  height: 55,
                  backgroundColor: '#FFF',
                  borderRadius: 5,
                  shadowColor: 'blue',
                  shadowOpacity: 0.75,
                  shadowRadius: 30,
                  elevation: 3,
                  shadowOffset: {
                    width: 0.7,
                    height: 2,
                  },

                  margin: 8,
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text>تهران - خ سبلان - ساخنمان آسمان</Text>
                <IconLocation />
              </View>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  marginLeft: 15,
                  margin: 10,
                  marginTop: 20,
                }}>
                فایل جلسات
              </Text>
              <View
                style={{
                  width: '90%',
                  height: 200,
                  backgroundColor: '#FFF',

                  borderRadius: 5,
                  shadowColor: 'blue',
                  shadowOpacity: 0.75,
                  shadowRadius: 30,
                  elevation: 3,
                  shadowOffset: {
                    width: 0.7,
                    height: 2,
                  },
                  //   alignItems: 'center',
                }}>
                <View style={{alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',

                      padding: 20,
                      justifyContent: 'space-between',
                      alignSelf: 'flex-start',
                    }}>
                    <Text>name.pdf-۱</Text>
                    <Icondownload style={{marginLeft: 160}} />
                  </View>

                  <View
                    style={{
                      borderWidth: 1,
                      width: '90%',
                      borderColor: '#E8E8E8',
                    }}></View>
                </View>

                {/* //////////////////////// */}
                <View style={{alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',

                      padding: 20,
                      justifyContent: 'space-between',
                      alignSelf: 'flex-start',
                    }}>
                    <Text>name.pdf-۱</Text>
                    <Icondownload style={{marginLeft: 160}} />
                  </View>

                  <View
                    style={{
                      borderWidth: 1,
                      width: '90%',
                      borderColor: '#E8E8E8',
                    }}></View>
                </View>
                {/* ////////////////////// */}
                <View style={{alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',

                      padding: 20,
                      justifyContent: 'space-between',
                      alignSelf: 'flex-start',
                    }}>
                    <Text>name.pdf-۱</Text>
                    <Icondownload style={{marginLeft: 160}} />
                  </View>

                  <View
                    style={{
                      borderWidth: 1,
                      width: '90%',
                      borderColor: '#E8E8E8',
                    }}></View>
                </View>
              </View>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  marginLeft: 15,
                  margin: 10,
                  marginTop: 20,
                }}>
                اعضای جلسه
              </Text>
              <View
                style={{
                  width: '90%',
                  height: 200,
                  backgroundColor: '#FFF',

                  borderRadius: 5,
                  //   alignItems: 'center',
                  shadowColor: 'blue',
                  shadowOpacity: 0.75,
                  shadowRadius: 30,
                  elevation: 3,
                  shadowOffset: {
                    width: 0.7,
                    height: 2,
                  },
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',

                      padding: 20,
                      justifyContent: 'space-around',
                      alignSelf: 'stretch',
                    }}>
                    <Text>۱-حسین محمدی</Text>
                    <Text>مدیرعامل</Text>

                    <IconDrap style={{}} />
                  </View>

                  <View
                    style={{
                      borderWidth: 1,
                      width: '90%',
                      borderColor: '#E8E8E8',
                    }}></View>
                </View>

                {/* //////////////////////// */}
                <View style={{alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',

                      padding: 20,
                      justifyContent: 'space-around',
                      alignSelf: 'stretch',
                    }}>
                    <Text>۱-حسین محمدی</Text>
                    <Text>مدیرعامل</Text>

                    <IconDrap style={{}} />
                  </View>

                  <View
                    style={{
                      borderWidth: 1,
                      width: '90%',
                      borderColor: '#E8E8E8',
                    }}></View>
                </View>
                {/* ////////////////////// */}
                <View style={{alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',

                      padding: 20,
                      justifyContent: 'space-around',
                      alignSelf: 'stretch',
                    }}>
                    <Text>۱-حسین محمدی</Text>
                    <Text>مدیرعامل</Text>

                    <IconDrap style={{}} />
                  </View>

                  <View
                    style={{
                      borderWidth: 1,
                      width: '90%',
                      borderColor: '#E8E8E8',
                    }}></View>
                </View>
              </View>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  marginLeft: 15,
                  margin: 10,
                  marginTop: 20,
                }}>
                صورت جلسه
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setCurrentToch(index === currentToch ? null : index);
                }}
                style={{
                  fontSize: 69,
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  width: '90%',
                  height: 50,
                  backgroundColor: '#0F5D7F',
                  // marginTop: 10,
                  //   marginBottom: 30,
                  marginLeft: 25,
                  marginRight: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconAdd width={30} height={30} fill={'white'} />
              </TouchableOpacity>
              {index === currentToch && (
                <View
                  style={{
                    width: '80%',
                    height: 60,
                    backgroundColor: '#97C9F8',
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <Text onPress={Modalpress} style={{color: '#FFF'}}>
                    متن
                  </Text>
                  <Text style={{color: '#FFF'}}>صوت</Text>
                  <Text style={{color: '#FFF'}}>فایل</Text>
                </View>
              )}
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
                    width: 250,
                    height: 228,
                    marginTop: 240,
                    backgroundColor: 'white',
                    borderRadius: 6,
                    padding: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: 'blue',
                    shadowOpacity: 0.75,
                    shadowRadius: 30,
                    elevation: 3,
                    shadowOffset: {
                      width: 0.7,
                      height: 2,
                    },
                  }}>
                  <View
                    style={{
                      width: 220,
                      height: 135,
                      borderWidth: 1,
                      borderRadius: 8,
                      alignItems: 'center',
                      borderColor: '#707070',
                    }}>
                    <TextInput
                      style={{
                        width: 200,
                        height: 130,
                      }}></TextInput>
                    <Text
                      style={{
                        top: -143,
                        backgroundColor: 'white',
                        right: 85,
                      }}>
                      متن
                    </Text>
                  </View>
                  <TouchableOpacity
                    mode="contained"
                    onPress={Modalpress}
                    style={{
                      // borderTopRightRadius: 10,
                      // borderTopLeftRadius: 10,
                      width: 220,
                      height: 45,
                      backgroundColor: '#0F5D7D',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 15,
                      borderRadius: 10,

                      // marginLeft: 5,
                      // marginRight: 25,
                    }}>
                    <Text style={{color: '#FFF', fontSize: 20}}> ثبت</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>
          </ScrollView>
        </View>
      </Drawer>
    </View>
  );
}
