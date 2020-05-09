/**
 * Auth Module
 */
import User from '../user/user.storage';

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
