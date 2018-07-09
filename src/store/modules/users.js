import { actions } from "../actions/users";
import { mutations } from "../mutations/users";


// initial state
const state = {
  all: []
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
