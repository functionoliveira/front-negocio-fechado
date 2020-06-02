/**
 * Auth Module
 */
import User from '../user/user.storage';
import { instanceAuthAPI } from '../../api/index';
import { validateToken } from 'Helpers/helpers';

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
            sessionStorage.setItem('token', response.data.access);
            context.commit('saveUser', valid.body);
          }
          return valid;
        })
        .catch(error => {
          return error;
        });
    },
    loadToken(context) {
      let token = sessionStorage.getItem('token');
      let valid = validateToken(token);
      if(valid.ok) {
        context.commit('saveUser', valid.body);
      }
      return valid;
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
