import { fetchUsers } from '../../api/UsersAPI';

export const actions = {
  getUsers: async ({ commit }) => {
    try {
      const { status, data } = await fetchUsers();
      if (status === 200) {
        // commit action
        commit('setUsers', data);
      }
    } catch (error) {
      // commit error to state
    }
  }
};
