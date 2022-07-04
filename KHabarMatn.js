import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon2 from './assets/svg/Group 174.svg';
import Logo from './assets/svg/Component 26 – 1.svg';
import Drawer from 'react-native-drawer';
import ControlPanel from './src/screen/contorolPanel/ControlPanel';
import Icon from './assets/svg/Iconly-Light-Bookmark.svg';
import Icon1 from './assets/svg/Iconly-Light-Bookmark-1.svg';
// import dataRSS from './src/component/dataRSS';
// import ImageMap from './src/component/ImageMap';
export default function KHabarMatn({route}) {
  const [change, setChange] = React.useState(false);
  const Changes = () => {
    setChange(!change);
  };
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
      closedDrawerOffset={-3}
      ref={ref => (_drawer = ref)}
      content={<ControlPanel />}
      styles={drawerStyles}>
      <View>
        <View style={styles.header}>
          <View
            style={{
              alignSelf: 'flex-start',
              padding: 18,
            }}>
            <Icon2
              onPress={openControlPanel}
              style={styles.icon}
              color="black"
              name="menu"
              size={20}
            />
          </View>

          <View style={styles.viewLogo}>
            <Text style={styles.textLogo}>... هماهنگـــ</Text>
            <Logo height={30} width={30} fill={'#0F5D7F'} />
          </View>
        </View>
      </View>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 25,
          }}>
          <Text style={{fontFamily: 'IRANYekanMobileRegular', fontSize: 20}}>
            عنوان خبر
          </Text>
          <TouchableOpacity onPress={() => Changes()}>
            {change ? (
              <Icon1
                width={22}
                height={22}
                fill={'black'}
                style={{marginTop: 10, marginLeft: 8}}
              />
            ) : (
              <Icon
                width={20}
                height={20}
                style={{
                  marginTop: 10,
                }}
              />
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {console.log('rtyu', route.params)}
          {console.log('rtrftgyuiyu', route.params.item.image)}
          <Image
            source={{uri: route.params.item.image}}
            style={{
              width: 320,
              height: 160,
              justifyContent: 'center',
              alignItems: 'center',
              // marginLeft: 10,
              // marginRight: 10,
              marginTop: 30,
              borderRadius: 10,
              marginBottom: 16,
              shadowColor: 'blue',
              shadowOpacity: 1,
              shadowRadius: 50,
              // elevation: 20,
              shadowOffset: {
                width: 0.7,
                height: 2,
              },
            }}></Image>
        </View>

        <View
          style={{
            flex: 3,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'pink',
            // width: 400,
            // height: 100,
          }}>
          <ScrollView>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'IRANYekanMobileRegular',
                justifyContent: 'center',
                marginTop: 10,
                marginRight: 10,
                marginLeft: 20,
              }}>
              {route.params.item.News}
            </Text>
            <Text
              style={{
                // fontSize: 10,
                marginTop: 20,
                marginRight: 20,
                marginLeft: 20,
                fontSize: 15,
                fontFamily: 'IRANYekanMobileRegular',
              }}>
              {route.params.item.time}
            </Text>
          </ScrollView>
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
    backgroundColor: '#F5F5F5',
  },
  textLogo: {
    fontFamily: 'IRANYekanMobileExtraBold',
    color: '#0F5D7F',
    fontSize: 25,
  },
});
