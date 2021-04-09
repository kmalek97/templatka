import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {
  onAvailability,
  UserState,
  ApplicationState,
  ShoppingState,
} from '../../redux';

import {styles} from './HomeScreen.styles';

interface HomeProps {
  userReducer: UserState;
  shoppingReducer: ShoppingState;
  onAvailability: Function;
}

const _HomeScreen: React.FC<HomeProps> = props => {
  const {location} = props.userReducer;
  const {availability} = props.shoppingReducer;

  const propLocation = `${location.locality}, ${location.streetName} ${
    location.streetNumber ? location.streetNumber : ''
  }`;

  const {categories, foods, restaurants} = availability;

  console.log(foods);

  useEffect(() => {
    props.onAvailability(location.postalCode);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <View style={styles.headerContainer}>
          <Text>{propLocation}</Text>
          <Text>edit button</Text>
        </View>
        <View style={styles.headerSearchContainer}>
          <Text>Search bar</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text> Home Screen </Text>
      </View>
      <View style={styles.footer}>
        <Text> Footer </Text>
      </View>
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.userReducer,
  shoppingReducer: state.shoppingReducer,
});

const HomeScreen = connect(mapToStateProps, {onAvailability})(_HomeScreen);

export {HomeScreen};
