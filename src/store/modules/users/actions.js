import {
  SET_USERS,
  GET_USERS_ERROR,
  GET_USERS
} from './mutation-types';
import { fetchUsers } from '../../../api/UsersAPI';

export default {
  async getUsers ({ commit }) {
    commit(GET_USERS);
    try {
      const { status, data } = await fetchUsers();
      if (status === 200) {
        // commit action
        commit(SET_USERS, data);
      }
    } catch (error) {
      commit(GET_USERS_ERROR, error);
    }
  }
};
