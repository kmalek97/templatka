import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';

import Geocoder from '@timwangdev/react-native-geocoder';
import RNLocation, {Location} from 'react-native-location';

import {styles} from './LandindScreen.styles';

import {useNavigation} from '../../utils';

const LandingScreen = () => {
  const {navigate} = useNavigation();

  RNLocation.configure({
    distanceFilter: 50,
  });
  const [myLocation, setMyLocation] = useState(false);
  const [test2, setTest2] = useState(null);

  const [displayAddress, setDisplayAddress] = useState(
    'Waiting for Current Location',
  );

  const check = async () => {
    const permission = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show where you are on the map',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    }).then(data => {
      setMyLocation(data);
    });

    return permission;
  };

  const address = (data: Location) => {
    return new Promise((resolve, reject) => {
      Geocoder.geocodePosition({
        lat: data.latitude,
        lng: data.longitude,
      }).then(v => {
        return resolve(v);
      });
    });
  };

  const getLocation = async () => {
    await RNLocation.getLatestLocation({timeout: 100}).then(data => {
      if (data) {
        address(data).then(v => {
          setTest2(v);

          let currentLocation = v[0].formattedAddress;
          setDisplayAddress(currentLocation);

          if (currentLocation) {
            setTimeout(() => {
              navigate('homeStack');
            }, 2000);
          }
        });
      }
    });
  };

  useEffect(() => {
    console.log(check());
    console.log('dupa', test2);
  }, [test2]);

  useEffect(() => {
    if (myLocation) {
      getLocation();
    }
  }, [myLocation]);

  return (
    <View style={styles.container}>
      <View style={styles.navigation} />

      <View style={styles.body}>
        <Image
          source={require('../../images/delivery_icon.png')}
          style={styles.deliveryIcon}
        />
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Your Delivery Address</Text>
        </View>
        <Text style={styles.addressText}>{displayAddress}</Text>
      </View>

      <View style={styles.footer} />
    </View>
  );
};

export default LandingScreen;
