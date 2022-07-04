import React from 'react';
import Drawer from 'react-native-drawer';
import Coooo from './Coooo';
import Roooo from './Roooo';

import {Button, View, Text} from 'react-native';

export default function Test() {
  closeControlPanel = () => {
    _drawer.close();
  };
  openControlPanel = () => {
    _drawer.open();
  };

  return (
    <View>
      <Drawer ref={ref => (_drawer = ref)} content={<Coooo />}>
        <Roooo opencon={openControlPanel()} />
      </Drawer>
    </View>
  );
}
