/**
 * Auth Module
 */
const state = {
    _id: 1,
    _type: 'CONSUMER'
}

// getters
const getters = { 
    getUserId: state => {
        return state.user._id;
    },
    isWorker: state => {
        return state.user._type === 'WORKER';
    },
    isConsumer: state => {
        return state.user._type === 'CONSUMER';
    }
}

// actions
const actions = {   
    
}

// mutations
const mutations = {
    
}

export default {
    state,
    getters,
    actions,
    mutations
}
