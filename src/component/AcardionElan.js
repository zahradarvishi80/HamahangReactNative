import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
// import Icon from './assest/svg/Component 26 – 1.svg';
// import Icon1 from './assest/svg/vuesax-outline-arrow-circle-down.svg';
import Icon2 from '../../assets/svg/Group 346.svg';
import Modal from 'react-native-modal';
import {CheckBox} from 'react-native-elements';
import Icon374 from '../../assets/svg/Group 347.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AcardionElan({item}) {
  const [currentIndex, setCurentIndex] = useState(null);
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [hour, setHour] = useState('00');
  const [hour1, setHour1] = useState('00');
  const [clock, setClock] = useState();
  const [clock1, setClock1] = useState();

  const removedata = async () => {
    let user = await AsyncStorage.setItem('user', '[]');
    alert(user);
  };

  const getdata = async () => {
    const data = await AsyncStorage.getItem('user');
    alert(data);
    return JSON.parse(data);
  };
  const savedata = async data => {
    const x = await getdata();

    console.log('useeerrrr:', x);
    x.push(data);
    AsyncStorage.setItem('user', JSON.stringify(x));
    // console.log(data);
  };

  const Modalpress = () => {
    setModalVisible(!isModalVisible);
    console.log('tttt', hour);
    setClock(hour);
  };
  const Modalpress1 = () => {
    setModalVisible1(!isModalVisible1);
    console.log('hhh', hour1);
    setClock1(hour1);
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        // width: 315,
        // height: 90,
      }}>
      {/*  */}

      <View
        style={{
          flexDirection: 'row',
          width: 315,
          //   height: 30,
          marginBottom: 5,
        }}>
        <Text
          onPress={removedata}
          style={{
            fontFamily: 'IRANYekanMobileRegular',
            marginLeft: 10,
          }}>
          اعلان های روز:
        </Text>
        <TouchableOpacity
          onPress={Modalpress1}
          style={{
            width: 35,
            height: 19,
            backgroundColor: '#FF91005E',
            marginLeft: 10,
          }}>
          <Icon2 width={4} height={4}></Icon2>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'IRANYekanMobileRegular',
              textAlign: 'center',
            }}>
            {/* {item.startTime} */}
            {clock1}
          </Text>
        </TouchableOpacity>
        <Modal
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          isVisible={isModalVisible1}>
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
            <View
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
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
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
                  value={hour1}
                  onChangeText={value => setHour1(value)}
                  style={{
                    fontSize: 45,
                    marginVertical: 40,

                    color: '#707070',
                  }}></TextInput>
              </View>
            </View>

            <Icon374 onPress={Modalpress1} />
          </View>
        </Modal>
        <Text style={{marginLeft: 2, marginRight: 2}}>-</Text>
        <TouchableOpacity
          onPress={Modalpress}
          style={{
            // marginBottom: 30,
            width: 35,
            height: 19,
            backgroundColor: '#FF91005E',
            // marginTop: 5,
            // marginBottom: 30,
          }}>
          <Icon2 width={4} height={4}></Icon2>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'IRANYekanMobileRegular',
              textAlign: 'center',
              // marginTop: 0.09,
            }}>
            {/* {item.endTime} */}
            {clock}
          </Text>
        </TouchableOpacity>
        <Modal
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          isVisible={isModalVisible}>
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
            <View
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
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
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
            </View>

            <Icon374 onPress={Modalpress} />
          </View>
        </Modal>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: 300,
          height: 60,
          marginBottom: 5,

          justifyContent: 'space-between',
        }}>
        <View
          style={{
            // backgroundColor: 'blue',
            width: 150,
            height: 50,
          }}>
          <TouchableOpacity
            style={{
              // fontSize: 49,
              width: 113,
              height: 40,
              backgroundColor: '#0F5D7D',

              borderRadius: 10,

              marginLeft: 10,
              marginTop: 10,
            }}
            onPress={() =>
              savedata({
                degree: ' رده بندی درجه 1',
                startTime: clock,
                endTime: clock1,
                sms: 'SMS دریافت',
                SMS1: check,
                before1: check1,
                before: ' دقیقه قبل از جلسه 30',
              })
            }>
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                textAlign: 'center',
                marginTop: 10,
              }}>
              اضافه کردن اعلان
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
              style={{
                // fontSize: 49,
                width: 113,
                height: 40,
                backgroundColor: '#0F5D7D',
  
                borderRadius: 10,
  
                marginLeft: 10,
                marginTop: 10,
              }}
              onPress={getdata}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'white',
                  textAlign: 'center',
                  marginTop: 10,
                }}>
                get کردن اعلان
              </Text>
            </TouchableOpacity> */}
        </View>
        <View
          style={{
            width: 150,
            height: 60,
            flexDirection: 'column',
            justifyContent: 'space-around',
            // backgroundColor: 'red',
            marginRight: 50,
            // marginLeft: 50,
          }}>
          <View style={{flexDirection: 'row'}}>
            <CheckBox
              checked={check}
              onPress={() => setCheck(!check)}
              size={18}
              // style={{ marginRight: 170}}
            />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'IRANYekanMobileRegular',

                marginTop: 10,
                marginLeft: -17,
              }}>
              {item.sms}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <CheckBox
              checked={check1}
              onPress={() => setCheck1(!check1)}
              size={18}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'IRANYekanMobileRegular',

                marginTop: 10,
                // marginRight: 10,
                marginLeft: -19,
              }}>
              {item.before}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
