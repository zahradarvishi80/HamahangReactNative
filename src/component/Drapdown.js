import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, I18nManager} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {List} from 'react-native-paper';

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const data = [{label: 'روز', value: '1'}];
  // useEffect(() => {
  //   I18nManager.forceRTL(false);
  // }, []);

  const renderItem = ({item}) => {
    return (
      <View>
        <List.Accordion title="روز" id="3">
          <List.Item title="روز" />
          <List.Item title="هفته" />
          <List.Item title="ماه" />
        </List.Accordion>
        <List.Accordion title="رده بندی" id="3">
          <List.Item title="درجه۱" />
          <List.Item title="درجه۲" />
          <List.Item title="درجه۳" />
        </List.Accordion>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown]}
        // placeholderStyle={styles.placeholderStyle}
        // selectedTextStyle={styles.selectedTextStyle}
        // inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        renderItem={renderItem}
        data={data}
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? '' : '...'}
        // searchPlaceholder="Search..."
        value={value}
        // onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        // renderLeftIcon={() => (
        //   <AntDesign
        //     style={styles.icon}
        //     color={isFocus ? 'blue' : 'black'}
        //     name="Safety"
        //     size={20}
        //   />
        // )}
      ></Dropdown>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'flex-start',
    // backgroundColor: 'red',
    padding: 16,
  },
  dropdown: {
    width: 150,
    // height: 50,
    // borderColor: 'gray',
    // borderWidth: 0.5,
    // borderRadius: 8,
    // paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  // label: {
  //   position: 'absolute',
  //   backgroundColor: 'blue',
  //   left: 22,
  //   top: 8,
  //   zIndex: 999,
  //   paddingHorizontal: 8,
  //   fontSize: 14,
  // },
  // placeholderStyle: {
  //   fontSize: 50,
  // },
  selectedTextStyle: {
    fontSize: 20,
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  // inputSearchStyle: {
  //   height: 40,
  //   fontSize: 16,
  // },
});
