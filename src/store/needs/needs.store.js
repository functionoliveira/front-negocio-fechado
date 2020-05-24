/**
 * Offer Module
 */
import { instanceNeedsAPI, instanceUserAPI } from '../../api/index';

const state = {
    needsFromUser: [],
    needs: {
        count: 0,
        results: []
    }
}

// getters
const getters = { 
    listNeeds: state => state.needs,
    listNeedsFromUser: state => state.needsFromUser
}

// actions
const actions = {   
    loadNeeds(context) {
        instanceNeedsAPI
            .list()
            .then(response => {
                context.commit('setNeeds', response.data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    loadNeedsFromUser(context, userID) {
        instanceUserAPI
            .listNeeds(userID)
            .then(response => {
                context.commit('setNeedsFromUser', response.data)
            })
            .catch(error => {
                console.log(error);
            });
    },

    addNeeds(context, needs) {
        context.commit('addNeeds', needs);
    },

    delNeeds(context, needsID) {
        context.commit('delNeeds', needsID);
    }
}

// mutations
const mutations = {
    setNeeds(state, needs) {
        state.needs = needs;
    },

    setNeedsFromUser(state, needs) {
        state.needsFromUser = needs;
    },

    addNeeds(state, needs) {
        state.needs.results.unshift(needs);
        state.needsFromUser.unshift(needs);
    },

    delNeeds(state, needsID) {
        state.needs.results = state.needs.results.filter( needsFromList => needsFromList.id !== needsID);
        state.needs.count -= 1;
        state.needsFromUser = state.needsFromUser.filter( needsFromList => needsFromList.id !== needsID);        
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
