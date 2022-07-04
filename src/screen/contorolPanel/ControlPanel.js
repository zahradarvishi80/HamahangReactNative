import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon1 from '../../../assets/svg/Group 212.svg';
import Icon2 from '../../../assets/svg/Group 197.svg';
import Icon3 from '../../../assets/svg/vuesax-outline-activity.svg';
import Icon4 from '../../../assets/svg/Group 199.svg';
import Icon5 from '../../../assets/svg/Group 200.svg';
import Icon6 from '../../../assets/svg/Group 201.svg';
import Icon7 from '../../../assets/svg/vuesax-outline-forbidden-2.svg';
import Icon from '../../../assets/svg/Component 26 – 1.svg';
import {useNavigation} from '@react-navigation/native';

export default function ControlPanel(props) {
  const navigation = useNavigation();

  const NavigateTask = dest => {
    // props.CloseContorol();
    navigation.navigate(dest);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF',
        // position: 'absolute',
      }}>
      <View style={{paddingHorizontal: 40, paddingVertical: 20}}>
        <Text>+98919254786</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.stack}
          onPress={() => NavigateTask('Jalasat')}>
          <Icon1 height={26} width={26} fill={'#0F5D7F'} />
          <Text style={styles.textIcon}>جلسات</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.stack}
          onPress={() => NavigateTask('TaskRozane')}>
          <Icon2 height={30} width={30} fill={'#0F5D7F'} />
          <Text style={styles.textIcon}>تسک های روزانه</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.stack}
          onPress={() => NavigateTask('GozaresgGiri')}>
          <Icon3 height={27} width={27} fill={'#0F5D7F'} />
          <Text style={styles.textIcon}>گزارش گیری</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.stack}
          onPress={() => NavigateTask('ModiriyatEllan')}>
          <Icon4 height={30} width={30} fill={'#0F5D7F'} />
          <Text style={styles.textIcon}>مدیریت اعلان ها</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.stack}
          onPress={() => NavigateTask('ModiriyatMonshi')}>
          <Icon5 height={30} width={30} fill={'#0F5D7F'} />
          <Text style={styles.textIcon}>مدیریت منشی ها</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.stack}
          onPress={() => NavigateTask('News')}>
          <Icon6 height={30} width={30} fill={'#0F5D7F'} />
          <Text style={styles.textIcon}>اخبار</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.stack7}
          onPress={() => NavigateTask('Hamahang')}>
          <Icon7 height={25} width={25} fill={'#0F5D7F'} />
          <Text style={styles.textIcon7}>خروج از حساب</Text>
        </TouchableOpacity>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            // position: 'absolute',
            marginTop: 70,
          }}>
          <Icon height={32} width={32} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  stack: {
    flexDirection: 'row',
    padding: 15,
  },

  textIcon: {
    fontSize: 15,
    fontFamily: 'IRANYekanMobileMedium',
    marginHorizontal: 10,
  },
  textIcon7: {
    fontSize: 15,
    fontFamily: 'IRANYekanMobileMedium',
    marginHorizontal: 10,
    color: 'red',
  },
  stack7: {
    flexDirection: 'row',
    padding: 15,
    marginTop: 20,
  },
});
