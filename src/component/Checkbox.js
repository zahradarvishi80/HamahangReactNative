import React, {useState} from 'react';
import {CheckBox, Icon} from 'react-native-elements';

const CheckboxComponent = () => {
  const [check1, setCheck1] = useState(false);

  return (
    <>
      <CheckBox
        checked={check1}
        onPress={() => setCheck1(!check1)}
        uncheckedColor="#0F5D7F"
        size={15}
      />
    </>
  );
};

export default CheckboxComponent;
