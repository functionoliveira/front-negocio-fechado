/**
 * Offer Module
 */
import { instanceOfferAPI, instanceUserAPI } from '../../api/index';

const state = {
    offersFromUser: [],
    offers: {
        count: 0,
        results: []
    }
}

// getters
const getters = { 
    listOffers: state => state.offers,
    listOffersFromUser: state => state.offersFromUser
}

// actions
const actions = {   
    loadOffers(context) {
        instanceOfferAPI
            .list()
            .then(response => {
                context.commit('setOffers', response.data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    loadOffersFromUser(context, userID) {
        instanceUserAPI
            .listOffers(userID)
            .then(response => {
                context.commit('setOffersFromUser', response.data)
            })
            .catch(error => {
                console.log(error);
            });
    },

    addOffer(context, offer) {
        context.commit('addOffer', offer);
    },

    delOffer(context, offerID) {
        context.commit('delOffer', offerID);
    }
}

// mutations
const mutations = {
    setOffers(state, offers) {
        state.offers = offers;
    },

    setOffersFromUser(state, offers) {
        state.offersFromUser = offers;
    },

    addOffer(state, offer) {
        state.offers.results.unshift(offer);
        state.offersFromUser.unshift(offer);
    },

    delOffer(state, offerID) {
        state.offers.results = state.offers.results.filter( offerFromList => offerFromList.id !== offerID);
        state.offers.count -= 1;
        state.offersFromUser = state.offersFromUser.filter( offerFromList => offerFromList.id !== offerID);        
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
