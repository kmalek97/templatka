// import axios from 'axios';
import {Dispatch} from 'react';
import {GeocodingObject} from '@timwangdev/react-native-geocoder';
// import {BASE_URL} from '../../utils';
import AsyncStorage from '@react-native-community/async-storage';

export interface UpdateLocationAction {
  readonly type: 'ON_UPDATE_LOCATION';
  payload: GeocodingObject;
}

export interface UserErrorAction {
  readonly type: 'ON_USER_ERROR';
  payload: any;
}

export type UserAction = UpdateLocationAction | UserErrorAction;

export const onUpdateLocation = (location: GeocodingObject) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const locationString = JSON.stringify(location);
      await AsyncStorage.setItem('user_location', locationString);

      dispatch({
        type: 'ON_UPDATE_LOCATION',
        payload: location,
      });
    } catch (error) {
      dispatch({
        type: 'ON_USER_ERROR',
        payload: error,
      });
    }
  };
};
