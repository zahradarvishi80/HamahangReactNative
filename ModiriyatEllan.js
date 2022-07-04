import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from './assets/svg/Group 174.svg';
import Logo from './assets/svg/Component 26 – 1.svg';
import React, {useState, } from 'react';
import Icon1 from './assets/svg/vuesax-outline-arrow-circle-down.svg';
import Drawer from 'react-native-drawer';
import ControlPanel from './src/screen/contorolPanel/ControlPanel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AcardionElan from './src/component/AcardionElan';
import data2 from './json/data2';

export default function ModiriyatEllan() {
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
        <View style={{backgroundColor: '#FCFCFC'}}>
          <Text
            style={{
              color: '#707070',
              fontFamily: 'IRANYekanMobileRegular',
              marginTop: 20,
              marginLeft: 20,
            }}>
            مدیریت اعلان ها
          </Text>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              // marginTop: 30,
            }}>
            {data2.map((item, index) => {
              return (
                <View
                  style={{
                    flexGrow: 1,
                    width: 320,
                    // height: 50,
                    borderWidth: 1,
                    borderColor: '#97C9F8',
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 20,
                    borderRadius: 6,
                    backgroundColor: 'white',
                  }}>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        color: '#707070',
                        fontFamily: 'IRANYekanMobileRegular',
                        marginTop: 13,
                        marginLeft: 20,
                        marginBottom: 13,
                      }}>
                      {item.degree}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        setCurentIndex(index === currentIndex ? null : index);
                      }}>
                      <Icon1
                        width={20}
                        height={20}
                        style={{marginRight: 10, marginTop: 10}}
                      />
                    </TouchableOpacity>
                  </View>

                  {index === currentIndex && <AcardionElan item={item} />}
                </View>
              );
            })}
          </View>
        </View>
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
