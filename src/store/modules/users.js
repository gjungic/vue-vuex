import actions from '../actions/users';
import mutations from '../mutations/users';

// initial state
const state = {
  all: [],
  loading: false,
  hasError: false
};

// getters
const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
