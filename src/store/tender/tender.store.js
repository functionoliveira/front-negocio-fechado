/**
 * Tender Module
 */
import { instanceUserAPI } from '../../api/index';

const state = {
    tendersFromUser: [],
}

// getters
const getters = { 
    listTendersFromUser: state => state.tendersFromUser
}

// actions
const actions = {
    loadTendersFromUser(context, userID) {
        instanceUserAPI
            .listTenders(userID)
            .then(response => {
                context.commit('setTendersFromUser', response.data)
            })
            .catch(error => {
                console.log(error);
            });
    },

    addTender(context, tender) {
        context.commit('addTender', tender);
    },

    delTender(context, tenderID) {
        context.commit('delTender', tenderID);
    }
}

// mutations
const mutations = {
    setTendersFromUser(state, tenders) {
        state.tendersFromUser = tenders;
    },

    addTender(state, tender) {
        state.tendersFromUser.unshift(tender);
    },

    delTender(state, tenderID) {
        state.tendersFromUser = state.tendersFromUser.filter( tenderFromList => tenderFromList.id !== tenderID);        
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
