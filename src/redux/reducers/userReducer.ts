import {Location} from 'react-native-location';
import {UserAction} from '../actions';
import {UserModel, UserState} from '../models';

const initialState: UserState = {
  user: {} as UserModel,
  location: {} as Location,
  error: undefined,
};

const userReducer = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case 'ON_UPDATE_LOCATION':
      return {
        ...state,
        location: action.payload,
      };

    default:
      return state;
  }
};

export {userReducer};
