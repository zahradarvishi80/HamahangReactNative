import {View} from 'native-base';
import React from 'react';

export default function Roooo(props) {
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Button onPress={props.opencon}>open</Button>
    </View>
  );
}
