import {CheckBox} from 'react-native-elements';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  TouchableOpacityBase,
} from 'react-native';
import React, {useState, useEffect} from 'react';
export default function CheckBoxMonshi() {
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  return (
    <View
      style={{
        width: 160,
        height: 100,
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}>
      <View style={{flexDirection: 'row'}}>
        <CheckBox checked={check} onPress={() => setCheck(!check)} size={18} />
        <Text style={{fontFamily: 'IRANYekanMobileRegular', marginTop: 10}}>
          مدیریت محتوا
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <CheckBox
          checked={check1}
          onPress={() => setCheck1(!check1)}
          size={18}
        />
        <Text style={{fontFamily: 'IRANYekanMobileRegular', marginTop: 10}}>
          مدیریت اخبار
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <CheckBox
          checked={check2}
          onPress={() => setCheck2(!check2)}
          size={18}
        />
        <Text style={{fontFamily: 'IRANYekanMobileRegular', marginTop: 10}}>
          مدیریت برنامه
        </Text>
      </View>
    </View>
  );
}
