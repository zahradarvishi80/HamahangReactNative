import React, {useEffect, useState} from 'react';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {Dataprovider} from './ContextData.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import Hamahang from './src/screen/login/Hamahang';
import Codeseryal from './src/screen/login/Codeseryal.js';
import Ersalcode from './src/screen/login/Ersalcode';
import ErsalMojadad from './src/screen/login/ErsalMojadad';
import RamzEbor from './src/screen/login/RamzEbor';
import DrawerComponent from './src/component/Drawer.js';
import Jalasat from './src/screen/contorolPanel/Jalasat';
import TaskRozane from './src/screen/contorolPanel/TaskRozane.js';
import GozaresgGiri from './src/screen/contorolPanel/GozaresgGiri.js';
import ModiriyatEllan from './ModiriyatEllan.js';
import ModiriyatMonshi from './ModiriyatMonshi.js';
import News from './News.js';
// import SplashScreen from './SplashScreen';
import Jalase from './SakhtJalase.js';
import JalaseKhateme from './JalaseKhateme';
import KhatemeNayafte from './KhatemeNayafte';
import JadvalHaftegi from './JadvalHaftegi.js';
import JadvalMahane from './JadvalMahane.js';
import VaredRss from './VaredRss.js';
import Poshe from './Poshe';
import Daraje1 from './Daraje1.js';
import {theme} from './fontConfig.js';
import KHabarMatn from './KHabarMatn.js';
import Daraje2 from './Daraje2.js';
import Daraje3 from './Daraje3.js';
import MapScreen from './MapScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  // const [loading, SetLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     SetLoading(false);
  //   }, 1000);
  // });

  // if (loading) {
  //   return (
  //     <>
  //       <SplashScreen />
  //     </>
  //   );
  // }
  return (
    <NativeBaseProvider>
      <PaperProvider theme={theme}>
        <Dataprovider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Hamahang"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="Hamahang" component={Hamahang} />
              <Stack.Screen name="Codeseryal" component={Codeseryal} />
              <Stack.Screen name="Ersalcode" component={Ersalcode} />
              <Stack.Screen name="ErsalMojadad" component={ErsalMojadad} />
              <Stack.Screen name="RamzEbor" component={RamzEbor} />
              <Stack.Screen
                name="DrawerComponent"
                component={DrawerComponent}
              />
              <Stack.Screen name="Jalasat" component={Jalasat} />
              <Stack.Screen name="TaskRozane" component={TaskRozane} />
              <Stack.Screen name="GozaresgGiri" component={GozaresgGiri} />
              <Stack.Screen name="ModiriyatEllan" component={ModiriyatEllan} />
              <Stack.Screen
                name="ModiriyatMonshi"
                component={ModiriyatMonshi}
              />
              <Stack.Screen name="News" component={News} />
              <Stack.Screen name="Jalase" component={Jalase} />
              <Stack.Screen name="JalaseKhateme" component={JalaseKhateme} />
              <Stack.Screen name="KhatemeNayafte" component={KhatemeNayafte} />
              <Stack.Screen name="JadvalHaftegi" component={JadvalHaftegi} />
              <Stack.Screen name="JadvalMahane" component={JadvalMahane} />
              <Stack.Screen name="VaredRss" component={VaredRss} />
              <Stack.Screen name="Poshe" component={Poshe} />
              <Stack.Screen name="KHabarMatn" component={KHabarMatn} />
              <Stack.Screen name="Daraje1" component={Daraje1} />
              <Stack.Screen name="Daraje2" component={Daraje2} />
              <Stack.Screen name="Daraje3" component={Daraje3} />
              <Stack.Screen name="MapScreen" component={MapScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Dataprovider>
      </PaperProvider>
    </NativeBaseProvider>
  );
};
export default App;
