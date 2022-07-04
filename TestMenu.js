import React from 'react';
import DatePicker, {getFormatedDate} from 'react-native-modern-datepicker';

const JalaaliExample = () => {
  return (
    <DatePicker
      isGregorian={false}
      options={{
        defaultFont: 'Shabnam-Light',
        headerFont: 'Shabnam-Medium',
      }}
      mode="Calendar"
      selected={getFormatedDate(new Date(), 'jYYYY/jMM/jDD')}
    />
  );
};
export default JalaaliExample;
