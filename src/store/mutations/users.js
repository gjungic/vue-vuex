import { GET_USERS, GET_USERS_ERROR, SET_USERS } from './mutation-types';

export default {
  [GET_USERS]: (state) => {
    state.loading = true;
  },
  [SET_USERS]: (state, users) => {
    state.all = users;
    state.loading = false;
    state.hasError = false;
  },
  [GET_USERS_ERROR]: (state, error) => {
    // log to another place, not console
    console.error('Error occurred while getting users', error);
    state.loading = false;
    state.hasError = true;
  }
};
