import {StyleSheet} from 'react-native';
import {ILandingScreen} from './LandindScreen.types';

export const styles = StyleSheet.create<ILandingScreen>({
  addressContainer: {
    borderBottomColor: 'red',
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  addressText: {
    fontSize: 20,
    fontWeight: '200',
    color: '#4F4F4F',
    paddingLeft: 28,
    paddingRight: 28,
    textAlign: 'center',
  },
  addressTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#7D7D7D',
  },
  body: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(242,242,242,1)',
  },
  deliveryIcon: {
    height: 120,
    width: 120,
  },
  footer: {
    flex: 1,
  },
  navigation: {
    flex: 2,
  },
});
