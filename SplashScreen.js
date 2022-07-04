import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ECD217'}}>
      <LottieView
        style={{width: '30%', height: '60%', marginTop: 100}}
        source={require('./png/77409-working.json')}
        autoPlay
        loop></LottieView>
    </View>
  );
};
export default SplashScreen;
