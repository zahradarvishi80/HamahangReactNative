import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Icon1 from './assets/svg/Icon material-edit.svg';
import Icon2 from './assets/svg/Group 175.svg';
import AcardionMonshi from './src/component/AcardionMonshi';
import MonshiA from './MonshiA';
import MonshiItem from './MonshiItem';
import ModalMonshi from './ModalMonshi';
import Icon from './assets/svg/Group 174.svg';
import Logo from './assets/svg/Component 26 – 1.svg';
import Drawer from 'react-native-drawer';
import ControlPanel from './src/screen/contorolPanel/ControlPanel';

export default function ModiriyatMonshi() {
  const [currentIndex, setCurentIndex] = useState(null);
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

        <View style={{backgroundColor: '#FCFCFC'}}>
          <Text
            style={{
              color: '#707070',
              fontFamily: 'IRANYekanMobileRegular',
              marginTop: 20,
              marginLeft: 20,
              fontSize: 18,
            }}>
            مدیریت منشی ها
          </Text>
          <ScrollView>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {MonshiA.map((item, index) => {
                return (
                  <>
                    <View
                      style={{
                        width: 320,
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 25,
                        borderRadius: 6,
                        backgroundColor: '#FFFFFF',
                        height: 100,
                        flexDirection: 'row',
                        shadowColor: 'grey',
                        shadowOpacity: 0.75,
                        shadowRadius: 30,
                        elevation: 5,
                      }}>
                      <View
                        style={{
                          flex: 4,
                          flexDirection: 'column',
                          // backgroundColor: 'red',
                        }}>
                        <View
                          style={{
                            flex: 2,
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              marginLeft: 10,
                              marginTop: 15,
                              fontFamily: 'IRANYekanMobileRegular',
                            }}>
                            {item.NameFamily}
                          </Text>
                          <Text
                            style={{
                              marginLeft: 70,
                              marginTop: 15,
                              fontFamily: 'IRANYekanMobileRegular',
                            }}>
                            {item.PhoneNumber}
                          </Text>
                        </View>
                        <MonshiItem item={item} />
                      </View>

                      <View
                        style={{
                          flex: 1,
                          // backgroundColor: 'yellow',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            setCurentIndex(
                              index === currentIndex ? null : index,
                            );
                          }}>
                          {index === currentIndex ? (
                            <Icon2 width={25} height={25} />
                          ) : (
                            <Icon1 width={20} height={20} />
                          )}
                        </TouchableOpacity>
                      </View>
                    </View>
                    {index === currentIndex && <AcardionMonshi />}
                  </>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
      <ModalMonshi />
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
