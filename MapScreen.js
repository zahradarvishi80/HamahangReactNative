import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  PermissionsAndroid,
  Alert,
  Platform,
  ToastAndroid,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
// import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import Geocoder from 'react-native-geocoding';
// import Geocoder from 'react-native-geocoder';
import {useNavigation} from '@react-navigation/native';
export default function MapScreen() {
  const navigation = useNavigation();
  const [currentAddres, setCrrentAddres] = useState('');
  const [location, setLocation] = useState({
    latitude: 35.6892,
    longitude: 51.389,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const getData = async () => {
    Geocoder.init('AIzaSyDmZKh8_aM3NM2gT6Vd45uAiWKjzIWA-6I', {language: 'fa'});

    Geocoder.from(41.89, 12.49)
      .then(json => {
        var addressComponent = json.results[0].address_components[0];
        console.log('aaaaaaaaa', addressComponent);
        // setCrrentAddres(addressComponent);
      })
      .catch(error => console.warn(error));

    // await Geocoder.fallbackToGoogle(API_KEY);
    // try {
    //   let ret = await Geocoder.geocodePosition({lat, lng});
    //   let addr = ret[0].forrmatteAddress;
    //   setCrrentAddres(addr);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const GetAccessPermissions = async () => {
    try {
      const access = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'App Location Permission',
          message: 'App needs access to your location',
        },
      );

      if (access === PermissionsAndroid.RESULTS.GRANTED) {
        // Alert.alert('accept permission');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handeluserLocation = () => {
    Geolocation.getCurrentPosition(position => {
      // Alert.alert(JSON.stringify(position));
      setLocation({
        // ...location,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 5,
        longitudeDelta: 5,
      });
      // getData(position.coords.latitude, position.coords.longitude);
      // var url =
      //   'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
      //   latitude +
      //   ' ,' +
      //   longitude +
      //   '&key=AIzaSyDJMdjcYkYy0-fs1XHCiwCfvtmN-c17A4w';
      // fetch(url)
      //   .then(response => response.json())
      //   .then(results => console.log('reeesultt', results));
      // .then(data=>{setaddress(data.address)})
    });
  };

  const onChangeValue = initialRegion => {
    ToastAndroid.show(JSON.stringify(initialRegion), ToastAndroid.SHORT);
    // setLocation(location);
  };

  useEffect(() => {
    if (Platform.OS === 'android') GetAccessPermissions();
    handeluserLocation();
    getData();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{width: '100%', height: '100%'}}
        showsUserLocation={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={location}
        region={location}
        onRegionChangeComplete={onChangeValue}></MapView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
        }}>
        <Ionicons name="map-pin" color="red" size={30} />
      </View>
    </View>
  );
}

// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   Image,
//   ScrollView,
// } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import MapView, {Marker, Callout, ProviderPropType} from 'react-native-maps';

// const HomeMapScreen = ({navigation}) => {
//   const [data, setData] = useState([]);

//   // const onCaruoselItemChange = index => {
//   //   let location = data[index];

//   //   _map.animateToRegion({
//   //     latitude: location.lat,
//   //     longitude: location.long,
//   //     latitudeDelta: 0.05,
//   //     longitudeDelta: 0.05,
//   //   });
//   // };

//   return (
//     <View style={styles.container}>
//       <MapView
//         // ref={map => (_map = map)}
//         style={styles.map}
//         region={{
//           latitude: 37.27,
//           longitude: 49.58,
//           latitudeDelta: 0.05,
//           longitudeDelta: 0.05,
//         }}>
//         {/* <Marker
//           coordinate={{
//             latitude: 35.6964895,
//             longitude: 51.0696315,
//           }}
//           title={'Tehran'}></Marker> */}
//         {data.map((mark, index) => {
//           return (
//             <Marker
//               key={mark.id}
//               coordinate={{
//                 latitude: mark.lat,
//                 longitude: mark.long,
//               }}
//               title={mark.title}></Marker>
//           );
//         })}
//       </MapView>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },

//   Carousel: {
//     position: 'absolute',
//     bottom: 0,
//     marginBottom: 48,
//   },
//   card: {
//     backgroundColor: '#F6F6F6',
//     width: 250,
//     height: 200,
//     borderRadius: 25,
//     // padding: 25,
//   },
// });

// export default HomeMapScreen;
