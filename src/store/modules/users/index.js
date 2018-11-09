import actions from './actions';
import mutations from './mutations';
import getters from './getters';

// initial state
const state = {
  users: [],
  loading: false,
  hasError: false
};

export default {
  state,
  getters,
  actions,
  mutations
}
