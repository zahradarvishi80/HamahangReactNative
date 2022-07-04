import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  alert,
  Alert,
} from 'react-native';
import Icon from '../../../assets/svg/Group 174.svg';
import Logo from '../../../assets/svg/Component 26 – 1.svg';
import Drawer from 'react-native-drawer';
import ControlPanel from './ControlPanel';
import TimeLine from '../../component/TimeLine';
import moment from 'jalali-moment';
import data from '../../../json/date';
import Menu1 from '../../component/Menu1';
import CheckboxComponent from '../../component/Checkbox';
import {CheckBox} from 'react-native-elements';

export default function GozaresgGiri() {
  // const [selectData, setSelectData] = React.useContext(Datacontext);
  const [check1, setCheck1] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [list, setList] = React.useState(data);

  const handelclick = e => {
    const {id, checked} = e.target;
    setCheck1([...check1, id]);
    if (!checked) {
      setCheck1(check1.filter(item => item !== id));
    }
  };

  var date = new Date();
  console.log('sssss', date);
  let today = moment(date).locale('fa').format('YYYY/M/D');
  console.log('mmm', today);

  const CurrentDate = () => {
    list.map((item, index) => {
      <>{item.DateDay == today ? list : null}</>;
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
      <View style={styles.HoritanzalScrool}>
        <View style={{marginLeft: 20}}>
          <Menu1 />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <CheckboxComponent />
          <Text style={{marginRight: 20}}>انتخاب همه</Text>
        </View>
      </View>
      {/* <View style={{borderWidth: 1, borderColor: '#F5F5F5'}}></View> */}

      <View style={styles.dade}>
        <ScrollView style={styles.ViewTimeLine}>
          <TimeLine />
        </ScrollView>
        <ScrollView style={styles.ViewKart}>
          {list.map((item, index) => {
            return (
              <>
                {item.Meeting.map(e => {
                  return (
                    <View style={{}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          backgroundColor: '#FFFFFF',
                          marginVertical: 10,
                          borderRadius: 8,
                          width: 250,
                          height: 50,
                          marginLeft: 10,
                          marginRight: 10,
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
                            }}></View>

                          <View
                            style={{
                              flexDirection: 'column',

                              // alignItems: 'flex-start',
                              // justifyContent: 'flex-start',
                            }}>
                            <Text>{e.subject}</Text>
                            <Text>{e.caption}</Text>
                          </View>

                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <CheckBox
                              key={e.Code}
                              id={e.code}
                              // checked={check1.includes(item.code)}
                              // onPress={() => handelclick()}
                              uncheckedColor="#0F5D7F"
                              size={15}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </>
            );
          })}
          {/* {list.Meeting.map((item, index) => {
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
                    }}>
                    <View style={styles.kart}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 10,
                        }}></View>

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
                          key={item.Code}
                          id={item.code}
                          // checked={check1.includes(item.code)}
                          // onPress={() => handelclick()}
                          uncheckedColor="#0F5D7F"
                          size={15}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              );
            })} */}
          {/* <MyComponent /> */}
        </ScrollView>
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
    fontSize: 25,
  },
  // body: {
  //   height: '80%',
  //   backgroundColor: '#FCFCFC',
  // },
  HoritanzalScrool: {
    flexDirection: 'row',
    height: '10%',
    backgroundColor: '#FCFCFC',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F5F5F5',
    // padding: 10,
    // marginHorizontal: 20,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
  },

  dade: {
    flexDirection: 'row',
    // height: '80%',
    width: '100%',
    height: '100%',
    backgroundColor: '#FCFCFC',
    // padding: 10,
  },

  ViewTimeLine: {
    width: '20%',
    marginTop: 35,
    backgroundColor: '#FCFCFC',
  },
  ViewKart: {
    // flexGrow: 8,
    // alignItems: 'center',
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
