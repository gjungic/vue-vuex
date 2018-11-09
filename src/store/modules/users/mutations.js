import {
  GET_USERS,
  GET_USERS_ERROR,
  SET_USERS
} from './mutation-types';

export default {
  [GET_USERS] (state) {
    state.loading = true;
  },
  [SET_USERS] (state, payload) {
    state.users = payload;
    state.loading = false;
    state.hasError = false;
  },
  [GET_USERS_ERROR] (state, error) {
    state.loading = false;
    state.hasError = true;
  }
};
