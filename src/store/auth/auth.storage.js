/**
 * Auth Module
 */
import User from '../user/user.storage';
import { instanceAuthAPI } from '../../api/index';
import { validateToken } from '../../helpers/helpers';

const state = {
    user: { ...User.state },
}

// getters
const getters = { 
    ...User.getters,
}

// actions
const actions = {   
    ...User.actions,
    login(context, user) {
      return instanceAuthAPI
        .credentials(user)
        .then(response => {
          let valid = validateToken(response.data.access);
          if(valid.ok) {
            context.commit('saveUser', valid.body);
          }
          return valid;
        })
        .catch(error => {
          return error;
        });
    }
}

// mutations
const mutations = {
    ...User.mutations,
}

export default {
    state,
    getters,
    actions,
    mutations
}
