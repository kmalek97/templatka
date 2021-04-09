import {StyleSheet} from 'react-native';
import {IHomeScreen} from './HomeScreen.types';

export const styles = StyleSheet.create<IHomeScreen>({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  navigation: {
    flex: 2,
    backgroundColor: 'red',
  },
  headerContainer: {
    marginTop: 50,
    flex: 4,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerSearchContainer: {
    flex: 8,
    backgroundColor: 'green',
  },
  body: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  footer: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});
