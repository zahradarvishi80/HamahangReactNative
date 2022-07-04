import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Drawer from 'react-native-drawer';
import MainView from '../../MainView';
import ControlPanel from '../screen/contorolPanel/ControlPanel';

const DrawerComponent = () => {
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
      openDrawerOffset={1 / 2}
      tapToClose={true}
      open={false}
      // panCloseMask={0.2}
      closedDrawerOffset={-3}
      ref={ref => (_drawer = ref)}
      content={<ControlPanel CloseContorol={closeControlPanel} />}
      styles={drawerStyles}
      // tweenHandler={ratio => ({
      //   main: {opacity: (2 - ratio) / 2},
      // })}
    >
      <MainView OpenContorol={openControlPanel} />
    </Drawer>
  );
};
export default DrawerComponent;
