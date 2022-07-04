import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Dash from 'react-native-dash';
import data from '../../json/date';
import {Datacontext} from '../../ContextData';

export default function TimeLineTask() {
  const [selectData, setSelectData] = useContext(Datacontext);
  return (
    <View>
      {data[selectData].Meeting.map((item, index) => {
        return (
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // marginRight: 70,
              }}>
              <Text>{item.Time}</Text>
              <Dash
                dashLength={7}
                dashGap={3}
                dashColor={'#707070'}
                style={{
                  width: 20,
                  flexDirection: 'row',
                  marginHorizontal: 2,
                }}></Dash>
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 12,
                  borderColor: '#707070',
                  borderWidth: 1,
                }}></View>
            </View>
            {item.Time == null ? (
              <View></View>
            ) : (
              <Dash
                dashLength={7}
                dashGap={3}
                dashColor={'#707070'}
                style={{
                  height: 50,
                  flexDirection: 'column',
                  marginLeft: 60,
                }}></Dash>
            )}
          </View>
        );
      })}

      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 70,
        }}>
        <Text>۱۲ ظهر</Text>
        <Dash
          dashLength={7}
          dashGap={3}
          dashColor={'#707070'}
          style={{width: 30, flexDirection: 'row', marginHorizontal: 2}}></Dash>
        <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 12,
            borderColor: '#707070',
            borderWidth: 1,
          }}></View>
      </View> */}
    </View>
  );
}
