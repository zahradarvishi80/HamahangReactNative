import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from '../../assets/svg/Iconly-Light-Bookmark-1.svg';
import dataRSS from './dataRSS';
import Icon1 from '../../assets/svg/Iconly-Light-Bookmark.svg';

export default function IconRSS({item}) {
  const [change, setChange] = React.useState(false);

  const Changes = () => {
    setChange(!change);
  };
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity onPress={() => Changes()}>
        {change ? (
          <Icon
            width={22}
            height={22}
            fill={'black'}
            style={{marginTop: 17, marginLeft: 8}}
          />
        ) : (
          <Icon1
            // width={26}
            // height={26}
            style={{marginTop: 17, marginLeft: 10}}
          />
        )}
      </TouchableOpacity>
      <Text 
       onPress={() => navigation.navigate('KHabarMatn', {item: item})}
      style={{marginTop: 20, marginRight: 10}}>{item.time}</Text>
    </View>
  );
}
